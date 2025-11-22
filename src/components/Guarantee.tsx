import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
    return (
        <section className="py-16 bg-brand-black text-white">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-red/20 mb-8">
                    <ShieldCheck className="w-10 h-10 text-brand-red" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sua Garantia Blindada de 7 Dias</h2>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Escolha qualquer uno dos planos acima. Se você não gostar, se achar que não funciona para você, ou se arrepender por qualquer motivo, eu devolvo 100% do seu dinheiro.
                </p>

                <p className="text-2xl font-bold text-white">
                    Seja R$ 1,99 ou R$ 9,90. O risco é todo meu.
                </p>
            </div>
        </section>
    );
};

export default Guarantee;
