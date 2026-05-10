import type { Metadata } from 'next';
import NameGenerator from '@/app/components/NameGenerator';

export const metadata: Metadata = {
  title: 'Generador de Nombres para Juegos y Perfiles Gratis',
  description:
    'Crea nombres únicos, épicos y creativos para Free Fire, Fortnite, Minecraft, Instagram y más. Generador de nombres gratis online.',
  keywords: [
    'generador de nombres para juegos',
    'nombres para free fire',
    'nombres épicos gaming',
    'nombres creativos instagram',
  ],
};

export default function NameGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8 px-4 max-w-6xl mx-auto">
      <NameGenerator />
    </div>
  );
}
