import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toolifast - Herramientas Online Gratis',
  description:
    'Herramientas online gratuitas: editor de texto, convertidor de archivos, calculadora de fechas, asistente de inteligencia artificial y más. Sin registro.',
};

const tools = [
  {
    id: 'text-style',
    href: '/tools/text-style',
    title: 'Generador de Letras',
    description: 'Transforma texto a estilos tipográficos especiales para perfiles y publicaciones',
    icon: '🔤',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'invisible-text',
    href: '/tools/invisible-text',
    title: 'Caracteres Especiales',
    description: 'Genera caracteres Unicode especiales para personalizar textos y nombres',
    icon: '✦',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'image-to-pdf',
    href: '/tools/image-to-pdf',
    title: 'Imagen a PDF',
    description: 'Convierte imágenes JPG o PNG a formato PDF fácilmente',
    icon: '📄',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'media-utility',
    href: '/tools/tiktok',
    title: 'Procesador Multimedia',
    description: 'Analiza y procesa contenido de plataformas de video. Exporta en diferentes formatos',
    icon: '🎞️',
    color: 'from-slate-500 to-gray-600',
  },
  {
    id: 'notepad',
    href: '/tools/notepad',
    title: 'Bloc de Notas',
    description: 'Editor de texto online ligero, rápido y sin registro',
    icon: '📝',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 'name-generator',
    href: '/tools/name-generator',
    title: 'Generador de Nombres',
    description: 'Crea nombres únicos y originales para perfiles, proyectos o personajes',
    icon: '⚡',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'date-calculator',
    href: '/tools/date-calculator',
    title: 'Calculadora de Fechas',
    description: 'Calcula diferencias entre fechas, días hábiles y tiempo restante',
    icon: '📅',
    color: 'from-teal-500 to-blue-500',
  },
  {
    id: 'image-ai',
    href: '/tools/image-ai',
    title: 'Generador de Imágenes',
    description: 'Crea imágenes a partir de descripciones de texto usando inteligencia artificial',
    icon: '🎨',
    color: 'from-rose-500 to-pink-500',
  },
  {
    id: 'text-ai',
    href: '/tools/text-ai',
    title: 'Asistente de Texto IA',
    description: 'Redacta, resume y mejora textos con ayuda de inteligencia artificial',
    icon: '🤖',
    color: 'from-violet-500 to-purple-500',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="pb-8 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">Tooli</span>fast
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Herramientas online útiles para el día a día. Rápido, fácil y gratuito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group block"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
              >
                {tool.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {tool.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-blue-600 font-medium text-sm">Abrir herramienta</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
