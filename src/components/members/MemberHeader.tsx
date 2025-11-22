import React from 'react';
import { Brain, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemberHeader: React.FC = () => {
    return (
        <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-brand-red p-1.5 rounded-lg">
                        <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-white tracking-tight hidden md:block">
                        Trocas<span className="text-brand-red">Inteligentes</span>
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400 hidden md:block">Área de Membros</span>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-red transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Sair</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default MemberHeader;
