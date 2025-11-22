import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Brain, XCircle } from 'lucide-react';

const Story: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="story" className="py-20 bg-brand-black text-brand-text">
            <div className="container mx-auto max-w-3xl px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div variants={itemVariants} className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sabe aquela vontade incontrolável?</h2>
                        <div className="w-20 h-1 bg-brand-green mx-auto rounded-full" />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p>
                            É logo depois do almoço, ou no fim da tarde. Aquela ansiedade que faz você devorar um pacote de biscoito sem nem perceber.
                        </p>

                        <div className="bg-brand-surface p-6 rounded-2xl shadow-sm border-l-4 border-brand-gold my-8">
                            <p className="font-medium text-brand-dark">
                                A maioria das pessoas acha que isso é "falta de vergonha na cara" ou "falta de foco". <span className="text-brand-gold font-bold">Elas estão erradas.</span>
                            </p>
                        </div>

                        <p>
                            Se você tenta resistir e falha, a culpa não é sua. <span className="font-bold text-brand-red">É química.</span>
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-10">
                            <div className="bg-brand-surface p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-800">
                                <Brain className="w-10 h-10 text-brand-red mb-4" />
                                <h3 className="font-bold text-xl mb-2">Seu cérebro grita por Dopamina</h3>
                                <p className="text-sm text-brand-muted">O açúcar é a forma mais rápida que ele conhece de conseguir isso.</p>
                            </div>
                            <div className="bg-brand-surface p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-800">
                                <XCircle className="w-10 h-10 text-brand-gold mb-4" />
                                <h3 className="font-bold text-xl mb-2">Resistir é inútil</h3>
                                <p className="text-sm text-brand-muted">É uma luta biológica injusta. "Tentar resistir" quase nunca funciona.</p>
                            </div>
                        </div>

                        <motion.div variants={itemVariants} className="bg-gradient-to-br from-brand-surface to-black border border-gray-800 text-white p-8 rounded-3xl shadow-xl mt-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />

                            <h3 className="text-2xl font-bold mb-4 relative z-10">Mas e se você pudesse "enganar" a biologia?</h3>
                            <p className="mb-6 relative z-10 text-gray-300">
                                E se existisse uma combinação específica de alimentos que, quando ingeridos, <span className="text-brand-gold font-bold">"desligam" o interruptor da compulsão</span> em questão de minutos?
                            </p>

                            <div className="flex items-start space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                <AlertTriangle className="w-6 h-6 text-accent-yellow flex-shrink-0 mt-1" />
                                <p className="text-sm">
                                    Não estou falando de comer alface quando você quer chocolate. Isso não funciona. Estou falando de <strong className="text-white">Trocas Estratégicas</strong>.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Story;
