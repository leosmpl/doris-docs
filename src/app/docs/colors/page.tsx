import { PageHeader } from "@/components/docs/page-header";
import { ColorSwatch, ColorRow } from "@/components/docs/color-swatch";

const primitives = {
  Brand: [
    { name: "50", hex: "#FAFAF8" },
    { name: "100", hex: "#F6F4F1" },
    { name: "200", hex: "#F1EFE9" },
    { name: "300", hex: "#EDE9E2" },
    { name: "400", hex: "#E8E4DB" },
    { name: "500", hex: "#BAB6AF" },
    { name: "600", hex: "#8B8983" },
    { name: "700", hex: "#5D5B58" },
    { name: "800", hex: "#2E2E2C" },
    { name: "900", hex: "#1F2021" },
    { name: "950", hex: "#0C0D0D" },
  ],
  Success: [
    { name: "50", hex: "#E7EAE1" },
    { name: "100", hex: "#C4CBB5" },
    { name: "200", hex: "#C4CBB5" },
    { name: "300", hex: "#A6B091" },
    { name: "400", hex: "#89966C" },
    { name: "500", hex: "#6B7C47" },
    { name: "600", hex: "#566339" },
    { name: "700", hex: "#404A2B" },
    { name: "800", hex: "#2B321C" },
    { name: "900", hex: "#15190E" },
    { name: "950", hex: "#080A05" },
  ],
  Error: [
    { name: "50", hex: "#F8EFEC" },
    { name: "100", hex: "#F1DED8" },
    { name: "200", hex: "#E3BEB0" },
    { name: "300", hex: "#D49D89" },
    { name: "400", hex: "#C67D61" },
    { name: "500", hex: "#B85C3A" },
    { name: "600", hex: "#934A2E" },
    { name: "700", hex: "#6E3723" },
    { name: "800", hex: "#4A2517" },
    { name: "900", hex: "#25120C" },
    { name: "950", hex: "#130906" },
  ],
};

const semanticGroups = [
  {
    title: "Background",
    tokens: [
      { name: "bg-primary", hex: "#F6F4F1", cssVar: "--bg-primary" },
      { name: "bg-secondary", hex: "#F1EFE9", cssVar: "--bg-secondary" },
      { name: "bg-tertiary", hex: "#EDE9E2", cssVar: "--bg-tertiary" },
      { name: "bg-quaternary", hex: "#FFFFFF", cssVar: "--bg-quaternary" },
      {
        name: "bg-brand-primary",
        hex: "#1F2021",
        cssVar: "--bg-brand-primary",
      },
      {
        name: "bg-brand-secondary",
        hex: "#2E2E2C",
        cssVar: "--bg-brand-secondary",
      },
      {
        name: "bg-success-primary",
        hex: "#6B7C47",
        cssVar: "--bg-success-primary",
      },
      {
        name: "bg-success-secondary",
        hex: "#C4CBB5",
        cssVar: "--bg-success-secondary",
      },
      {
        name: "bg-success-tertiary",
        hex: "#E7EAE1",
        cssVar: "--bg-success-tertiary",
      },
      {
        name: "bg-error-primary",
        hex: "#B85C3A",
        cssVar: "--bg-error-primary",
      },
      {
        name: "bg-error-secondary",
        hex: "#D49D89",
        cssVar: "--bg-error-secondary",
      },
      {
        name: "bg-error-tertiary",
        hex: "#F8EFEC",
        cssVar: "--bg-error-tertiary",
      },
    ],
  },
  {
    title: "Text",
    tokens: [
      { name: "Text-primary", hex: "#1F2021", cssVar: "--text-primary" },
      { name: "Text-secondary", hex: "#2E2E2C", cssVar: "--text-secondary" },
      { name: "Text-tertiary", hex: "#5D5B58", cssVar: "--text-tertiary" },
      { name: "Text-quaternary", hex: "#BAB6AF", cssVar: "--text-quaternary" },
      { name: "Text-white", hex: "#F6F4F1", cssVar: "--text-white" },
      { name: "Text-black", hex: "#000000", cssVar: "--text-black" },
      {
        name: "Text-success-tertiary",
        hex: "#6B7C47",
        cssVar: "--text-success-tertiary",
      },
      {
        name: "Text-error-tertiary",
        hex: "#B85C3A",
        cssVar: "--text-error-tertiary",
      },
    ],
  },
  {
    title: "Icon",
    tokens: [
      { name: "Icon-primary", hex: "#1F2021", cssVar: "--icon-primary" },
      { name: "Icon-secondary", hex: "#2E2E2C", cssVar: "--icon-secondary" },
      { name: "Icon-tertiary", hex: "#5D5B58", cssVar: "--icon-tertiary" },
      { name: "Icon-quaternary", hex: "#BAB6AF", cssVar: "--icon-quaternary" },
      { name: "Icon-white", hex: "#F6F4F1", cssVar: "--icon-white" },
      { name: "Icon-black", hex: "#000000", cssVar: "--icon-black" },
    ],
  },
  {
    title: "Border",
    tokens: [
      {
        name: "border-primary",
        hex: "#1F2021",
        cssVar: "--border-primary",
      },
      {
        name: "border-secondary",
        hex: "#5D5B58",
        cssVar: "--border-secondary",
      },
      {
        name: "border-tertiary",
        hex: "#BAB6AF",
        cssVar: "--border-tertiary",
      },
      {
        name: "border-quaternary",
        hex: "#E8E4DB",
        cssVar: "--border-quaternary",
      },
    ],
  },
];

export default function ColorsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        section="Theming"
        title="Colors"
        body="Primitive color scales and semantic token mappings."
      />

      {/* Primitives */}
      <section className="space-y-8">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Primitives
        </h2>
        {Object.entries(primitives).map(([scaleName, colors]) => (
          <div key={scaleName} className="space-y-4">
            <h3 className="text-lg font-medium text-text-primary">
              {scaleName}
            </h3>
            <div className="grid grid-cols-6 gap-3 sm:grid-cols-11">
              {colors.map((color) => (
                <ColorSwatch
                  key={color.name}
                  name={color.name}
                  hex={color.hex}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Semantic */}
      <section className="space-y-8">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Semantic Tokens
        </h2>
        {semanticGroups.map((group) => (
          <div key={group.title} className="space-y-2">
            <h3 className="text-lg font-medium text-text-primary">
              {group.title}
            </h3>
            <div className="divide-y divide-border-quaternary rounded-xl border border-border-quaternary bg-bg-quaternary p-2">
              {group.tokens.map((token) => (
                <ColorRow
                  key={token.name}
                  name={token.name}
                  hex={token.hex}
                  cssVar={token.cssVar}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
