import React from 'react';
import MemberLayout from '../components/members/MemberLayout';
import ContentCard from '../components/members/ContentCard';
import { BookOpen, Shield, Zap, Smile, Star } from 'lucide-react';

const MembersPremium: React.FC = () => {
    return (
        <MemberLayout>
            <div className="max-w-6xl mx-auto">
                <div className="mb-10 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-sm font-bold mb-4 border border-brand-gold/20">
                        <Star className="w-4 h-4 fill-current" /> Membro Premium
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Sua Jornada Começa Agora</h1>
                    <p className="text-brand-muted text-lg">Acesse abaixo todo o material do seu Protocolo Corta-Vontade 360º.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Main Guide - Featured */}
                    <div className="md:col-span-2 lg:col-span-3">
                        <ContentCard
                            title="Guia Digital: 21 Trocas Inteligentes"
                            description="O manual completo. Comece por aqui para entender os fundamentos e aplicar as primeiras trocas imediatas."
                            icon={<BookOpen />}
                            buttonText="Baixar Guia Completo (PDF)"
                            href="/downloads/Trocas-que-CORTAM-a-Vontade-de-Doce.pdf"
                            delay={0.1}
                        />
                    </div>

                    {/* Bonuses */}
                    <ContentCard
                        title="Bônus 1: Protocolo S.O.S."
                        description="Plano de ação de emergência para momentos de crise aguda de vontade de doce."
                        icon={<Shield />}
                        buttonText="Acessar Protocolo"
                        href="/downloads/PARE-Nao-coma-ainda.pdf"
                        delay={0.2}
                    />

                    <ContentCard
                        title="Bônus 2: Radar de Gatilhos"
                        description="Ferramenta para identificar e neutralizar os gatilhos emocionais e ambientais."
                        icon={<Zap />}
                        buttonText="Acessar Ferramenta"
                        href="/downloads/Mapa-dos-Gatilhos-Ocultos.pdf"
                        delay={0.3}
                    />

                    <ContentCard
                        title="Bônus 3: Detox Emocional"
                        description="Áudios e exercícios para limpar a dependência emocional do açúcar."
                        icon={<Smile />}
                        buttonText="Acessar Detox"
                        href="/downloads/Desintoxicacao-Emocional-em-24h.pdf"
                        delay={0.4}
                    />
                </div>
            </div>
        </MemberLayout>
    );
};

export default MembersPremium;
