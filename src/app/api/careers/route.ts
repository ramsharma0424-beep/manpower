import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d\s()-]{7,20}$/;
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

const allowedResumeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const allowedExtensions = [".pdf", ".doc", ".docx"];

function getExtension(filename: string) {
  const index = filename.lastIndexOf(".");
  return index >= 0 ? filename.slice(index).toLowerCase() : "";
}

function sanitizeFilename(filename: string) {
  const base = filename.split(/[/\\]/).pop() ?? "resume";
  return base.replace(/[^\w.\-()+\s]/g, "_").slice(0, 120) || "resume.pdf";
}

function validateResume(file: File) {
  const extension = getExtension(file.name);

  if (!allowedExtensions.includes(extension)) {
    return "Please upload a PDF, DOC, or DOCX file.";
  }

  if (!allowedResumeTypes.has(file.type) && file.type !== "") {
    return "Please upload a PDF, DOC, or DOCX file.";
  }

  if (file.size > MAX_RESUME_BYTES) {
    return "Resume must be 5 MB or smaller.";
  }

  if (file.size === 0) {
    return "The selected file is empty. Please choose another resume.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const role = String(formData.get("role") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const resume = formData.get("resume");

    if (!name || !phone || !email || !role || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!phonePattern.test(phone)) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    if (!(resume instanceof File)) {
      return NextResponse.json({ error: "Please upload your resume or CV." }, { status: 400 });
    }

    const resumeError = validateResume(resume);
    if (resumeError) {
      return NextResponse.json({ error: resumeError }, { status: 400 });
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    await sendContactEmail({
      name,
      phone,
      email,
      service: `Career Application: ${role}`,
      message,
      attachments: [
        {
          filename: sanitizeFilename(resume.name),
          content: resumeBuffer,
          contentType: resume.type || "application/octet-stream",
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Career application email failed:", error);
    return NextResponse.json(
      { error: "Unable to submit your application right now. Please call us directly." },
      { status: 500 },
    );
  }
}
