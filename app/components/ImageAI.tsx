
'use client';

import { useState } from 'react';

export default function ImageAI() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageHistory, setImageHistory] = useState<Array<{prompt: string, url: string}>>([]);

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512&seed=${Date.now()}`;
      
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setGeneratedImage(imageUrl);
      setImageHistory(prev => [{ prompt, url: imageUrl }, ...prev.slice(0, 4)]);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = async () => {
    if (!generatedImage) return;
    
    try {
      const response = await fetch(generatedImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `toolifast-ai-image-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const promptSuggestions = [
    "Un gato espacial flotando en el cosmos",
    "Paisaje cyberpunk con luces neón",
    "Un dragón majestuoso en una montaña",
    "Ciudad futurista bajo el agua",
    "Un robot tocando guitarra",
    "Atardecer en un planeta alienígena"
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-2xl mx-auto mb-4">
            🎭
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Generador de Imágenes IA</h2>
          <p className="text-gray-600">Crea imágenes increíbles con inteligencia artificial</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe la imagen que quieres crear:
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ejemplo: Un paisaje de montañas al atardecer con un lago cristalino..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
              rows={3}
              maxLength={500}
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {prompt.length}/500
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sugerencias rápidas:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {promptSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(suggestion)}
                  className="!rounded-button bg-gray-100 text-gray-700 px-3 py-2 text-sm hover:bg-gray-200 transition-colors text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generateImage}
            disabled={isGenerating || !prompt.trim()}
            className="!rounded-button w-full bg-rose-600 text-white py-3 hover:bg-rose-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>
                <span>Generando imagen...</span>
              </>
            ) : (
              <>
                <i className="ri-image-add-line w-4 h-4 flex items-center justify-center"></i>
                <span>Generar Imagen</span>
              </>
            )}
          </button>

          {generatedImage && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Imagen generada:</h3>
                <p className="text-sm text-gray-600">"{prompt}"</p>
              </div>
              
              <div className="flex justify-center mb-4">
                <img
                  src={generatedImage}
                  alt="Imagen generada por IA"
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={downloadImage}
                  className="!rounded-button bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
                  <span>Descargar</span>
                </button>
                
                <button
                  onClick={() => setPrompt('')}
                  className="!rounded-button bg-gray-600 text-white px-4 py-2 hover:bg-gray-700 transition-colors flex items-center space-x-2"
                >
                  <i className="ri-refresh-line w-4 h-4 flex items-center justify-center"></i>
                  <span>Nueva imagen</span>
                </button>
              </div>
            </div>
          )}

          {imageHistory.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Historial de imágenes:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {imageHistory.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <img
                      src={item.url}
                      alt={item.prompt}
                      className="w-full h-24 object-cover rounded-lg mb-2 cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => {
                        setPrompt(item.prompt);
                        setGeneratedImage(item.url);
                      }}
                    />
                    <p className="text-xs text-gray-600 truncate">{item.prompt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
            <div className="flex items-start space-x-2">
              <i className="ri-magic-line w-4 h-4 flex items-center justify-center text-rose-600 mt-0.5"></i>
              <div className="text-sm text-rose-800">
                <p className="font-medium mb-1">Consejos para mejores resultados:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sé específico en tu descripción</li>
                  <li>Incluye detalles sobre colores, estilo y ambiente</li>
                  <li>Menciona la calidad: "alta calidad", "detallado", "realista"</li>
                  <li>Puedes especificar el estilo: "estilo anime", "fotografía", "pintura"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
