import React from 'react';
import MemberLayout from '../components/members/MemberLayout';
import { Shield, CheckSquare, Star } from 'lucide-react';

const AntiRecaidaPage: React.FC = () => {
    return (
        <MemberLayout>
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-brand-red/20">
                        <Shield className="w-4 h-4" /> Módulo 4
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Plano Anti-Recaída (30 Dias)</h1>
                    <p className="text-brand-muted text-lg leading-relaxed">
                        Você já sabe como começar. Agora vamos garantir que você não pare. A consistência é o segredo para transformar uma "dieta" em um novo estilo de vida.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-brand-surface p-8 rounded-3xl border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <CheckSquare className="text-brand-gold" />
                            Checklist Diário de Manutenção
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Dormir 7-8 horas por noite",
                                "Beber 2-3 litros de água",
                                "Comer proteína em todas as refeições",
                                "Não ter doces estocados em casa",
                                "Praticar 5 min de respiração/meditação"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-brand-muted">
                                    <div className="w-5 h-5 rounded border border-gray-600 flex-shrink-0 mt-0.5"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-brand-surface p-8 rounded-3xl border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Star className="text-brand-red" />
                            Regra de Ouro 90/10
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Depois dos primeiros 30 dias, você pode reintroduzir o doce de forma estratégica, sem perder o controle.
                        </p>
                        <div className="bg-black/40 p-4 rounded-xl">
                            <p className="text-sm text-brand-muted">
                                <strong className="text-white">90% do tempo:</strong> Alimentação limpa, nutritiva e sem açúcar adicionado.
                            </p>
                            <div className="h-px bg-gray-700 my-3"></div>
                            <p className="text-sm text-brand-muted">
                                <strong className="text-white">10% do tempo:</strong> Exceções planejadas. Coma algo que você ama, fora de casa, em porção individual, e aproveite cada mordida sem culpa.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-brand-red/20 to-black p-8 rounded-3xl border border-brand-red/30 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Parabéns! Você completou o programa.</h3>
                    <p className="text-brand-muted mb-8 max-w-2xl mx-auto">
                        Lembre-se: recaídas podem acontecer. Se você comer um doce fora do plano, não jogue tudo para o alto. Apenas volte para o protocolo na próxima refeição. O jogo é sobre consistência, não perfeição.
                    </p>
                    <a href="/entregavel1" className="text-white font-bold hover:text-brand-red transition-colors underline">
                        Voltar para o Início do Curso
                    </a>
                </div>
            </div>
        </MemberLayout>
    );
};

export default AntiRecaidaPage;
