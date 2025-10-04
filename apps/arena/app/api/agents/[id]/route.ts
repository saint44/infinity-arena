
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { action } = await req.json().catch(() => ({ action: undefined }));
  return Response.json({ id: params.id, action: action ?? 'noop', ok: true, ts: Date.now() });
}
