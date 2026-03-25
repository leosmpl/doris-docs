const radiusScale = [
  { name: "radius-none", value: "0px" },
  { name: "radius-xxs", value: "2px" },
  { name: "radius-xs", value: "4px" },
  { name: "radius-sm", value: "6px" },
  { name: "radius-md", value: "8px" },
  { name: "radius-lg", value: "8px" },
  { name: "radius-xl", value: "12px" },
  { name: "radius-2xl", value: "16px" },
  { name: "radius-3xl", value: "20px" },
  { name: "radius-4xl", value: "24px" },
  { name: "radius-full", value: "999px" },
];

import { PageHeader } from "@/components/docs/page-header";
import { PageContent } from "@/components/docs/page-content";

export default function RadiusPage() {
  return (
    <>
      <PageHeader
        section="Layout"
        title="Radius"
        body="Border radius tokens for consistent corner rounding."
      />
      <PageContent>
      <div className="grid max-w-[730px] grid-cols-4 gap-7">
        {radiusScale.map((item) => (
          <div
            key={item.name}
            className="flex aspect-square flex-col items-center justify-center gap-[19px] overflow-clip rounded-2xl bg-bg-tertiary p-6"
          >
            <div
              className="h-14 w-14 bg-bg-quaternary"
              style={{ borderRadius: item.value }}
            />
            <div className="flex flex-col items-center">
              <span className="text-base font-medium text-text-primary">
                {item.name}
              </span>
              <span className="font-mono text-[11px] leading-[16.5px] text-text-tertiary">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      </PageContent>
    </>
  );
}
