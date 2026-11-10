import { getProjects } from '@/app/lib/projects-db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  return Response.json(getProjects(type));
}
