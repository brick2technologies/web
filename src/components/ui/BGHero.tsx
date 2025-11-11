import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import Modal from '../WorkModal';

interface Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
}

interface Mouse {
  x: number | null;
  y: number | null;
  radius: number;
}

class ParticleClass implements Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(
    x: number,
    y: number,
    directionX: number,
    directionY: number,
    size: number,
    color: string,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.canvas = canvas;
    this.ctx = ctx;
  }

  draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  update(mouse: Mouse): void {
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > this.canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    // Mouse collision detection
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius + this.size) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        this.x -= forceDirectionX * force * 5;
        this.y -= forceDirectionY * force * 5;
      }
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

const AetherFlowHero: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: ParticleClass[] = [];
    const mouse: Mouse = { x: null, y: null, radius: 200 };

    const init = (): void => {
      particles = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (window.innerWidth - size * 2) + size * 2;
        const y = Math.random() * (window.innerHeight - size * 2) + size * 2;
        const directionX = Math.random() * 0.4 - 0.2;
        const directionY = Math.random() * 0.4 - 0.2;
        const color = 'rgba(20, 44, 76, 0.7)'; // #142C4C with transparency
        particles.push(new ParticleClass(x, y, directionX, directionY, size, color, canvas, ctx));
      }
    };

    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const connect = (): void => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y);

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;

            const dx_mouse_a = particles[a].x - (mouse.x ?? 0);
            const dy_mouse_a = particles[a].y - (mouse.y ?? 0);
            const distance_mouse_a = Math.sqrt(dx_mouse_a * dx_mouse_a + dy_mouse_a * dy_mouse_a);

            if (mouse.x && distance_mouse_a < mouse.radius) {
              ctx.strokeStyle = `rgba(20, 44, 76, ${opacityValue})`;
            } else {
              ctx.strokeStyle = `rgba(20, 44, 76, ${opacityValue * 0.6})`;
            }

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = (): void => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse);
      }
      connect();
    };

    const handleMouseMove = (event: MouseEvent): void => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = (): void => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

        <div className="relative z-10 text-center p-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#142C4C]/10 border border-[#142C4C]/20 mb-6 backdrop-blur-sm animate-fade-in">
            <Code2 className="h-4 w-4 text-[#142C4C]" />
            <span className="text-sm font-medium text-[#142C4C]">Professional Web Development</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-[#142C4C] animate-fade-in-up">
            Build Your Digital
            <br />
            <span className="bg-gradient-to-r from-[#142C4C] to-[#2563eb] bg-clip-text text-transparent">
              Presence
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 animate-fade-in-delayed leading-relaxed">
            Transform your ideas into stunning, high-performance websites. We create responsive, modern web solutions that
            drive results and captivate your audience.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 animate-fade-in-more-delayed">
            {/* 🚀 Start Project Button */}
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#142C4C] text-white font-semibold rounded-lg shadow-lg hover:bg-[#1a3a5f] transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              onClick={() => setOpenModal(true)}>
              Start Your Project
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* ✨ View Work Button */}
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#142C4C] font-semibold rounded-lg border-2 border-[#142C4C] hover:bg-[#142C4C] hover:text-white transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              onClick={() => {
                const section = document.getElementById("work");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
              View Our Work
            </button>
          </div>


          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-last">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#142C4C] mb-2">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#142C4C] mb-2">30+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#142C4C] mb-2">95%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fadeIn 0.8s ease-in-out 0.5s forwards;
          opacity: 0;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-in-out 0.7s forwards;
          opacity: 0;
        }
        .animate-fade-in-more-delayed {
          animation: fadeIn 0.8s ease-in-out 0.9s forwards;
          opacity: 0;
        }
        .animate-fade-in-last {
          animation: fadeIn 0.8s ease-in-out 1.1s forwards;
          opacity: 0;
        }
      `}</style>
      </div>
      {openModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40">
          <div className="relative w-full max-w-lg rounded-2xl bg-white text-gray-900 p-8 shadow-2xl">
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      )}


    </>
  );
};

export default AetherFlowHero;