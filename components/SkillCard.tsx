interface Typeface {
  name: string;
  description: string;
  category: string;
}

interface SkillCardProps {
  typeface: Typeface;
}

export default function SkillCard({ typeface }: SkillCardProps) {
  return (
    <div className="p-4 border-l-4 border-blue-600 bg-white rounded shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{typeface.name}</h3>
      <p className="text-gray-800 mb-3">{typeface.description}</p>
      <span className="text-sm text-gray-800">
        <strong>Category:</strong> {typeface.category}
      </span>
    </div>
  );
}