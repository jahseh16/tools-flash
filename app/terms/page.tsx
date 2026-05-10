import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Toolifast',
  description: 'Términos y condiciones de uso de Toolifast. Lee nuestras políticas antes de usar el sitio.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12">

          <h1 className="text-3xl font-bold text-gray-800 mb-2">Términos y Condiciones</h1>
          <p className="text-sm text-gray-400 mb-8">Última actualización: 10 de mayo de 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Aceptación de los términos</h2>
              <p>
                Al acceder y utilizar Toolifast (<strong>tools-flash.devmatrixs.lat</strong>), aceptas estar sujeto a estos Términos y Condiciones.
                Si no estás de acuerdo con alguno de estos términos, te pedimos que no uses el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Descripción del servicio</h2>
              <p>
                Toolifast es una plataforma de herramientas online gratuitas que incluye, entre otras:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Generador de estilos tipográficos</li>
                <li>Generador de caracteres Unicode especiales</li>
                <li>Conversor de imágenes a PDF</li>
                <li>Procesador y exportador de contenido multimedia</li>
                <li>Bloc de notas online</li>
                <li>Generador de nombres</li>
                <li>Calculadora de fechas</li>
                <li>Herramientas de inteligencia artificial</li>
              </ul>
              <p className="mt-2">Nos reservamos el derecho de modificar, suspender o discontinuar cualquier servicio en cualquier momento sin previo aviso.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Uso aceptable</h2>
              <p>Al usar Toolifast, aceptas que <strong>NO</strong> utilizarás el sitio para:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Violar leyes locales, nacionales o internacionales aplicables</li>
                <li>Infringir derechos de autor, marcas registradas u otros derechos de propiedad intelectual</li>
                <li>Procesar, distribuir o compartir contenido sin autorización del titular</li>
                <li>Sobrecargar, dañar o interrumpir el funcionamiento del sitio o sus servidores</li>
                <li>Realizar scraping masivo o uso automatizado sin autorización</li>
                <li>Cualquier actividad fraudulenta, engañosa o maliciosa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Propiedad intelectual</h2>
              <p>
                El diseño, código, textos, logotipos y demás elementos del sitio son propiedad de Toolifast y están protegidos por las leyes de propiedad intelectual.
                No está permitida su reproducción total o parcial sin autorización expresa.
              </p>
              <p className="mt-2">
                El contenido multimedia procesado a través de nuestras herramientas pertenece a sus respectivos autores y plataformas.
                Toolifast no reclama ningún derecho sobre dicho contenido.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Limitación de responsabilidad</h2>
              <p>
                Toolifast se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo.
                No nos hacemos responsables por:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Interrupciones del servicio o errores técnicos</li>
                <li>Pérdida de datos generados o procesados en el sitio</li>
                <li>Daños directos o indirectos derivados del uso del sitio</li>
                <li>Contenido de terceros procesado a través de nuestras herramientas</li>
                <li>Cambios en las plataformas externas que afecten la funcionalidad del sitio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Publicidad</h2>
              <p>
                Toolifast muestra anuncios proporcionados por Google AdSense u otras redes publicitarias.
                Estos anuncios ayudan a mantener el servicio gratuito para todos los usuarios.
                No somos responsables del contenido de los anuncios mostrados por terceros.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Enlaces a terceros</h2>
              <p>
                Nuestro sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para conveniencia del usuario.
                Toolifast no controla ni se responsabiliza del contenido, políticas de privacidad o prácticas de dichos sitios.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">8. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de actualizar estos Términos y Condiciones en cualquier momento.
                Las modificaciones entrarán en vigor inmediatamente tras su publicación.
                El uso continuado del sitio tras dichos cambios implica la aceptación de los nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">9. Ley aplicable</h2>
              <p>
                Estos términos se rigen por las leyes aplicables en el territorio donde opera el servicio.
                Cualquier disputa relacionada con el uso del sitio se resolverá mediante los mecanismos legales disponibles en dicha jurisdicción.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">10. Contacto</h2>
              <p>
                Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos a través de nuestro sitio web o por las redes sociales asociadas a Toolifast.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
