import { NextResponse } from "next/server";
import { services } from "@/lib/data";
import { sendContactEmail } from "@/lib/email";

type ContactRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  otherService?: string;
  message?: string;
  formType?: "contact" | "career";
  role?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d\s()-]{7,20}$/;

function resolveServiceLabel(service: string, otherService?: string) {
  if (service === "other") {
    return otherService?.trim()
      ? `Other: ${otherService.trim()}`
      : "Other (not specified)";
  }

  return services.find((item) => item.id === service)?.title ?? service;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();
    const formType = body.formType ?? "contact";

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!phonePattern.test(phone)) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    let serviceLabel: string;

    if (formType === "career") {
      const role = body.role?.trim();
      if (!role) {
        return NextResponse.json({ error: "Please select a role." }, { status: 400 });
      }
      serviceLabel = `Career Application: ${role}`;
    } else {
      const service = body.service?.trim();
      const otherService = body.otherService?.trim();

      if (!service) {
        return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
      }

      if (service === "other" && !otherService) {
        return NextResponse.json(
          { error: "Please specify the service you need." },
          { status: 400 },
        );
      }

      serviceLabel = resolveServiceLabel(service, otherService);
    }

    await sendContactEmail({
      name,
      phone,
      email,
      service: serviceLabel,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please call us directly." },
      { status: 500 },
    );
  }
}
