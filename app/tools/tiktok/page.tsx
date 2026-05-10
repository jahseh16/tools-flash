import type { Metadata } from 'next';
import TiktokDownloader from '@/app/components/TiktokDownloader';

export const metadata: Metadata = {
  title: 'Descargador de TikTok Sin Marca de Agua Gratis',
  description:
    'Descarga videos de TikTok gratis y sin marca de agua en segundos. Solo pega el link, sin registro ni aplicaciones.',
  keywords: [
    'descargar tiktok sin marca de agua',
    'bajar videos tiktok gratis',
    'tiktok downloader',
    'descargar tiktok mp4',
  ],
};

export default function TiktokPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8 px-4 max-w-6xl mx-auto">
      <TiktokDownloader />
    </div>
  );
}
