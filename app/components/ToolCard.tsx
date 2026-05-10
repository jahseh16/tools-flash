
'use client';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
}

export default function ToolCard({ tool, onClick }: ToolCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 group"
      onClick={onClick}
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
        {tool.icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
        {tool.title}
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed">
        {tool.description}
      </p>
      
      <div className="flex items-center justify-between mt-4">
        <span className="text-blue-600 font-medium text-sm">Usar herramienta</span>
        <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center text-blue-600 group-hover:translate-x-1 transition-transform"></i>
      </div>
    </div>
  );
}
