import React, { useState } from 'react';
import MemberLayout from '../components/members/MemberLayout';
import { Brain, Activity, Zap, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EntregavelDownPage: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>('diagnosis');
    const [diagnosisResult, setDiagnosisResult] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleDiagnosis = (trigger: string) => {
        setDiagnosisResult(trigger);
    };

    return (
        <MemberLayout>
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-brand-red/20">
                        <Zap className="w-4 h-4" /> Kit de Emergência
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4">Protocolo Expresso</h1>
                    <p className="text-brand-muted text-lg leading-relaxed max-w-2xl">
                        Versão condensada para resultados rápidos. Identifique seu gatilho, aplique o reset de 3 dias e use as técnicas de bloqueio imediato.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Section 1: Quick Diagnosis */}
                    <div className="bg-brand-surface rounded-2xl border border-gray-800 overflow-hidden">
                        <button
                            onClick={() => toggleSection('diagnosis')}
                            className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red">
                                    <Brain className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-white">1. Diagnóstico Rápido</h3>
                                    <p className="text-sm text-brand-muted">Descubra seu gatilho em 1 clique</p>
                                </div>
                            </div>
                            {openSection === 'diagnosis' ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                        </button>

                        <AnimatePresence>
                            {openSection === 'diagnosis' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-gray-800"
                                >
                                    <div className="p-6 md:p-8">
                                        {!diagnosisResult ? (
                                            <>
                                                <p className="text-white mb-6 font-medium">Qual frase descreve melhor seu momento atual?</p>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {[
                                                        { id: 'emocional', text: "Estou estressado(a), triste ou ansioso(a)." },
                                                        { id: 'habito', text: "Acabei de almoçar/jantar e 'preciso' de um doce." },
                                                        { id: 'social', text: "Estou vendo outras pessoas comerem." },
                                                        { id: 'fisiologico', text: "Estou sem comer há muitas horas." }
                                                    ].map((opt) => (
                                                        <button
                                                            key={opt.id}
                                                            onClick={() => handleDiagnosis(opt.id)}
                                                            className="text-left p-4 rounded-xl bg-black/40 border border-gray-700 hover:border-brand-red hover:bg-brand-red/5 transition-all text-brand-muted hover:text-white"
                                                        >
                                                            {opt.text}
                                                        </button>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <div className="bg-gradient-to-br from-black to-brand-surface border border-brand-red/30 rounded-xl p-6">
                                                <div className="flex items-start gap-4">
                                                    <AlertCircle className="w-8 h-8 text-brand-red flex-shrink-0" />
                                                    <div>
                                                        <h4 className="text-xl font-bold text-white mb-2">
                                                            {diagnosisResult === 'emocional' && "Gatilho Emocional"}
                                                            {diagnosisResult === 'habito' && "Gatilho de Hábito"}
                                                            {diagnosisResult === 'social' && "Gatilho Social"}
                                                            {diagnosisResult === 'fisiologico' && "Gatilho Fisiológico"}
                                                        </h4>
                                                        <p className="text-brand-muted mb-4">
                                                            {diagnosisResult === 'emocional' && "Você está buscando alívio, não comida. O açúcar é sua 'chupeta emocional'."}
                                                            {diagnosisResult === 'habito' && "Seu cérebro está no piloto automático. Ele espera a recompensa do doce nesse horário."}
                                                            {diagnosisResult === 'social' && "Você está com medo de perder a conexão com o grupo ou de ser 'chato(a)'."}
                                                            {diagnosisResult === 'fisiologico' && "Seu corpo está gritando por energia rápida. Sua glicose provavelmente caiu."}
                                                        </p>
                                                        <button
                                                            onClick={() => setDiagnosisResult(null)}
                                                            className="text-sm text-brand-red hover:text-white underline"
                                                        >
                                                            Refazer teste
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Section 2: Reduced Protocol */}
                    <div className="bg-brand-surface rounded-2xl border border-gray-800 overflow-hidden">
                        <button
                            onClick={() => toggleSection('protocol')}
                            className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-white">2. Protocolo de 3 Dias</h3>
                                    <p className="text-sm text-brand-muted">O reset metabólico essencial</p>
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
                                        {[
                                            { day: 1, title: "Limpeza do Ambiente", desc: "Jogue fora TUDO que tem açúcar. Se não estiver na despensa, você não come." },
                                            { day: 2, title: "Proteína + Água", desc: "Coma proteína (ovos, carne, whey) no café da manhã e beba 3L de água." },
                                            { day: 3, title: "Zero Adoçante", desc: "Corte também os adoçantes hoje. Eles enganam o cérebro e mantêm o vício." }
                                        ].map((item) => (
                                            <div key={item.day} className="flex gap-4 items-start bg-black/20 p-4 rounded-xl">
                                                <div className="bg-brand-gold text-black font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    {item.day}
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                                    <p className="text-brand-muted text-sm">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Section 3: SOS Techniques */}
                    <div className="bg-brand-surface rounded-2xl border border-gray-800 overflow-hidden">
                        <button
                            onClick={() => toggleSection('techniques')}
                            className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-white">3. Técnicas Anti-Looping</h3>
                                    <p className="text-sm text-brand-muted">Ferramentas para quebrar a fissura agora</p>
                                </div>
                            </div>
                            {openSection === 'techniques' ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                        </button>

                        <AnimatePresence>
                            {openSection === 'techniques' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-gray-800"
                                >
                                    <div className="p-6 md:p-8 grid md:grid-cols-3 gap-4">
                                        <div className="bg-black/40 p-4 rounded-xl border border-gray-700">
                                            <h4 className="text-white font-bold mb-2">Respiração 4-7-8</h4>
                                            <p className="text-xs text-brand-muted mb-3">Acalma a ansiedade em 2 min.</p>
                                            <ul className="text-xs text-gray-400 list-disc list-inside">
                                                <li>Inspire (4s)</li>
                                                <li>Segure (7s)</li>
                                                <li>Solte (8s)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-black/40 p-4 rounded-xl border border-gray-700">
                                            <h4 className="text-white font-bold mb-2">Surf da Vontade</h4>
                                            <p className="text-xs text-brand-muted mb-3">A fissura é uma onda. Espere.</p>
                                            <ul className="text-xs text-gray-400 list-disc list-inside">
                                                <li>Marque 3 min</li>
                                                <li>Observe a sensação</li>
                                                <li>Não reaja</li>
                                            </ul>
                                        </div>
                                        <div className="bg-black/40 p-4 rounded-xl border border-gray-700">
                                            <h4 className="text-white font-bold mb-2">Regra do "NÃO"</h4>
                                            <p className="text-xs text-brand-muted mb-3">Elimine a negociação.</p>
                                            <ul className="text-xs text-gray-400 list-disc list-inside">
                                                <li>"Eu não como doce"</li>
                                                <li>Decisão tomada</li>
                                                <li>Fim de papo</li>
                                            </ul>
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

export default EntregavelDownPage;
