import { PageHeader } from "@/components/docs/page-header";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Wallet,
  ShieldCheck,
  ArrowRightLeft,
  Search,
  Settings,
  Bell,
  User,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  X,
  Check,
  Info,
  AlertTriangle,
  Eye,
  EyeOff,
  BarChart3,
  LineChart,
  CandlestickChart,
  DollarSign,
  Percent,
  Clock,
  Calendar,
  Filter,
  Download,
  Share2,
  type LucideIcon,
} from "lucide-react";

interface IconCardProps {
  icon: LucideIcon;
  name: string;
  featured?: boolean;
}

function IconCard({ icon: Icon, name, featured }: IconCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-xl border p-4 ${
        featured
          ? "border-border-tertiary bg-bg-secondary"
          : "border-border-quaternary bg-bg-quaternary"
      }`}
    >
      <Icon className="h-6 w-6 text-icon-primary" />
      <span className="font-mono text-xs text-text-tertiary">{name}</span>
    </div>
  );
}

const tradingIcons: { icon: LucideIcon; name: string }[] = [
  { icon: TrendingUp, name: "TrendingUp" },
  { icon: TrendingDown, name: "TrendingDown" },
  { icon: Activity, name: "Activity" },
  { icon: Wallet, name: "Wallet" },
  { icon: ShieldCheck, name: "ShieldCheck" },
  { icon: ArrowRightLeft, name: "ArrowRightLeft" },
];

const allIcons: { icon: LucideIcon; name: string }[] = [
  ...tradingIcons,
  { icon: Search, name: "Search" },
  { icon: Settings, name: "Settings" },
  { icon: Bell, name: "Bell" },
  { icon: User, name: "User" },
  { icon: ChevronDown, name: "ChevronDown" },
  { icon: ChevronRight, name: "ChevronRight" },
  { icon: Plus, name: "Plus" },
  { icon: Minus, name: "Minus" },
  { icon: X, name: "X" },
  { icon: Check, name: "Check" },
  { icon: Info, name: "Info" },
  { icon: AlertTriangle, name: "AlertTriangle" },
  { icon: Eye, name: "Eye" },
  { icon: EyeOff, name: "EyeOff" },
  { icon: BarChart3, name: "BarChart3" },
  { icon: LineChart, name: "LineChart" },
  { icon: CandlestickChart, name: "CandlestickChart" },
  { icon: DollarSign, name: "DollarSign" },
  { icon: Percent, name: "Percent" },
  { icon: Clock, name: "Clock" },
  { icon: Calendar, name: "Calendar" },
  { icon: Filter, name: "Filter" },
  { icon: Download, name: "Download" },
  { icon: Share2, name: "Share2" },
];

export default function IconsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        section="Components"
        title="Icons"
        body="Lucide React icons styled with Doris color tokens."
      />

      {/* Featured Trading Set */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Trading Icons
        </h2>
        <p className="text-sm text-text-tertiary">
          A curated set of icons for core trading interactions.
        </p>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {tradingIcons.map((item) => (
            <IconCard
              key={item.name}
              icon={item.icon}
              name={item.name}
              featured
            />
          ))}
        </div>
      </section>

      {/* Full Grid */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          All Icons
        </h2>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6">
          {allIcons.map((item) => (
            <IconCard key={item.name} icon={item.icon} name={item.name} />
          ))}
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Usage
        </h2>
        <div className="rounded-lg bg-bg-secondary p-4">
          <pre className="font-mono text-xs text-text-secondary">
{`import { TrendingUp } from "lucide-react";

// Default: Icon-primary (#1F2021)
<TrendingUp className="h-6 w-6 text-icon-primary" />

// Secondary
<TrendingUp className="h-6 w-6 text-icon-secondary" />

// White (for dark backgrounds)
<TrendingUp className="h-6 w-6 text-icon-white" />`}
          </pre>
        </div>
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Specs
        </h2>
        <div className="rounded-xl border border-border-quaternary bg-bg-quaternary divide-y divide-border-quaternary text-sm">
          <div className="grid grid-cols-2 gap-4 px-6 py-3">
            <span className="text-text-tertiary">Default Color</span>
            <span className="font-mono text-text-primary">
              Icon-primary · #1F2021
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 px-6 py-3">
            <span className="text-text-tertiary">Label Font</span>
            <span className="font-mono text-text-primary">
              JetBrains Mono · 12px
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 px-6 py-3">
            <span className="text-text-tertiary">Default Size</span>
            <span className="font-mono text-text-primary">24 × 24px</span>
          </div>
        </div>
      </section>
    </div>
  );
}
