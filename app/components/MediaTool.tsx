'use client';

import { useState } from 'react';

const API_BASE = 'https://api.devmatrixs.lat';

type Format = {
  label: string;
  type: 'video' | 'audio';
  url: string;
};

type MediaResult = {
  success: boolean;
  platform: 'tiktok' | 'youtube' | 'instagram';
  title: string;
  thumbnail: string;
  author: string;
  formats: Format[];
};

const PLATFORM_ICONS: Record<string, string> = {
  tiktok: '🎵',
  youtube: '▶️',
  instagram: '📸',
};

const PLATFORM_COLORS: Record<string, string> = {
  tiktok: 'from-pink-500 to-red-500',
  youtube: 'from-red-600 to-red-400',
  instagram: 'from-purple-500 to-pink-500',
};

const FORMAT_ICONS: Record<string, string> = {
  video: '🎬',
  audio: '🎵',
};

function detectPlatform(url: string): string | null {
  if (url.includes('tiktok.com') || url.includes('vm.tiktok.com') || url.includes('vt.tiktok.com')) return 'tiktok';
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('instagram.com')) return 'instagram';
  return null;
}

// Componente Slot de Google Ads
function AdSlot({ id, label }: { id: string; label?: string }) {
  return (
    <div
      id={id}
      className="w-full flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded-xl text-gray-300 text-xs py-6 my-4 select-none"
      aria-hidden="true"
    >
      {label || 'Publicidad'}
    </div>
  );
}

export default function MediaTool() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MediaResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);

  const platform = detectPlatform(url);

  const handleProcess = async () => {
    if (!url.trim()) return;
    if (!platform) {
      setError('Pega un link de TikTok, YouTube o Instagram.');
      return;
    }

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/api/download?url=${encodeURIComponent(url.trim())}`);
      const data: MediaResult = await res.json();

      if (!data.success) throw new Error('No se pudo procesar el contenido.');
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Error al conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (format: Format) => {
    setDownloading(format.label);
    try {
      const response = await fetch(format.url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${result?.title?.slice(0, 40) || 'media'}.${format.type === 'audio' ? 'mp3' : 'mp4'}`;
      a.click();
      URL.revokeObjectURL(blobUrl);
    } catch {
      // Si el blob falla por CORS, abre directo en nueva pestaña
      window.open(format.url, '_blank');
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto pt-8">

      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
          🌐
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          All-in-One Media Utility
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Herramienta de gestión y visualización de contenido multimedia para redes sociales.
        </p>
      </div>

      {/* Slot Google Ads — TOP */}
      <AdSlot id="ad-slot-top" label="Publicidad" />

      {/* Plataformas soportadas */}
      <div className="flex justify-center gap-3 mb-6">
        {['tiktok', 'youtube', 'instagram'].map((p) => (
          <span
            key={p}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
              platform === p ? PLATFORM_COLORS[p] : 'from-gray-300 to-gray-400'
            } transition-all duration-300`}
          >
            {PLATFORM_ICONS[p]} {p.charAt(0).toUpperCase() + p.slice(1)}
          </span>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pega el link del contenido:
        </label>
        <div className="flex gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError(null); setResult(null); }}
            onKeyDown={(e) => e.key === 'Enter' && handleProcess()}
            placeholder="https://www.tiktok.com/... o youtube.com/... o instagram.com/..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm transition-all"
          />
          <button
            onClick={handleProcess}
            disabled={loading || !url.trim()}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed font-medium text-sm flex items-center gap-2 whitespace-nowrap"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Procesando...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                Obtener
              </>
            )}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-3 flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {error}
          </div>
        )}
      </div>

      {/* Slot Google Ads — MEDIO (entre input y resultados) */}
      {!result && !loading && <AdSlot id="ad-slot-middle" label="Publicidad" />}

      {/* Resultados */}
      {result && (
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

          {/* Info del video */}
          <div className="flex gap-4 p-5 border-b border-gray-100">
            {result.thumbnail && (
              <div className="w-20 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium text-white bg-gradient-to-r ${PLATFORM_COLORS[result.platform]} mb-2`}>
                {PLATFORM_ICONS[result.platform]} {result.platform.charAt(0).toUpperCase() + result.platform.slice(1)}
              </span>
              <p className="text-gray-800 font-semibold text-sm leading-snug line-clamp-2 mb-1">
                {result.title}
              </p>
              {result.author && (
                <p className="text-gray-400 text-xs">@{result.author.replace('@', '')}</p>
              )}
            </div>
          </div>

          {/* Slot Google Ads — entre info y botones */}
          <div className="px-5">
            <AdSlot id="ad-slot-results" label="Publicidad" />
          </div>

          {/* Botones de descarga */}
          <div className="p-5 pt-0 space-y-2">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Formatos disponibles</p>
            {result.formats.map((format) => (
              <button
                key={format.label}
                onClick={() => handleDownload(format)}
                disabled={downloading === format.label}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all active:scale-95 ${
                  format.type === 'video'
                    ? 'border-blue-100 bg-blue-50 hover:bg-blue-100 text-blue-700'
                    : 'border-violet-100 bg-violet-50 hover:bg-violet-100 text-violet-700'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span className="flex items-center gap-2 font-medium text-sm">
                  {FORMAT_ICONS[format.type]}
                  {format.label}
                </span>
                {downloading === format.label ? (
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Slot Google Ads — BOTTOM */}
      <AdSlot id="ad-slot-bottom" label="Publicidad" />

      {/* Instrucciones */}
      <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 mt-2">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">¿Cómo usar?</p>
        <ol className="space-y-2">
          {[
            'Copia el link del contenido en TikTok, YouTube o Instagram',
            'Pégalo en el campo de arriba y presiona Obtener',
            'Elige el formato que prefieras (video o audio)',
            'Listo — el archivo se descarga automáticamente',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
