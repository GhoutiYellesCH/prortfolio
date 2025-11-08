import { useState } from 'react';
import { Plus, Trash2, Edit2, ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '../lib/projectsData';

interface ProjectsDashboardProps {
  projects: Project[];
  onAddProject: (project: Omit<Project, 'id'>) => void;
  onUpdateProject: (id: string, project: Partial<Project>) => void;
  onDeleteProject: (id: string) => void;
}

const services = [
  { slug: 'fullstack-dev', name: 'Full-Stack Development' },
  { slug: 'system-design', name: 'System Design & Cloud Infrastructure' },
  { slug: 'ai-finetuning', name: 'AI & Machine Learning Fine-tuning' },
  { slug: 'network-infrastructure', name: 'Network & Infrastructure Setup' },
  { slug: 'ui-ux-design', name: 'UI/UX Design & System Development' },
  { slug: 'teaching-writing', name: 'Teaching, Research & Technical Writing' },
  { slug: 'red-team', name: 'Red Team Operations' },
  { slug: 'blue-team', name: 'Blue Team Defense' },
];

export function ProjectsDashboard({ 
  projects, 
  onAddProject, 
  onUpdateProject, 
  onDeleteProject
}: ProjectsDashboardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    description: '',
    serviceSlug: 'fullstack-dev',
    serviceName: 'Full-Stack Development',
    image: '',
    technologies: [],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    createdAt: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      onUpdateProject(editingId, formData);
      setEditingId(null);
    } else {
      onAddProject(formData as Omit<Project, 'id'>);
      setIsAdding(false);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      serviceSlug: 'fullstack-dev',
      serviceName: 'Full-Stack Development',
      image: '',
      technologies: [],
      liveUrl: '',
      githubUrl: '',
      featured: false,
      createdAt: new Date().toISOString().split('T')[0],
    });
  };

  const handleEdit = (project: Project) => {
    setFormData(project);
    setEditingId(project.id);
    setIsAdding(true);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    resetForm();
  };

  const handleServiceChange = (slug: string) => {
    const service = services.find(s => s.slug === slug);
    setFormData({
      ...formData,
      serviceSlug: slug,
      serviceName: service?.name || '',
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-mono text-4xl text-[#E6EEF6] mb-2">Manage Projects</h1>
          <p className="text-[#9AA6B2]">Add, edit, and organize your portfolio projects</p>
        </div>
        
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00E0FF] text-[#0B0F17] hover:bg-[#7FD3FF] transition-colors font-mono"
          >
            <Plus className="w-5 h-5" />
            Add Project
          </button>
        )}
      </div>

      {/* Add/Edit Form */}
      {isAdding && (
        <div className="p-6 rounded-lg bg-[#0F1724] border border-[#00E0FF]/30">
          <h2 className="font-mono text-2xl text-[#E6EEF6] mb-6">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono text-[#7FD3FF] mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 rounded bg-[#0B0F17] border border-[#00E0FF]/30 text-[#E6EEF6] focus:border-[#00E0FF] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-[#7FD3FF] mb-2">
                  Service *
                </label>
                <select
                  required
                  value={formData.serviceSlug}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-[#0B0F17] border border-[#00E0FF]/30 text-[#E6EEF6] focus:border-[#00E0FF] focus:outline-none"
                >
                  {services.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-mono text-[#7FD3FF] mb-2">
                Description *
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 rounded bg-[#0B0F17] border border-[#00E0FF]/30 text-[#E6EEF6] focus:border-[#00E0FF] focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-[#7FD3FF] mb-2">
                Image URL *
              </label>
              <input
                type="url"
                required
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 rounded bg-[#0B0F17] border border-[#00E0FF]/30 text-[#E6EEF6] focus:border-[#00E0FF] focus:outline-none"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-[#7FD3FF] mb-2">
                Technologies (comma separated) *
              </label>
              <input
                type="text"
                required
                value={formData.technologies?.join(', ')}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  technologies: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
                })}
                className="w-full px-4 py-2 rounded bg-[#0B0F17] border border-[#00E0FF]/30 text-[#E6EEF6] focus:border-[#00E0FF] focus:outline-none"
                placeholder="React, Node.js, PostgreSQL"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono text-[#7FD3FF] mb-2">
                  Live URL
                </label>
                <input
                  type="url"
                  value={formData.liveUrl}
                  onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                  className="w-full px-4 py-2 rounded bg-[#0B0F17] border border-[#00E0FF]/30 text-[#E6EEF6] focus:border-[#00E0FF] focus:outline-none"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-[#7FD3FF] mb-2">
                  GitHub URL
                </label>
                <input
                  type="url"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  className="w-full px-4 py-2 rounded bg-[#0B0F17] border border-[#00E0FF]/30 text-[#E6EEF6] focus:border-[#00E0FF] focus:outline-none"
                  placeholder="https://github.com/..."
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 rounded border-[#00E0FF]/30 bg-[#0B0F17]"
              />
              <label htmlFor="featured" className="text-sm font-mono text-[#7FD3FF] flex items-center gap-2">
                <Star className="w-4 h-4" />
                Featured Project
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-[#00E0FF] text-[#0B0F17] hover:bg-[#7FD3FF] transition-colors font-mono"
              >
                {editingId ? 'Update' : 'Add'} Project
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 rounded-lg border border-[#00E0FF]/30 text-[#9AA6B2] hover:text-[#E6EEF6] hover:border-[#00E0FF] transition-colors font-mono"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Projects List */}
      <div className="space-y-4">
        <h2 className="font-mono text-2xl text-[#E6EEF6] mb-4">
          All Projects ({projects.length})
        </h2>
        
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 transition-all"
          >
            <div className="flex gap-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-32 h-32 object-cover rounded"
              />
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-mono text-xl text-[#E6EEF6]">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Star className="w-4 h-4 text-[#00E0FF] fill-[#00E0FF]" />
                      )}
                    </div>
                    <p className="text-sm text-[#7FD3FF] font-mono">
                      {project.serviceName}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="p-2 rounded hover:bg-[#00E0FF]/10 text-[#00E0FF] transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this project?')) {
                          onDeleteProject(project.id);
                        }
                      }}
                      className="p-2 rounded hover:bg-red-500/10 text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-sm text-[#9AA6B2] mb-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-mono bg-[#00E0FF]/10 text-[#7FD3FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 text-xs text-[#9AA6B2]">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-[#00E0FF]"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-[#00E0FF]"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  )}
                  <span>Created: {project.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}