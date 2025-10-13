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
      style={{
        position: "absolute",
        zIndex: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      options={{
        background: { color: { value: "#111827" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleComponent;