
import { useRef, useCallback, useState } from 'react';
import { toPng } from 'html-to-image';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Transforma tu empresa con tecnología inteligente 🚀',
    text: 'Descubre cómo la automatización y la IA pueden llevar tu negocio al siguiente nivel.',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop',
  },
  {
    title: 'Automatización de Procesos',
    text: 'Libera a tu equipo de tareas repetitivas. Incrementa la eficiencia y reduce errores con nuestros bots inteligentes.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Inteligencia Artificial Aplicada',
    text: 'Toma decisiones más inteligentes con análisis predictivo y modelos de datos avanzados. La IA es tu mejor aliada.',
    imageUrl: '/case-study-1.png',
  },
  {
    title: 'Optimización de Infraestructura',
    text: 'Moderniza tu arquitectura tecnológica. Garantiza escalabilidad, seguridad y rendimiento con nuestras soluciones cloud.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Resultados Tangibles',
    text: 'Desde el ROI hasta la satisfacción del cliente, medimos cada impacto para asegurar tu éxito y crecimiento.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
  },
  {
    title: '¿Listo para empezar?',
    text: 'Contáctanos y descubre cómo VIRTUS puede ser el catalizador de tu transformación digital.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop',
  },
];

const SocialPostGenerator = () => {
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onDownload = useCallback(() => {
    const currentRef = slideRefs.current[activeIndex];
    if (currentRef === null) {
      return;
    }

    toPng(currentRef, { cacheBust: true, pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `virtus-post-${activeIndex + 1}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activeIndex]);

  return (
    <>
      <Head>
        <title>Generador de Posts - VIRTUS</title>
        <meta name="description" content="Crea y descarga posts para redes sociales sobre la transformación digital de tu empresa." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-[#0a0a14] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-2xl">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="rounded-lg"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={(el) => (slideRefs.current[index] = el)}
                  className="w-full aspect-square bg-virtus-dark shadow-lg overflow-hidden"
                >
                  <div className="relative h-full w-full">
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 sm:p-8 md:p-10">
                      <img src="/logo_black.png" alt="VIRTUS Logo" className="w-24 md:w-32 mb-4" />
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {slide.title}
                      </h2>
                      <p className="text-base sm:text-lg text-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {slide.text}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          onClick={onDownload}
          className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out"
        >
          Descargar Post Actual
        </button>
      </div>
    </>
  );
};

export default SocialPostGenerator;
