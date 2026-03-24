interface PageHeaderProps {
  section: string;
  title: string;
  body: string;
}

export function PageHeader({ section, title, body }: PageHeaderProps) {
  return (
    <div className="-mx-8 -mt-12 mb-12 overflow-clip bg-bg-tertiary py-24">
      <div className="mx-auto max-w-[1220px] px-8">
        <div className="flex max-w-[576px] flex-col gap-6">
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
    </div>
  );
}
