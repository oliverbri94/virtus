import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center bg-white/20 backdrop-blur-lg shadow-sm">
        {/* Logo de Virtus */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            {/* Aquí usamos la imagen que subiste */}
            <Image src="/logo.png" alt="Virtus Tech Consulting Logo" width={180} height={40} />
          </a>
        </Link>

        {/* Menú de Navegación para Escritorio */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#soluciones" legacyBehavior><a className="text-gray-800 hover:text-blue-600 transition-colors duration-300">Soluciones</a></Link>
          <Link href="#resultados" legacyBehavior><a className="text-gray-800 hover:text-blue-600 transition-colors duration-300">Resultados</a></Link>
          <Link href="#metodologia" legacyBehavior><a className="text-gray-800 hover:text-blue-600 transition-colors duration-300">Metodología</a></Link>
          <Link href="#contacto" legacyBehavior>
            <a className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg">
              Agendar Diagnóstico
            </a>
          </Link>
        </div>

        {/* Menú Hamburguesa para Móvil (Opcional por ahora) */}
        <div className="md:hidden">
          {/* Aquí iría el botón para abrir el menú en móviles */}
          <button className="text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;