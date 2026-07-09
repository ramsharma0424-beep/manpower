import { PolicyLayout, policyMetadata } from "@/components/PolicyLayout";
import { company } from "@/lib/data";

export const metadata = policyMetadata("Terms of Use", "/terms-of-use");

export default function TermsOfUsePage() {
  return (
    <PolicyLayout title="Terms of Use">
      <div className="space-y-6">
        <p>
          By accessing and using the website of {company.name}, you agree to comply with these Terms
          of Use. If you do not agree, please do not use this website.
        </p>
        <h2>Use of Website</h2>
        <p>
          This website is provided for informational purposes about our manpower, security,
          housekeeping, and facility management services across {company.region}. You may not use
          this site for any unlawful purpose or to transmit harmful content.
        </p>
        <h2>Service Agreements</h2>
        <p>
          All manpower deployment and service engagements are governed by separate written agreements
          between {company.name} and the client. Information on this website does not constitute a
          binding offer.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          All content, logos, and materials on this website are the property of {company.name} and
          may not be reproduced without prior written consent.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          We strive to keep website information accurate and up to date but do not warrant that all
          content is complete or error-free. Use of this website is at your own risk.
        </p>
      </div>
    </PolicyLayout>
  );
}
