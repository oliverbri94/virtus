
import { useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import Head from 'next/head';

const SocialPostGenerator = () => {
  const postRef = useRef(null);

  const onDownload = useCallback(() => {
    if (postRef.current === null) {
      return;
    }

    toPng(postRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'virtus-post.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postRef]);

  return (
    <>
      <Head>
        <title>Generador de Posts - VIRTUS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-[#0a0a14] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div
          ref={postRef}
          className="w-full max-w-2xl aspect-square bg-virtus-dark shadow-lg rounded-lg overflow-hidden"
        >
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
              alt="Automatización Tecnológica"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 sm:p-8 md:p-10">
              <img src="/logo.png" alt="VIRTUS Logo" className="w-24 md:w-32 mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Transforma tu Negocio con Inteligencia Artificial
              </h2>
              <p className="text-base sm:text-lg text-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Automatiza procesos, optimiza tu infraestructura y descubre nuevas oportunidades con nuestras soluciones de IA.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={onDownload}
          className="mt-6 sm:mt-8 bg-virtus-blue hover:bg-virtus-blue-light text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out"
        >
          Descargar Post
        </button>
      </div>
    </>
  );
};

export default SocialPostGenerator;
