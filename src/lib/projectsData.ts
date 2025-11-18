export interface Project {
  id: string;
  title: string;
  description: string;
  serviceSlug: string;
  serviceName: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
}

// This would typically come from a database or API
export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and Django backend, featuring real-time inventory management and payment processing.',
    serviceSlug: 'fullstack-dev',
    serviceName: 'Full-Stack Development',
    image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Next.js', 'Django', 'PostgreSQL', 'Stripe', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true,
    createdAt: '2025-01-15',
  },
  {
    id: '2',
    title: 'Cloud Infrastructure Migration',
    description: 'Migrated legacy monolith to microservices architecture on AWS with 99.9% uptime and 40% cost reduction.',
    serviceSlug: 'system-design',
    serviceName: 'System Design & Cloud Infrastructure',
    image: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Microservices'],
    featured: true,
    createdAt: '2025-01-10',
  },
  {
    id: '3',
    title: 'AI Document Analyzer',
    description: 'Fine-tuned LLM for legal document analysis with custom RAG implementation, achieving 95% accuracy.',
    serviceSlug: 'ai-finetuning',
    serviceName: 'AI & Machine Learning Fine-tuning',
    image: 'https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Python', 'PyTorch', 'LangChain', 'Vector DB', 'FastAPI'],
    featured: true,
    createdAt: '2025-01-05',
  },
  {
    id: '4',
    title: 'Enterprise Network Setup',
    description: 'Designed and deployed a multi-site network infrastructure with failover capabilities for 500+ users.',
    serviceSlug: 'network-infrastructure',
    serviceName: 'Network & Infrastructure Setup',
    image: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Cisco IOS', 'Proxmox', 'VPN', 'Load Balancer', 'Monitoring'],
    featured: false,
    createdAt: '2024-12-20',
  },
  {
    id: '5',
    title: 'Bug Bounty - XSS to Account Takeover',
    description: 'Discovered critical XSS vulnerability in major SaaS platform leading to account takeover. Awarded $5,000 bounty.',
    serviceSlug: 'red-team',
    serviceName: 'Red Team Operations',
    image: 'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Burp Suite', 'JavaScript', 'OWASP', 'Exploitation'],
    featured: true,
    createdAt: '2024-12-15',
  },
  {
    id: '6',
    title: 'Enterprise SIEM Deployment',
    description: 'Deployed and configured Elastic Stack SIEM for enterprise with custom detection rules and automated response.',
    serviceSlug: 'blue-team',
    serviceName: 'Blue Team Defense',
    image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Elastic Stack', 'Kibana', 'Logstash', 'IDS/IPS', 'SIEM'],
    featured: true,
    createdAt: '2024-12-01',
  },
  {
    id: '7',
    title: 'Enterprise SIEM Deployment',
    description: 'Deployed and configured Elastic Stack SIEM for enterprise with custom detection rules and automated response.',
    serviceSlug: 'blue-team',
    serviceName: 'Blue Team Defense',
    image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Elastic Stack', 'Kibana', 'Logstash', 'IDS/IPS', 'SIEM'],
    featured: true,
    createdAt: '2025-12-01',
  },
];

export const getProjectsByService = (serviceSlug: string): Project[] => {
  return projectsData.filter(project => project.serviceSlug === serviceSlug);
};

export const getFeaturedProjects = (): Project[] => {
  return projectsData
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const getRecentProjects = (limit: number = 3): Project[] => {
  return projectsData
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};
