import { getProjectById } from '@/app/lib/projects-db';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!/^[1-9]\d*$/.test(id)) {
    return Response.json({ error: 'Invalid project ID' }, { status: 400 });
  }

  const projectId = Number(id);
  if (!Number.isSafeInteger(projectId)) {
    return Response.json({ error: 'Invalid project ID' }, { status: 400 });
  }

  const project = getProjectById(projectId);
  if (!project) {
    return Response.json({ error: 'Project not found' }, { status: 404 });
  }

  return Response.json(project);
}
