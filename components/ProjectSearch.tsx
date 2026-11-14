'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function ProjectSearch() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') ?? '');

  const updateSearchParams = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const normalizedTerm = term.trim();

    if (normalizedTerm) {
      params.set('query', normalizedTerm);
    } else {
      params.delete('query');
    }

    params.set('page', '1');
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  function handleChange(value: string) {
    setSearchTerm(value);
    updateSearchParams(value);
  }

  return (
    <div className="mx-auto mb-8 max-w-xl">
      <label htmlFor="project-search" className="mb-2 block font-medium text-gray-900">
        Search projects
      </label>
      <input
        id="project-search"
        type="search"
        value={searchTerm}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search projects..."
        className="w-full rounded border border-slate-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}