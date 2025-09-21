import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')" }}>
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-75"></div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
               <img src="/logo.png" alt="Virtus Logo" className="mx-auto h-24 mb-4"/>
              <h1 className="text-white font-semibold text-5xl">
                {t('hero.title')}
              </h1>
              <p className="mt-4 text-lg text-blue-200">
                {t('hero.subtitle')}
              </p>
               <a href="#contact" className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300">{t('hero.cta')}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
