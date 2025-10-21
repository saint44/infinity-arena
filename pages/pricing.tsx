// pages/pricing.tsx
import React from 'react';

type Tier = { label: string; url: string };
type Plan = { name: string; tiers: Tier[]; color?: string; blurb?: string };

const PLANS: Plan[] = [
  {
    name: 'Luxury AI Concierge',
    blurb: 'White-glove AI assistance for teams that demand premium.',
    // ✅ Correct mapping: Starter=$199, Pro=$499, Elite=$1200
    tiers: [
      { label: 'Starter — $199/mo', url: 'https://buy.stripe.com/cNi5kE2F30aKd1a0XlcWj0LO' },
      { label: 'Pro — $499/mo',     url: 'https://buy.stripe.com/3cI00kenL1eO5yI49xcWj0LP' },
      { label: 'Elite — $1,200/mo', url: 'https://buy.stripe.com/28EfZibbz5v42mwgWjcWj0LQ' },
    ],
    color: 'brand-primary',
  },
  {
    name: 'Pain-Point Solver',
    blurb: 'Pick a tier and we’ll kill your top bottlenecks every month.',
    // Keep tiers in ascending order
    tiers: [
      { label: 'Assessment — One-time', url: 'https://buy.stripe.com/00w9AU5Rf8Hg5yIaxVcWj0LU' },
      { label: 'Starter — $149/mo',     url: 'https://buy.stripe.com/bJe8wQ2F38HgbX60XlcWj0LS' },
      { label: 'Scale — $399/mo',       url: 'https://buy.stripe.com/eVqeVedjHcXw4uE49xcWj0LT' },
    ],
    color: 'brand-violet',
  },
  {
    name: 'Agree 2 Bond',
    blurb: 'Simple, structured client agreements with one-click checkout.',
    tiers: [
      { label: 'Standard',   url: 'https://buy.stripe.com/4gMdRagvT1eO9OY5dBcWj0LV' },
      { label: 'Premium',    url: 'https://buy.stripe.com/5kQ7sMenLaPo0eofSfcWj0LW' },
      { label: 'Enterprise', url: 'https://buy.stripe.com/00w4gA3J7cXw5yI35tcWj0LX' },
    ],
    color: 'brand-gold',
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-brand-ink text-white px-6 py-16">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-gold">Pricing</h1>
        <p className="text-lg opacity-80 mx-auto max-w-prose">
          Choose the plan that’s right for you. Each option includes access to the Infinity suite of AI-powered tools.
        </p>
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition
                       hover:shadow-lg hover:-translate-y-0.5"
          >
            <h2 className="text-2xl font-semibold mb-1">{plan.name}</h2>
            {plan.blurb && <p className="text-sm opacity-70 mb-4">{plan.blurb}</p>}

            <ul className="space-y-3">
              {plan.tiers.map((tier) => (
                <li key={tier.url}>
                  <a
                    href={tier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-2 px-4 text-center rounded-lg
                               border border-white/20 hover:bg-white/10 transition"
                  >
                    {tier.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

