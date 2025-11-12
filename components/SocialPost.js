
import React, { forwardRef } from 'next/image';
import Image from 'next/image';

const SocialPost = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-[1080px] h-[1080px] bg-[#0a0a14] p-16 flex flex-col justify-between font-['Poppins']"
    >
      {/* Encabezado con logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Virtus Logo" width={50} height={50} />
        <span className="ml-4 text-2xl font-semibold text-white">Virtus Tech Consulting</span>
      </div>

      {/* Contenido Principal */}
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        {/* Imagen de fondo */}
        <div className="w-full h-1/2 relative mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
            alt="Automatización de Procesos"
            layout="fill"
            objectFit="cover"
          />
           <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Mensaje de Marketing */}
        <h1 className="text-5xl font-bold text-white leading-tight max-w-4xl">
          Transforma tu negocio con la automatización inteligente. 🚀
        </h1>
        <p className="text-3xl text-gray-300 mt-6 max-w-3xl">
          Menos tareas repetitivas, más innovación y eficiencia.
        </p>
      </div>

      {/* Pie de post */}
      <div className="text-center">
        <p className="text-2xl font-bold text-virtus-blue">www.virtus.com.ec</p>
        <p className="text-xl text-gray-400 mt-2">#Automatizacion #InteligenciaArtificial #RPA #TransformacionDigital</p>
      </div>
    </div>
  );
});

SocialPost.displayName = 'SocialPost';

export default SocialPost;
