import { NextRequest, NextResponse } from 'next/server';
import { getProjects } from '@/app/lib/projects-db';


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const query = searchParams.get('query');
  const pageParam = searchParams.get('page');
  const page = pageParam === null ? undefined : Number(pageParam);

  if (page !== undefined && (!Number.isSafeInteger(page) || page < 1)) {
    return NextResponse.json({ error: 'Invalid page number' }, { status: 400 });
  }

  const projects = await getProjects(type, query, page);
  return NextResponse.json(projects);
}
