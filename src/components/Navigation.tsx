import { useState, useEffect } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F17]/80 backdrop-blur-lg border-b border-[#00E0FF]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-mono text-lg lg:text-xl tracking-tight hover:text-[#00E0FF] transition-colors"
          >
            <span className="text-[#00E0FF]">{'<'}</span>
            <span>Ghouti YC</span>
            <span className="text-[#00E0FF]">{'/>'}</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => window.open('#courses-page', '_blank')}
              className="text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#00E0FF]/30 text-[#00E0FF] hover:bg-[#00E0FF]/10 transition-all text-sm"
              onClick={() => window.open('#ko-fi-page', '_blank')}
            >
              Support
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#00E0FF]/30 text-[#00E0FF] hover:bg-[#00E0FF]/10 transition-all text-sm"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#E6EEF6]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#00E0FF]/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors py-2"
              >
                Projects
              </button>
              <button
                onClick={() => window.open('#courses-page', '_blank')}
                className="text-left text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors py-2"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors py-2"
              >
                Contact
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#00E0FF]/30 text-[#00E0FF] hover:bg-[#00E0FF]/10 transition-all text-sm w-full justify-center mt-2"
                onClick={() => window.open('#ko-fi-page', '_blank')}
              >
                Support Me
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#00E0FF]/30 text-[#00E0FF] hover:bg-[#00E0FF]/10 transition-all text-sm w-full justify-center"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}