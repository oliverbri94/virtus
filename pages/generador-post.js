import { useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import Head from 'next/head';

const slides = [
  {
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    title: "Transforma tu Negocio con Inteligencia Artificial 🚀",
    text: "Automatiza procesos, optimiza tu infraestructura y descubre nuevas oportunidades con nuestras soluciones de IA."
  },
  {
    img: "https://images.unsplash.com/photo-1581090700227-4c4d1a3f3f3f?q=80&w=2070&auto=format&fit=crop",
    title: "Automatización de Procesos",
    text: "Reduce errores y libera tiempo al automatizar tareas repetitivas."
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    title: "Inteligencia Artificial Aplicada",
    text: "Analiza datos, predice comportamientos y mejora tu estrategia comercial."
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    title: "Optimización de Infraestructura",
    text: "Reduce costos y mejora el rendimiento con soluciones escalables."
  },
  {
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop",
    title: "Resultados Tangibles",
    text: "+40% eficiencia, -30% costos, +25% satisfacción del cliente."
  }
];

const SocialPostGenerator = () => {
  const postRefs = useRef([]);

  const onDownload = useCallback((index) => {
    const node = postRefs.current[index];
    if (!node) return;

    toPng(node, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `virtus-post-${index + 1}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Generador de Posts - VIRTUS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-[#0a0a14] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 space-y-10">
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              ref={(el) => (postRefs.current[index] = el)}
              className="w-full max-w-2xl aspect-square bg-virtus-dark shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-full w-full">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 sm:p-8 md:p-10">
                  <img src="/logo.png" alt="VIRTUS Logo" className="w-24 md:w-32 mb-4" />
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className="text-base sm:text-lg text-gray-200"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => onDownload(index)}
              className="mt-4 bg-virtus-blue hover:bg-virtus-blue-light text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
            >
              Descargar Post {index + 1}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SocialPostGenerator;