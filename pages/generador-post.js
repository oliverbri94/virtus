import React, { useRef, useCallback } from 'react'; // Re-importamos useRef y useCallback
// import Head from 'next/head'; // 'next/head' sigue comentado para evitar el error de build

// --- CONTENIDO DE POSTS POR INDUSTRIA ---

const slides = [
  {
    img: "https://images.unsplash.com/photo-1561715274-a0f19c259f5d?q=80&w=1974&auto=format&fit=crop",
    title: "🛒 Retail y E-commerce: La Revolución IA",
    text: "Optimiza inventarios, personaliza la experiencia de compra y predice tendencias de consumo con IA y automatización."
  },
  {
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    title: "🩺 Sector Salud: Innovación que Salva Vidas",
    text: "Implementa análisis predictivos para diagnósticos, automatiza la gestión de pacientes y optimiza la telemedicina."
  },
  {
    img: "https://images.unsplash.com/photo-1554260570-e527a371a36e?q=80&w=2070&auto=format&fit=crop",
    title: "🏦 Finanzas y Banca: Seguridad y Eficiencia",
    text: "Automatización (RPA) para compliance, IA para detección de fraude y análisis de riesgo en tiempo real."
  },
  {
    img: "https://images.unsplash.com/photo-1629294814182-d4de7b3f1797?q=80&w=2070&auto=format&fit=crop",
    title: "🏭 Industria 4.0: La Fábrica Inteligente",
    text: "Sensores IoT para mantenimiento predictivo, IA para control de calidad y automatización de la cadena de suministro."
  },
  {
    img: "https://images.unsplash.com/photo-1577562433364-28b32115f038?q=80&w=2070&auto=format&fit=crop",
    title: "🚚 Logística: Rutas Optimizadas con IA",
    text: "Optimiza rutas de entrega, gestiona flotas de forma inteligente y automatiza tus almacenes para máxima eficiencia."
  }
];

// --- FIN DEL CONTENIDO ---


const SocialPostGenerator = () => {
  // Re-introducimos la ref para apuntar a los nodos del DOM
  const postRefs = useRef([]);

  // --- FUNCIÓN DE DESCARGA RESTAURADA ---
  // Ahora usa 'window.htmlToImage.toPng' para evitar el error de import.
  // Esto asume que la biblioteca 'html-to-image' está cargada globalmente.
  const onDownload = useCallback((index) => {
    // Verificamos si la biblioteca está disponible
    if (!window.htmlToImage) {
      console.error("html-to-image library is not loaded.");
      // Opcional: Mostrar un mensaje al usuario
      return;
    }

    const node = postRefs.current[index];
    if (!node) return;

    window.htmlToImage.toPng(node, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `virtus-post-industria-${index + 1}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // --- FIN DE LA FUNCIÓN DE DESCARGA ---

  return (
    <>
      {/* <Head>
        <title>Generador de Posts (Industrias) - VIRTUS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head> */} {/* Componente Head eliminado */}
      
      <div className="min-h-screen bg-[#0a0a14] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 space-y-10">
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              // Re-añadimos la ref para que la función de descarga sepa qué capturar
              ref={(el) => (postRefs.current[index] = el)} 
              className="w-full max-w-2xl aspect-square bg-virtus-dark shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-full w-full">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 sm:p-8 md:p-10">
                  
                  {/* --- MODIFICACIÓN DEL LOGO --- 
                      Se añade un fondo blanco, padding y esquinas redondeadas 
                      para asegurar la visibilidad sobre cualquier imagen.
                  */}
                  <img 
                    src="/logo.png" 
                    alt="VIRTUS Logo" 
                    className="w-24 md:w-32 mb-4 bg-white p-2 rounded-lg shadow-md" 
                  />
                  
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
            
            {/* --- BOTÓN DE DESCARGA RESTAURADO --- */}
            <button
              onClick={() => onDownload(index)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
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