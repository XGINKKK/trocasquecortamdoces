import React, { useState } from 'react';
import { Shield, Lock, CreditCard, Clock, Flame } from 'lucide-react';
import { Button } from '../components/Button';
import ParticleBackground from '../components/ParticleBackground';

const CheckoutMockup: React.FC = () => {
    const [selectedPayment, setSelectedPayment] = useState('credit');

    return (
        <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
            <ParticleBackground />

            {/* Urgency Header */}
            <div className="bg-gradient-to-r from-brand-red to-brand-darkRed text-white py-3 text-center font-bold text-sm md:text-base sticky top-0 z-50 shadow-lg flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 animate-pulse" />
                <span>OFERTA POR TEMPO LIMITADO: 00:09:45</span>
            </div>

            <div className="container mx-auto max-w-6xl px-4 py-8 relative z-10">

                {/* Header / Logo */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold">
                        Trocas<span className="text-brand-red">Inteligentes</span>
                    </h1>
                    <p className="text-brand-muted text-sm">Finalize sua inscrição abaixo</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Product Summary & Order Bumps */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Product Summary */}
                        <div className="bg-brand-surface border border-gray-800 rounded-2xl p-6 shadow-xl">
                            <div className="aspect-video bg-gradient-to-br from-brand-red/20 to-black rounded-lg mb-4 flex items-center justify-center border border-brand-red/30">
                                <span className="font-bold text-brand-red">Capa do Produto</span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">Protocolo Corta-Vontade 360º</h3>
                            <p className="text-sm text-brand-muted mb-4">Acesso Imediato + 3 Bônus Exclusivos</p>
                            <div className="flex justify-between items-center border-t border-gray-800 pt-4">
                                <span className="text-sm">Total:</span>
                                <div className="text-right">
                                    <span className="text-xs text-gray-500 line-through block">R$ 97,00</span>
                                    <span className="text-xl font-bold text-brand-gold">R$ 9,90</span>
                                </div>
                            </div>
                        </div>

                        {/* Order Bump 1 */}
                        <div className="bg-brand-surface border-2 border-dashed border-brand-gold/30 rounded-2xl p-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-brand-gold text-black text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                                OFERTA ÚNICA
                            </div>
                            <div className="flex gap-3 items-start">
                                <input type="checkbox" className="mt-1 w-5 h-5 accent-brand-gold rounded" />
                                <div>
                                    <h4 className="font-bold text-sm text-white">Levar também: Guia de Bebidas Zero Vontade</h4>
                                    <p className="text-xs text-brand-muted mt-1">
                                        Aprenda a fazer drinks e bebidas que cortam a vontade de doce instantaneamente.
                                    </p>
                                    <p className="text-brand-gold font-bold text-sm mt-2">+ R$ 5,90</p>
                                </div>
                            </div>
                        </div>

                        {/* Order Bump 2 */}
                        <div className="bg-brand-surface border border-gray-800 rounded-2xl p-4 hover:border-gray-600 transition-colors">
                            <div className="flex gap-3 items-start">
                                <input type="checkbox" className="mt-1 w-5 h-5 accent-brand-red rounded" />
                                <div>
                                    <h4 className="font-bold text-sm text-white">S.O.S. Anti-Compulsão</h4>
                                    <p className="text-xs text-brand-muted mt-1">
                                        O áudio secreto para ouvir quando estiver prestes a atacar a geladeira.
                                    </p>
                                    <p className="text-brand-red font-bold text-sm mt-2">+ R$ 4,90</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Payment Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-brand-surface border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
                            <div className="flex items-center gap-2 mb-6">
                                <Lock className="w-5 h-5 text-brand-gold" />
                                <h2 className="font-bold text-xl">Dados de Pagamento</h2>
                            </div>

                            {/* Personal Info */}
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="space-y-1">
                                    <label className="text-xs text-brand-muted uppercase font-bold">Nome Completo</label>
                                    <input type="text" placeholder="Seu nome aqui" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none transition-colors" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-brand-muted uppercase font-bold">E-mail</label>
                                    <input type="email" placeholder="seu@email.com" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none transition-colors" />
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="mb-6">
                                <label className="text-xs text-brand-muted uppercase font-bold mb-2 block">Forma de Pagamento</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <button
                                        onClick={() => setSelectedPayment('credit')}
                                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${selectedPayment === 'credit' ? 'bg-brand-red/10 border-brand-red text-white' : 'bg-black/30 border-gray-700 text-gray-400 hover:border-gray-500'}`}
                                    >
                                        <CreditCard className="w-6 h-6 mb-1" />
                                        <span className="text-xs font-medium">Cartão</span>
                                    </button>
                                    <button
                                        onClick={() => setSelectedPayment('pix')}
                                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${selectedPayment === 'pix' ? 'bg-brand-red/10 border-brand-red text-white' : 'bg-black/30 border-gray-700 text-gray-400 hover:border-gray-500'}`}
                                    >
                                        <Flame className="w-6 h-6 mb-1" />
                                        <span className="text-xs font-medium">Pix</span>
                                    </button>
                                </div>
                            </div>

                            {/* Credit Card Form */}
                            {selectedPayment === 'credit' && (
                                <div className="space-y-4 animate-fade-in">
                                    <div className="space-y-1">
                                        <label className="text-xs text-brand-muted uppercase font-bold">Número do Cartão</label>
                                        <div className="relative">
                                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none transition-colors pl-12" />
                                            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs text-brand-muted uppercase font-bold">Validade</label>
                                            <input type="text" placeholder="MM/AA" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs text-brand-muted uppercase font-bold">CVV</label>
                                            <input type="text" placeholder="123" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Pix Instructions */}
                            {selectedPayment === 'pix' && (
                                <div className="bg-brand-red/10 border border-brand-red/30 rounded-xl p-4 text-center animate-fade-in">
                                    <p className="text-sm text-white mb-2">Liberação imediata!</p>
                                    <p className="text-xs text-brand-muted">Você receberá o QR Code na próxima tela.</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="mt-8">
                                <Button variant="primary" size="lg" fullWidth className="bg-gradient-to-r from-brand-gold to-yellow-600 hover:from-yellow-500 hover:to-yellow-600 text-black font-black border-none shadow-lg shadow-brand-gold/20">
                                    COMPRAR AGORA - R$ 9,90
                                </Button>

                                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Pagamento Seguro</span>
                                    <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Garantia de 7 Dias</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutMockup;
