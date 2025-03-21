'use client';

import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Use loadSlim instead of loadFull for better performance 
    // and to avoid the checkVersion error
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
          },
          links: {
            color: "#808080",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        responsive: [
          {
            maxWidth: 768,
            options: {
              particles: {
                number: {
                  value: 40,
                },
                move: {
                  speed: 1.5,
                },
              },
            },
          },
          {
            maxWidth: 480,
            options: {
              particles: {
                number: {
                  value: 25,
                },
                move: {
                  speed: 1,
                },
              },
            },
          },
        ],
        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
};

export default ParticleBackground;