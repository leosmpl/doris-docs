import {
  DorisCard,
  DorisCardHeader,
  DorisCardContent,
  DorisCardFooter,
} from "@/components/ui/doris-card";
import { DorisButton } from "@/components/ui/doris-button";
import { StatusBadge } from "@/components/ui/status-badge";

export default function CardsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-text-primary">
          Cards
        </h1>
        <p className="text-lg text-text-tertiary">
          Container component for grouping related content.
        </p>
      </div>

      <hr className="border-border-quaternary" />

      {/* Basic */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Basic Card
        </h2>
        <DorisCard className="max-w-sm">
          <DorisCardHeader>
            <h3 className="text-lg font-semibold text-text-primary">
              AAPL Bull Call Spread
            </h3>
            <p className="text-sm text-text-tertiary">
              Net debit: $2.50 · Max profit: $7.50
            </p>
          </DorisCardHeader>
          <DorisCardContent>
            <p className="text-sm text-text-secondary">
              Buy the 180 call, sell the 190 call. Expires Jan 17, 2025. This
              strategy profits when AAPL trades above $182.50 at expiration.
            </p>
          </DorisCardContent>
          <DorisCardFooter className="gap-3">
            <DorisButton size="sm">Execute Trade</DorisButton>
            <DorisButton size="sm" variant="outline">
              Edit Strategy
            </DorisButton>
          </DorisCardFooter>
        </DorisCard>
      </section>

      {/* With Badge */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Card with Status Badge
        </h2>
        <DorisCard className="max-w-sm">
          <DorisCardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text-primary">
                SPY Iron Condor
              </h3>
              <StatusBadge variant="success">In the Money</StatusBadge>
            </div>
            <p className="text-sm text-text-tertiary">P&L: +$320.00</p>
          </DorisCardHeader>
          <DorisCardContent>
            <p className="text-sm text-text-secondary">
              Short the 450/460 call spread and the 420/410 put spread. Current
              price is within the profit zone.
            </p>
          </DorisCardContent>
        </DorisCard>
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-text-primary">
          Specs
        </h2>
        <div className="rounded-xl border border-border-quaternary bg-bg-quaternary divide-y divide-border-quaternary text-sm">
          <div className="grid grid-cols-2 gap-4 px-6 py-3">
            <span className="text-text-tertiary">Background</span>
            <span className="font-mono text-text-primary">
              bg-quaternary · #FFFFFF
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 px-6 py-3">
            <span className="text-text-tertiary">Border</span>
            <span className="font-mono text-text-primary">
              border-quaternary · #E8E4DB
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 px-6 py-3">
            <span className="text-text-tertiary">Border Radius</span>
            <span className="font-mono text-text-primary">
              radius-xl · 12px
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
