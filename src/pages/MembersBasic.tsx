import React from 'react';
import MemberLayout from '../components/members/MemberLayout';
import ContentCard from '../components/members/ContentCard';
import { BookOpen } from 'lucide-react';

const MembersBasic: React.FC = () => {
    return (
        <MemberLayout>
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Bem-vindo(a) à Área de Membros</h1>
                    <p className="text-brand-muted">Aqui está o seu material exclusivo. Aproveite!</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <ContentCard
                        title="Guia Digital: 21 Trocas Inteligentes"
                        description="O manual completo com as substituições que vão enganar seu cérebro e cortar a vontade de doce."
                        icon={<BookOpen />}
                        buttonText="Baixar PDF"
                        href="/downloads/Trocas-que-CORTAM-a-Vontade-de-Doce.pdf"
                        delay={0.1}
                    />

                    {/* Upsell Card for Basic Members */}
                    <div className="bg-gradient-to-br from-brand-red/10 to-black rounded-2xl p-6 border border-brand-red/30 flex flex-col items-center text-center justify-center h-full">
                        <h3 className="text-xl font-bold text-white mb-2">Quer acelerar seus resultados?</h3>
                        <p className="text-brand-muted text-sm mb-4">
                            Desbloqueie o Protocolo Completo com 3 Bônus Exclusivos por apenas R$ 9,90.
                        </p>
                        <a
                            href="https://www.ggcheckout.com/checkout/v2/XrkcNcyFJ9STMclXnBqf"
                            className="bg-brand-red hover:bg-brand-darkRed text-white font-bold py-2 px-6 rounded-lg transition-colors w-full"
                        >
                            Fazer Upgrade Agora
                        </a>
                    </div>
                </div>
            </div>
        </MemberLayout>
    );
};

export default MembersBasic;
