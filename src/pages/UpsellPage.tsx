import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Zap, Star, ArrowRight, Shield, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';

const UpsellPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-black text-white">
            {/* Hero Section with Urgency */}
            <section className="relative pt-20 pb-16 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 to-transparent" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    {/* Urgency Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-brand-red px-6 py-3 rounded-full border-2 border-brand-red/30 shadow-lg">
                            <Clock className="w-5 h-5 text-white animate-pulse" />
                            <span className="font-bold text-sm uppercase tracking-wide">Oferta Exclusiva por Tempo Limitado</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            <span className="text-white">Você Está a </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">1 Semana</span>
                            <br />
                            <span className="text-white">de Se Livrar do Açúcar Para Sempre</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-brand-muted font-light max-w-3xl mx-auto">
                            Parabéns por ter dado o primeiro passo. Agora chegou a hora de <span className="text-white font-semibold">eliminar o vício pela raiz</span>.
                        </p>
                    </motion.div>

                    {/* Problem Agitation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-brand-surface border-l-4 border-brand-red p-6 md:p-8 rounded-2xl mb-12"
                    >
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Zap className="w-7 h-7 text-brand-red" />
                            <span>A Verdade Que Ninguém Te Conta:</span>
                        </h3>
                        <p className="text-brand-muted text-lg leading-relaxed">
                            As "trocas inteligentes" funcionam para o momento da fissura. Mas se você não <span className="text-white font-semibold">reprogramar seu corpo e mente em 7 dias</span>, o ciclo do açúcar vai te puxar de volta. É biologia, não falta de vontade.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="py-16 px-4 bg-gradient-to-b from-brand-black to-brand-surface">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">Apresentando</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">DETOX ANTI-AÇÚCAR 7 DIAS</h2>
                        <p className="text-xl text-brand-muted">O próximo passo inevitável.</p>
                    </div>

                    {/* What's Included */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <ProductFeature
                            icon={<Check className="w-6 h-6" />}
                            title="Protocolo Completo de 7 Dias"
                            description="Passo a passo dia a dia do que fazer, comer e evitar para zerar o vício."
                        />
                        <ProductFeature
                            icon={<Check className="w-6 h-6" />}
                            title="Cardápios + Horários"
                            description="Todas as refeições planejadas. Você só precisa seguir."
                        />
                        <ProductFeature
                            icon={<Check className="w-6 h-6" />}
                            title="Lista de Compras Pronta"
                            description="Zero decisão. Você imprime e compra exatamente o que precisa."
                        />
                        <ProductFeature
                            icon={<Check className="w-6 h-6" />}
                            title="Ritual Matinal Anti-Craving"
                            description="Protocolo de 5 minutos que bloqueia a vontade antes dela começar."
                        />
                        <ProductFeature
                            icon={<Check className="w-6 h-6" />}
                            title="Reprogramação de Rotina"
                            description="Como redesenhar seu dia para escapar dos gatilhos."
                        />
                        <ProductFeature
                            icon={<Check className="w-6 h-6" />}
                            title="Reset do Paladar"
                            description="Em 7 dias, doces vão te parecer enjoativos. Cientificamente comprovado."
                        />
                    </div>

                    {/* Transformation Promise */}
                    <div className="bg-gradient-to-r from-brand-red/20 to-brand-gold/20 border border-brand-red/30 rounded-3xl p-8 md:p-12 text-center mb-12">
                        <h3 className="text-3xl font-bold mb-6">O Que Muda em 7 Dias:</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <TransformationItem
                                icon={<TrendingUp className="w-8 h-8 text-brand-gold" />}
                                title="Energia Estável"
                                description="Sem picos e quedas de glicose."
                            />
                            <TransformationItem
                                icon={<Zap className="w-8 h-8 text-brand-red" />}
                                title="Zero Craving"
                                description="Vontade de doce simplesmente desaparece."
                            />
                            <TransformationItem
                                icon={<Star className="w-8 h-8 text-brand-gold" />}
                                title="Controle Mental"
                                description="Você decide o que come. Não a compulsão."
                            />
                        </div>
                    </div>

                    {/* Pricing */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-brand-surface border-2 border-brand-red rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-brand-red text-white px-6 py-2 text-sm font-bold uppercase transform rotate-12 translate-x-8 -translate-y-2">
                            Melhor Investimento
                        </div>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-4">Investimento Único</h3>
                            <div className="flex items-end justify-center gap-4 mb-2">
                                <span className="text-6xl font-black text-brand-red">R$ 37</span>
                                <span className="text-2xl text-gray-400 line-through mb-2">R$ 97</span>
                            </div>
                            <p className="text-brand-muted">Pagamento único. Acesso vitalício.</p>
                        </div>

                        <div className="flex flex-col items-center gap-4 mb-8">
                            <Button
                                size="lg"
                                onClick={() => window.location.href = 'https://www.ggcheckout.com/checkout/v2/XrkcNcyFJ9STMclXnBqf'}
                                className="w-full md:w-auto text-lg px-12 bg-gradient-to-r from-brand-red to-brand-darkRed border-none shadow-2xl shadow-brand-red/50"
                            >
                                Sim, Quero o Detox Completo
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                            <p className="text-sm text-gray-400 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-brand-gold" />
                                Garantia de 7 dias. Zero risco.
                            </p>
                        </div>

                        {/* Social Proof */}
                        <div className="border-t border-gray-800 pt-6 text-center">
                            <p className="text-brand-gold font-bold mb-2">✨ Mais de 1.247 pessoas já fizeram o Detox</p>
                            <p className="text-sm text-brand-muted">Taxa de sucesso: 94,3%</p>
                        </div>
                    </motion.div>

                    {/* No Thanks Link */}
                    <div className="text-center mt-8">
                        <a href="/" className="text-sm text-gray-500 hover:text-gray-400 underline">
                            Não, obrigado. Quero continuar apenas com as trocas básicas.
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 bg-brand-black border-t border-gray-800">
                <div className="container mx-auto max-w-4xl text-center text-sm text-gray-500">
                    <p>© 2024 Trocas que Cortam. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

const ProductFeature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-brand-black/50 p-6 rounded-2xl border border-gray-800 hover:border-brand-red/30 transition-colors">
        <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center mb-4 text-brand-red">
            {icon}
        </div>
        <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
        <p className="text-brand-muted text-sm">{description}</p>
    </div>
);

const TransformationItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center">
        <div className="mb-3">{icon}</div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-sm text-brand-muted">{description}</p>
    </div>
);

export default UpsellPage;
