import type { Metadata } from 'next';
import InvisibleTextGenerator from '@/app/components/InvisibleTextGenerator';

export const metadata: Metadata = {
  title: 'Generador de Texto Invisible Online Gratis',
  description:
    'Genera caracteres y texto invisible gratis para usar en nombres de juegos, WhatsApp, TikTok e Instagram. Copia y pega en segundos.',
  keywords: ['texto invisible', 'caracteres invisibles', 'espacio invisible', 'nombre invisible free fire'],
};

export default function InvisibleTextPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8 px-4 max-w-6xl mx-auto">
      <InvisibleTextGenerator />
    </div>
  );
}
