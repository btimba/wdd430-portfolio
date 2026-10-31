import SkillCard from '@/components/SkillCard';

export default function About() {
    const skills = [
        { name: "JavaScript",
            description: "A versatile programming language primarily used for web development.",
            category: "Programming Language" },
        { name: "React",
            description: "A JavaScript library for building user interfaces.",
            category: "Library" },
        { name: "Next.js",
            description: "A React framework for server-side rendering and static site generation.",
            category: "Framework" }
    ];
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-800">
        This about page shares more information about my background and work.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} typeface={skill} />
        ))}
      </div>
    </main>
  );
}