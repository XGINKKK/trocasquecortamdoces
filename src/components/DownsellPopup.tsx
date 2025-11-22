import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface DownsellPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onAccept: () => void;
    onDecline: () => void;
}

const DownsellPopup: React.FC<DownsellPopupProps> = ({ isOpen, onClose, onAccept, onDecline }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-brand-surface rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-brand-red overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/10 mb-4 animate-pulse">
                                <span className="text-2xl">🎁</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Espere! Não vá embora ainda...</h3>
                            <p className="text-brand-muted">
                                Eu quero muito que você tenha acesso a esse conhecimento. Por isso, vou fazer algo especial.
                            </p>
                        </div>

                        <div className="bg-black/30 p-4 rounded-xl mb-6 border border-brand-red/20">
                            <p className="text-center font-medium text-white mb-2">Leve o <span className="text-brand-red font-bold">Protocolo Completo</span> por apenas:</p>
                            <div className="text-center flex items-baseline justify-center gap-2">
                                <span className="text-4xl font-extrabold text-brand-red">R$ 5,99</span>
                                <span className="text-gray-400 line-through text-lg">R$ 9,90</span>
                            </div>
                            <p className="text-center text-xs text-gray-500 mt-1">Oferta única e intransferível.</p>
                        </div>

                        <div className="space-y-3">
                            <Button
                                variant="primary"
                                fullWidth
                                onClick={onAccept}
                                className="bg-gradient-to-r from-brand-red to-brand-darkRed"
                            >
                                Quero Aproveitar o Desconto
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <button
                                onClick={onDecline}
                                className="w-full py-3 text-sm text-gray-400 hover:text-gray-600 font-medium"
                            >
                                Não obrigado, prefiro continuar sem o método.
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DownsellPopup;
