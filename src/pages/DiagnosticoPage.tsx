import React, { useState } from 'react';
import MemberLayout from '../components/members/MemberLayout';
import { Brain, AlertCircle, ArrowRight, Activity, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const DiagnosticoPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'quiz' | 'result'>('quiz');
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

    const questions = [
        {
            id: 1,
            text: "Quando você sente mais vontade de comer doce?",
            options: [
                { text: "Quando estou triste, ansioso ou estressado.", type: 'emocional' },
                { text: "Sempre no mesmo horário (ex: depois do almoço).", type: 'habito' },
                { text: "Quando vejo outras pessoas comendo.", type: 'social' },
                { text: "Quando fico muito tempo sem comer.", type: 'fisiologico' }
            ]
        },
        {
            id: 2,
            text: "Como você se sente logo DEPOIS de comer o doce?",
            options: [
                { text: "Aliviado momentaneamente, mas depois culpado.", type: 'emocional' },
                { text: "Normal, é apenas parte da minha rotina.", type: 'habito' },
                { text: "Feliz por estar participando do momento.", type: 'social' },
                { text: "Com mais energia, a tontura/fraqueza passa.", type: 'fisiologico' }
            ]
        },
        {
            id: 3,
            text: "O que costuma 'gatilhar' a vontade?",
            options: [
                { text: "Uma briga, notícia ruim ou dia difícil.", type: 'emocional' },
                { text: "Sentar no sofá para ver TV ou terminar o almoço.", type: 'habito' },
                { text: "Festas, reuniões ou encontros com amigos.", type: 'social' },
                { text: "Pular refeições ou comer pouco durante o dia.", type: 'fisiologico' }
            ]
        }
    ];

    const handleAnswer = (questionId: number, type: string) => {
        setSelectedAnswers(prev => ({ ...prev, [questionId]: type }));
    };

    const getResult = () => {
        const scores = {
            emocional: 0,
            habito: 0,
            social: 0,
            fisiologico: 0
        };

        Object.values(selectedAnswers).forEach(type => {
            if (type in scores) {
                scores[type as keyof typeof scores]++;
            }
        });

        const maxScore = Math.max(...Object.values(scores));
        const resultType = Object.keys(scores).find(key => scores[key as keyof typeof scores] === maxScore);

        switch (resultType) {
            case 'emocional':
                return {
                    title: "Gatilho Emocional",
                    description: "Você usa o doce como uma 'chupeta emocional' para lidar com sentimentos difíceis. O açúcar libera dopamina e alivia temporariamente a dor.",
                    action: "Técnica de Ruptura: Quando sentir vontade, pergunte-se: 'O que eu estou sentindo?'. Se for emoção, não é fome. Use a respiração 4-7-8."
                };
            case 'habito':
                return {
                    title: "Gatilho de Hábito",
                    description: "Seu cérebro associou um momento específico (ex: pós-almoço) com a recompensa do doce. É um caminho neural automático.",
                    action: "Técnica de Substituição: Mude a rotina. Se você come doce no sofá, sente-se em outro lugar. Escove os dentes imediatamente após a refeição."
                };
            case 'social':
                return {
                    title: "Gatilho Social",
                    description: "Sua vontade está ligada à conexão com outras pessoas. Você tem dificuldade em dizer 'não' para não se sentir excluído.",
                    action: "Técnica do 'Depois eu como': Diga 'agora não, talvez mais tarde'. Isso tira a pressão social sem criar conflito imediato."
                };
            case 'fisiologico':
                return {
                    title: "Gatilho Fisiológico",
                    description: "Seu corpo está pedindo energia rápida porque você está com fome real ou glicose baixa.",
                    action: "Ajuste Nutricional: Nunca fique mais de 4h sem comer. Inclua proteínas em todas as refeições para estabilizar a glicemia."
                };
            default:
                return {
                    title: "Gatilho Misto",
                    description: "Você tem uma combinação de fatores. Comece tratando o aspecto emocional, que costuma ser o mais forte.",
                    action: "Comece pelo Módulo 2: Protocolo de Reprogramação."
                };
        }
    };

    const allAnswered = Object.keys(selectedAnswers).length === questions.length;

    return (
        <MemberLayout>
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-brand-red/20">
                        <Brain className="w-4 h-4" /> Módulo 1
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Diagnóstico do Gatilho Raiz</h1>
                    <p className="text-brand-muted text-lg leading-relaxed">
                        Para vencer o inimigo, você precisa saber quem ele é. Responda as perguntas abaixo para identificar qual o principal gatilho que dispara sua vontade de doce.
                    </p>
                </div>

                {activeTab === 'quiz' ? (
                    <div className="space-y-8">
                        {questions.map((q, index) => (
                            <div key={q.id} className="bg-brand-surface p-6 rounded-2xl border border-gray-800">
                                <h3 className="text-xl font-bold text-white mb-4">{index + 1}. {q.text}</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {q.options.map((opt, i) => {
                                        const isSelected = selectedAnswers[q.id] === opt.type;
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => handleAnswer(q.id, opt.type)}
                                                className={`text-left p-4 rounded-xl border transition-all ${isSelected
                                                    ? 'bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/20'
                                                    : 'bg-black/40 border-gray-700 text-brand-muted hover:border-brand-red/50 hover:text-white'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span>{opt.text}</span>
                                                    {isSelected && <Check className="w-5 h-5 flex-shrink-0" />}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                        <div className="text-center pt-8">
                            <button
                                onClick={() => setActiveTab('result')}
                                disabled={!allAnswered}
                                className={`font-bold py-4 px-12 rounded-full text-lg transition-all ${allAnswered
                                    ? 'bg-brand-red hover:bg-brand-darkRed text-white shadow-lg shadow-brand-red/20 cursor-pointer'
                                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                {allAnswered ? 'Ver Meu Diagnóstico' : 'Responda todas as perguntas'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-brand-surface to-black p-8 rounded-3xl border-2 border-brand-red/50 shadow-2xl"
                    >
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Activity className="w-10 h-10 text-brand-red" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">Seu Gatilho Principal é:</h2>
                            <h3 className="text-4xl font-black text-brand-red mb-6">{getResult().title}</h3>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{getResult().description}</p>
                        </div>

                        <div className="bg-black/40 p-6 rounded-xl border border-brand-gold/30 mb-8">
                            <h4 className="text-brand-gold font-bold mb-2 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" />
                                Ação Imediata Recomendada:
                            </h4>
                            <p className="text-white">{getResult().action}</p>
                        </div>

                        <div className="text-center">
                            <p className="text-brand-muted mb-4">Agora que você conhece seu inimigo, vamos aprender a reprogramar sua mente.</p>
                            <a href="/entregavel1/protocolo" className="inline-flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-full font-bold transition-colors">
                                Ir para o Módulo 2 <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </MemberLayout>
    );
};

export default DiagnosticoPage;
