// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  // Icono para redes sociales (un componente simple dentro del footer)
  const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-virtus-blue transition-colors duration-300">
      {children}
    </a>
  );

  return (
    <footer className="bg-white/40 backdrop-blur-lg text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Columna 1: Logo y Descripción */}
          <div class="md:col-span-2">
            <Image src="/logo.png" alt="Virtus Tech Consulting Logo" width={180} height={40} />
            <p class="mt-4 text-gray-700 max-w-sm">
              Potenciamos la transformación digital con soluciones tecnológicas integrales para líderes de la industria.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><Link href="#soluciones" legacyBehavior><a className="text-gray-700 hover:text-virtus-blue">Soluciones</a></Link></li>
              <li><Link href="#resultados" legacyBehavior><a className="text-gray-700 hover:text-virtus-blue">Resultados</a></Link></li>
              <li><Link href="#metodologia" legacyBehavior><a className="text-gray-700 hover:text-virtus-blue">Metodología</a></Link></li>
              <li><Link href="#contacto" legacyBehavior><a className="text-gray-700 hover:text-virtus-blue">Contacto</a></Link></li>
            </ul>
          </div>

          {/* Columna 3: Conéctate */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Conéctate</h4>
            <div className="flex space-x-4">
              <SocialIcon href="#"> {/* Reemplaza # con tu URL de LinkedIn */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
              </SocialIcon>
              {/* Agrega más íconos para otras redes si lo deseas */}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Virtus Tech Consulting. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;