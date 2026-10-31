import ProjectList from '@/components/ProjectList';
const projects = [
  {
       title: 'Book and Movie Explorer',
    description: 'A web app that fetches and displays book and movie information.',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/btimba/Book-Movie-Explorer'
  },
  {
    title: 'StudyBuddies',
    description: 'A web app for connecting students with study partners.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/btimba/wdd430-portfolio'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-800">
          I&apos;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
