"use client";

function ServiceCard({ icon, title, desc, tags }) {
  return (
    <div className="bg-white border border-[#e2e8f0] p-10 rounded-xl flex flex-col justify-between group transition-all duration-300 hover:border-[#0050cc] hover:shadow-[0_10px_30px_-5px_rgba(0,80,204,0.1)] hover:-translate-y-[2px]">
      
      <div>
        {/* ICON */}
        <div className="w-14 h-14 rounded-xl bg-[#0050cc]/5 flex items-center justify-center mb-8 transition-colors group-hover:bg-[#0050cc]/10">
          <span className="material-symbols-outlined text-[#0050cc] text-3xl">
            {icon}
          </span>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-headline font-bold text-[#041627] mb-4">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[#64748b] mb-8 text-lg leading-relaxed">
          {desc}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-md bg-[#f1f5f9] text-[#334155] text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <button className="w-full py-3.5 rounded-lg border border-[#e2e8f0] font-bold tracking-wide flex justify-between items-center px-6 transition-all duration-200 hover:bg-[#0050cc] hover:text-white">
        <span className="text-sm">Inquire Project</span>
        <span className="material-symbols-outlined text-lg">
          arrow_forward
        </span>
      </button>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* CARD 1 */}
      <ServiceCard
        icon="code"
        title="Custom Web Development"
        desc="High-performance, scalable web applications tailored to your business logic. We focus on speed, security, and seamless user flows."
        tags={[
          "React / Next.js",
          "Node.js",
          "TypeScript",
          "PostgreSQL",
        ]}
      />

      {/* CARD 2 */}
      <ServiceCard
        icon="brush"
        title="UI/UX Design"
        desc="Human-centric design that balances aesthetics with functionality. We create immersive visual languages that define your brand identity."
        tags={[
          "Figma",
          "Design Systems",
          "Prototyping",
          "Wireframing",
        ]}
      />

      {/* CARD 3 */}
      <ServiceCard
        icon="shopping_bag"
        title="E-commerce Solutions"
        desc="Turn browsers into buyers with high-converting store experiences. From custom checkouts to headless commerce integrations."
        tags={[
          "Shopify Plus",
          "Stripe",
          "Headless CMS",
          "Inventory Sync",
        ]}
      />

      {/* CARD 4 */}
      <ServiceCard
        icon="trending_up"
        title="SEO Optimization"
        desc="Rank higher and grow organic traffic. We optimize everything from core web vitals to semantic markup and content strategy."
        tags={[
          "Performance Audit",
          "Schema Markup",
          "Link Building",
          "Core Web Vitals",
        ]}
      />

    </div>
  );
}