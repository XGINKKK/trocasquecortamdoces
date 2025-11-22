import React from 'react';
import MemberLayout from '../components/members/MemberLayout';
import { Repeat, Wind, Zap, XCircle, ArrowRight } from 'lucide-react';

const RupturaPage: React.FC = () => {
    return (
        <MemberLayout>
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-brand-red/20">
                        <Repeat className="w-4 h-4" /> Módulo 3
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Técnicas de Ruptura do Ciclo</h1>
                    <p className="text-brand-muted text-lg leading-relaxed">
                        A vontade veio forte? Use estas ferramentas de emergência para "hackear" seu sistema nervoso e cortar o looping da compulsão na hora.
                    </p>
                </div>

                <div className="grid gap-8">
                    {/* Technique 1 */}
                    <div className="bg-brand-surface rounded-3xl p-8 border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Wind className="w-32 h-32 text-brand-red" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="bg-brand-red text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                            Respiração 4-7-8
                        </h3>
                        <p className="text-gray-300 mb-6 relative z-10">
                            Acalma o sistema nervoso simpático (luta ou fuga) e ativa o parassimpático (relaxamento) em menos de 2 minutos.
                        </p>
                        <div className="bg-black/40 p-6 rounded-xl border border-gray-700 relative z-10">
                            <ol className="list-decimal list-inside space-y-3 text-brand-muted">
                                <li>Inspire pelo nariz contando até <span className="text-white font-bold">4</span>.</li>
                                <li>Segure o ar contando até <span className="text-white font-bold">7</span>.</li>
                                <li>Solte o ar pela boca (fazendo som de 'shhh') contando até <span className="text-white font-bold">8</span>.</li>
                                <li>Repita o ciclo 4 vezes.</li>
                            </ol>
                        </div>
                    </div>

                    {/* Technique 2 */}
                    <div className="bg-brand-surface rounded-3xl p-8 border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Zap className="w-32 h-32 text-brand-gold" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="bg-brand-gold text-black w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                            Técnica do Surf (Urge Surfing)
                        </h3>
                        <p className="text-gray-300 mb-6 relative z-10">
                            A vontade de comer doce é como uma onda: ela cresce, quebra e depois desaparece. Você não precisa lutar contra a onda, apenas surfar até ela passar.
                        </p>
                        <div className="bg-black/40 p-6 rounded-xl border border-gray-700 relative z-10">
                            <ul className="space-y-3 text-brand-muted">
                                <li className="flex gap-2">
                                    <span className="text-brand-gold">🌊</span>
                                    <span>Reconheça a vontade: "Estou sentindo vontade de doce agora".</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-brand-gold">🧘</span>
                                    <span>Observe as sensações físicas: Onde você sente? Na boca? No estômago?</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-brand-gold">⏳</span>
                                    <span>Espere 3 minutos apenas observando, sem julgar e sem ceder.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Technique 3 */}
                    <div className="bg-brand-surface rounded-3xl p-8 border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <XCircle className="w-32 h-32 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
                            O "NÃO" Definitivo
                        </h3>
                        <p className="text-gray-300 mb-6 relative z-10">
                            Às vezes, a negociação interna é o problema. "Só um pedacinho" é uma armadilha.
                        </p>
                        <div className="bg-black/40 p-6 rounded-xl border border-gray-700 relative z-10">
                            <p className="text-brand-muted italic mb-4">
                                "Eu não como doce durante a semana. Ponto."
                            </p>
                            <p className="text-sm text-gray-400">
                                Quando você cria uma regra absoluta, você elimina a fadiga de decisão. Seu cérebro para de gastar energia tentando decidir se "hoje pode".
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a href="/entregavel1/anti-recaida" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-darkRed text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand-red/20">
                        Próximo: Plano Anti-Recaída <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </MemberLayout>
    );
};

export default RupturaPage;
