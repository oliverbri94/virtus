import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroConPlexo = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
  <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#111827", // Coincide con bg-gray-900
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-down">
          Potenciamos su transformación digital
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
          Soluciones tecnológicas integrales para líderes de la industria.
        </p>
      </div>
    </section>
  );
};

export default HeroConPlexo;