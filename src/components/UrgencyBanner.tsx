import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const UrgencyBanner: React.FC = () => {
    return (
        <div className="bg-brand-red text-white py-3 px-4 text-center relative z-50">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm font-medium">
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex-shrink-0"
                >
                    <Clock className="w-4 h-4" />
                </motion.div>
                <p className="text-center">
                    Oferta de Lançamento: <span className="font-bold text-yellow-300">90% de Desconto</span> por tempo limitado.
                </p>
            </div>
        </div>
    );
};

export default UrgencyBanner;
