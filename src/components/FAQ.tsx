import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "Qual a diferença real entre os planos?",
            answer: "No plano de R$ 1,99 você leva apenas o livro de receitas das trocas. No plano de R$ 9,90 você leva o Sistema Completo: as receitas + as ferramentas psicológicas para controlar a ansiedade e os gatilhos emocionais (S.O.S, Radar e Detox). É a diferença entre 'saber o que comer' e 'ter controle sobre a vontade de comer'."
        },
        {
            question: "Chega pelo correio?",
            answer: "Não! É um produto 100% digital (PDF). Você recebe o acesso no seu e-mail imediatamente após o pagamento e pode ler no celular, tablet ou computador."
        },
        {
            question: "Serve para diabéticos?",
            answer: "As trocas focam na redução drástica de açúcar e índice glicêmico, o que é excelente. Porém, se você tem condições médicas, sempre consulte seu médico."
        }
    ];

    return (
        <section className="py-20 bg-brand-black">
            <div className="container mx-auto max-w-3xl px-4">
                <div className="text-center mb-12">
                    <HelpCircle className="w-12 h-12 text-brand-red mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-brand-text">Perguntas Frequentes</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-800 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-brand-surface hover:bg-gray-900 transition-colors text-left"
            >
                <span className="font-bold text-white text-lg">{question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 pt-0 text-brand-muted leading-relaxed border-t border-gray-800">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQ;
