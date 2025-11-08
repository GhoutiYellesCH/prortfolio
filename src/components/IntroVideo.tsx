import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

export function IntroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="intro-video" className="relative py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="font-mono text-xs text-[#7FD3FF] mb-8 tracking-wider">
          [01] INTRODUCTION
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
          {/* Video container */}
          <div className="relative group">
            {/* Video card */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-[#0F1724] border border-[#00E0FF]/20 shadow-xl group-hover:shadow-[0_0_30px_rgba(0,224,255,0.2)] transition-all duration-300">
              {/* Placeholder thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2B50FF]/20 to-[#6A00FF]/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  {/* Play button */}
                  <button
                    onClick={() => {
                      // Open video in new tab or trigger lightbox
                      window.open('https://youtube.com/watch?v=YOUR_VIDEO_ID', '_blank');
                    }}
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-[#2B50FF] to-[#6A00FF] flex items-center justify-center hover:scale-110 transition-transform duration-300 mx-auto shadow-[0_0_30px_rgba(43,80,255,0.6)] group-hover:shadow-[0_0_40px_rgba(43,80,255,0.8)]"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </button>
                  <p className="font-mono text-sm text-[#7FD3FF]">Click to play intro video</p>
                </div>
              </div>

              {/* Overlay grid effect */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div 
                  className="w-full h-full" 
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 224, 255, 0.5) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(0, 224, 255, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-start justify-between gap-4">
              <p className="text-[#9AA6B2]">
                Intro — 90 seconds on what I build and why.
              </p>
              <button
                onClick={() => window.open('https://youtube.com/watch?v=YOUR_VIDEO_ID', '_blank')}
                className="flex items-center gap-2 text-[#00E0FF] hover:text-[#7FD3FF] transition-colors text-sm whitespace-nowrap"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open</span>
              </button>
            </div>
          </div>

          {/* Quick facts */}
          <div className="space-y-6">
            <h3 className="font-mono text-xl text-[#E6EEF6]">Quick Facts</h3>
            
            <div className="space-y-4">
              {[
                { label: 'Experience', value: '5+ years', detail: 'Building production systems' },
                { label: 'Main Stacks', value: 'Rust • Python • JS', detail: 'Full-stack development' },
                { label: 'Focus Areas', value: 'AI • Systems', detail: 'Research & automation' },
              ].map((fact, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#0F1724]/60 border border-[#00E0FF]/10 backdrop-blur-sm hover:border-[#00E0FF]/30 transition-colors"
                >
                  <div className="font-mono text-xs text-[#7FD3FF] mb-1">{fact.label}</div>
                  <div className="text-lg text-[#E6EEF6] mb-1">{fact.value}</div>
                  <div className="text-sm text-[#9AA6B2]">{fact.detail}</div>
                </div>
              ))}
            </div>

            {/* Fun terminal-style stat */}
            <div className="mt-8 p-4 rounded-lg bg-[#0F1724] border border-[#2B50FF]/30 font-mono text-sm">
              <div className="text-[#7FD3FF] mb-2">$ stats --summary</div>
              <div className="text-[#9AA6B2] space-y-1">
                <div>→ 50+ projects shipped</div>
                <div>→ 100k+ lines of code</div>
                <div>→ ∞ cups of coffee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
