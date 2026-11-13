'use client';

import { useEffect, useState } from 'react';
import ProjectList from './ProjectList';

interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string | null;
}

function isProject(value: unknown): value is Project {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    typeof value.id === 'number' &&
    'title' in value &&
    typeof value.title === 'string' &&
    'description' in value &&
    typeof value.description === 'string' &&
    'type' in value &&
    (value.type === 'opensource' || value.type === 'school') &&
    'technologies' in value &&
    Array.isArray(value.technologies) &&
    value.technologies.every((technology) => typeof technology === 'string') &&
    (!('link' in value) || typeof value.link === 'string' || value.link === null)
  );
}

export default function ProjectApiList({ endpoint }: { endpoint: string }) {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        const response = await fetch(endpoint, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Project request failed with status ${response.status}.`);
        }

        const data: unknown = await response.json();
        if (!Array.isArray(data) || !data.every(isProject)) {
          throw new Error('The projects API returned invalid data.');
        }

        setProjects(data);
      } catch (error) {
        if (controller.signal.aborted) return;
        setError(error instanceof Error ? error.message : 'Unable to load projects.');
      }
    }

    void loadProjects();
    return () => controller.abort();
  }, [endpoint]);

  if (error) {
    return <p role="alert" className="text-red-700">{error}</p>;
  }

  if (projects === null) {
    return <p role="status">Loading projects...</p>;
  }

  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return <ProjectList projects={projects} />;
}
