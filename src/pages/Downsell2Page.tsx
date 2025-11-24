import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Flame, ArrowRight, Shield, AlertCircle } from 'lucide-react';
import { Button } from '../components/Button';

const Downsell2Page: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-black text-white">
            {/* Hero Section - Emotional Pressure */}
            <section className="relative pt-20 pb-16 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    {/* Final Warning Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-red-600 border-2 border-red-500 px-6 py-3 rounded-full shadow-lg shadow-red-600/50">
                            <Flame className="w-5 h-5 text-white animate-pulse" />
                            <span className="font-bold text-sm uppercase tracking-wide">ÚLTIMA OPORTUNIDADE</span>
                        </div>
                    </motion.div>

                    {/* Confrontational Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            <span className="text-white">Se Você Não Consegue Fazer </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">48 Horas...</span>
                        </h1>

                        <p className="text-2xl md:text-3xl text-gray-300 font-bold max-w-3xl mx-auto mb-6">
                            Você não vai conseguir fazer nada maior.
                        </p>

                        <p className="text-lg text-brand-muted max-w-2xl mx-auto">
                            Desculpa ser direto, mas alguém precisa te dizer: <span className="text-white font-semibold">2 dias é o mínimo para testar se você está pronto para mudar.</span>
                        </p>
                    </motion.div>

                    {/* Reality Check */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-red-950/30 border-l-4 border-red-600 p-6 md:p-8 rounded-2xl mb-12"
                    >
                        <div className="flex items-start gap-4">
                            <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-white">A Verdade Nua e Crua:</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Você pode ter todas as "trocas inteligentes" do mundo. Mas se você não consegue ficar <span className="text-white font-bold">48 horas sem açúcar</span>, você não tem controle nenhum. O açúcar tem controle sobre você.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Product Section */}
            <section className="py-16 px-4 bg-gradient-to-b from-brand-black to-brand-surface">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-red-500 font-bold uppercase tracking-wider text-sm">Protocolo de Emergência</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">48H SEM AÇÚCAR</h2>
                        <p className="text-xl text-brand-muted">Curto. Direto. Prático. Zero desculpas.</p>
                    </div>

                    {/* The Promise */}
                    <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 border border-red-700/50 rounded-3xl p-8 md:p-10 mb-12">
                        <h3 className="text-2xl font-bold mb-4 text-center">O que acontece em 48 horas:</h3>
                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                            <ResultItem
                                icon={<Flame className="w-8 h-8 text-red-500" />}
                                title="Craving Zerado"
                                description="A vontade incontrolável desaparece."
                            />
                            <ResultItem
                                icon={<Check className="w-8 h-8 text-red-500" />}
                                title="Inflamação Reduzida"
                                description="Você acorda menos inchado no 3º dia."
                            />
                            <ResultItem
                                icon={<Clock className="w-8 h-8 text-red-500" />}
                                title="Controle Mental"
                                description="Você prova pra si mesmo que consegue."
                            />
                        </div>
                    </div>

                    {/* What's Included */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-center">O Que Você Recebe:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <QuickFeature
                                icon={<Check className="w-5 h-5" />}
                                title="Plano de 48 Horas Passo a Passo"
                            />
                            <QuickFeature
                                icon={<Check className="w-5 h-5" />}
                                title="Lista do Que Comer (e o que Evitar)"
                            />
                            <QuickFeature
                                icon={<Check className="w-5 h-5" />}
                                title="Protocolo Anti-Craving"
                            />
                            <QuickFeature
                                icon={<Check className="w-5 h-5" />}
                                title="Checklist de Sobrevivência"
                            />
                        </div>
                    </div>

                    {/* Emotional Push */}
                    <div className="bg-brand-black/70 border border-gray-800 rounded-2xl p-8 mb-12 text-center">
                        <p className="text-lg text-gray-300 leading-relaxed mb-4">
                            Olha, eu não posso te forçar a nada. Mas te digo uma coisa:
                        </p>
                        <p className="text-2xl font-bold text-white mb-4">
                            Se você não consegue fazer 48 horas, o problema não é o açúcar.
                        </p>
                        <p className="text-lg text-gray-300">
                            É você não acreditar que consegue. <span className="text-white font-semibold">Prove pra você mesmo.</span>
                        </p>
                    </div>

                    {/* Pricing - Ultra Aggressive */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-brand-surface border-2 border-red-600 rounded-3xl p-8 md:p-12 shadow-2xl shadow-red-600/30"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2">É Sério Que Você Vai Desistir?</h3>
                            <p className="text-brand-muted mb-6">Última chance. Preço ridículo.</p>

                            <div className="flex items-end justify-center gap-4 mb-2">
                                <span className="text-6xl font-black text-red-500">R$ 17,00</span>
                                <span className="text-2xl text-gray-400 line-through mb-2">R$ 27</span>
                            </div>
                            <p className="text-sm text-gray-400">Menos que um combo do McDonald's.</p>
                        </div>

                        <div className="flex flex-col items-center gap-4 mb-6">
                            <Button
                                size="lg"
                                className="w-full md:w-auto text-lg px-12 bg-gradient-to-r from-red-600 to-red-700 border-none shadow-2xl shadow-red-600/50 animate-pulse-slow"
                            >
                                Vou Provar Que Consigo
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                            <p className="text-sm text-gray-400 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-red-500" />
                                Garantia incondicional de 7 dias
                            </p>
                        </div>

                        <div className="border-t border-gray-800 pt-6 text-center">
                            <p className="text-sm text-brand-muted">
                                <span className="text-red-500 font-bold">372 pessoas</span> completaram as 48h esta semana.
                            </p>
                            <p className="text-xs text-gray-500 mt-2">Você vai ser o próximo ou vai desistir antes de começar?</p>
                        </div>
                    </motion.div>

                    {/* Final Exit */}
                    <div className="text-center mt-8">
                        <a href="/" className="text-sm text-gray-600 hover:text-gray-500">
                            Não, eu desisto. Vou continuar sendo controlado pelo açúcar.
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

const ResultItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="mb-3">{icon}</div>
        <h4 className="font-bold text-lg mb-1 text-white">{title}</h4>
        <p className="text-sm text-brand-muted">{description}</p>
    </div>
);

const QuickFeature: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
    <div className="flex items-center gap-3 bg-brand-black/50 p-4 rounded-xl border border-gray-800">
        <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
            {icon}
        </div>
        <span className="text-white font-medium">{title}</span>
    </div>
);

export default Downsell2Page;
