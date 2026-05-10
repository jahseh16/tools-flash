
'use client';

import { useState } from 'react';

export default function TiktokDownloader() {
  const [url, setUrl] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadInfo, setDownloadInfo] = useState<any>(null);

  const isValidTikTokUrl = (url: string) => {
    const patterns = [
      /^https?:\/\/(www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+/,
      /^https?:\/\/vm\.tiktok\.com\/[\w]+/,
      /^https?:\/\/vt\.tiktok\.com\/[\w]+/,
      /^https?:\/\/www\.tiktok\.com\/t\/[\w]+/
    ];
    return patterns.some(pattern => pattern.test(url));
  };

  const extractVideoId = (url: string) => {
    const match = url.match(/\/video\/(\d+)/);
    return match ? match[1] : null;
  };

  const downloadVideo = async () => {
    if (!url || !isValidTikTokUrl(url)) {
      alert('Por favor ingresa una URL válida de TikTok');
      return;
    }

    setIsDownloading(true);
    setDownloadInfo(null);

    try {
      // Simulated download process (in real implementation, you'd use a backend service)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const videoId = extractVideoId(url) || Date.now().toString();
      
      // Mock video information
      const mockInfo = {
        title: 'Video de TikTok',
        author: '@usuario_tiktok',
        duration: '00:15',
        views: '123.4K',
        likes: '12.3K',
        thumbnail: `https://readdy.ai/api/search-image?query=tiktok%20video%20screenshot%20mobile%20app%20interface&width=300&height=400&seq=tiktok-${videoId}&orientation=portrait`,
        downloadUrl: '#' // In real implementation, this would be the actual download link
      };
      
      setDownloadInfo(mockInfo);
    } catch (error) {
      console.error('Error al descargar:', error);
      alert('Error al procesar el video. Inténtalo de nuevo.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownload = () => {
    // In real implementation, this would trigger the actual download
    alert('En una implementación real, aquí se descargaría el video');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-2xl mx-auto mb-4">
            📱
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Descargar Videos de TikTok</h2>
          <p className="text-gray-600">Descarga videos de TikTok sin marca de agua</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL del video de TikTok:
            </label>
            <div className="flex space-x-2">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.tiktok.com/@usuario/video/..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                onClick={downloadVideo}
                disabled={isDownloading || !url}
                className="!rounded-button bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center space-x-2"
              >
                {isDownloading ? (
                  <>
                    <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>
                    <span>Procesando...</span>
                  </>
                ) : (
                  <>
                    <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
                    <span>Obtener</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {downloadInfo && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Información del video:</h3>
              
              <div className="flex space-x-4">
                <div className="w-24 h-32 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={downloadInfo.thumbnail}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Título:</p>
                    <p className="text-gray-600">{downloadInfo.title}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700">Autor:</p>
                    <p className="text-gray-600">{downloadInfo.author}</p>
                  </div>
                  
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>⏱️ {downloadInfo.duration}</span>
                    <span>👁️ {downloadInfo.views}</span>
                    <span>❤️ {downloadInfo.likes}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleDownload}
                className="!rounded-button w-full bg-red-600 text-white py-3 hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 mt-4"
              >
                <i className="ri-download-2-line w-4 h-4 flex items-center justify-center"></i>
                <span>Descargar Video</span>
              </button>
            </div>
          )}

          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <div className="flex items-start space-x-2">
              <i className="ri-information-line w-4 h-4 flex items-center justify-center text-red-600 mt-0.5"></i>
              <div className="text-sm text-red-800">
                <p className="font-medium mb-1">Instrucciones:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Copia la URL del video de TikTok</li>
                  <li>Pégala en el campo de arriba</li>
                  <li>Haz clic en "Obtener" para procesar</li>
                  <li>Descarga el video sin marca de agua</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
