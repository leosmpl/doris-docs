"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Design Principles", href: "/docs/design-principles" },
    ],
  },
  {
    title: "Theming",
    items: [
      { title: "Colors", href: "/docs/colors" },
      { title: "Typography", href: "/docs/typography" },
    ],
  },
  {
    title: "Layout",
    items: [
      { title: "Spacing", href: "/docs/spacing" },
      { title: "Radius", href: "/docs/radius" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Buttons", href: "/docs/components/buttons" },
      { title: "Cards", href: "/docs/components/cards" },
      { title: "Icons", href: "/docs/components/icons" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-64 shrink-0 overflow-y-auto border-r border-border-quaternary bg-bg-primary py-8 pr-4 pl-6">
      <Link href="/docs/introduction" className="mb-8 block">
        <span className="font-serif text-2xl font-bold text-text-primary">
          Doris
        </span>
      </Link>
      <nav className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 text-xs font-medium tracking-wider text-text-quaternary uppercase">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-1.5 text-sm transition-colors",
                      pathname === item.href
                        ? "bg-bg-tertiary font-medium text-text-primary"
                        : "text-text-tertiary hover:bg-bg-secondary hover:text-text-primary"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
