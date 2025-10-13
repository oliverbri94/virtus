// components/DynamicParticles.js
import Particles from "react-tsparticles";
// 1. CAMBIO IMPORTANTE: Importamos loadSlim desde el nuevo motor
import { loadSlim } from "tsparticles-slim"; 
import { useCallback } from "react";

const ParticleComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    // 2. CAMBIO IMPORTANTE: Le decimos que cargue el motor SLIM
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 250,
              size: 8,
              duration: 2,
              opacity: 0.8,
            },
          },
        },
        particles: {
          color: { value: ["#007BFF", "#3395FF", "#FFFFFF"] },
          links: {
            color: "#FFFFFF",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 100,
          },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleComponent;