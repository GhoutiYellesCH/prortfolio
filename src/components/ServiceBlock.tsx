import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceBlockProps {
  index: number;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  stack: string;
  thumbnails: string[];
  slug: string;
  onViewProjects?: (slug: string) => void;
}

export function ServiceBlock({
  index,
  title,
  summary,
  description,
  deliverables,
  stack,
  thumbnails,
  slug,
  onViewProjects,
}: ServiceBlockProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % thumbnails.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + thumbnails.length) % thumbnails.length);
  };

  const isEven = index % 2 === 0;

  return (
    <section
      className={`relative py-16 lg:py-24 ${
        isEven ? 'bg-[#0B0F17]' : 'bg-[#0F1724]/30'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="font-mono text-xs text-[#7FD3FF] mb-8 tracking-wider">
          [0{index + 1}] {title.toUpperCase()}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Content */}
          <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="space-y-4">
              <h2 className="font-mono text-3xl lg:text-4xl text-[#E6EEF6]">
                {title}
              </h2>
              <p className="text-[#9AA6B2]">{summary}</p>
            </div>

            <p className="text-[#9AA6B2] leading-relaxed">{description}</p>

            {/* Deliverables */}
            <div className="space-y-3">
              <h4 className="font-mono text-sm text-[#7FD3FF]">DELIVERABLES</h4>
              <ul className="space-y-2">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#9AA6B2]">
                    <span className="text-[#00E0FF] mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="space-y-3">
              <h4 className="font-mono text-sm text-[#7FD3FF]">STACK</h4>
              <p className="font-mono text-sm text-[#9AA6B2]">{stack}</p>
            </div>

            {/* CTA */}
            <button
              onClick={() => onViewProjects ? onViewProjects(slug) : window.location.href = `/services/${slug}`}
              className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-[#00E0FF]/30 text-[#00E0FF] hover:bg-[#00E0FF]/10 hover:border-[#00E0FF] transition-all duration-300 mt-6"
            >
              <span>Explore projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right column - Preview carousel */}
          <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-[#0F1724] border border-[#00E0FF]/20">
              {/* Carousel */}
              <div className="relative w-full h-full">
                {thumbnails.map((thumb, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      idx === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <ImageWithFallback
                      src={thumb}
                      alt={`${title} preview ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-40" />
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              {thumbnails.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F1724]/80 backdrop-blur-sm border border-[#00E0FF]/30 flex items-center justify-center hover:bg-[#00E0FF]/20 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#00E0FF]" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F1724]/80 backdrop-blur-sm border border-[#00E0FF]/30 flex items-center justify-center hover:bg-[#00E0FF]/20 transition-all"
                  >
                    <ChevronRight className="w-5 h-5 text-[#00E0FF]" />
                  </button>
                </>
              )}

              {/* Slide indicators */}
              {thumbnails.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {thumbnails.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentSlide
                          ? 'bg-[#00E0FF] w-6'
                          : 'bg-[#9AA6B2]/50 hover:bg-[#9AA6B2]'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Terminal-style label */}
            <div className="mt-4 font-mono text-xs text-[#7FD3FF]">
              <span className="text-[#9AA6B2]">$ preview</span> {currentSlide + 1}/{thumbnails.length}
            </div>
          </div>
        </div>
      </div>

      {/* Separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E0FF]/20 to-transparent" />
    </section>
  );
}