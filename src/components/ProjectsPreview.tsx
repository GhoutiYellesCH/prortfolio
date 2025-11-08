import { useState } from 'react';
import { Filter, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ProjectTag = 'All' | 'System' | 'Mobile' | 'AI' | 'Research';

interface Project {
  title: string;
  summary: string;
  thumbnail: string;
  tags: ProjectTag[];
  stack: string[];
  link: string;
}

const allProjects: Project[] = [
  {
    title: 'Distributed Task Queue',
    summary: 'High-performance job scheduler with Redis and async workers',
    thumbnail: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['System'],
    stack: ['Rust', 'Redis', 'Docker'],
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    summary: 'Secure fintech application with biometric authentication',
    thumbnail: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYyNTQ5NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile'],
    stack: ['React Native', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'LLM Fine-tuning Pipeline',
    summary: 'Automated workflow for model training and evaluation',
    thumbnail: 'https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AI', 'Research'],
    stack: ['Python', 'PyTorch', 'Weights & Biases'],
    link: '#',
  },
  {
    title: 'Real-time Analytics Dashboard',
    summary: 'Interactive data visualization for IoT sensor networks',
    thumbnail: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['System'],
    stack: ['Next.js', 'WebSocket', 'TimescaleDB'],
    link: '#',
  },
  {
    title: 'RAG Knowledge Assistant',
    summary: 'Document-aware chatbot with semantic search',
    thumbnail: 'https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AI', 'Research'],
    stack: ['LangChain', 'Pinecone', 'OpenAI'],
    link: '#',
  },
  {
    title: 'Cross-Platform Design System',
    summary: 'Unified component library for web and mobile',
    thumbnail: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYyNTQ5NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile'],
    stack: ['Figma', 'React', 'React Native'],
    link: '#',
  },
];

export function ProjectsPreview() {
  const [activeFilter, setActiveFilter] = useState<ProjectTag>('All');
  
  const tags: ProjectTag[] = ['All', 'System', 'Mobile', 'AI', 'Research'];
  
  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="relative py-16 lg:py-24 bg-[#0B0F17]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 space-y-6">
          <div className="font-mono text-xs text-[#7FD3FF] tracking-wider">
            [03] PROJECTS INDEX
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-mono text-3xl lg:text-4xl text-[#E6EEF6] mb-4">
                All Projects
              </h2>
              <p className="text-[#9AA6B2] max-w-2xl">
                Browse my complete portfolio of systems, applications, and research projects.
              </p>
            </div>
          </div>

          {/* Filter tags */}
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-4 h-4 text-[#7FD3FF]" />
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-md font-mono text-sm transition-all ${
                  activeFilter === tag
                    ? 'bg-gradient-to-r from-[#2B50FF] to-[#6A00FF] text-[#E6EEF6] shadow-[0_0_20px_rgba(43,80,255,0.3)]'
                    : 'bg-[#0F1724] text-[#9AA6B2] border border-[#00E0FF]/20 hover:border-[#00E0FF]/50 hover:text-[#E6EEF6]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-lg overflow-hidden bg-[#0F1724] border border-[#00E0FF]/20 hover:border-[#00E0FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,224,255,0.15)] hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1724] via-transparent to-transparent" />
                
                {/* View link */}
                <button
                  onClick={() => window.location.href = project.link}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0F1724]/80 backdrop-blur-sm border border-[#00E0FF]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                >
                  <ExternalLink className="w-4 h-4 text-[#00E0FF]" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg text-[#E6EEF6] group-hover:text-[#00E0FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#9AA6B2] line-clamp-2">{project.summary}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="font-mono text-xs px-2 py-1 rounded bg-[#0B0F17] text-[#7FD3FF] border border-[#00E0FF]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2B50FF] to-[#6A00FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Load more / View all CTA */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-[#7FD3FF]">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </p>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E0FF]/20 to-transparent" />
    </section>
  );
}
