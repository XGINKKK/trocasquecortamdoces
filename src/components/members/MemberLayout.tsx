import React from 'react';
import MemberHeader from './MemberHeader';
import ParticleBackground from '../ParticleBackground';

interface MemberLayoutProps {
    children: React.ReactNode;
}

const MemberLayout: React.FC<MemberLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
            <ParticleBackground />
            <MemberHeader />
            <main className="relative z-10 container mx-auto px-4 py-12">
                {children}
            </main>
        </div>
    );
};

export default MemberLayout;
