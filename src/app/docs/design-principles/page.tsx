export default function DesignPrinciplesPage() {
  const principles = [
    {
      title: "Clarity Over Complexity",
      description:
        "Financial products are inherently complex. Our job is to remove that complexity from the interface, not add to it. Every element should justify its existence.",
    },
    {
      title: "Visual First",
      description:
        "Show, don't tell. Charts, graphs, and interactive visualizations should always take priority over tables of numbers and walls of text.",
    },
    {
      title: "Calm Confidence",
      description:
        "Markets are volatile. Our interface shouldn't be. Use warm neutrals, deliberate motion, and clear hierarchy to create a sense of control.",
    },
    {
      title: "Progressive Disclosure",
      description:
        "Surface the essentials. Let users drill deeper when they want to. A beginner and an expert should both feel at home.",
    },
    {
      title: "Consistent Tokens",
      description:
        "Every color, spacing value, and radius comes from our token system. No magic numbers. This ensures visual consistency and makes theming possible.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-text-primary">
          Design Principles
        </h1>
        <p className="text-lg text-text-tertiary">
          The guiding values behind every design decision in Doris.
        </p>
      </div>

      <hr className="border-border-quaternary" />

      <div className="space-y-8">
        {principles.map((principle, i) => (
          <section key={i} className="space-y-2">
            <h2 className="font-serif text-xl font-semibold text-text-primary">
              {i + 1}. {principle.title}
            </h2>
            <p className="leading-7 text-text-secondary">
              {principle.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
