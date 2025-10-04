
const roster = [
  { id: 'honey', name: 'Honey Core', status: 'idle' },
  { id: 'cloudrunner', name: 'CloudRunner', status: 'idle' },
  { id: 'autoheal', name: 'AutoHeal', status: 'running' },
];
export async function GET() {
  return Response.json({ agents: roster });
}
