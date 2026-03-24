interface ColorSwatchProps {
  name: string;
  hex: string;
  cssVar?: string;
}

export function ColorSwatch({ name, hex, cssVar }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-16 w-full rounded-lg border border-border-quaternary"
        style={{ backgroundColor: hex }}
      />
      <span className="text-sm font-medium text-text-primary">{name}</span>
      <span className="font-mono text-xs text-text-tertiary">{hex}</span>
      {cssVar && (
        <span className="font-mono text-xs text-text-quaternary">{cssVar}</span>
      )}
    </div>
  );
}

interface ColorRowProps {
  name: string;
  hex: string;
  cssVar: string;
}

export function ColorRow({ name, hex, cssVar }: ColorRowProps) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div
        className="h-10 w-10 shrink-0 rounded-md border border-border-quaternary"
        style={{ backgroundColor: hex }}
      />
      <div className="flex-1">
        <span className="text-sm font-medium text-text-primary">{name}</span>
      </div>
      <span className="font-mono text-xs text-text-tertiary">{hex}</span>
      <span className="font-mono text-xs text-text-quaternary">{cssVar}</span>
    </div>
  );
}
