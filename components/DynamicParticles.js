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
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.3,
              },
            },
          },
        },
        particles: {
          color: { value: "#3395FF" },
          links: {
            color: "#3395FF",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "bottom-right",
            enable: true,
            outModes: { default: "out" },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
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