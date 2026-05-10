import type { Metadata } from 'next';
import ImageAI from '@/app/components/ImageAI';

export const metadata: Metadata = {
  title: 'Generador de Imágenes con IA Gratis Online',
  description:
    'Crea imágenes increíbles con inteligencia artificial gratis. Solo describe lo que quieres y la IA lo genera en segundos.',
  keywords: [
    'generador de imágenes IA gratis',
    'crear imágenes con inteligencia artificial',
    'ia generar imagen',
    'text to image gratis',
  ],
};

export default function ImageAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8 px-4 max-w-6xl mx-auto">
      <ImageAI />
    </div>
  );
}
