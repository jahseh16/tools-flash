
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-md w-full">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-purple-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">¡Ups! Página no encontrada</h2>
          <p className="text-gray-600 mb-8">
            La página que buscas no existe o ha sido movida. No te preocupes, puedes volver al inicio.
          </p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/"
            className="inline-block w-full bg-purple-600 text-white py-3 px-6 !rounded-button font-semibold hover:bg-purple-700 transition-colors"
          >
            Volver al inicio
          </a>
          
          <div className="text-sm text-gray-500">
            <p>¿Necesitas ayuda? Regresa a <span className="font-semibold text-purple-600">Toolifast</span> y usa nuestras herramientas.</p>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              <i className="ri-chat-3-line text-purple-600 text-xl"></i>
            </div>
            <p className="text-xs text-gray-600">Chat IA</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              <i className="ri-image-line text-purple-600 text-xl"></i>
            </div>
            <p className="text-xs text-gray-600">Imágenes</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              <i className="ri-file-text-line text-purple-600 text-xl"></i>
            </div>
            <p className="text-xs text-gray-600">Textos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
