import { PolicyLayout, policyMetadata } from "@/components/PolicyLayout";
import { company } from "@/lib/data";

export const metadata = policyMetadata("Cookie Policy", "/cookie-policy");

export default function CookiePolicyPage() {
  return (
    <PolicyLayout title="Cookie Policy">
      <div className="space-y-6">
        <p>
          This Cookie Policy explains how {company.name} uses cookies and similar technologies when
          you visit our website.
        </p>
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device that help websites function properly and
          improve user experience.
        </p>
        <h2>How We Use Cookies</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Essential cookies</strong> — required for basic website functionality
          </li>
          <li>
            <strong>Analytics cookies</strong> — help us understand how visitors use our site
          </li>
          <li>
            <strong>Preference cookies</strong> — remember your settings and choices
          </li>
        </ul>
        <h2>Managing Cookies</h2>
        <p>
          You can control or delete cookies through your browser settings. Disabling essential cookies
          may affect website functionality.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about our cookie practices? Email us at{" "}
          <a href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
      </div>
    </PolicyLayout>
  );
}
