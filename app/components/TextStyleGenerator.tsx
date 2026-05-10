
'use client';

import { useState } from 'react';

export default function TextStyleGenerator() {
  const [inputText, setInputText] = useState('');
  const [copiedStyle, setCopiedStyle] = useState<string | null>(null);

  const textStyles = [
    { name: 'Negrita', transform: (text: string) => text.replace(/./g, (char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code - 65 + 0x1D400);
      if (code >= 97 && code <= 122) return String.fromCharCode(code - 97 + 0x1D41A);
      return char;
    })},
    { name: 'Cursiva', transform: (text: string) => text.replace(/./g, (char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code - 65 + 0x1D434);
      if (code >= 97 && code <= 122) return String.fromCharCode(code - 97 + 0x1D44E);
      return char;
    })},
    { name: 'Gótica', transform: (text: string) => text.replace(/./g, (char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code - 65 + 0x1D56C);
      if (code >= 97 && code <= 122) return String.fromCharCode(code - 97 + 0x1D586);
      return char;
    })},
    { name: 'Monospace', transform: (text: string) => text.replace(/./g, (char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code - 65 + 0x1D670);
      if (code >= 97 && code <= 122) return String.fromCharCode(code - 97 + 0x1D68A);
      return char;
    })},
    { name: 'Círculos', transform: (text: string) => text.replace(/./g, (char) => {
      const circles = 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ';
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return circles[code - 65];
      if (code >= 97 && code <= 122) return circles[code - 97 + 26];
      return char;
    })},
    { name: 'Cuadrados', transform: (text: string) => text.replace(/./g, (char) => {
      const squares = '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉';
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return squares[code - 65];
      if (code >= 97 && code <= 122) return squares[code - 97];
      return char;
    })}
  ];

  const copyToClipboard = async (text: string, styleName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStyle(styleName);
      setTimeout(() => setCopiedStyle(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl mx-auto mb-4">
            🎨
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Generador de Letras Raras</h2>
          <p className="text-gray-600">Convierte tu texto a letras estilizadas para redes sociales</p>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Escribe tu texto:
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe aquí tu texto..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            rows={3}
            maxLength={200}
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {inputText.length}/200
          </div>
        </div>

        {inputText && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Estilos disponibles:</h3>
            
            {textStyles.map((style) => {
              const transformedText = style.transform(inputText);
              return (
                <div key={style.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{style.name}</span>
                    <button
                      onClick={() => copyToClipboard(transformedText, style.name)}
                      className="!rounded-button bg-purple-600 text-white px-3 py-1 text-sm hover:bg-purple-700 transition-colors flex items-center space-x-1"
                    >
                      <i className="ri-file-copy-line w-3 h-3 flex items-center justify-center"></i>
                      <span>{copiedStyle === style.name ? 'Copiado' : 'Copiar'}</span>
                    </button>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200 font-mono text-lg">
                    {transformedText}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!inputText && (
          <div className="text-center text-gray-500 py-8">
            <i className="ri-edit-line w-12 h-12 flex items-center justify-center mx-auto mb-4 text-gray-400"></i>
            <p>Escribe algo arriba para ver los estilos disponibles</p>
          </div>
        )}
      </div>
    </div>
  );
}
