import React from 'react';
import { Menu, X, Volume2 } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled ? 'bg-surface/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Volume2 className="w-5 h-5 text-white" />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
                        </div>
                        <span className="text-xl font-bold text-white">오늘의 소리</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-text-secondary hover:text-white transition-colors font-medium">
                            주요 기능
                        </a>
                        <a href="#solution" className="text-text-secondary hover:text-white transition-colors font-medium">
                            해결책
                        </a>
                        <a 
                            href="#download" 
                            className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            다운로드
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-surface-light/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}>
                <div className="px-4 py-6 space-y-2">
                    <a href="#features" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-text-secondary hover:text-white hover:bg-white/5 transition-all font-medium">
                        주요 기능
                    </a>
                    <a href="#solution" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-text-secondary hover:text-white hover:bg-white/5 transition-all font-medium">
                        해결책
                    </a>
                    <a href="#download" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold text-center mt-4">
                        다운로드
                    </a>
                </div>
            </div>
        </header>
    );
}
