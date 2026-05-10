
'use client';

interface HeaderProps {
  onHome: () => void;
  currentTool: string;
}

export default function Header({ onHome, currentTool }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onHome}
            className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            <span className="text-blue-600">Tooli</span>
            <span>fast</span>
          </button>
          
          {currentTool !== 'home' && (
            <button
              onClick={onHome}
              className="!rounded-button bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors text-sm"
            >
              <i className="ri-home-line w-4 h-4 flex items-center justify-center"></i>
              Inicio
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
