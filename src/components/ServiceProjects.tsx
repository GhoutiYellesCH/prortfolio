import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Project } from '../lib/projectsData';

interface ServiceProjectsProps {
  serviceTitle: string;
  serviceSlug: string;
  projects: Project[];
  onBack: () => void;
}

export function ServiceProjects({ serviceTitle, serviceSlug, projects, onBack }: ServiceProjectsProps) {
  return (
    <div className="min-h-screen bg-[#0B0F17] pt-24 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#9AA6B2] hover:text-[#00E0FF] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">Back to Home</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#00E0FF]/10 border border-[#00E0FF]/30 mb-4">
            <span className="font-mono text-xs text-[#00E0FF] tracking-wider">PROJECTS</span>
          </div>
          <h1 className="font-mono text-4xl lg:text-5xl text-[#E6EEF6] mb-4">
            {serviceTitle}
          </h1>
          <p className="text-lg text-[#9AA6B2]">
            {projects.length} {projects.length === 1 ? 'project' : 'projects'} completed
          </p>
        </div>

        {/* Projects grid */}
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#0F1724] rounded-lg border border-[#00E0FF]/20 overflow-hidden hover:border-[#00E0FF]/50 transition-all"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-[#0B0F17]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-mono text-xl text-[#E6EEF6] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#9AA6B2] line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-mono bg-[#00E0FF]/10 text-[#7FD3FF] border border-[#00E0FF]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#00E0FF] hover:text-[#7FD3FF] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-mono">Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="font-mono">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-4 rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 mb-4">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="font-mono text-xl text-[#E6EEF6] mb-2">No projects yet</h3>
            <p className="text-[#9AA6B2]">Projects for this service will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
