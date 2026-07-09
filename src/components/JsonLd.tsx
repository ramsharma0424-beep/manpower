import { globalJsonLdGraph } from "@/lib/seo";
import JsonLdScript from "./JsonLdScript";

export default function JsonLd() {
  return <JsonLdScript data={globalJsonLdGraph} />;
}
