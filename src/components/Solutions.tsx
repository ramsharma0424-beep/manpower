import Reveal from "@/components/Reveal";
import { solutions } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";

const icons: Record<string, React.ReactElement> = {
  payment: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.375M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0zm-13.5 0a3 3 0 11-6 0 3 3 0 016 0z" />
  ),
  retention: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  ),
  transparency: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-2.25v3.75" />
  ),
  verify: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  ),
  leadership: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  ),
};

export default function Solutions() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <SectionHeading
            eyebrow="How We Help"
            title="We Solve the Problems You Actually Face"
            description="Delayed wages, weak verification, and poor accountability shouldn't be normal in manpower services. Here's how our verified manpower agency fixes what facility managers face every day."
          />
        </Reveal>

        <div className="card-grid grid auto-rows-fr gap-6 md:grid-cols-2">
          {solutions.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="h-full">
              <div className="card-elevated flex h-full min-h-full flex-col border-t-4 border-t-brand-gold p-6">
                <div className="mb-4 inline-flex text-brand-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {icons[item.icon]}
                  </svg>
                </div>
                <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">
                  <span className="font-bold text-brand-navy">Challenge: </span>
                  {item.problem}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-700">
                  <span className="font-bold text-brand-gold">Our approach: </span>
                  {item.solution}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
