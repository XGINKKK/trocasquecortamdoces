import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, AlertTriangle, ArrowRight, Shield } from 'lucide-react';
import { Button } from '../components/Button';

const DownsellPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-black text-white">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Alert Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-brand-gold/20 border-2 border-brand-gold px-6 py-3 rounded-full">
                            <AlertTriangle className="w-5 h-5 text-brand-gold" />
                            <span className="font-bold text-sm uppercase tracking-wide text-brand-gold">Última Chance com Desconto</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                            <span className="text-white">Ok, entendi.</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-red">Que tal só o Essencial?</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-brand-muted font-light max-w-3xl mx-auto">
                            Versão enxuta do Detox de 7 Dias.<br />
                            Sem suporte. Sem vídeos. <span className="text-white font-semibold">Só o que funciona.</span>
                        </p>
                    </motion.div>

                    {/* Problem Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-brand-surface border-l-4 border-brand-gold p-6 md:p-8 rounded-2xl mb-12"
                    >
                        <p className="text-brand-muted text-lg leading-relaxed">
                            Eu sei que R$37 pode não caber no orçamento agora. Então aqui está uma versão mais acessível do mesmo sistema. <span className="text-white font-semibold">Menos floreio, mesma eficácia.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Section */}
            <section className="py-16 px-4 bg-gradient-to-b from-brand-black to-brand-surface">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">DETOX ANTI-AÇÚCAR ESSENCIAL</h2>
                        <p className="text-xl text-brand-muted">PDF direto ao ponto. Zero enrolação.</p>
                    </div>

                    {/* What's Included */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <FeatureItem
                            icon={<Check className="w-6 h-6" />}
                            title="Protocolo de 7 Dias Completo"
                            description="Tudo que você precisa fazer, dia a dia."
                        />
                        <FeatureItem
                            icon={<Check className="w-6 h-6" />}
                            title="Cardápios Simplificados"
                            description="Café, almoço, jantar e lanches para os 7 dias."
                        />
                        <FeatureItem
                            icon={<Check className="w-6 h-6" />}
                            title="Lista de Compras"
                            description="Você imprime e vai direto ao supermercado."
                        />
                        <FeatureItem
                            icon={<Check className="w-6 h-6" />}
                            title="Ritual Anti-Craving"
                            description="A rotina matinal que corta a vontade pela raiz."
                        />
                    </div>

                    {/* What's NOT Included */}
                    <div className="bg-brand-black/50 border border-gray-800 rounded-2xl p-6 mb-12">
                        <h3 className="text-lg font-bold mb-4 text-red-400">⚠️ O que NÃO está incluído:</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>❌ Vídeos explicativos</li>
                            <li>❌ Suporte direto</li>
                            <li>❌ Receitas detalhadas</li>
                            <li>❌ Bônus extras</li>
                        </ul>
                        <p className="mt-4 text-brand-muted text-sm">
                            Mas honestamente? <span className="text-white font-semibold">Você não precisa disso tudo para ter resultado.</span> O PDF tem o suficiente.
                        </p>
                    </div>

                    {/* Pricing */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-brand-surface border-2 border-brand-gold rounded-3xl p-8 md:p-12"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-4">Preço Especial</h3>
                            <div className="flex items-end justify-center gap-4 mb-2">
                                <span className="text-6xl font-black text-brand-gold">R$ 19,90</span>
                                <span className="text-2xl text-gray-400 line-through mb-2">R$ 47</span>
                            </div>
                            <p className="text-brand-muted">Pagamento único. Acesso imediato.</p>
                        </div>

                        <div className="flex flex-col items-center gap-4 mb-6">
                            <Button
                                size="lg"
                                className="w-full md:w-auto text-lg px-12 bg-gradient-to-r from-brand-gold to-yellow-600 border-none shadow-2xl shadow-brand-gold/50 text-black font-bold"
                            >
                                Sim, Quero o Essencial
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                            <p className="text-sm text-gray-400 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-brand-gold" />
                                Garantia de 7 dias
                            </p>
                        </div>

                        <div className="border-t border-gray-800 pt-6 text-center">
                            <p className="text-sm text-brand-muted">
                                Mais de <span className="text-brand-gold font-bold">600 pessoas</span> já fizeram com a versão essencial e tiveram resultado.
                            </p>
                        </div>
                    </motion.div>

                    {/* No Thanks Link */}
                    <div className="text-center mt-8">
                        <a href="/" className="text-sm text-gray-500 hover:text-gray-400 underline">
                            Não, só quero as trocas básicas mesmo.
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

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-brand-black/50 p-6 rounded-2xl border border-gray-800">
        <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-4 text-brand-gold">
            {icon}
        </div>
        <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
        <p className="text-brand-muted text-sm">{description}</p>
    </div>
);

export default DownsellPage;
