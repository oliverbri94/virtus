import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const navLinks = [
    { to: "solutions", text: t('nav.solutions') },
    { to: "why-virtus", text: t('nav.whyVirtus') },
    { to: "case-studies", text: t('nav.caseStudies') },
    { to: "methodology", text: t('nav.methodology') },
  ];

  const renderNavLinks = (isMobile = false) => {
    const linkClass = isMobile 
      ? "block text-white hover:text-virtus-blue-light px-3 py-2 rounded-md text-base font-medium" 
      : "hover:text-virtus-blue-light cursor-pointer transition-colors";

    if (router.pathname === '/') {
      return navLinks.map(link => (
        <ScrollLink
          key={link.to}
          to={link.to}
          smooth={true}
          duration={500}
          offset={-80}
          className={linkClass}
          onClick={() => isMobile && setIsOpen(false)}
        >
          {link.text}
        </ScrollLink>
      ));
    } else {
      return navLinks.map(link => (
        <Link key={link.to} href={`/#${link.to}`} legacyBehavior>
          <a className={linkClass} onClick={() => isMobile && setIsOpen(false)}>
            {link.text}
          </a>
        </Link>
      ));
    }
  };

  const CtaButton = ({ isMobile = false }) => {
    const buttonClass = isMobile
      ? "block text-white text-center w-full bg-virtus-blue hover:bg-virtus-blue-light font-bold py-2 px-6 rounded-full transition-colors duration-300 mt-4"
      : "bg-virtus-blue hover:bg-virtus-blue-light text-white font-bold py-2 px-6 rounded-full transition-colors duration-300";

    if (router.pathname === '/') {
      return (
        <ScrollLink to="contact" smooth={true} duration={500} offset={-80} spy={true} onClick={() => isMobile && setIsOpen(false)}>
          <button className={buttonClass}>{t('nav.cta')}</button>
        </ScrollLink>
      );
    } else {
      return (
        <Link href="/#contact" legacyBehavior>
          <a className={buttonClass} onClick={() => isMobile && setIsOpen(false)}>{t('nav.cta')}</a>
        </Link>
      );
    }
  };

  return (
    <nav className={`fixed w-full z-30 top-0 text-white transition-all duration-300 ${scrolled || isOpen ? 'bg-virtus-dark shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <a className="cursor-pointer" onClick={() => setIsOpen(false)}>
                {/* --- ¡AQUÍ ESTÁ LA MAGIA! Le damos al logo su propio fondo blanco --- */}
                <div className="bg-white p-2 rounded-md shadow-sm">
                  <img src="/logo.png" alt="Virtus Tech Consulting Logo" className="h-10 w-auto" />
                </div>
              </a>
            </Link>
          </div>

          {/* Menú de Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {renderNavLinks()}
            <Link href="/blog" legacyBehavior>
              <a className="hover:text-virtus-blue-light cursor-pointer transition-colors">{t('nav.blog')}</a>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <CtaButton />
            <div className="flex border border-white rounded-full">
              <button onClick={() => changeLanguage('es')} className={`px-3 py-1 text-sm rounded-l-full ${i18n.language === 'es' ? 'bg-white text-virtus-dark' : ''}`}>ES</button>
              <button onClick={() => changeLanguage('en')} className={`px-3 py-1 text-sm rounded-r-full ${i18n.language === 'en' ? 'bg-white text-virtus-dark' : ''}`}>EN</button>
            </div>
          </div>
          
          {/* Botón de Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú Móvil */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-virtus-dark`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {renderNavLinks(true)}
          <Link href="/blog" legacyBehavior>
            <a onClick={() => setIsOpen(false)} className="block text-white hover:text-virtus-blue-light px-3 py-2 rounded-md text-base font-medium">{t('nav.blog')}</a>
          </Link>
          <CtaButton isMobile={true} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

