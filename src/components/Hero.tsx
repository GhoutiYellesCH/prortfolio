import { ArrowRight, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(43, 80, 255, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(43, 80, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B50FF]/10 via-transparent to-[#6A00FF]/10" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Tagline */}
            <div className="space-y-4">
              <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                <span className="text-[#E6EEF6]">Hello — I'm </span>
                <span className="gradient-text">Ghouti Yelles Chaouche</span>
              </h1>
              <div className="font-mono text-xl sm:text-2xl lg:text-3xl text-[#9AA6B2] space-y-1">
                <p>Network Engineering Student · System Builder · Security Researcher</p>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-[#9AA6B2] max-w-2xl leading-relaxed">
              Passionate about learning and building secure systems. From full-stack development to offensive and defensive security, I explore the entire technology stack.
            </p>

            {/* Micro-callouts */}
            <div className="flex flex-wrap gap-3">
              {['Full-Stack', 'Cloud & AI', 'Red & Blue Team'].map((badge) => (
                <div
                  key={badge}
                  className="px-4 py-2 rounded-md bg-[#0F1724]/60 border border-[#00E0FF]/20 backdrop-blur-sm"
                >
                  <span className="font-mono text-sm text-[#7FD3FF]">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 rounded-lg bg-gradient-to-r from-[#2B50FF] to-[#6A00FF] text-[#E6EEF6] hover:shadow-[0_0_30px_rgba(43,80,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>See my work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-lg border border-[#00E0FF] text-[#00E0FF] hover:bg-[#00E0FF]/10 hover:shadow-[0_0_20px_rgba(0,224,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact me</span>
              </button>
            </div>
          </div>

          {/* Right column - Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[3/4] lg:aspect-auto lg:h-[600px]">
              {/* Neon outline effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00E0FF] to-[#6A00FF] p-[2px] opacity-60 blur-sm" />
              
              {/* Portrait container */}
              <div className="relative h-full rounded-lg overflow-hidden bg-[#0F1724] border border-[#00E0FF]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1755255020777-83bf9c8d70b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbmdpbmVlciUyMHBvcnRyYWl0JTIwYXJtcyUyMGNyb3NzZWR8ZW58MXx8fHwxNzYyNTQ5NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional portrait - standing, arms crossed"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient for rim light effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#00E0FF]/40 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-[#00E0FF] animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}