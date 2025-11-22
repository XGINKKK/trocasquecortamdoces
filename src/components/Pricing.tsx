import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Info, Clock, Flame } from 'lucide-react';
import { Button } from './Button';
import DownsellPopup from './DownsellPopup';

const Pricing: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleBasicClick = () => {
        setIsPopupOpen(true);
    };

    const handleAcceptDiscount = () => {
        setIsPopupOpen(false);
        window.location.href = "https://www.ggcheckout.com/checkout/v2/XrkcNcyFJ9STMclXnBqf";
    };

    const handleDeclineDiscount = () => {
        setIsPopupOpen(false);
        window.location.href = "https://www.ggcheckout.com/checkout/v2/yJHc1za9rgiJdJn9Ub4v";
    };

    return (
        <section className="py-20 bg-brand-black" id="pricing">
            <div className="container mx-auto max-w-5xl px-4">
                {/* Urgency Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 bg-gradient-to-r from-brand-red to-brand-darkRed p-4 rounded-2xl text-center border-2 border-brand-red/30"
                >
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <Flame className="w-5 h-5 text-white animate-pulse" />
                        <p className="text-white font-bold text-sm md:text-base">
                            <span className="hidden md:inline">⚡ Oferta por Tempo Limitado: </span>
                            Apenas <span className="text-yellow-300 text-lg">7 vagas</span> restantes neste preço!
                        </p>
                        <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4 text-yellow-300" />
                            <span className="text-yellow-300 font-mono font-bold">{formatTime(timeLeft)}</span>
                        </div>
                    </div>
                </motion.div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-text">Escolha Como Você Quer Começar</h2>
                    <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                        O objetivo é que dinheiro não seja uma desculpa para você continuar sofrendo com a compulsão.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:items-stretch">
                    {/* Basic Plan */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-brand-surface rounded-3xl p-6 md:p-8 shadow-xl border border-gray-800 flex flex-col order-1 md:order-2"
                    >
                        <div className="mb-6 text-center md:text-left">
                            <h3 className="text-xl font-bold text-brand-muted uppercase tracking-wider">Manual de Emergência</h3>
                            <p className="text-sm text-gray-500 mt-2">Para quem quer apenas apagar o incêndio.</p>
                        </div>

                        <div className="mb-8 text-center md:text-left">
                            <div className="flex flex-col items-center md:items-start gap-2">
                                <div className="flex items-end gap-3">
                                    <span className="text-5xl md:text-6xl font-extrabold text-white leading-none">R$ 1,99</span>
                                </div>
                                <span className="text-lg text-gray-400 line-through">de R$ 19,90</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-3">Pagamento Único</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow text-left">
                            <li className="flex items-center">
                                <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                                <span className="text-gray-300">Guia Digital: 21 Trocas Inteligentes</span>
                            </li>
                        </ul>

                        <Button variant="primary" fullWidth onClick={handleBasicClick} className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border-gray-600">
                            Quero o Manual
                        </Button>
                    </motion.div>

                    {/* Complete Plan */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-brand-surface rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-brand-red relative flex flex-col md:transform md:-translate-y-4 order-2 md:order-1"
                    >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center whitespace-nowrap">
                            <Star className="w-4 h-4 mr-1 fill-current" /> ESCOLHA DA MAIORIA
                        </div>

                        <div className="mb-6 mt-4 text-center md:text-left">
                            <h3 className="text-xl font-bold text-brand-red uppercase tracking-wider">Protocolo Corta-Vontade 360º</h3>
                            <p className="text-sm text-brand-muted mt-2">A solução definitiva para dominar a mente e o paladar.</p>
                        </div>

                        <div className="mb-8 text-center md:text-left">
                            <div className="flex flex-col items-center md:items-start gap-2">
                                <div className="flex items-end gap-3">
                                    <span className="text-5xl md:text-6xl font-extrabold text-brand-red leading-none">R$ 9,90</span>
                                </div>
                                <span className="text-lg text-gray-400 line-through">de R$ 97,00</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-3">Pagamento Único</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow text-left">
                            <li className="flex items-center">
                                <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Guia Digital: 21 Trocas Inteligentes</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Bônus 1: Protocolo S.O.S.</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Bônus 2: Radar de Gatilhos</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                                <span className="text-gray-300 font-medium">Bônus 3: Detox Emocional</span>
                            </li>
                        </ul>

                        <Button variant="primary" size="lg" fullWidth onClick={() => window.location.href = 'https://www.ggcheckout.com/checkout/v2/veVtRcTPeOHLpRwDUHYt'} className="animate-pulse-slow bg-gradient-to-r from-brand-red to-brand-darkRed border-none">
                            Quero o Protocolo Completo
                        </Button>
                    </motion.div>
                </div>

                <div className="mt-16 text-center max-w-2xl mx-auto bg-brand-surface p-6 rounded-2xl shadow-sm border border-gray-800 flex flex-col md:flex-row items-start text-left gap-4">
                    <Info className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-white">"Por que tão barato?"</h4>
                        <p className="text-brand-muted text-sm leading-relaxed">
                            Sou transparente com você. Eu coloquei esse preço simbólico (menos que um café na padaria) para que você possa conhecer meu trabalho sem risco. Eu sei que assim que você aplicar o Protocolo S.O.S., você vai confiar em mim para dar passos maiores no futuro.
                        </p>
                    </div>
                </div>
            </div>

            <DownsellPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onAccept={handleAcceptDiscount}
                onDecline={handleDeclineDiscount}
            />
        </section>
    );
};

export default Pricing;
