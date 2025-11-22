import React from 'react';
import MemberLayout from '../components/members/MemberLayout';
import { Activity, Calendar, ArrowRight } from 'lucide-react';

const ProtocoloPage: React.FC = () => {
    const days = [
        {
            day: 1,
            title: "O Choque de Realidade",
            task: "Elimine todo o açúcar visível da sua casa. Se não estiver lá, você não come. A força de vontade tem limite, o ambiente não.",
            tip: "Jogue fora ou doe. Não guarde 'para visitas'."
        },
        {
            day: 2,
            title: "Hidratação Estratégica",
            task: "Beba 500ml de água assim que acordar e 30min antes de cada refeição.",
            tip: "Muitas vezes o cérebro confunde sede com vontade de doce."
        },
        {
            day: 3,
            title: "Proteína no Café da Manhã",
            task: "Comece o dia com ovos, iogurte ou whey. Nada de pão com geleia.",
            tip: "Isso estabiliza sua glicose pelo resto do dia e reduz drasticamente a fissura da tarde."
        },
        {
            day: 4,
            title: "A Regra dos 10 Minutos",
            task: "Quando der vontade, espere 10 minutos cronometrados antes de ceder.",
            tip: "A fissura é uma onda. Ela sobe, atinge o pico e desce. Se você esperar, ela passa."
        },
        {
            day: 5,
            title: "Sono Reparador",
            task: "Desligue telas 1h antes de dormir. Durma pelo menos 7h.",
            tip: "Noites mal dormidas aumentam o hormônio da fome (grelina) e diminuem o da saciedade."
        },
        {
            day: 6,
            title: "Sabores Amargos",
            task: "Introduza café sem açúcar, chocolate 70% ou chás amargos.",
            tip: "O paladar se adapta. O amargo 'limpa' as papilas gustativas do vício em doce."
        },
        {
            day: 7,
            title: "Celebração Consciente",
            task: "Analise sua semana. Como você se sentiu? Mais energia? Menos inchaço?",
            tip: "Escreva 3 benefícios que você já sentiu. Isso reforça o novo comportamento."
        }
    ];

    return (
        <MemberLayout>
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-brand-red/20">
                        <Activity className="w-4 h-4" /> Módulo 2
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Protocolo de Reprogramação (7 Dias)</h1>
                    <p className="text-brand-muted text-lg leading-relaxed">
                        Este não é um teste de força de vontade. É um manual de instruções para o seu cérebro. Siga um passo por dia para resetar seus receptores de dopamina.
                    </p>
                </div>

                <div className="space-y-6 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-800 hidden md:block"></div>

                    {days.map((day) => (
                        <div key={day.day} className="relative md:pl-12">
                            {/* Number Bubble */}
                            <div className="hidden md:flex absolute left-0 top-0 w-8 h-8 bg-brand-surface border-2 border-brand-red rounded-full items-center justify-center font-bold text-brand-red z-10">
                                {day.day}
                            </div>

                            <div className="bg-brand-surface p-6 rounded-2xl border border-gray-800 hover:border-brand-red/30 transition-colors">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <span className="md:hidden text-brand-red">Dia {day.day}:</span>
                                        {day.title}
                                    </h3>
                                    <Calendar className="w-5 h-5 text-gray-600" />
                                </div>
                                <p className="text-gray-300 mb-4 text-lg">{day.task}</p>
                                <div className="bg-black/30 p-3 rounded-lg border-l-2 border-brand-gold">
                                    <p className="text-sm text-brand-muted">
                                        <span className="text-brand-gold font-bold mr-1">Dica Pro:</span>
                                        {day.tip}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="/entregavel1/ruptura" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-darkRed text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand-red/20">
                        Próximo: Técnicas de Ruptura <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </MemberLayout>
    );
};

export default ProtocoloPage;
