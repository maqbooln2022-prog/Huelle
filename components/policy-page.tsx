export function PolicyPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
      <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        {intro}
      </p>
      <div className="mt-12 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold tracking-tight">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
