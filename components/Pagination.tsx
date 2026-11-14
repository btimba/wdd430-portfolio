'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageCount =
    Number.isSafeInteger(totalPages) && totalPages > 0 ? totalPages : 0;
  const requestedPage = Number(searchParams.get('page') ?? '1');
  const currentPage =
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, Math.max(pageCount, 1))
      : 1;

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(pageNumber));
    return `${pathname}?${params.toString()}`;
  }

  const previousDisabled = currentPage <= 1;
  const nextDisabled = pageCount === 0 || currentPage >= pageCount;

  return (
    <nav aria-label="Project pagination" className="mt-8 flex items-center justify-center gap-4">
      <Link
        href={createPageURL(Math.max(1, currentPage - 1))}
        aria-disabled={previousDisabled}
        tabIndex={previousDisabled ? -1 : undefined}
        className={`rounded border px-4 py-2 ${
          previousDisabled
            ? 'pointer-events-none border-slate-200 text-slate-400'
            : 'border-blue-600 text-blue-700 hover:bg-blue-50'
        }`}
      >
        Previous
      </Link>
      {pageCount > 0 && (
        <span aria-current="page" className="text-sm text-gray-700">
          Page {currentPage} of {pageCount}
        </span>
      )}
      <Link
        href={createPageURL(Math.min(currentPage + 1, Math.max(pageCount, 1)))}
        aria-disabled={nextDisabled}
        tabIndex={nextDisabled ? -1 : undefined}
        className={`rounded border px-4 py-2 ${
          nextDisabled
            ? 'pointer-events-none border-slate-200 text-slate-400'
            : 'border-blue-600 text-blue-700 hover:bg-blue-50'
        }`}
      >
        Next
      </Link>
    </nav>
  );
}
