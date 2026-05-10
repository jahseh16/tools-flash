import type { Metadata } from 'next';
import OnlineNotepad from '@/app/components/OnlineNotepad';

export const metadata: Metadata = {
  title: 'Bloc de Notas Online Gratis',
  description:
    'Escribe y guarda notas online gratis sin registro. Bloc de notas rápido que funciona desde el navegador en celular y PC.',
  keywords: ['bloc de notas online', 'notepad online gratis', 'escribir notas online', 'editor texto online'],
};

export default function NotepadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8 px-4 max-w-6xl mx-auto">
      <OnlineNotepad />
    </div>
  );
}
