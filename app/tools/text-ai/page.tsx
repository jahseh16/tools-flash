import type { Metadata } from 'next';
import TextAI from '@/app/components/TextAI';

export const metadata: Metadata = {
  title: 'Chat con Inteligencia Artificial Gratis Online',
  description:
    'Chatea gratis con inteligencia artificial avanzada sin registro. Haz preguntas, pide ayuda con tareas, redacción y más.',
  keywords: [
    'chat con ia gratis',
    'chatbot gratis online',
    'inteligencia artificial chat',
    'ia para tareas gratis',
  ],
};

export default function TextAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8 px-4 max-w-6xl mx-auto">
      <TextAI />
    </div>
  );
}
