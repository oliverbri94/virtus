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

  return (
    <nav className={`fixed w-full z-30 top-0 text-white transition-all duration-300 ${scrolled || isOpen ? 'bg-virtus-dark shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <a className="cursor-pointer">
                <img src="/logo.png" alt="Virtus Tech Consulting Logo" className="h-12 w-auto" />
              </a>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {router.pathname === '/' ? (
              navLinks.map(link => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-virtus-blue-light cursor-pointer transition-colors"
                >
                  {link.text}
                </ScrollLink>
              ))
            ) : (
               <>
                <Link href="/#solutions" legacyBehavior><a className="hover:text-virtus-blue-light cursor-pointer transition-colors">{t('nav.solutions')}</a></Link>
                <Link href="/#why-virtus" legacyBehavior><a className="hover:text-virtus-blue-light cursor-pointer transition-colors">{t('nav.whyVirtus')}</a></Link>
               </>
            )}
             <Link href="/blog" legacyBehavior>
                <a className="hover:text-virtus-blue-light cursor-pointer transition-colors">{t('nav.blog')}</a>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
             <ScrollLink to="contact" smooth={true} duration={500} offset={-80} spy={true}>
                <button className="bg-virtus-blue hover:bg-virtus-blue-light text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                    {t('nav.cta')}
                </button>
            </ScrollLink>
            <div className="flex border border-white rounded-full">
              <button onClick={() => changeLanguage('es')} className={`px-3 py-1 text-sm rounded-l-full ${i18n.language === 'es' ? 'bg-white text-virtus-dark' : ''}`}>ES</button>
              <button onClick={() => changeLanguage('en')} className={`px-3 py-1 text-sm rounded-r-full ${i18n.language === 'en' ? 'bg-white text-virtus-dark' : ''}`}>EN</button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-virtus-dark`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {router.pathname === '/' ? (
                navLinks.map(link => (
                    <ScrollLink key={link.to} to={link.to} smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)} className="block text-white hover:text-virtus-blue-light px-3 py-2 rounded-md text-base font-medium">{link.text}</ScrollLink>
                ))
            ) : (
                <>
                  <Link href="/#solutions" legacyBehavior><a onClick={() => setIsOpen(false)} className="block text-white hover:text-virtus-blue-light px-3 py-2 rounded-md text-base font-medium">{t('nav.solutions')}</a></Link>
                  <Link href="/#why-virtus" legacyBehavior><a onClick={() => setIsOpen(false)} className="block text-white hover:text-virtus-blue-light px-3 py-2 rounded-md text-base font-medium">{t('nav.whyVirtus')}</a></Link>
                </>
            )}
            <Link href="/blog" legacyBehavior><a onClick={() => setIsOpen(false)} className="block text-white hover:text-virtus-blue-light px-3 py-2 rounded-md text-base font-medium">{t('nav.blog')}</a></Link>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)} className="block text-white hover:text-virtus-blue-light px-3 py-2 rounded-md text-base font-medium">{t('nav.cta')}</ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

