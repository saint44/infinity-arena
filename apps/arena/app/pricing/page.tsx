'use client';
import React from 'react';

type Tier = { label: string; url: string };
type Plan = { name: string; blurb?: string; tiers: Tier[] };

const Concierge: Plan = {
  name: 'Luxury AI Concierge',
  blurb: 'White-glove AI assistance for teams that demand premium.',
  // ✅ CONFIRMED MAPPING
  tiers: [
    { label: 'Starter — $199/mo', url: 'https://buy.stripe.com/cNi5kE2F30aKd1a0XlcWj0LO' },
    { label: 'Pro — $499/mo', url: 'https://buy.stripe.com/3cI00kenL1eO5yI49xcWj0LP' },
    { label: 'Elite — $1,200/mo', url: 'https://buy.stripe.com/28EfZibbz5v42mwgWjcWj0LQ' },
  ],
};

const PPS: Plan = {
  name: 'Pain-Point Solver',
  blurb: 'Pick a tier and we’ll kill your top bottlenecks every month.',
  // ✅ CONFIRMED MAPPING
  tiers: [
    { label: 'Assessment — one-time', url: 'https://buy.stripe.com/00w9AU5Rf8Hg5yIaxVcWj0LU' },
    { label: 'Starter — $149/mo', url: 'https://buy.stripe.com/bJe8wQ2F38HgbX60XlcWj0LS' },
    { label: 'Scale — $399/mo', url: 'https://buy.stripe.com/eVqeVedjHcXw4uE49xcWj0LT' },
  ],
};

const A2B: Plan = {
  name: 'Agree 2 Bond',
  blurb: 'Simple, structured client agreements with one-click checkout.',
  // ✅ CONFIRMED MAPPING
  tiers: [
    { label: 'Standard', url: 'https://buy.stripe.com/4gMdRagvT1eO9OY5dBcWj0LV' },
    { label: 'Premium', url: 'https://buy.stripe.com/5kQ7sMenLaPo0eofSfcWj0LW' },
    { label: 'Enterprise', url: 'https://buy.stripe.com/00w4gA3J7cXw5yI35tcWj0LX' },
  ],
};

const Honey: Plan = {
  name: 'Honey Modules',
  blurb: 'Infinity Nexus SaaS modules for monitoring and automation.',
  tiers: [
    { label: 'Honey Health — $19/mo', url: 'https://buy.stripe.com/8x26oI5Rff5E2mwdK7cWj0M1' },
    { label: 'Honey Auto-Heal — $29/mo', url: 'https://buy.stripe.com/28EdRa0wV0aK3qAgWjcWj0M2' },
    { label: 'Honey Forge — $49/mo', url: 'https://buy.stripe.com/eVq00k2F34r02mw5dBcWj0M3' },
    { label: 'Honey Runner — $99/mo', url: 'https://buy.stripe.com/fZu00k5Rf9Lkf9i9tRcWj0M0' },
  ],
};

const PLANS: Plan[] = [Concierge, PPS, A2B, Honey];

export default function Page() {
  const [showUrls, setShowUrls] = React.useState(false);
  return (
    <main className="min-h-screen bg-brand-ink text-white px-6 py-16">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-gold">Pricing</h1>
        <p className="text-lg opacity-80 mx-auto max-w-prose">
          Choose the plan that’s right for you. Each option includes access to the Infinity suite of AI-powered tools.
        </p>
        <button
          onClick={() => setShowUrls((s) => !s)}
          className="text-xs opacity-60 hover:opacity-100 underline"
          aria-label="Toggle show URLs for debugging"
          title="Toggle show URLs for debugging"
        >
          {showUrls ? 'Hide URLs' : 'Show URLs'}
        </button>
      </div>
      <div className="grid gap-8 mt-12 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:shadow-lg hover:-translate-y-0.5"
          >
            <h2 className="text-2xl font-semibold mb-1">{plan.name}</h2>
            {plan.blurb && <p className="text-sm opacity-70 mb-4">{plan.blurb}</p>}
            <ul className="space-y-3">
              {plan.tiers.map((tier) => (
                <li key={tier.url} className="text-left">
                  <a
                    href={tier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-2 px-4 text-center rounded-lg border border-white/20 hover:bg-white/10 transition"
                  >
                    {tier.label}
                  </a>
                  {showUrls && (
                    <div className="text-[10px] opacity-60 break-all mt-1">{tier.url}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
