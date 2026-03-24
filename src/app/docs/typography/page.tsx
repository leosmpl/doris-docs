const headings = [
  { level: "H1", size: "72px", lineHeight: "72px", tracking: "-0.36px" },
  { level: "H2", size: "60px", lineHeight: "60px", tracking: "-0.3px" },
  { level: "H3", size: "48px", lineHeight: "48px", tracking: "-0.24px" },
  { level: "H4", size: "36px", lineHeight: "40px", tracking: "-0.18px" },
  { level: "H5", size: "30px", lineHeight: "36px", tracking: "-0.15px" },
  { level: "H6", size: "24px", lineHeight: "32px", tracking: "-0.12px" },
];

const bodySizes = [
  { name: "Body xl", size: "20px", lineHeight: "28px" },
  { name: "Body lg", size: "18px", lineHeight: "28px" },
  { name: "Body base", size: "16px", lineHeight: "24px" },
  { name: "Body sm", size: "14px", lineHeight: "20px" },
  { name: "Body xs", size: "12px", lineHeight: "16px" },
];

const captionSizes = [
  { name: "Captions xl", size: "20px", lineHeight: "28px" },
  { name: "Captions lg", size: "18px", lineHeight: "28px" },
  { name: "Captions Base", size: "16px", lineHeight: "24px" },
  { name: "Captions sm", size: "14px", lineHeight: "20px" },
  { name: "Captions xs", size: "12px", lineHeight: "16px" },
];

function WeightRow({
  name,
  size,
  lineHeight,
  fontClass,
}: {
  name: string;
  size: string;
  lineHeight: string;
  fontClass: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border-quaternary pb-6">
      <div className="flex flex-col gap-2">
        <p
          className={`${fontClass} text-fg-primary`}
          style={{ fontSize: size, lineHeight, fontWeight: 700 }}
        >
          {name}
        </p>
        <p className="font-mono text-[11px] leading-[16.5px] text-fg-quaternary">
          Bold
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p
          className={`${fontClass} text-fg-primary`}
          style={{ fontSize: size, lineHeight, fontWeight: 500 }}
        >
          {name}
        </p>
        <p className="font-mono text-[11px] leading-[16.5px] text-fg-quaternary">
          Medium
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p
          className={`${fontClass} text-fg-primary`}
          style={{ fontSize: size, lineHeight, fontWeight: 400 }}
        >
          {name}
        </p>
        <p className="font-mono text-[11px] leading-[16.5px] text-fg-quaternary">
          Regular
        </p>
      </div>
      <div>
        <p className="font-mono text-xs leading-4 text-fg-quaternary">
          {size} · {lineHeight}
        </p>
      </div>
    </div>
  );
}

import { PageHeader } from "@/components/docs/page-header";

export default function TypographyPage() {
  return (
    <div className="-mx-8 -mt-12">
      <PageHeader
        section="Theming"
        title="Typography"
        body="Typography tokens and styles for visually appealing designs, ensuring consistency across platforms with defined font sizes and weights."
      />

      {/* Main Content */}
      <div className="flex flex-col gap-14 px-8 py-10">
        {/* Headings Section */}
        <section className="flex flex-col gap-7">
          <p className="text-xs font-medium text-fg-quaternary">Headings</p>
          {headings.map((h) => (
            <div
              key={h.level}
              className="flex flex-col gap-2 border-b border-border-quaternary pb-6"
            >
              <p
                className="font-serif text-fg-primary"
                style={{
                  fontSize: h.size,
                  lineHeight: h.lineHeight,
                  letterSpacing: h.tracking,
                  fontWeight: 400,
                }}
              >
                See what&apos;s possible.
              </p>
              <p className="font-mono text-[11px] leading-[16.5px] text-fg-quaternary">
                {h.level} · {h.size} · {h.lineHeight} · -0.5% · Regular
              </p>
            </div>
          ))}
        </section>

        {/* Body Section */}
        <section className="flex flex-col gap-7">
          <p className="text-xs font-medium text-fg-quaternary">Body</p>
          {bodySizes.map((b) => (
            <WeightRow
              key={b.name}
              name={b.name}
              size={b.size}
              lineHeight={b.lineHeight}
              fontClass="font-sans"
            />
          ))}
        </section>

        {/* Captions Section */}
        <section className="flex flex-col gap-7">
          <p className="text-xs font-medium text-fg-quaternary">Captions</p>
          <p className="-mt-4 text-xs text-fg-quaternary">
            Used for numbers and small labels — prices, specs, metadata,
            timestamps.
          </p>
          {captionSizes.map((c) => (
            <WeightRow
              key={c.name}
              name={c.name}
              size={c.size}
              lineHeight={c.lineHeight}
              fontClass="font-mono"
            />
          ))}
        </section>
      </div>

    </div>
  );
}
