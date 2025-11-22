import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Clock, CheckCircle, Brain, ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Continuous floating animation for mobile/all
  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear" as const
    }
  };

  const BookMockup = ({ className = "" }: { className?: string }) => (
    <motion.div
      className={`relative w-64 h-80 md:w-80 md:h-[480px] transform-style-3d mx-auto ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      animate={floatingAnimation}
    >
      {/* Book Spine */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-900 transform -translate-x-1/2 rotate-y-90 origin-right rounded-l-sm border-l border-white/10" />

      {/* Book Cover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-surface to-brand-black rounded-r-2xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-6 border-l-4 border-white/10 z-20 backface-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <Brain className="w-24 h-24 text-white" />
        </div>

        <div className="relative z-10 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-brand-gold uppercase">Guia Digital</span>
          <h2 className="text-3xl font-black text-white mt-2 leading-none">21<br /><span className="text-brand-red">TROCAS</span></h2>
          <p className="text-sm text-gray-400 mt-2 tracking-widest uppercase">Que Cortam a Vontade</p>
        </div>

        <div className="mt-8 relative">
          <div className="w-16 h-16 bg-brand-red/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-md border border-brand-red/30">
            <CheckCircle className="w-8 h-8 text-brand-red" />
          </div>
        </div>
      </div>

      {/* Pages Effect */}
      <div className="absolute top-2 bottom-2 right-2 w-4 bg-white rounded-r-md shadow-inner transform translate-z-[-10px]" />
      <div className="absolute top-3 bottom-3 right-3 w-3 bg-gray-100 rounded-r-md shadow-inner transform translate-z-[-20px]" />

      {/* Glow Effect */}
      <div className="absolute top-4 bottom-0 left-4 right-[-20px] bg-brand-red/20 filter blur-3xl transform translate-z-[-50px] rounded-full" />
    </motion.div>
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black text-white px-4 py-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ParticleBackground />

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 backdrop-blur-md border border-brand-red/30 text-brand-red font-bold text-sm mb-6 tracking-wide uppercase">
            <CheckCircle className="inline-block w-4 h-4 mr-1" /> Método Científico
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            O <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-darkRed">Truque de 2 Minutos</span> Para Cortar a Vontade de Doce
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Sem precisar de força de vontade. Descubra as <span className="font-bold text-white">21 Trocas Inteligentes</span> que enganam seu cérebro e salvam sua dieta.
          </p>

          {/* Mobile Book Position (Visible only on mobile/tablet, hidden on large screens) */}
          <div className="lg:hidden mb-12 flex justify-center perspective-1000">
            <BookMockup />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
            <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto group shadow-brand-red/50 shadow-lg bg-gradient-to-r from-brand-red to-brand-darkRed border-none">
              Quero Cortar a Vontade Agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center text-sm text-gray-400">
              <Clock className="w-4 h-4 mr-2 text-brand-red" />
              Leitura de 2 minutos
            </div>
          </div>

          {/* Animated Arrow pointing down - visible on mobile */}
          <motion.div
            className="lg:hidden flex flex-col items-center gap-2 mt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider">Veja como funciona</span>
            <ChevronDown className="w-8 h-8 text-brand-gold" />
          </motion.div>
        </motion.div>

        {/* Desktop Book Position (Hidden on mobile, visible on large screens) */}
        <div className="hidden lg:flex justify-center perspective-1000">
          <BookMockup />
        </div>
      </div>

      {/* Animated Down Arrow - Desktop version (bottom center) */}
      <motion.button
        onClick={scrollToNextSection}
        className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider group-hover:text-white transition-colors">Role para baixo</span>
        <div className="flex flex-col items-center">
          <ChevronDown className="w-6 h-6 text-brand-gold group-hover:text-white transition-colors" />
          <ChevronDown className="w-6 h-6 text-brand-gold group-hover:text-white transition-colors -mt-3" />
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;
