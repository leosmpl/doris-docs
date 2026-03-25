const spacingScale = [
  { name: "0", value: "0px" },
  { name: "0.5", value: "2px" },
  { name: "1", value: "4px" },
  { name: "1.5", value: "6px" },
  { name: "2", value: "8px" },
  { name: "2.5", value: "10px" },
  { name: "3", value: "12px" },
  { name: "3.5", value: "14px" },
  { name: "4", value: "16px" },
  { name: "5", value: "20px" },
  { name: "6", value: "24px" },
  { name: "7", value: "28px" },
  { name: "8", value: "32px" },
  { name: "9", value: "36px" },
  { name: "10", value: "40px" },
  { name: "11", value: "44px" },
  { name: "12", value: "48px" },
  { name: "14", value: "56px" },
  { name: "16", value: "64px" },
  { name: "20", value: "80px" },
  { name: "24", value: "96px" },
  { name: "32", value: "128px" },
];

import { PageHeader } from "@/components/docs/page-header";
import { PageContent } from "@/components/docs/page-content";

export default function SpacingPage() {
  return (
    <>
      <PageHeader
        section="Layout"
        title="Spacing"
        body="A consistent spacing scale used for padding, margins, and gaps."
      />
      <PageContent>
      <div className="space-y-2">
        {spacingScale.map((item) => (
          <div key={item.name} className="flex items-center gap-4 py-1">
            <span className="w-12 shrink-0 text-right font-mono text-xs text-text-quaternary">
              {item.name}
            </span>
            <span className="w-14 shrink-0 font-mono text-xs text-text-tertiary">
              {item.value}
            </span>
            <div className="flex-1">
              <div
                className="h-4 rounded-sm bg-bg-brand-primary"
                style={{ width: item.value === "0px" ? "1px" : item.value }}
              />
            </div>
          </div>
        ))}
      </div>
      </PageContent>
    </>
  );
}
