import { createFileRoute } from "@tanstack/react-router";
import warehouseImg from "@/assets/warehouse.jpg";
import { CTABlock } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gautam Roadways | Trusted Logistics Since 1959" },
      { name: "description", content: "Founded in 1959, Gautam Roadways operates the Jaipur ↔ Delhi NCR freight corridor through three generations of disciplined logistics work." },
      { property: "og:title", content: "About — Gautam Roadways" },
      { property: "og:description", content: "Founded 1959. Three generations of disciplined freight operations on the Jaipur–NCR corridor." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { year: "1959", title: "Founding", body: "Gautam Roadways begins operations in Jaipur, moving freight to Delhi via NH-8 — a single-route transport business built on consignor trust." },
  { year: "1970s–80s", title: "Branch expansion", body: "Permanent presence established in Karol Bagh, Delhi to handle inbound consignments and last-mile delivery into NCR markets." },
  { year: "1990s–2000s", title: "Operational structure", body: "Bilty-backed booking system, fixed dispatch windows, and a dedicated complaint desk become standard across the network." },
  { year: "2010s", title: "Industrial focus", body: "Sitapura, Sanganer and Bagru factory belts integrated into a scheduled pickup network feeding the Jaipur head office." },
  { year: "Today", title: "Daily freight system", body: "Five active NCR corridors — Delhi, Gurgaon, Noida, Faridabad, Ghaziabad — operated as scheduled freight lanes." },
];

const industries = [
  "Textiles & garments", "Handicrafts & furniture", "Marble & stone", "Auto components",
  "FMCG distribution", "Engineering goods", "Pharmaceutical packaging", "Retail & e-commerce",
];

function About() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x py-16 md:py-20">
          <div className="eyebrow">About Gautam Roadways</div>
          <h1 className="mt-3 max-w-3xl">Sixty-five years on a single freight corridor.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We don't sell logistics as a product. We run a daily transport operation between Jaipur and Delhi NCR — and we have done so, without interruption, since 1959.
          </p>
        </div>
      </section>

      <section className="container-x py-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <img src={warehouseImg} alt="Operations" width={1600} height={1000} loading="lazy"
             className="rounded-2xl border border-border object-cover w-full h-[480px]" />
        <div>
          <div className="eyebrow">Operational philosophy</div>
          <h2 className="mt-3">Discipline before scale.</h2>
          <p className="mt-4 text-muted-foreground">
            Our approach has not changed in three generations: a confirmed booking is a commitment. Trucks roll on schedule, bilty is issued at pickup, branch hand-offs are recorded, and the complaint desk is reachable on a single number. Everything else — capacity, technology, fleet size — is downstream of that.
          </p>
          <p className="mt-4 text-muted-foreground">
            This is why our customer base is dominated by repeat consignors who have moved freight with us for decades, not by single-shipment bookings.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="container-x py-16">
          <div className="eyebrow">Timeline</div>
          <h2 className="mt-3">Evolution of the network.</h2>
          <div className="mt-10 grid gap-4">
            {timeline.map((t) => (
              <div key={t.year} className="card-surface p-6 grid gap-4 md:grid-cols-[140px_1fr] items-start">
                <div className="font-bold text-accent">{t.year}</div>
                <div>
                  <h3 className="text-lg">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="eyebrow">Industries served</div>
          <h2 className="mt-3">A cross-section of Rajasthan's export & manufacturing base.</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {industries.map((i) => (
              <span key={i} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium">{i}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow">Why consignors stay with us</div>
          <h2 className="mt-3">Reliability is the only feature that compounds.</h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li>· A single dispatch desk owning every booking, end-to-end.</li>
            <li>· Branch nodes operated by long-tenured staff, not outsourced agents.</li>
            <li>· Transparent escalation through a named complaints contact.</li>
            <li>· Documentation discipline that holds up to GST and audit scrutiny.</li>
          </ul>
        </div>
      </section>

      <CTABlock title="Move your next load with us." subtitle="Talk to the dispatch desk that has run this corridor for six decades." />
    </>
  );
}
