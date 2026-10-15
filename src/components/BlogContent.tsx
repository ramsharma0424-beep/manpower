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
        if (block.type === "table") {
          return (
            <div key={i} className="overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                <caption className="mb-3 text-left text-sm font-semibold text-brand-navy dark:text-stone-100">
                  {block.caption}
                </caption>
                <thead>
                  <tr className="bg-brand-cream dark:bg-stone-800">
                    {block.headers.map((header) => (
                      <th
                        key={header}
                        className="border border-brand-border px-3 py-2 font-semibold text-brand-navy dark:border-stone-700 dark:text-stone-100"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.join("|")}>
                      {row.map((cell) => (
                        <td
                          key={cell}
                          className="border border-brand-border px-3 py-2 align-top text-gray-600 dark:border-stone-700 dark:text-gray-300"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
