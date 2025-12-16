import React from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/todaySound.svg" alt="오늘의 소리" className="w-8 h-8" />
            <span className="font-semibold text-white">오늘의 소리</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-text-secondary hover:text-white transition-colors"
            >
              기능
            </a>
            <a
              href="#solution"
              className="text-sm text-text-secondary hover:text-white transition-colors"
            >
              해결책
            </a>
            <a
              href="#download"
              className="text-sm bg-primary text-black px-4 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors"
            >
              다운로드
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-light border-t border-white/5">
          <div className="px-6 py-4 space-y-3">
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="block text-sm text-text-secondary py-2"
            >
              기능
            </a>
            <a
              href="#solution"
              onClick={() => setIsOpen(false)}
              className="block text-sm text-text-secondary py-2"
            >
              해결책
            </a>
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="block text-sm text-primary py-2"
            >
              다운로드
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
