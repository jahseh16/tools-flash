import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Toolifast',
  description: 'Política de privacidad de Toolifast. Conoce cómo recopilamos y usamos tu información.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12">

          <h1 className="text-3xl font-bold text-gray-800 mb-2">Política de Privacidad</h1>
          <p className="text-sm text-gray-400 mb-8">Última actualización: 10 de mayo de 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Información general</h2>
              <p>
                Toolifast (<strong>toolifast.devmatrixs.lat</strong> / <strong>tools-flash.devmatrixs.lat</strong>) es un sitio web que ofrece herramientas online gratuitas.
                Esta Política de Privacidad describe qué información recopilamos, cómo la usamos y cómo la protegemos.
                Al usar nuestro sitio, aceptas los términos de esta política.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Información que recopilamos</h2>
              <p>No recopilamos información personal identificable de forma directa. Sin embargo, podemos recopilar de forma automática:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Dirección IP del dispositivo</li>
                <li>Tipo de navegador y sistema operativo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Fuente de tráfico (referencia)</li>
              </ul>
              <p className="mt-2">
                Esta información se recopila mediante cookies y herramientas de análisis web de terceros (como Google Analytics) con el único propósito de mejorar la experiencia del usuario.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Uso de cookies</h2>
              <p>Utilizamos cookies para:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar el tráfico del sitio web mediante Google Analytics</li>
                <li>Mostrar anuncios relevantes mediante Google AdSense</li>
                <li>Mejorar el rendimiento y la experiencia del sitio</li>
              </ul>
              <p className="mt-2">
                Puedes desactivar las cookies desde la configuración de tu navegador. Ten en cuenta que desactivarlas puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Google AdSense y publicidad</h2>
              <p>
                Toolifast utiliza Google AdSense para mostrar anuncios. Google puede usar cookies para mostrar anuncios personalizados basados en tus visitas anteriores a este y otros sitios web.
                Puedes optar por no recibir anuncios personalizados visitando{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  google.com/settings/ads
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Uso de la información</h2>
              <p>La información recopilada se utiliza exclusivamente para:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analizar y mejorar el funcionamiento del sitio</li>
                <li>Entender el comportamiento de los usuarios de forma agregada</li>
                <li>Mostrar publicidad contextual mediante Google AdSense</li>
              </ul>
              <p className="mt-2">No vendemos, alquilamos ni compartimos tu información personal con terceros.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Contenido de terceros</h2>
              <p>
                Algunas herramientas del sitio procesan URLs de plataformas externas (como TikTok, YouTube e Instagram).
                Toolifast no almacena ningún contenido multimedia procesado. Los archivos generados son temporales y se eliminan automáticamente del servidor.
                El uso de estas herramientas es responsabilidad del usuario, quien debe respetar los términos de servicio de las plataformas originales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Seguridad</h2>
              <p>
                Implementamos medidas técnicas razonables para proteger la información del sitio. Sin embargo, ninguna transmisión por Internet es 100% segura.
                No podemos garantizar la seguridad absoluta de la información transmitida a través de nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">8. Menores de edad</h2>
              <p>
                Toolifast no está dirigido a menores de 13 años. No recopilamos intencionalmente información de menores.
                Si eres padre o tutor y crees que tu hijo nos ha proporcionado información personal, contáctanos para eliminarla.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">9. Cambios en esta política</h2>
              <p>
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento.
                Los cambios entrarán en vigor inmediatamente después de su publicación en esta página.
                Te recomendamos revisar esta página periódicamente.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">10. Contacto</h2>
              <p>
                Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos a través de nuestro sitio web o enviando un mensaje a través de las redes sociales asociadas a Toolifast.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
