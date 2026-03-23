"use client";

export default function AboutTeam() {
  const team = [
    {
      name: "Julian Voss",
      role: "Creative Director & Founder",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdAbxCwVSZW4vr9b1tIXj8sNZkIIr8LiJCF27NmsYBCrpERZ1hcsXLxdD1DCSeh2S-R8EqM5i9-PCpmpFD-23TEi0IDZGBhAQo-3vJk5foKkt8M-aY6oZKRxNYXjsTyiicW9J5WeDdICl9EblciQLIADdhjHaRTeYRXUZhDyMB9Spu_lINe3ZGDdjCdWCnKkYanC6kvJfTGDbqc0Ll0ok4VSEszwtbxlJSvq-v78M2p3F-22opa8l69DIdblV7bgznlh796YPB16m4",
    },
    {
      name: "Elena Night",
      role: "Chief Technology Officer",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV8qp8nbmvizPMUi4hNGUQU9-VYFILNZwosfNux-Lml4zVYHLiB0aYZaRFYakm5ettbrNi_GvZ0h3iMnB73oMc5BL0Hv7Tpv1MRBssMcuZKHdOCIM0KDuNHto4VHi9aWXLQPgvMMUzLqPMDtPrZQk2jLCUmFYDuzPCmuahdEHBTodlu5QXB2uEPTeiHQJ7UgwPqKc--tdlk6D-5cwmT7zxBO6B1taOvarEThfVjBqU3EIMb0xeVrD2us8VMB213qc1HlZcjnvcAuwG",
    },
    {
      name: "Marcus Chen",
      role: "Head of Product Strategy",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv_RkTQioFXkHB9Ixv_lBTQBn1uJE_sIu8Bgot1IC8ZiyDKV0VzG4RiVgNZBvPcbomdjzAqNMcr9mN-YrLPTTDBbCw97nb-4o-skKKpfr9tQfuRMi0mjTcdyxXjDCBwJ2E-gkGuSZnTOhuRCoeaDu-tbjWQVZO07xm-nVXr2xc_arSQTxT3J-AF8VttU6WYcLhVSHukQ1r3SJlryM9upBvh5ZsX3SOpMEMZTFqnFJ8-oaR7gxw6TnRKDGT_l96-Jnw5ipzTFo_q1z7",
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#f1f5f9] border-y border-[#e2e8f0]">
      
      <div className="max-w-7xl mx-auto">
        
        {/* ✅ FIXED HEADING (LEFT ALIGNED) */}
        <div className="mb-12 max-w-2xl">
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-[#0f172a] mb-4">
            Leadership Team
          </h2>

          <p className="text-[#64748b] text-sm md:text-base leading-relaxed">
            Led by industry veterans committed to pushing the boundaries of what's possible in the digital realm.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden group hover:shadow-md transition"
            >
              
              {/* IMAGE */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-[#0f172a]">
                  {member.name}
                </h3>

                <p className="text-[#0050cc] text-xs mt-1">
                  {member.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}