import { Suspense } from 'react';
import ProjectApiList from '@/components/ProjectApiList';
import ProjectSearch from '@/components/ProjectSearch';

interface ProjectsPageProps {
  searchParams: Promise<{
    query?: string | string[];
    page?: string | string[];
  }>;
}

function ProjectsSkeleton() {
  return (
    <main className="container mx-auto animate-pulse space-y-8 px-4 py-12" aria-busy="true">
      <section className="space-y-4 py-12 text-center" aria-hidden="true">
        <div className="mx-auto h-10 w-72 max-w-full rounded bg-slate-200" />
        <div className="mx-auto h-6 max-w-3xl rounded bg-slate-200" />
        <div className="mx-auto h-20 max-w-xl rounded bg-slate-200" />
      </section>
      <section className="grid gap-4 md:grid-cols-2" aria-hidden="true">
        {Array.from({ length: 4 }, (_, index) => (
          <article key={index} className="h-40 rounded border-l-4 border-blue-600 bg-slate-200" />
        ))}
      </section>
    </main>
  );
}

async function ProjectsContent({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const query = Array.isArray(params.query) ? params.query[0] ?? '' : params.query ?? '';
  const requestedPage = Array.isArray(params.page) ? params.page[0] : params.page;
  const pageNumber = Number(requestedPage ?? '1');
  const page = Number.isSafeInteger(pageNumber) && pageNumber > 0 ? pageNumber : 1;
  const endpointParams = new URLSearchParams({ page: String(page) });

  if (query.trim()) {
    endpointParams.set('query', query);
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Projects Overview</h1>
        <p className="text-lg text-gray-800">
          I&apos;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <Suspense
        fallback={
          <div
            aria-hidden="true"
            className="mx-auto mb-8 h-20 max-w-xl animate-pulse rounded bg-slate-200"
          />
        }
      >
        <ProjectSearch />
      </Suspense>
      <ProjectApiList endpoint={`/api/projects?${endpointParams.toString()}`} />
    </main>
  );
}

export default function Home(props: ProjectsPageProps) {
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <ProjectsContent searchParams={props.searchParams} />
    </Suspense>
  );
}
