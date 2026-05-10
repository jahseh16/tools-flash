
'use client';

import { useState } from 'react';

export default function DateCalculator() {
  const [selectedDate, setSelectedDate] = useState('');
  const [calculationResult, setCalculationResult] = useState<any>(null);
  const [calculationType, setCalculationType] = useState<'future' | 'age' | 'difference'>('future');

  const calculateDate = () => {
    if (!selectedDate) return;

    const inputDate = new Date(selectedDate);
    const today = new Date();
    
    const result: any = {
      inputDate: inputDate.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      dayOfWeek: inputDate.toLocaleDateString('es-ES', { weekday: 'long' })
    };

    switch (calculationType) {
      case 'future':
        const timeDiff = inputDate.getTime() - today.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        result.type = 'future';
        result.daysDiff = daysDiff;
        result.isToday = daysDiff === 0;
        result.isPast = daysDiff < 0;
        
        if (daysDiff > 0) {
          const months = Math.floor(daysDiff / 30);
          const weeks = Math.floor(daysDiff / 7);
          const years = Math.floor(daysDiff / 365);
          
          result.timeUnits = {
            years: years,
            months: months,
            weeks: weeks,
            days: daysDiff
          };
        }
        break;
        
      case 'age':
        const ageInMs = today.getTime() - inputDate.getTime();
        const ageInDays = Math.floor(ageInMs / (1000 * 3600 * 24));
        const ageInYears = Math.floor(ageInDays / 365);
        const ageInMonths = Math.floor(ageInDays / 30);
        
        result.type = 'age';
        result.age = {
          years: ageInYears,
          months: ageInMonths,
          days: ageInDays,
          hours: Math.floor(ageInMs / (1000 * 3600)),
          minutes: Math.floor(ageInMs / (1000 * 60))
        };
        break;
        
      case 'difference':
        const diffInMs = Math.abs(inputDate.getTime() - today.getTime());
        const diffInDays = Math.floor(diffInMs / (1000 * 3600 * 24));
        
        result.type = 'difference';
        result.difference = {
          days: diffInDays,
          weeks: Math.floor(diffInDays / 7),
          months: Math.floor(diffInDays / 30),
          years: Math.floor(diffInDays / 365)
        };
        break;
    }

    setCalculationResult(result);
  };

  const getQuickDates = () => {
    const today = new Date();
    const dates = [];
    
    // Today
    dates.push({ label: 'Hoy', date: today });
    
    // Tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    dates.push({ label: 'Mañana', date: tomorrow });
    
    // Next week
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    dates.push({ label: 'Próxima semana', date: nextWeek });
    
    // Next month
    const nextMonth = new Date(today);
    nextMonth.setMonth(today.getMonth() + 1);
    dates.push({ label: 'Próximo mes', date: nextMonth });
    
    return dates;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-2xl mx-auto mb-4">
            📅
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Calculadora de Fechas</h2>
          <p className="text-gray-600">Calcula fechas, edades y diferencias de tiempo</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Tipo de cálculo:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setCalculationType('future')}
                className={`!rounded-button p-3 text-sm transition-colors ${
                  calculationType === 'future'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tiempo restante
              </button>
              <button
                onClick={() => setCalculationType('age')}
                className={`!rounded-button p-3 text-sm transition-colors ${
                  calculationType === 'age'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Calcular edad
              </button>
              <button
                onClick={() => setCalculationType('difference')}
                className={`!rounded-button p-3 text-sm transition-colors ${
                  calculationType === 'difference'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Diferencia
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selecciona una fecha:
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fechas rápidas:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {getQuickDates().map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDate(formatDate(item.date))}
                  className="!rounded-button bg-gray-100 text-gray-700 px-3 py-2 text-sm hover:bg-gray-200 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={calculateDate}
            disabled={!selectedDate}
            className="!rounded-button w-full bg-teal-600 text-white py-3 hover:bg-teal-700 transition-colors disabled:opacity-50"
          >
            Calcular
          </button>

          {calculationResult && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {calculationResult.inputDate}
                </h3>
                <p className="text-gray-600 capitalize">{calculationResult.dayOfWeek}</p>
              </div>

              {calculationResult.type === 'future' && (
                <div className="space-y-2">
                  {calculationResult.isToday && (
                    <div className="text-center text-green-600 font-medium">
                      ¡Es hoy!
                    </div>
                  )}
                  {calculationResult.isPast && (
                    <div className="text-center text-red-600 font-medium">
                      Esta fecha ya pasó hace {Math.abs(calculationResult.daysDiff)} días
                    </div>
                  )}
                  {calculationResult.daysDiff > 0 && (
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-2xl font-bold text-teal-600">{calculationResult.timeUnits.days}</div>
                        <div className="text-sm text-gray-600">días</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-2xl font-bold text-teal-600">{calculationResult.timeUnits.weeks}</div>
                        <div className="text-sm text-gray-600">semanas</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-2xl font-bold text-teal-600">{calculationResult.timeUnits.months}</div>
                        <div className="text-sm text-gray-600">meses</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-2xl font-bold text-teal-600">{calculationResult.timeUnits.years}</div>
                        <div className="text-sm text-gray-600">años</div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {calculationResult.type === 'age' && (
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-2xl font-bold text-teal-600">{calculationResult.age.years}</div>
                    <div className="text-sm text-gray-600">años</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-2xl font-bold text-teal-600">{calculationResult.age.months}</div>
                    <div className="text-sm text-gray-600">meses</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-2xl font-bold text-teal-600">{calculationResult.age.days}</div>
                    <div className="text-sm text-gray-600">días</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-2xl font-bold text-teal-600">{calculationResult.age.hours}</div>
                    <div className="text-sm text-gray-600">horas</div>
                  </div>
                </div>
              )}

              {calculationResult.type === 'difference' && (
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-2xl font-bold text-teal-600">{calculationResult.difference.days}</div>
                    <div className="text-sm text-gray-600">días</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-2xl font-bold text-teal-600">{calculationResult.difference.weeks}</div>
                    <div className="text-sm text-gray-600">semanas</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-2xl font-bold text-teal-600">{calculationResult.difference.months}</div>
                    <div className="text-sm text-gray-600">meses</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-2xl font-bold text-teal-600">{calculationResult.difference.years}</div>
                    <div className="text-sm text-gray-600">años</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
