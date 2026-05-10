import type { Metadata } from 'next';
import ImageToPdfConverter from '@/app/components/ImageToPdfConverter';

export const metadata: Metadata = {
  title: 'Convertir Imagen a PDF Gratis Online',
  description:
    'Convierte tus fotos e imágenes JPG, PNG a PDF gratis desde el navegador, sin instalar nada. Funciona en celular y PC.',
  keywords: ['convertir imagen a pdf', 'jpg a pdf gratis', 'png a pdf online', 'foto a pdf celular'],
};

export default function ImageToPdfPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8 px-4 max-w-6xl mx-auto">
      <ImageToPdfConverter />
    </div>
  );
}
