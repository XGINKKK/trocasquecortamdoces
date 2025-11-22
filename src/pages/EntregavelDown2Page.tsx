import React, { useState } from 'react';
import MemberLayout from '../components/members/MemberLayout';
import { Clock, Shield, Heart, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EntregavelDown2Page: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>('protocol');

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <MemberLayout>
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-brand-red/20">
                        <Clock className="w-4 h-4" /> Controle de Crise
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4">Protocolo 48 Horas</h1>
                    <p className="text-brand-muted text-lg leading-relaxed max-w-2xl">
                        A vontade de doce dura pouco, mas o estrago pode durar muito. Use este guia rápido para sobreviver às próximas 48 horas sem recaídas.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Section 1: 48h Protocol */}
                    <div className="bg-brand-surface rounded-2xl border border-gray-800 overflow-hidden">
                        <button
                            onClick={() => toggleSection('protocol')}
                            className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-white">1. O Que Fazer AGORA (48h)</h3>
                                    <p className="text-sm text-brand-muted">Ações imediatas para cortar o craving</p>
                                </div>
                            </div>
                            {openSection === 'protocol' ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                        </button>

                        <AnimatePresence>
                            {openSection === 'protocol' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-gray-800"
                                >
                                    <div className="p-6 md:p-8 grid gap-4">
                                        <div className="flex gap-4 items-start bg-black/20 p-4 rounded-xl border-l-4 border-brand-red">
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Hora 0-4: Hidratação Forçada</h4>
                                                <p className="text-brand-muted text-sm">Beba 1 litro de água nas próximas 2 horas. Muitas vezes a sede se disfarça de fome de doce.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start bg-black/20 p-4 rounded-xl border-l-4 border-brand-red">
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Hora 4-12: Proteína Sólida</h4>
                                                <p className="text-brand-muted text-sm">Faça uma refeição rica em proteína (frango, ovos, carne) e gordura boa (azeite, abacate). Isso mata a fome física.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start bg-black/20 p-4 rounded-xl border-l-4 border-brand-red">
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Hora 12-24: Sono de Emergência</h4>
                                                <p className="text-brand-muted text-sm">Vá para a cama 1h mais cedo. O cansaço é o maior gatilho de recaída. Durma para resetar os hormônios.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start bg-black/20 p-4 rounded-xl border-l-4 border-brand-red">
                                            <div>
                                                <h4 className="text-white font-bold mb-1">Hora 24-48: Zero Exceções</h4>
                                                <p className="text-brand-muted text-sm">Não negocie. Não coma "só um pedacinho". Seu cérebro precisa entender que a fonte de dopamina secou.</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Section 2: Triggers & Antibodies */}
                    <div className="bg-brand-surface rounded-2xl border border-gray-800 overflow-hidden">
                        <button
                            onClick={() => toggleSection('antibodies')}
                            className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-white">2. Gatilhos & Anticorpos</h3>
                                    <p className="text-sm text-brand-muted">Se sentir X, faça Y</p>
                                </div>
                            </div>
                            {openSection === 'antibodies' ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                        </button>

                        <AnimatePresence>
                            {openSection === 'antibodies' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-gray-800"
                                >
                                    <div className="p-6 md:p-8">
                                        <div className="grid gap-3">
                                            {[
                                                { trigger: "Estresse / Raiva", antibody: "Socar um travesseiro ou fazer 10 flexões. Libere a energia física." },
                                                { trigger: "Tédio / Procrastinação", antibody: "Mudar de ambiente. Saia do quarto/sala. Dê uma volta no quarteirão." },
                                                { trigger: "Tristeza / Solidão", antibody: "Ligar para alguém ou tomar um banho quente. Busque conforto, não açúcar." },
                                                { trigger: "Cansaço Extremo", antibody: "Dormir. Não tente 'se animar' com doce. Seu corpo precisa de descanso." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-3 bg-black/40 rounded-lg border border-gray-800">
                                                    <div className="flex items-center gap-2 text-brand-red font-bold">
                                                        <AlertTriangle className="w-4 h-4" />
                                                        {item.trigger}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-brand-muted text-sm">
                                                        <span className="text-brand-gold font-bold">→</span>
                                                        {item.antibody}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Section 3: Emotional Crisis Guide */}
                    <div className="bg-brand-surface rounded-2xl border border-gray-800 overflow-hidden">
                        <button
                            onClick={() => toggleSection('crisis')}
                            className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                    <Heart className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-white">3. SOS Emocional</h3>
                                    <p className="text-sm text-brand-muted">Como não comer suas emoções</p>
                                </div>
                            </div>
                            {openSection === 'crisis' ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                        </button>

                        <AnimatePresence>
                            {openSection === 'crisis' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-gray-800"
                                >
                                    <div className="p-6 md:p-8">
                                        <div className="relative pl-8 space-y-8">
                                            {/* Vertical Line */}
                                            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-700"></div>

                                            {[
                                                { step: 1, title: "Pare e Nomeie", desc: "Diga em voz alta: 'Eu não estou com fome, estou ansioso/triste'." },
                                                { step: 2, title: "Aceite o Desconforto", desc: "A emoção ruim não vai te matar. Ela é passageira. Respire fundo." },
                                                { step: 3, title: "Beba Água Gelada", desc: "O choque térmico ajuda a 'acordar' o cérebro e tirar o foco da emoção." },
                                                { step: 4, title: "Saia da Cozinha", desc: "Fisicamente, afaste-se da fonte de comida. Vá para um lugar seguro." }
                                            ].map((item) => (
                                                <div key={item.step} className="relative">
                                                    <div className="absolute -left-8 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-gray-900">
                                                        {item.step}
                                                    </div>
                                                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                                    <p className="text-brand-muted text-sm">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </MemberLayout>
    );
};

export default EntregavelDown2Page;
