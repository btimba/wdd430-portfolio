
import ProjectApiList from '@/components/ProjectApiList';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Open Source Projects</h1>
        <p className="text-lg text-gray-800">
          This section highlights my contributions to open source projects, showcasing my skills and dedication to the developer community.
        </p>
      </section>
      <ProjectApiList endpoint="/api/projects?type=opensource" />
    </main>
  );
}