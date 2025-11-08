import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from '../lib/projectsData';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section id="projects" className="relative py-16 lg:py-24 bg-[#0F1724]/20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="font-mono text-xs text-[#7FD3FF] tracking-wider">
              RECENT WORK
            </div>
            <h2 className="font-mono text-3xl lg:text-4xl text-[#E6EEF6]">
              Latest Projects
            </h2>
            <p className="text-[#9AA6B2] max-w-2xl">
              My most recent work across full-stack development, cloud infrastructure, AI, and cybersecurity.
            </p>
          </div>
        </div>

        {/* Project cards */}
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-lg overflow-hidden bg-[#0F1724] border border-[#00E0FF]/20 hover:border-[#00E0FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,224,255,0.15)]"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1724] via-[#0F1724]/50 to-transparent opacity-60" />
                  
                  {/* Link icon */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0F1724]/80 backdrop-blur-sm border border-[#00E0FF]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-[#00E0FF]" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="font-mono text-xs text-[#7FD3FF] mb-2">{project.serviceName}</div>
                    <h3 className="text-xl text-[#E6EEF6] group-hover:text-[#00E0FF] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#9AA6B2] line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-[#0B0F17] text-[#7FD3FF] border border-[#00E0FF]/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#0B0F17] text-[#7FD3FF] border border-[#00E0FF]/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Gradient accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2B50FF] to-[#6A00FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-4 rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 mb-4">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="font-mono text-xl text-[#E6EEF6] mb-2">No projects yet</h3>
            <p className="text-[#9AA6B2]">Recent projects will appear here.</p>
          </div>
        )}
      </div>
    </section>
  );
}