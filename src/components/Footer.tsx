import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Next.js', icon: '▲' },
  ];

  return (
    <footer className="relative bg-[#0B0F17] border-t border-[#00E0FF]/20 py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-mono text-xl">
              <span className="text-[#00E0FF]">{'<'}</span>
              <span className="text-[#E6EEF6]">Ghouti YC</span>
              <span className="text-[#00E0FF]">{'/>'}</span>
            </div>
            <p className="text-sm text-[#9AA6B2]">
              Network Engineering Student specializing in full-stack development, system design, AI integration, and cybersecurity operations.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/GhoutiYellesCH"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#00E0FF]/30 flex items-center justify-center text-[#00E0FF] hover:bg-[#00E0FF]/10 hover:border-[#00E0FF] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ghouti-yelles-chaouche"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#00E0FF]/30 flex items-center justify-center text-[#00E0FF] hover:bg-[#00E0FF]/10 hover:border-[#00E0FF] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/GoutiY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#00E0FF]/30 flex items-center justify-center text-[#00E0FF] hover:bg-[#00E0FF]/10 hover:border-[#00E0FF] transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-[#7FD3FF] tracking-wider">NAVIGATE</h3>
            <nav className="flex flex-col gap-2">
              {['Home', 'Projects', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-[#7FD3FF] tracking-wider">EXPERTISE</h3>
            <nav className="flex flex-col gap-2">
              {['Full-Stack Dev', 'Cloud & AI', 'Red Team', 'Blue Team'].map((item) => (
                <a
                  key={item}
                  href="#services"
                  className="text-sm text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-[#7FD3FF] tracking-wider">CONTACT</h3>
            <div className="space-y-3">
              <a
                href="mailto:ghouti.yells@engineer.com"
                className="flex items-center gap-2 text-sm text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#00E0FF]" />
                <span>ghouti.yelles@engineer.com</span>
              </a>
              <a
                href="https://zcal.co/ghouti-yelles/30min"
                className="flex items-center gap-2 text-sm text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors group"
              >
                <ExternalLink className="w-4 h-4 text-[#00E0FF]" />
                <span>Schedule a call</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-[#00E0FF]/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-[#9AA6B2] font-mono">
              © 2025 Ghouti Yelles Chaouche. All rights reserved.
            </p>

            {/* Built with */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#7FD3FF] font-mono">Built with:</span>
              <div className="flex gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-2 py-1 rounded bg-[#0F1724] border border-[#00E0FF]/20 text-xs font-mono text-[#9AA6B2] hover:text-[#E6EEF6] hover:border-[#00E0FF]/40 transition-all cursor-default"
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Last deploy - terminal style */}
            <div className="font-mono text-xs text-[#7FD3FF]">
              <span className="text-[#9AA6B2]">{'>'} last deploy:</span> 2025-11-07
            </div>
          </div>
        </div>

        {/* Terminal easter egg */}
        <div className="mt-8 p-4 rounded-lg bg-[#0F1724]/50 border border-[#00E0FF]/10 font-mono text-xs text-[#7FD3FF] hidden lg:block">
          <span className="text-[#9AA6B2]">$</span> echo "Thanks for visiting! Feel free to reach out." <span className="animate-pulse">|</span>
        </div>
      </div>
    </footer>
  );
}