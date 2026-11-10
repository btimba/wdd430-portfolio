
import ProjectApiList from '@/components/ProjectApiList';

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">School Projects</h1>
        <p className="text-lg text-gray-800">
         My school projects showcase my learning journey in web development. Here are some of the projects I have worked on during my studies.
        </p>
      </section>
      <ProjectApiList endpoint="/api/projects?type=school" />
    </main>
  );
}