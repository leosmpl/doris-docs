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

export default function RadiusPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-text-primary">
          Radius
        </h1>
        <p className="text-lg text-text-tertiary">
          Border radius tokens for consistent corner rounding.
        </p>
      </div>

      <hr className="border-border-quaternary" />

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {radiusScale.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-3">
            <div
              className="h-20 w-20 border-2 border-border-primary bg-bg-tertiary"
              style={{ borderRadius: item.value }}
            />
            <span className="text-sm font-medium text-text-primary">
              {item.name}
            </span>
            <span className="font-mono text-xs text-text-tertiary">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
