export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-text-primary">
          Introduction
        </h1>
        <p className="text-lg text-text-tertiary">
          The design system behind Doris — a visual-first platform for options
          strategy design.
        </p>
      </div>

      <hr className="border-border-quaternary" />

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Mission
        </h2>
        <p className="leading-7 text-text-secondary">
          Doris is a visual-first platform to design options strategies on
          stocks or indices using intuitive graphical tools. We believe that
          complex financial instruments should feel approachable, not
          intimidating.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Value Proposition
        </h2>
        <p className="leading-7 text-text-secondary">
          Make the potential outcomes of a strategy clear to the user — without
          technical jargon. Every chart, every visualization, every interaction
          is designed to help you understand exactly what could happen before you
          commit.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Execution
        </h2>
        <p className="leading-7 text-text-secondary">
          Once a strategy looks right, trade it. Doris allows users to execute
          these strategies directly in their brokerage account. From visual
          design to live trade, the entire workflow lives in one place.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Design System
        </h2>
        <p className="leading-7 text-text-secondary">
          This documentation covers the tokens, components, and patterns that
          make up the Doris interface. Everything is built on a warm, neutral
          color palette with olive-green success states and burnt-orange error
          states — designed to feel calm and confident, even in volatile markets.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-text-secondary">
          <li>
            <strong>Colors</strong> — Primitive scales and semantic mappings
          </li>
          <li>
            <strong>Typography</strong> — Sentient for headings, Inter for body,
            JetBrains Mono for code
          </li>
          <li>
            <strong>Spacing &amp; Radius</strong> — Consistent layout tokens
          </li>
          <li>
            <strong>Components</strong> — Buttons, cards, badges, and icons
          </li>
        </ul>
      </section>
    </div>
  );
}
