import React from 'react';
import MemberLayout from '../components/members/MemberLayout';
import ContentCard from '../components/members/ContentCard';
import { Brain, Activity, Shield, Repeat } from 'lucide-react';

const ProductsPage: React.FC = () => {
    return (
        <MemberLayout>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-brand-red/20">
                        <Brain className="w-4 h-4" /> Programa Completo
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                        Quebra do <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-darkRed">Ciclo da Compulsão</span>
                    </h1>
                    <p className="text-xl text-brand-muted max-w-3xl leading-relaxed">
                        Conheça os quatro módulos que irão transformar seu relacionamento com o açúcar e eliminar o padrão de compulsão.
                    </p>
                </div>

                {/* Modules Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    <ContentCard
                        title="Módulo 1: Diagnóstico do Gatilho Raiz"
                        description="Descubra qual dos 5 gatilhos emocionais é o SEU responsável por ativar o impulso. Pare de lutar contra o inimigo errado."
                        icon={<Brain />}
                        buttonText="Iniciar Diagnóstico"
                        href="#"
                        delay={0.1}
                    />

                    <ContentCard
                        title="Módulo 2: Protocolo de Reprogramação (7 dias)"
                        description="Sequência de 7 dias que recondiciona o cérebro a perder o hábito de buscar doce como recompensa automática."
                        icon={<Activity />}
                        buttonText="Acessar Protocolo"
                        href="#"
                        delay={0.2}
                    />

                    <ContentCard
                        title="Módulo 3: Técnicas de Ruptura do Ciclo"
                        description="Ferramentas práticas que cortam o looping: Ansiedade → Doce → Culpa → Mais Doce."
                        icon={<Repeat />}
                        buttonText="Ver Ferramentas"
                        href="#"
                        delay={0.3}
                    />

                    <ContentCard
                        title="Módulo 4: Plano Anti‑Recaída (30 dias)"
                        description="Rotina blindada de 30 dias para consolidar o novo comportamento e garantir que você nunca mais volte à estaca zero."
                        icon={<Shield />}
                        buttonText="Baixar Plano 30 dias"
                        href="#"
                        delay={0.4}
                    />
                </div>
            </div>
        </MemberLayout>
    );
};

export default ProductsPage;
