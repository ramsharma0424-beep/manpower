import { PolicyLayout, policyMetadata } from "@/components/PolicyLayout";
import { company } from "@/lib/data";

export const metadata = policyMetadata("Disclaimer", "/disclaimer");

export default function DisclaimerPage() {
  return (
    <PolicyLayout title="Disclaimer">
      <div className="space-y-6">
        <p>
          The information provided on this website by {company.name} is for general informational
          purposes only. While we endeavour to keep information accurate and current, we make no
          representations or warranties of any kind regarding completeness, accuracy, or suitability.
        </p>
        <h2>No Professional Advice</h2>
        <p>
          Content on this website does not constitute legal, financial, or professional advice. Clients
          should seek appropriate counsel before entering into service agreements.
        </p>
        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to external sites. We are not responsible for the content or
          privacy practices of third-party websites.
        </p>
        <h2>Client Testimonials</h2>
        <p>
          Client names and references displayed on this website represent past or current engagements
          and do not guarantee future results or service outcomes.
        </p>
      </div>
    </PolicyLayout>
  );
}
