import type { Metadata } from 'next';
import DateCalculator from '@/app/components/DateCalculator';

export const metadata: Metadata = {
  title: 'Calculadora de Fechas Online Gratis',
  description:
    'Calcula la diferencia entre dos fechas, días restantes para eventos y más. Calculadora de fechas gratis y fácil de usar.',
  keywords: [
    'calculadora de fechas',
    'diferencia entre fechas',
    'días restantes',
    'calcular edad',
    'cuántos días faltan',
  ],
};

export default function DateCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-8 px-4 max-w-6xl mx-auto">
      <DateCalculator />
    </div>
  );
}
