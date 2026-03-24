const fontSizes = [
  { name: "Size-xs", size: "12px", lineHeight: "16px" },
  { name: "Size-sm", size: "14px", lineHeight: "20px" },
  { name: "Size-base", size: "16px", lineHeight: "24px" },
  { name: "Size-lg", size: "18px", lineHeight: "28px" },
  { name: "Size-xl", size: "20px", lineHeight: "28px" },
  { name: "Size-2xl", size: "24px", lineHeight: "32px" },
  { name: "Size-3xl", size: "30px", lineHeight: "36px" },
  { name: "Size-4xl", size: "36px", lineHeight: "40px" },
  { name: "Size-5xl", size: "48px", lineHeight: "48px" },
  { name: "Size-6xl", size: "60px", lineHeight: "60px" },
  { name: "Size-7xl", size: "72px", lineHeight: "72px" },
  { name: "Size-8xl", size: "96px", lineHeight: "1" },
  { name: "Size-9xl", size: "128px", lineHeight: "1" },
];

const fontWeights = [
  { name: "Light", value: "300" },
  { name: "Regular", value: "400" },
  { name: "Medium", value: "500" },
  { name: "Bold", value: "700" },
  { name: "Italic", value: "400", style: "italic" as const },
];

export default function TypographyPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-text-primary">
          Typography
        </h1>
        <p className="text-lg text-text-tertiary">
          Font families, weights, and the type scale.
        </p>
      </div>

      <hr className="border-border-quaternary" />

      {/* Font Families */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Font Families
        </h2>

        <div className="space-y-6">
          <div className="rounded-xl border border-border-quaternary bg-bg-quaternary p-6">
            <p className="mb-1 font-mono text-xs text-text-quaternary">
              font-serif · Sentient
            </p>
            <p className="font-serif text-3xl text-text-primary">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>

          <div className="rounded-xl border border-border-quaternary bg-bg-quaternary p-6">
            <p className="mb-1 font-mono text-xs text-text-quaternary">
              font-sans · Inter
            </p>
            <p className="font-sans text-3xl text-text-primary">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>

          <div className="rounded-xl border border-border-quaternary bg-bg-quaternary p-6">
            <p className="mb-1 font-mono text-xs text-text-quaternary">
              font-mono · JetBrains Mono
            </p>
            <p className="font-mono text-3xl text-text-primary">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Font Weights
        </h2>
        <div className="rounded-xl border border-border-quaternary bg-bg-quaternary divide-y divide-border-quaternary">
          {fontWeights.map((weight) => (
            <div key={weight.name} className="flex items-center gap-6 px-6 py-4">
              <span className="w-20 font-mono text-xs text-text-quaternary">
                {weight.value}
              </span>
              <span className="w-20 text-sm text-text-tertiary">
                {weight.name}
              </span>
              <span
                className="flex-1 text-xl text-text-primary"
                style={{
                  fontWeight: weight.value,
                  fontStyle: weight.style || "normal",
                }}
              >
                Options Strategy Designer
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Type Scale */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Type Scale
        </h2>
        <div className="space-y-4">
          {fontSizes.map((item) => (
            <div
              key={item.name}
              className="flex items-baseline gap-4 border-b border-border-quaternary pb-3"
            >
              <span className="w-24 shrink-0 font-mono text-xs text-text-quaternary">
                {item.name}
              </span>
              <span className="w-16 shrink-0 font-mono text-xs text-text-tertiary">
                {item.size}
              </span>
              <span
                className="text-text-primary"
                style={{
                  fontSize: item.size,
                  lineHeight: item.lineHeight,
                }}
              >
                Doris
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
