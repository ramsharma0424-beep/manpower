import nodemailer from "nodemailer";

export type EmailAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

export type ContactFormPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  attachments?: EmailAttachment[];
};

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim().replace(/^["']|["']$/g, "");
  const port = Number(process.env.SMTP_PORT ?? "587");
  const to = process.env.CONTACT_TO_EMAIL?.trim() ?? "souravkumar4297@gmail.com";
  const fromName = process.env.SMTP_FROM_NAME?.trim() ?? "Rudra Manpower Website";

  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }

  return { host, user, pass, port, to, fromName };
}

export async function sendContactEmail(payload: ContactFormPayload) {
  const { host, user, pass, port, to, fromName } = getSmtpConfig();

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const isCareer = payload.service.startsWith("Career Application:");
  const heading = isCareer ? "New career application" : "New contact form submission";
  const subject = isCareer
    ? `${payload.service} — ${payload.name}`
    : `New enquiry from ${payload.name} — ${payload.service}`;

  const attachmentNote =
    payload.attachments && payload.attachments.length > 0
      ? "\nResume/CV: Attached to this email."
      : "";

  const text = [
    heading,
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Service: ${payload.service}`,
    attachmentNote,
    "",
    "Message:",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>${heading}</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></p>
    <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
    ${
      payload.attachments?.length
        ? `<p><strong>Resume/CV:</strong> Attached (${escapeHtml(payload.attachments[0].filename)})</p>`
        : ""
    }
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(payload.message)}</p>
  `;

  await transporter.sendMail({
    from: `"${fromName}" <${user}>`,
    to,
    replyTo: payload.email,
    subject,
    text,
    html,
    attachments: payload.attachments?.map((file) => ({
      filename: file.filename,
      content: file.content,
      contentType: file.contentType,
    })),
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
