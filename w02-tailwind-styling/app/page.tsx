import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 text-center dark:bg-black">
      <main className="flex flex-col items-center gap-6 py-8">
        <Image
          src="/Ym-view.webp"
          alt="Ym-view"
          width={250}
          height={250}
          priority
          className="h-[250px] w-[250px] rounded-full object-cover object-center"
        />

        <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200">
          Tailwind CSS Practice
        </h1>

        <p className="w-full max-w-xl rounded-md bg-slate-800 p-3 text-xl leading-relaxed text-gray-300">
          Tailwind CSS is a utility-first CSS framework.
        </p>
      </main>
    </div>

  );
}
