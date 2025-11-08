import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { IntroVideo } from './components/IntroVideo';
import { ServiceBlock } from './components/ServiceBlock';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectsPreview } from './components/ProjectsPreview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceProjects } from './components/ServiceProjects';
import { ProjectsDashboard } from './components/ProjectsDashboard';
import { DashboardStatistics } from './components/DashboardStatistics';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardLogin } from './components/DashboardLogin';
import { useState, useEffect } from 'react';
import { projectsData as initialProjects, getProjectsByService, getRecentProjects, Project } from './lib/projectsData';

const services = [
  {
    index: 0,
    title: 'Full-Stack Development',
    summary: 'Cross-platform applications with modern frameworks',
    description: 'Building scalable web and mobile applications using React, Next.js, Django, React Native, and Flutter. I create seamless experiences across web, iOS, and Android platforms with clean architecture and optimal performance.',
    deliverables: [
      'Responsive web applications with React & Next.js',
      'RESTful & GraphQL API development with Django',
      'Cross-platform mobile apps (React Native & Flutter)',
      'Server-side rendering and static site generation',
    ],
    stack: 'React • Next.js • Django • React Native • Flutter • TypeScript • Python',
    thumbnails: [
      'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    slug: 'fullstack-dev',
  },
  {
    index: 1,
    title: 'System Design & Cloud Infrastructure',
    summary: 'Scalable cloud architecture and API development',
    description: 'Designing and implementing robust cloud infrastructures with microservices architecture. I create scalable systems on AWS, Azure, and GCP with comprehensive API design, load balancing, and distributed systems.',
    deliverables: [
      'Cloud infrastructure architecture (AWS, Azure, GCP)',
      'Microservices design and implementation',
      'API gateway configuration and management',
      'Load balancing and auto-scaling solutions',
    ],
    stack: 'AWS • Azure • GCP • Kubernetes • Docker • Terraform • Microservices • API Design',
    thumbnails: [
      'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    slug: 'system-design',
  },
  {
    index: 2,
    title: 'AI & Machine Learning Fine-tuning',
    summary: 'AI automation and custom model fine-tuning',
    description: 'Implementing AI-driven automation solutions and fine-tuning machine learning models for specific use cases. I work with LLMs, custom datasets, and automated workflows to enhance productivity and capabilities.',
    deliverables: [
      'LLM fine-tuning for domain-specific tasks',
      'AI workflow automation and integration',
      'Custom model training and optimization',
      'RAG (Retrieval-Augmented Generation) implementations',
    ],
    stack: 'Python • PyTorch • TensorFlow • Hugging Face • LangChain • OpenAI API • Vector DBs',
    thumbnails: [
      'https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    slug: 'ai-finetuning',
  },
  {
    index: 3,
    title: 'Network & Infrastructure Setup',
    summary: 'Building offline and online backend infrastructures',
    description: 'Setting up chains of machines to work as cohesive offline or online backend services. I design and implement network topologies, server clusters, and distributed systems for robust service delivery.',
    deliverables: [
      'Multi-machine backend infrastructure setup',
      'Offline and online service orchestration',
      'Network topology design and implementation',
      'Server clustering and load distribution',
    ],
    stack: 'Linux • Proxmox • VMware • Ansible • Nginx • HAProxy • VPN • Network Protocols',
    thumbnails: [
      'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    slug: 'network-infrastructure',
  },
  {
    index: 4,
    title: 'UI/UX Design & System Development',
    summary: 'From concept to production - design and implementation',
    description: 'Transforming ideas into reality through comprehensive UI/UX design and full system development. I handle the entire process from wireframes to production, creating intuitive interfaces and robust systems.',
    deliverables: [
      'User interface and experience design',
      'Interactive prototypes and wireframes',
      'Design systems and component libraries',
      'End-to-end system development and deployment',
    ],
    stack: 'Figma • Adobe XD • React • Tailwind CSS • Design Tokens • Storybook • User Research',
    thumbnails: [
      'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    slug: 'ui-ux-design',
  },
  {
    index: 5,
    title: 'Teaching, Research & Technical Writing',
    summary: 'Education, documentation, and knowledge sharing',
    description: 'Working as a researcher, technical writer, and educator to share knowledge and advance understanding in cybersecurity and technology. I create comprehensive documentation, courses, and research materials.',
    deliverables: [
      'Technical documentation and tutorials',
      'Security research papers and articles',
      'Educational courses and training materials',
      'Workshop design and delivery',
    ],
    stack: 'Research Methodologies • Technical Writing • Course Development • Presentations • LaTeX',
    thumbnails: [
      'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    slug: 'teaching-writing',
  },
  {
    index: 6,
    title: 'Red Team Operations',
    summary: 'Bug bounty hunting, pentesting, and threat hunting',
    description: 'Offensive security operations including bug bounty hunting, comprehensive penetration testing, and proactive threat hunting. I identify vulnerabilities and security weaknesses before malicious actors can exploit them.',
    deliverables: [
      'Bug bounty hunting and vulnerability disclosure',
      'Web application and network penetration testing',
      'Threat hunting and attack simulation',
      'Security assessment reports and remediation guidance',
    ],
    stack: 'Burp Suite • Metasploit • Kali Linux • OWASP Tools • Wireshark • Custom Exploits',
    thumbnails: [
      'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    slug: 'red-team',
  },
  {
    index: 7,
    title: 'Blue Team Defense',
    summary: 'OS hardening, network monitoring, and enterprise security',
    description: 'Comprehensive defensive security including OS and memory hardening, network monitoring, firewall management, IDS/IPS deployment, Elastic Stack implementation, and Active Directory security with domain and policy management.',
    deliverables: [
      'OS hardening and memory protection strategies',
      'Network monitoring and traffic analysis',
      'Firewall rules and IDS/IPS configuration',
      'Active Directory, domain, and policy management',
    ],
    stack: 'Elastic Stack • Splunk • Firewall Management • IDS/IPS • Active Directory • GPO • SIEM',
    thumbnails: [
      'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NzYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhcmNoaXRlY3R1cmUlMjBkaWFncmFtfGVufDF8fHx8MTc2MjUwMzU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjI1NDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    slug: 'blue-team',
  },
];

export default function App() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [currentView, setCurrentView] = useState<'home' | 'service' | 'dashboard'>('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>('');
  const [dashboardPage, setDashboardPage] = useState<'statistics' | 'projects'>('statistics');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status from localStorage
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Check URL for dashboard access
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'admin-dashboard') {
        setCurrentView('dashboard');
      } else if (hash.startsWith('service/')) {
        const slug = hash.replace('service/', '');
        setSelectedServiceSlug(slug);
        setCurrentView('service');
      } else {
        setCurrentView('home');
        setIsAuthenticated(false); // Reset auth when leaving dashboard
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const recentProjects = getRecentProjects(3);
  
  const handleViewProjects = (slug: string) => {
    window.location.hash = `service/${slug}`;
  };

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  const handleLogin = (username: string, password: string): boolean => {
    // Simple authentication - in production, this should be against a backend API
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    window.location.hash = '';
  };

  const handleAddProject = (project: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
    };
    setProjects([...projects, newProject]);
  };

  const handleUpdateProject = (id: string, updates: Partial<Project>) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  // Dashboard view
  if (currentView === 'dashboard') {
    // Show login if not authenticated
    if (!isAuthenticated) {
      return <DashboardLogin onLogin={handleLogin} />;
    }

    // Show dashboard if authenticated
    return (
      <div className="relative">
        <DashboardLayout
          activePage={dashboardPage}
          onPageChange={setDashboardPage}
          onLogout={handleLogout}
        >
          {dashboardPage === 'statistics' ? (
            <DashboardStatistics />
          ) : (
            <ProjectsDashboard
              projects={projects}
              onAddProject={handleAddProject}
              onUpdateProject={handleUpdateProject}
              onDeleteProject={handleDeleteProject}
            />
          )}
        </DashboardLayout>
      </div>
    );
  }

  // Service projects view
  if (currentView === 'service') {
    const service = services.find(s => s.slug === selectedServiceSlug);
    const serviceProjects = getProjectsByService(selectedServiceSlug);
    
    if (!service) {
      window.location.hash = '';
      return null;
    }

    return (
      <div className="relative">
        <Navigation />
        <ServiceProjects
          serviceTitle={service.title}
          serviceSlug={service.slug}
          projects={serviceProjects}
          onBack={handleBackToHome}
        />
        <Footer />
      </div>
    );
  }

  // Home view
  return (
    <div className="relative">
      <Navigation />
      <ScrollProgress />
      
      <main>
        <Hero />
        <IntroVideo />
        
        {/* Services section wrapper */}
        <div id="services">
          {services.map((service) => (
            <ServiceBlock 
              key={service.index} 
              {...service}
              onViewProjects={handleViewProjects}
            />
          ))}
        </div>

        <FeaturedProjects projects={recentProjects} />
        <ProjectsPreview />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}