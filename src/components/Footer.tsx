import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-black text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Não deixe a próxima vontade de doce vencer você.</h3>
                    <p className="text-brand-muted">Comece hoje mesmo.</p>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2025 - Todos os direitos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
