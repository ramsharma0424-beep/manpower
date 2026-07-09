import { PolicyLayout, policyMetadata } from "@/components/PolicyLayout";
import { company } from "@/lib/data";

export const metadata = policyMetadata("Privacy Policy", "/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">
      <div className="space-y-6">
        <p>
          {company.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting
          your privacy. This policy explains how we collect, use, and safeguard information when you
          visit our website or contact us for manpower services.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We may collect your name, email address, phone number, company name, and service requirements
          when you submit a contact form or reach out to us directly.
        </p>
        <h2>How We Use Your Information</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>To respond to your enquiries and provide quotations</li>
          <li>To deliver and manage our manpower and facility management services</li>
          <li>To comply with legal and regulatory obligations</li>
          <li>To improve our website and service offerings</li>
        </ul>
        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organisational measures to protect your personal
          information against unauthorised access, alteration, or disclosure.
        </p>
        <h2>Contact Us</h2>
        <p>
          For privacy-related queries, contact us at{" "}
          <a href={`mailto:${company.email}`}>
            {company.email}
          </a>{" "}
          or call {company.phone}.
        </p>
      </div>
    </PolicyLayout>
  );
}
