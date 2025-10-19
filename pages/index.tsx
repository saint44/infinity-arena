import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-ink text-white">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold">Infinity Arena</h1>
        <p className="text-lg opacity-80">
          Welcome to Infinity Arena – your single pane of glass for projects, agents, dashboards and deployments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <Link href="/(dashboard)" className="block rounded-2xl border border-primary/20 bg-primary/20 hover:bg-primary/30 p-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
              <p className="text-sm opacity-70">Overview & metrics</p>
            </div>
          </Link>
          <Link href="/(dashboard)#factory" className="block rounded-2xl border border-violet/20 bg-violet/20 hover:bg-violet/30 p-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Project Factory</h2>
              <p className="text-sm opacity-70">Create & manage projects</p>
            </div>
          </Link>
          <Link href="/(dashboard)#agents" className="block rounded-2xl border border-cyan/20 bg-cyan/20 hover:bg-cyan/30 p-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Agent Roster</h2>
              <p className="text-sm opacity-70">Manage your AI agents</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
