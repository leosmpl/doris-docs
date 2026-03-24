interface PageHeaderProps {
  section: string;
  title: string;
  body: string;
}

export function PageHeader({ section, title, body }: PageHeaderProps) {
  return (
    <div className="-mx-8 -mt-12 mb-12 border-b border-border-tertiary bg-bg-primary px-8 py-16">
      <div className="flex max-w-xl flex-col gap-5">
        <p className="font-mono text-sm leading-5 text-text-tertiary opacity-70">
          {section}
        </p>
        <p className="font-serif text-[48px] leading-[48px] tracking-[-0.24px] font-normal text-text-primary">
          {title}
        </p>
        <p className="text-lg leading-7 text-text-secondary opacity-70">
          {body}
        </p>
      </div>
    </div>
  );
}
