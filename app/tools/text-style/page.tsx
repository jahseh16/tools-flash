import type { Metadata } from 'next';
import TextStyleGenerator from '@/app/components/TextStyleGenerator';

export const metadata: Metadata = {
  title: 'Generador de Letras Raras y Texto Estilizado',
  description:
    'Convierte tu texto normal a letras raras, estilizadas y decoradas gratis. Compatible con TikTok, Instagram, Free Fire y WhatsApp.',
  keywords: ['generador letras raras', 'texto estilizado', 'letras para tiktok', 'letras free fire'],
};

export default function TextStylePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8 px-4 max-w-6xl mx-auto">
      <TextStyleGenerator />
    </div>
  );
}
