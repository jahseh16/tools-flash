
'use client';

import { useState } from 'react';
import ToolCard from './components/ToolCard';
import Header from './components/Header';
import TextStyleGenerator from './components/TextStyleGenerator';
import InvisibleTextGenerator from './components/InvisibleTextGenerator';
import ImageToPdfConverter from './components/ImageToPdfConverter';
import TiktokDownloader from './components/TiktokDownloader';
import OnlineNotepad from './components/OnlineNotepad';
import NameGenerator from './components/NameGenerator';
import DateCalculator from './components/DateCalculator';
import ImageAI from './components/ImageAI';
import TextAI from './components/TextAI';

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<string>('home');

  const tools = [
    {
      id: 'text-style',
      title: 'Generador de Letras Raras',
      description: 'Convierte texto normal a letras estilizadas para TikTok, Instagram, Free Fire',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'invisible-text',
      title: 'Texto Invisible',
      description: 'Genera caracteres invisibles para nombres o mensajes',
      icon: '👻',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'image-to-pdf',
      title: 'Imagen a PDF',
      description: 'Convierte imágenes a PDF desde tu celular o PC',
      icon: '📄',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'tiktok-downloader',
      title: 'Descargar TikTok',
      description: 'Descarga videos de TikTok sin API, 100% funcional',
      icon: '📱',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'notepad',
      title: 'Bloc de Notas',
      description: 'Editor de texto con almacenamiento local',
      icon: '📝',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'name-generator',
      title: 'Generador de Nombres',
      description: 'Crea nombres únicos y épicos para perfiles y juegos',
      icon: '⚡',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'date-calculator',
      title: 'Calculadora de Fechas',
      description: 'Calcula fechas, días y tiempo restante',
      icon: '📅',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 'image-ai',
      title: 'Generador de Imágenes IA',
      description: 'Crea imágenes increíbles con inteligencia artificial',
      icon: '🎭',
      color: 'from-rose-500 to-pink-500'
    },
    {
      id: 'text-ai',
      title: 'Chat con IA',
      description: 'Chatea con inteligencia artificial avanzada',
      icon: '🤖',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const renderTool = () => {
    switch (selectedTool) {
      case 'text-style':
        return <TextStyleGenerator />;
      case 'invisible-text':
        return <InvisibleTextGenerator />;
      case 'image-to-pdf':
        return <ImageToPdfConverter />;
      case 'tiktok-downloader':
        return <TiktokDownloader />;
      case 'notepad':
        return <OnlineNotepad />;
      case 'name-generator':
        return <NameGenerator />;
      case 'date-calculator':
        return <DateCalculator />;
      case 'image-ai':
        return <ImageAI />;
      case 'text-ai':
        return <TextAI />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onClick={() => setSelectedTool(tool.id)}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header 
        onHome={() => setSelectedTool('home')}
        currentTool={selectedTool}
      />
      
      <main className="pt-20 pb-8 px-4 max-w-6xl mx-auto">
        {selectedTool === 'home' && (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">Tooli</span>fast
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Herramientas online útiles para el día a día. Rápido, fácil y gratuito.
            </p>
          </div>
        )}
        
        {renderTool()}
      </main>
    </div>
  );
}
