import React, { useRef, useCallback } from 'react'; // Re-importamos useRef y useCallback
// import Head from 'next/head'; // 'next/head' sigue comentado para evitar el error de build

// --- CONTENIDO DE POSTS POR INDUSTRIA (VISUAL MEJORADO) ---

const slides = [
  {
    // Gradiente llamativo para Retail
    bgColor: "bg-gradient-to-br from-blue-400 to-indigo-600", 
    icon: "🛒",
    title: "Retail y E-commerce: La Revolución IA",
    text: "Optimiza inventarios, personaliza la experiencia de compra y predice tendencias de consumo con IA y automatización."
  },
  {
    // Gradiente para Salud
    bgColor: "bg-gradient-to-br from-green-400 to-teal-600",
    icon: "🩺",
    title: "Sector Salud: Innovación que Salva Vidas",
    text: "Implementa análisis predictivos para diagnósticos, automatiza la gestión de pacientes y optimiza la telemedicina."
  },
  {
    // Gradiente sobrio para Finanzas
    bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
    icon: "🏦",
    title: "Finanzas y Banca: Seguridad y Eficiencia",
    text: "Automatización (RPA) para compliance, IA para detección de fraude y análisis de riesgo en tiempo real."
  },
  {
    // Gradiente cálido para Industria
    bgColor: "bg-gradient-to-br from-yellow-500 to-orange-600",
    icon: "🏭",
    title: "Industria 4.0: La Fábrica Inteligente",
    text: "Sensores IoT para mantenimiento predictivo, IA para control de calidad y automatización de la cadena de suministro."
  },
  {
    // Gradiente fresco para Logística
    bgColor: "bg-gradient-to-br from-sky-400 to-cyan-500",
    icon: "🚚",
    title: "Logística: Rutas Optimizadas con IA",
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
            
            {/* --- DIV VISUAL MEJORADO --- */}
            <div
              ref={(el) => (postRefs.current[index] = el)} 
              // Aplicamos el gradiente de fondo y eliminamos la imagen
              className={`w-full max-w-2xl aspect-square shadow-lg rounded-lg overflow-hidden ${slide.bgColor} p-6 sm:p-8 md:p-10 flex flex-col justify-between text-white`}
            >
              {/* Sección superior: Logo */}
              <div className="w-full">
                <img 
                  src="/logo.png" 
                  alt="VIRTUS Logo" 
                  className="w-24 md:w-32 bg-white p-2 rounded-lg shadow-md" 
                />
              </div>

              {/* Sección central: Contenido (Icono + Texto) */}
              <div className="flex-grow flex flex-col justify-center items-start">
                <div className="text-6xl sm:text-7xl md:text-8xl mb-5">
                  {slide.icon}
                </div>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {slide.title}
                </h2>
                <p
                  className="text-base sm:text-lg text-gray-100" // Aclarado para mejor lectura
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {slide.text}
                </p>
              </div>
              
              {/* Espaciador inferior para equilibrar el diseño */}
              <div className="h-10"></div>
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