export default function Loading() {

  return (
    <main className="container mx-auto px-4 py-12" aria-busy="true">
      <p role="status" className="sr-only">
        Loading open source projects...
      </p>

      <section
        className="animate-pulse py-12 text-center"
        aria-hidden="true"
      >
        <div className="mx-auto mb-4 h-10 w-72 max-w-full rounded bg-slate-200" />
        <div className="mx-auto h-6 max-w-3xl rounded bg-slate-200" />
        <div className="mx-auto mt-2 h-6 w-5/6 max-w-2xl rounded bg-slate-200" />
      </section>

      <section
        className="grid gap-4 md:grid-cols-2"
        aria-hidden="true"
      >
        {Array.from({ length: 4 }, (_, index) => (
          <article
            key={index}
            className="animate-pulse rounded border-l-4 border-blue-600 bg-white p-4 shadow-sm"
          >
            <div className="mb-3 h-7 w-2/3 rounded bg-slate-200" />
            <div className="mb-2 h-4 w-full rounded bg-slate-200" />
            <div className="mb-4 h-4 w-5/6 rounded bg-slate-200" />
            <div className="h-4 w-4/5 rounded bg-slate-200" />
            <div className="mt-4 h-4 w-28 rounded bg-blue-200" />
          </article>
        ))}
      </section>
    </main>
  );
}
