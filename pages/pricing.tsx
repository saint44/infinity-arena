// pages/pricing.tsx
import React from 'react';

const PLANS = [
  {
    name: 'Luxury AI Concierge',
    tiers: [
      { label: '$199', url: 'https://buy.stripe.com/cNi5kE2F30aKd1a0XlcWj0LO' },
      { label: '$499', url: 'https://buy.stripe.com/3cI00kenL1eO5yI49xcWj0LP' },
      { label: '$1 200', url: 'https://buy.stripe.com/28EfZibbz5v42mwgWjcWj0LQ' },
    ],
  },
  {
    name: 'Pain-Point Solver',
    tiers: [
      { label: '$49', url: 'https://buy.stripe.com/00w9AUa7vg9I0eo8pNcWj0LR' },
      { label: '$149', url: 'https://buy.stripe.com/bJe8wQ2F38HgbX60XlcWj0LS' },
      { label: '$399', url: 'https://buy.stripe.com/eVqeVedjHcXw5yI35tcWj0LX' },
      { label: 'Enterprise', url: 'https://buy.stripe.com/00w9AU5Rf8Hg5yIaxVcWj0LU' },
    ],
  },
  {
    name: 'Agree 2 Bond',
    tiers: [
      { label: 'Standard', url: 'https://buy.stripe.com/4gMdRagvT1eO9OY5dBcWj0LV' },
      { label: 'Premium', url: 'https://buy.stripe.com/5kQ7sMenLaPo0eofSfcWj0LW' },
      { label: 'Enterprise', url: 'https://buy.stripe.com/00w4gA3J7cXw5yI35tcWj0LX' },
    ],
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen px-6 py-12 bg-brand-ink text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-gold">Pricing</h1>
        <p className="text-lg opacity-80 mx-auto max-w-prose">
          Choose the plan that’s right for you. Each option includes access to the Infinity suite of AI-powered tools.
        </p>
      </div>
      <div className="grid gap-8 mt-12 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div key={plan.name} className="bg-brand-indigo/10 border border-brand-indigo/20 rounded-2xl p-6 flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <ul className="space-y-3">
              {plan.tiers.map((tier) => (
                <li key={tier.url}>
                  <a
                    href={tier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-2 px-4 text-center border border-brand-gold/20 rounded-lg hover:bg-brand-gold/20 transition"
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
