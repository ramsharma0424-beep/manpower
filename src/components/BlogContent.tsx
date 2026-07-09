import type { BlogBlock } from "@/lib/blog-types";

export default function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <article className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="pt-2 text-2xl font-bold text-brand-navy dark:text-white">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 leading-relaxed text-gray-600 dark:text-gray-300">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="leading-relaxed text-gray-600 dark:text-gray-300">
            {block.text}
          </p>
        );
      })}
    </article>
  );
}
