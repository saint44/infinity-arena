
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-brand-ink text-white">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold">Infinity Arena</h1>
        <p className="opacity-80">Single pane of glass: projects, agents, dashboards — deploy and observe.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <a className="rounded-xl p-4 bg-[#121826] hover:bg-[#131a2a]" href="/(dashboard)">Dashboard</a>
          <a className="rounded-xl p-4 bg-[#121826] hover:bg-[#131a2a]" href="/(dashboard)#factory">Project Factory</a>
          <a className="rounded-xl p-4 bg-[#121826] hover:bg-[#131a2a]" href="/(dashboard)#agents">Agent Roster</a>
        </div>
      </div>
    </main>
  );
}
