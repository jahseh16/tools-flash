import type { Metadata } from 'next';
import MediaTool from '@/app/components/MediaTool';

export const metadata: Metadata = {
  title: 'All-in-One Media Utility — Gestión de Contenido Multimedia',
  description:
    'Herramienta de gestión y visualización de contenido multimedia para redes sociales. Compatible con TikTok, YouTube e Instagram.',
  keywords: [
    'herramienta multimedia online',
    'gestión contenido redes sociales',
    'media utility online gratis',
    'procesar video online',
  ],
};

export default function MediaToolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-12 px-4 max-w-6xl mx-auto">
      <MediaTool />
    </div>
  );
}
