import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-600">Toolifast</span>. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
