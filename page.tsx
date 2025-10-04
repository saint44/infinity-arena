
export default function Dashboard() {
  return (
    <section className="p-8 space-y-8">
      <h2 className="text-2xl font-semibold">Arena Dashboard (v1 skeleton)</h2>
      <div id="factory" className="space-y-3">
        <h3 className="text-xl font-semibold">Project Factory</h3>
        <p className="opacity-70">Blueprints: Static Site / Next App / Agent Worker (stubs)</p>
      </div>
      <div id="agents" className="space-y-3">
        <h3 className="text-xl font-semibold">Agent Roster</h3>
        <ul className="list-disc pl-6 opacity-90">
          <li>Honey Core — orchestrator (stub)</li>
          <li>CloudRunner — deploy/CI (stub)</li>
          <li>AutoHeal — heartbeat/auto-restart (stub)</li>
        </ul>
      </div>
      <div id="logs" className="space-y-3">
        <h3 className="text-xl font-semibold">Logs</h3>
        <pre className="bg-[#0f1222] p-4 rounded-xl overflow-auto">No recent errors.</pre>
      </div>
    </section>
  );
}
