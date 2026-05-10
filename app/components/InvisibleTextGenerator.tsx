
'use client';

import { useState } from 'react';

export default function InvisibleTextGenerator() {
  const [length, setLength] = useState(5);
  const [copied, setCopied] = useState(false);

  const invisibleChars = [
    '\u200B', // Zero Width Space
    '\u200C', // Zero Width Non-Joiner
    '\u200D', // Zero Width Joiner
    '\u2060', // Word Joiner
    '\u00A0', // Non-Breaking Space
  ];

  const generateInvisibleText = () => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += invisibleChars[Math.floor(Math.random() * invisibleChars.length)];
    }
    return result;
  };

  const copyToClipboard = async () => {
    try {
      const invisibleText = generateInvisibleText();
      await navigator.clipboard.writeText(invisibleText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const presetLengths = [1, 3, 5, 10, 20, 50];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl mx-auto mb-4">
            👻
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Generador de Texto Invisible</h2>
          <p className="text-gray-600">Genera caracteres invisibles para nombres o mensajes</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cantidad de caracteres invisibles:
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>1</span>
              <span className="font-medium">{length}</span>
              <span>100</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Presets rápidos:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {presetLengths.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setLength(preset)}
                  className={`!rounded-button px-3 py-2 text-sm font-medium transition-colors ${
                    length === preset
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Texto invisible generado:</span>
              <span className="text-xs text-gray-500">{length} caracteres</span>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200 min-h-[40px] flex items-center">
              <span className="text-gray-400 text-sm">
                [{length} caracteres invisibles aquí]
              </span>
            </div>
          </div>

          <button
            onClick={copyToClipboard}
            className="!rounded-button w-full bg-blue-600 text-white py-3 hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <i className="ri-file-copy-line w-4 h-4 flex items-center justify-center"></i>
            <span>{copied ? 'Copiado al portapapeles' : 'Copiar texto invisible'}</span>
          </button>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-start space-x-2">
              <i className="ri-information-line w-4 h-4 flex items-center justify-center text-blue-600 mt-0.5"></i>
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">¿Cómo usar?</p>
                <p>Estos caracteres son completamente invisibles pero ocupan espacio. Úsalos para:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Nombres únicos en juegos</li>
                  <li>Espacios en nombres de usuario</li>
                  <li>Mensajes "vacíos" en chat</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
