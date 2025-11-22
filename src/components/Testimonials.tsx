import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Mariana S.",
        role: "Perdeu 4kg em 2 semanas",
        content: "Eu achava que era impossível tomar café sem açúcar. Com a troca #3 do guia, eu nem sinto falta mais. É bizarro como funciona rápido.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Carlos M.",
        role: "Viciado em chocolate",
        content: "A troca do 'Chocolate da TPM' salvou minha dieta. Eu comia uma barra inteira, agora como a versão do guia e fico satisfeito na hora.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Fernanda L.",
        role: "Nutricionista",
        content: "O que eu mais gostei é que não tem ingredientes caros. Tudo coisa que a gente já tem em casa ou acha fácil no mercado. Recomendo.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-brand-black">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-text">Quem aplicou, aprovou</h2>
                    <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto">
                        Veja o que acontece quando você para de lutar contra a biologia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-brand-surface p-6 md:p-8 rounded-3xl relative border border-gray-800"
                        >
                            <Quote className="absolute top-4 md:top-6 right-4 md:right-6 w-6 md:w-8 h-6 md:h-8 text-brand-gold/20" />

                            <div className="flex items-center mb-4 md:mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                                ))}
                            </div>

                            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed italic">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-brand-gold object-cover"
                                />
                                <div>
                                    <p className="font-bold text-white text-sm md:text-base">{t.name}</p>
                                    <p className="text-xs md:text-sm text-brand-gold">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
