import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Shield, Zap, Smile } from 'lucide-react';

// Floating animation (same as Hero)
const floatingTarget = { y: [0, -12, 0], rotate: [0, 2, -2, 0] };
const floatingTransition = { duration: 5, repeat: Infinity, ease: 'linear' as const };

// 3D mockup component with mouse‑parallax and back cover for depth
interface BonusMockupProps {
    title: string;
    subtitle?: string;
    color: string; // Tailwind gradient class, e.g. "from-brand-red to-brand-darkRed"
    extra?: React.ReactNode;
}

const BonusMockup: React.FC<BonusMockupProps> = ({ title, subtitle, color, extra }) => {
    // Motion values for mouse‑parallax
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const xPct = mx / rect.width - 0.5;
        const yPct = my / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="relative w-48 h-64 md:w-56 md:h-80 mx-auto perspective-1000"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Front cover with parallax */}
            <motion.div
                className="absolute inset-0"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                animate={floatingTarget}
                transition={floatingTransition}
            >
                {/* Spine */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gray-900 transform -translate-x-1/2 rotate-y-90 origin-right rounded-l-sm border-l border-white/10" />
                {/* Front cover */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${color} rounded-r-2xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 md:p-6 border-l-4 border-white/10 backface-hidden`}
                >
                    {extra && <div className="mb-2 flex items-center justify-center">{extra}</div>}
                    <span className="text-xs font-bold tracking-[0.15em] text-white/80 uppercase block mb-1">Bônus</span>
                    <h3 className="text-xl md:text-2xl font-black text-white text-center leading-tight">{title}</h3>
                    {subtitle && (
                        <h4 className="text-2xl md:text-3xl font-black text-white mt-1 leading-none text-center">{subtitle}</h4>
                    )}
                </div>
                {/* Back cover for depth */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-30 rounded-r-2xl rounded-l-sm shadow-inner transform translate-x-2 translate-y-2`}
                />
                {/* Pages effect */}
                <div className="absolute top-2 bottom-2 right-2 w-3 bg-white rounded-r-md shadow-inner transform translate-z-[-10px]" />
                <div className="absolute top-3 bottom-3 right-3 w-2 bg-gray-100 rounded-r-md shadow-inner transform translate-z-[-20px]" />
                {/* Glow */}
                <div
                    className={`absolute top-4 bottom-0 left-4 right-[-15px] bg-gradient-to-r ${color} opacity-30 filter blur-2xl transform translate-z-[-50px] rounded-full`}
                />
            </motion.div>
        </motion.div>
    );
};

// Card component wrapping the mockup and description
interface BonusCardProps {
    title: string;
    description: string;
    value: string;
    color: string;
    delay: number;
    icon: React.ReactNode;
}

const BonusCard: React.FC<BonusCardProps> = ({ title, description, value, color, delay, icon }) => {
    const parts = title.split(':');
    const mainTitle = parts[0].trim();
    const subTitle = parts[1]?.trim();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-brand-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 flex flex-col items-center p-4"
        >
            <BonusMockup title={mainTitle} subtitle={subTitle} color={color} extra={icon} />
            <div className="p-2 flex-grow flex flex-col items-center text-center mt-4">
                <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{description}</p>
                <div className="pt-2 border-t border-gray-800 w-full">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Valor:</span>
                    <div className="flex items-baseline justify-center gap-2 mt-1">
                        <span className="text-2xl font-bold text-brand-red">R$ 0</span>
                        <span className="text-sm text-gray-400 line-through">{value}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Bonuses: React.FC = () => (
    <section className="py-20 bg-brand-black">
        <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
                <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Oferta Limitada</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-text">3 Presentes Exclusivos Para Você</h2>
                <p className="text-brand-muted text-lg">Ao garantir seu guia hoje, você recebe gratuitamente:</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <BonusCard
                    icon={<Shield className="w-12 h-12 text-white" />}
                    title="Bônus 1: Protocolo S.O.S."
                    description="O passo a passo exato do que fazer quando a vontade bater forte. Tenha um plano de ação."
                    value="R$ 29,90"
                    color="from-brand-red to-brand-darkRed"
                    delay={0}
                />
                <BonusCard
                    icon={<Zap className="w-12 h-12 text-white" />}
                    title="Bônus 2: Radar de Gatilhos"
                    description="Aprenda a identificar (e evitar) as situações que disparam sua vontade de doce."
                    value="R$ 29,90"
                    color="from-brand-gold to-yellow-600"
                    delay={0.2}
                />
                <BonusCard
                    icon={<Smile className="w-12 h-12 text-white" />}
                    title="Bônus 3: Detox Emocional"
                    description="Técnicas simples para não descontar suas emoções na comida."
                    value="R$ 29,90"
                    color="from-gray-800 to-brand-red"
                    delay={0.4}
                />
            </div>
        </div>
    </section>
);

export default Bonuses;
