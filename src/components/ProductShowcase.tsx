import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Scale, Heart } from 'lucide-react';

const ProductShowcase: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-brand-black overflow-hidden">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red to-brand-gold rounded-3xl transform rotate-3 opacity-20 blur-xl" />
                        <div className="relative bg-brand-surface text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-800">
                            <div className="flex items-center justify-between mb-6 md:mb-8">
                                <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center">
                                    <Smartphone className="w-6 h-6 text-brand-red" />
                                </div>
                                <span className="text-xs font-bold tracking-widest uppercase text-brand-muted">Guia Digital</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white text-center lg:text-left">21 Trocas que Cortam a Vontade de Doce</h3>
                            <p className="text-brand-muted mb-6 md:mb-8 text-center lg:text-left">Manual de Emergência para ter no seu celular.</p>

                            <div className="space-y-3">
                                <div className="flex items-center p-3 bg-white/5 rounded-lg border border-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center mr-3 text-brand-gold font-bold text-sm flex-shrink-0">01</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-sm text-white">O "Chocolate" da TPM</p>
                                        <p className="text-xs text-brand-muted">Sacia a vontade de doce em 2 min.</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-white/5 rounded-lg border border-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center mr-3 text-brand-red font-bold text-sm flex-shrink-0">07</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-sm text-white">O Substituto do Sorvete</p>
                                        <p className="text-xs text-brand-muted">Cremoso, doce e zero açúcar.</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-white/5 rounded-lg border border-gray-700 opacity-75">
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3 text-gray-400 font-bold text-sm flex-shrink-0">15</div>
                                    <div className="flex-1 filter blur-[2px] min-w-0">
                                        <p className="font-bold text-sm text-white">Segredo Bloqueado</p>
                                        <p className="text-xs text-brand-muted">Conteúdo exclusivo do guia.</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-white/5 rounded-lg border border-gray-700 opacity-50">
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3 text-gray-400 font-bold text-sm flex-shrink-0">21</div>
                                    <div className="flex-1 filter blur-[2px] min-w-0">
                                        <p className="font-bold text-sm text-white">Segredo Bloqueado</p>
                                        <p className="text-xs text-brand-muted">Conteúdo exclusivo do guia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 text-center lg:text-left"
                    >
                        <span className="text-brand-red font-bold tracking-wider uppercase text-sm">Apresentando</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 mt-2 text-white">Não é um livro de receitas complexas.</h2>
                        <p className="text-base md:text-lg text-brand-muted mb-6 md:mb-8">
                            É para aquele momento em que você está prestes a atacar a geladeira. Veja o que o método faz por você:
                        </p>

                        <div className="space-y-6">
                            <BenefitItem
                                icon={<Zap className="w-6 h-6 text-white" />}
                                color="bg-brand-red"
                                title="Mata a fissura"
                                description="Interrompe o ciclo da compulsão na hora."
                            />
                            <BenefitItem
                                icon={<Scale className="w-6 h-6 text-white" />}
                                color="bg-brand-gold"
                                title="Economiza calorias"
                                description="Você sacia o desejo comendo 1/10 das calorias de um doce tradicional."
                            />
                            <BenefitItem
                                icon={<Heart className="w-6 h-6 text-white" />}
                                color="bg-brand-darkRed"
                                title="Tira a culpa"
                                description="Você volta a ter controle sobre o que come."
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const BenefitItem: React.FC<{ icon: React.ReactNode, color: string, title: string, description: string }> = ({ icon, color, title, description }) => (
    <div className="flex items-start">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0 shadow-lg mt-1`}>
            {icon}
        </div>
        <div className="ml-4 md:ml-6">
            <h4 className="text-lg md:text-xl font-bold text-white mb-1">{title}</h4>
            <p className="text-sm md:text-base text-brand-muted">{description}</p>
        </div>
    </div>
);

export default ProductShowcase;
