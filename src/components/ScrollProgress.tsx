import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: '00' },
  { id: 'intro-video', label: '01' },
  { id: 'services', label: '02' },
  { id: 'projects', label: '03' },
  { id: 'contact', label: '04' },
];

export function ScrollProgress() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.findIndex((el, idx) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        const nextEl = sectionElements[idx + 1];
        const nextRect = nextEl?.getBoundingClientRect();
        
        if (nextRect) {
          return rect.top <= windowHeight / 2 && nextRect.top > windowHeight / 2;
        }
        return rect.top <= windowHeight / 2;
      });

      if (currentSection !== -1) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-6 lg:left-12 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="relative">
        {/* Progress line background */}
        <div className="w-[2px] h-64 bg-[#0F1724] rounded-full">
          {/* Active progress */}
          <div
            className="w-full bg-gradient-to-b from-[#2B50FF] to-[#6A00FF] rounded-full transition-all duration-300"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Section markers */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex flex-col justify-between">
          {sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => {
                const el = document.getElementById(section.id);
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`group relative flex items-center transition-all ${
                idx === activeSection ? 'scale-100' : 'scale-75 opacity-50'
              }`}
            >
              {/* Dot */}
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeSection
                    ? 'bg-[#00E0FF] shadow-[0_0_8px_rgba(0,224,255,0.6)]'
                    : 'bg-[#9AA6B2]'
                }`}
              />
              
              {/* Label on hover */}
              <div className="absolute left-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="font-mono text-xs text-[#00E0FF] bg-[#0F1724] px-2 py-1 rounded border border-[#00E0FF]/30">
                  {section.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
