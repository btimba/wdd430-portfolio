import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string | null;
}

const PROJECTS_PER_PAGE = 6;

export async function getProjects(
  type?: string | null,
  query?: string | null,
  page?: number,
): Promise<Project[]> {
  const searchTerm = query?.trim() || null;
  const limit = page === undefined ? null : PROJECTS_PER_PAGE;
  const offset = page === undefined ? 0 : (page - 1) * PROJECTS_PER_PAGE;

  const { rows } = await sql<Project>`
    SELECT * FROM projects
    WHERE (${type ?? null}::text IS NULL OR type = ${type ?? null})
      AND (
        ${searchTerm}::text IS NULL
        OR title ILIKE '%' || ${searchTerm} || '%'
        OR description ILIKE '%' || ${searchTerm} || '%'
      )
    ORDER BY id
    LIMIT ${limit}
    OFFSET ${offset}
  `;
  return rows;
}


export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`SELECT * FROM projects WHERE id = ${id}`;
  return rows[0] ?? null;
}
