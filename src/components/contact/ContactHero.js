"use client";

export default function ContactHero() {
  return (
    <header className="mb-16">
      
      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight text-[#0f172a] mb-4 leading-tight">
        Let's Build the{" "}
        <span className="text-[#0050cc]">Nocturne</span>.
      </h1>

      {/* Paragraph */}
      <p className="text-[#475569] max-w-2xl text-lg md:text-xl leading-relaxed font-body">
        Whether you're starting a new venture or scaling an existing masterpiece,
        our studio is ready to illuminate your vision.
      </p>

    </header>
  );
}