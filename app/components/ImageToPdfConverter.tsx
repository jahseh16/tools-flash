
'use client';

import { useState, useRef } from 'react';

export default function ImageToPdfConverter() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setSelectedFiles(imageFiles);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(files => files.filter((_, i) => i !== index));
  };

  const convertToPdf = async () => {
    if (selectedFiles.length === 0) return;

    setIsConverting(true);
    
    try {
      // Dynamic import for client-side only
      const { default: jsPDF } = await import('jspdf');
      
      const pdf = new jsPDF();
      let isFirstPage = true;

      for (const file of selectedFiles) {
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        await new Promise((resolve, reject) => {
          img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0);

            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            
            if (!isFirstPage) {
              pdf.addPage();
            }
            
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            const imgWidth = img.width;
            const imgHeight = img.height;
            
            let width = pdfWidth;
            let height = (imgHeight * pdfWidth) / imgWidth;
            
            if (height > pdfHeight) {
              height = pdfHeight;
              width = (imgWidth * pdfHeight) / imgHeight;
            }
            
            const x = (pdfWidth - width) / 2;
            const y = (pdfHeight - height) / 2;
            
            pdf.addImage(imgData, 'JPEG', x, y, width, height);
            isFirstPage = false;
            resolve(void 0);
          };
          
          img.onerror = reject;
          img.src = URL.createObjectURL(file);
        });
      }

      pdf.save('imagenes-convertidas.pdf');
    } catch (error) {
      console.error('Error al convertir:', error);
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl mx-auto mb-4">
            📄
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Convertidor de Imagen a PDF</h2>
          <p className="text-gray-600">Convierte tus imágenes a un archivo PDF</p>
        </div>

        <div className="space-y-6">
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="!rounded-button w-full border-2 border-dashed border-gray-300 hover:border-green-500 p-8 text-center transition-colors"
            >
              <div className="flex flex-col items-center space-y-2">
                <i className="ri-upload-cloud-line w-8 h-8 flex items-center justify-center text-gray-400"></i>
                <p className="text-lg font-medium text-gray-700">Seleccionar imágenes</p>
                <p className="text-sm text-gray-500">PNG, JPG, JPEG, GIF</p>
              </div>
            </button>
          </div>

          {selectedFiles.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Imágenes seleccionadas ({selectedFiles.length})
              </h3>
              
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <i className="ri-image-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                      <div>
                        <p className="text-sm font-medium text-gray-700">{file.name}</p>
                        <p className="text-xs text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="!rounded-button text-red-600 hover:bg-red-50 p-1"
                    >
                      <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={convertToPdf}
                disabled={isConverting}
                className="!rounded-button w-full bg-green-600 text-white py-3 hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isConverting ? (
                  <>
                    <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>
                    <span>Convirtiendo...</span>
                  </>
                ) : (
                  <>
                    <i className="ri-file-pdf-line w-4 h-4 flex items-center justify-center"></i>
                    <span>Convertir a PDF</span>
                  </>
                )}
              </button>
            </div>
          )}

          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-start space-x-2">
              <i className="ri-information-line w-4 h-4 flex items-center justify-center text-green-600 mt-0.5"></i>
              <div className="text-sm text-green-800">
                <p className="font-medium mb-1">Características:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Convierte múltiples imágenes a la vez</li>
                  <li>Mantiene la calidad de las imágenes</li>
                  <li>Descarga automática del PDF</li>
                  <li>Totalmente gratis y sin límites</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
