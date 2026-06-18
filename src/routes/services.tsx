import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/company";
import ftl from "@/assets/ftl.jpg";
import parcel from "@/assets/parcel.jpg";
import loading from "@/assets/loading.jpg";
import warehouse from "@/assets/warehouse.jpg";
import route from "@/assets/route-highway.jpg";
import { CTABlock } from "@/components/site/CTA";
import GrFactory from "@/assets/GrFactory.png";
import GrPickup from "@/assets/GrPickup.png";

const img: Record<string, string> = { ftl, parcel, loading, warehouse, route, GrFactory, GrPickup };

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Gautam Roadways | FTL, PTL, Parcel, Factory Pickup" },
      { name: "description", content: "Full Truck Load, Part Truck Load, parcel booking, factory pickup and door-to-door delivery across Jaipur and Delhi NCR." },
      { property: "og:title", content: "Services — Gautam Roadways" },
      { property: "og:description", content: "FTL, PTL, parcel and door-delivery services between Jaipur and Delhi NCR." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x py-16 md:py-20">
          <div className="eyebrow">Services</div>
          <h1 className="mt-3 max-w-3xl">Five service lines that run on the same daily dispatch system.</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Every consignment — whether a single carton or a full truck — moves through the same Transport Nagar operations desk and is handed off across branch nodes in NCR.
          </p>
        </div>
      </section>

      <section className="container-x py-16 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => (
          <article key={s.slug} className="card-surface overflow-hidden flex flex-col">
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img src={img[s.image]} alt={s.name} width={1600} height={900} loading="lazy"
                   className="h-full w-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3>{s.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{s.short}</p>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="mt-5 text-sm font-semibold text-accent inline-flex items-center gap-1 hover:underline">
                View details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <CTABlock />
    </>
  );
}
