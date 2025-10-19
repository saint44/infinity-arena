import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-ink text-white px-6 py-12">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-gold">Infinity Arena</h1>
        <p className="text-lg opacity-80 max-w-prose mx-auto">
          Single pane of glass: projects, agents, dashboards — deploy and observe.
        </p>
        <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/(dashboard)" className="block rounded-2xl p-6 transition bg-brand-primary/10 hover:bg-brand-primary/20 border border-brand-primary/20">
            <h3 className="text-xl font-semibold text-brand-primary mb-2">Dashboard</h3>
            <p className="text-sm opacity-80">View metrics and status.</p>
          </Link>
          <Link href="/(dashboard)#factory" className="block rounded-2xl p-6 transition bg-brand-violet/10 hover:bg-brand-violet/20 border border-brand-violet/20">
            <h3 className="text-xl font-semibold text-brand-violet mb-2">Project Factory</h3>
            <p className="text-sm opacity-80">Create and manage projects.</p>
          </Link>
          <Link href="/(dashboard)#agents" className="block rounded-2xl p-6 transition bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/20">
            <h3 className="text-xl font-semibold text-brand-cyan mb-2">Agent Roster</h3>
            <p className="text-sm opacity-80">Manage agents and roles.</p>
          </Link>
          <Link href="/(dashboard)#multiverse" className="block rounded-2xl p-6 transition bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/20">
            <h3 className="text-xl font-semibold text-brand-gold mb-2">Multiverse</h3>
            <p className="text-sm opacity-80">Explore cross-project synergy.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
