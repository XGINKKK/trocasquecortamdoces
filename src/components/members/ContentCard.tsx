import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Lock } from 'lucide-react';
import { Button } from '../Button';

interface ContentCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    buttonText?: string;
    href?: string;
    onClick?: () => void;
    locked?: boolean;
    delay?: number;
}

const ContentCard: React.FC<ContentCardProps> = ({
    title,
    description,
    icon,
    buttonText = "Acessar Conteúdo",
    href,
    onClick,
    locked = false,
    delay = 0
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className={`bg-brand-surface rounded-2xl p-6 border ${locked ? 'border-gray-800 opacity-75' : 'border-gray-700 hover:border-brand-red/50'} transition-all duration-300 flex flex-col h-full group`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${locked ? 'bg-gray-800' : 'bg-brand-red/10 group-hover:bg-brand-red/20'} transition-colors`}>
                    {locked ? (
                        <Lock className="w-6 h-6 text-gray-500" />
                    ) : (
                        React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-brand-red" })
                    )}
                </div>
                {locked && (
                    <span className="text-xs font-bold bg-gray-800 text-gray-400 px-2 py-1 rounded-full uppercase tracking-wider">
                        Bloqueado
                    </span>
                )}
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors">
                {title}
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            <div className="mt-auto">
                {locked ? (
                    <Button variant="outline" fullWidth disabled className="opacity-50 cursor-not-allowed border-gray-700 text-gray-500">
                        Indisponível
                    </Button>
                ) : (
                    <Button
                        variant="primary"
                        fullWidth
                        onClick={onClick}
                        className="flex items-center justify-center gap-2"
                    >
                        {href ? (
                            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-center">
                                {buttonText} <ExternalLink className="w-4 h-4" />
                            </a>
                        ) : (
                            <>
                                {buttonText} <Download className="w-4 h-4" />
                            </>
                        )}
                    </Button>
                )}
            </div>
        </motion.div>
    );
};

export default ContentCard;
