interface PageHeaderProps {
  section: string;
  title: string;
  body: string;
}

export function PageHeader({ section, title, body }: PageHeaderProps) {
  return (
    <div className="-mx-8 -mt-12 mb-12 border-b border-border-tertiary bg-bg-primary py-24">
      <div className="mx-auto max-w-[1220px] px-8">
        <div className="flex max-w-[576px] flex-col gap-6">
          <p className="font-mono text-sm leading-5 text-text-tertiary opacity-70">
            {section}
          </p>
          <p
            className="font-serif text-text-primary"
            style={{
              fontSize: "48px",
              lineHeight: "48px",
              letterSpacing: "-0.24px",
              fontWeight: 400,
            }}
          >
            {title}
          </p>
          <p className="text-lg leading-7 text-text-secondary opacity-70">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
