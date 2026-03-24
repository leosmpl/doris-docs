import { PageHeader } from "@/components/docs/page-header";
import { DorisButton } from "@/components/ui/doris-button";

export default function ButtonsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        section="Components"
        title="Buttons"
        body="Primary action triggers with variant and size options."
      />

      {/* Variants */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Variants
        </h2>
        <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border-quaternary bg-bg-quaternary p-8">
          <DorisButton variant="default">Default</DorisButton>
          <DorisButton variant="secondary">Secondary</DorisButton>
          <DorisButton variant="outline">Outline</DorisButton>
          <DorisButton variant="ghost">Ghost</DorisButton>
        </div>
        <div className="rounded-lg bg-bg-secondary p-4">
          <pre className="font-mono text-xs text-text-secondary">
{`<DorisButton variant="default">Default</DorisButton>
<DorisButton variant="secondary">Secondary</DorisButton>
<DorisButton variant="outline">Outline</DorisButton>
<DorisButton variant="ghost">Ghost</DorisButton>`}
          </pre>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Sizes
        </h2>
        <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border-quaternary bg-bg-quaternary p-8">
          <DorisButton size="sm">Small</DorisButton>
          <DorisButton size="md">Medium</DorisButton>
          <DorisButton size="lg">Large</DorisButton>
        </div>
        <div className="rounded-lg bg-bg-secondary p-4">
          <pre className="font-mono text-xs text-text-secondary">
{`<DorisButton size="sm">Small</DorisButton>
<DorisButton size="md">Medium</DorisButton>
<DorisButton size="lg">Large</DorisButton>`}
          </pre>
        </div>
      </section>

      {/* Disabled */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Disabled
        </h2>
        <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border-quaternary bg-bg-quaternary p-8">
          <DorisButton disabled>Disabled</DorisButton>
          <DorisButton variant="outline" disabled>
            Disabled Outline
          </DorisButton>
        </div>
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Specs
        </h2>
        <div className="rounded-xl border border-border-quaternary bg-bg-quaternary divide-y divide-border-quaternary text-sm">
          <div className="grid grid-cols-2 gap-4 px-6 py-3">
            <span className="text-text-tertiary">Background (default)</span>
            <span className="font-mono text-text-primary">
              bg-brand-primary · #1F2021
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 px-6 py-3">
            <span className="text-text-tertiary">Text (default)</span>
            <span className="font-mono text-text-primary">
              text-white · #F6F4F1
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 px-6 py-3">
            <span className="text-text-tertiary">Border Radius</span>
            <span className="font-mono text-text-primary">
              radius-full · 999px
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
