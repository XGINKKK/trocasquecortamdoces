import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Inject Vturb script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/2629bffa-d9c9-4600-9ac2-8702f005254d/players/6923b1715c8042a2b56fc09a/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    // Show button after 20 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 20000);

    return () => {
      document.head.removeChild(script);
      clearTimeout(timer);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black text-white px-4 py-20"
    >
      <ParticleBackground />

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 backdrop-blur-md border border-brand-red/30 text-brand-red font-bold text-sm mb-6 tracking-wide uppercase">
            <CheckCircle className="inline-block w-4 h-4 mr-1" /> Método Científico
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            O <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-darkRed">Truque de 2 Minutos</span> Para Cortar a Vontade de Doce
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Sem precisar de força de vontade. Descubra as <span className="font-bold text-white">21 Trocas Inteligentes</span> que enganam seu cérebro e salvam sua dieta.
          </p>

          {/* VSL Player */}
          <div className="w-full max-w-[800px] mx-auto mb-12 shadow-2xl rounded-xl overflow-hidden border border-white/10 bg-black">
            {/* @ts-ignore */}
            <vturb-smartplayer id="vid-6923b1715c8042a2b56fc09a" style={{ display: 'block', margin: '0 auto', width: '100%' }}></vturb-smartplayer>
          </div>

          {/* Delayed CTA Button */}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4 justify-center mb-8"
            >
              <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-12 py-6 text-xl group shadow-brand-red/50 shadow-lg bg-gradient-to-r from-brand-red to-brand-darkRed border-none animate-pulse-subtle">
                Quero Cortar a Vontade Agora
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          )}

          {/* Animated Arrow pointing down - visible on mobile */}
          <motion.div
            className="lg:hidden flex flex-col items-center gap-2 mt-8 w-full justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider">VEJA COMO FUNCIONA</span>
            <ChevronDown className="w-8 h-8 text-brand-gold" />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Down Arrow - Desktop version (bottom center) */}
      <motion.button
        onClick={scrollToNextSection}
        className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider group-hover:text-white transition-colors">VEJA COMO FUNCIONA</span>
        <ChevronDown className="w-8 h-8 text-brand-gold group-hover:text-white transition-colors" />
      </motion.button>
    </section>
  );
};

export default Hero;
