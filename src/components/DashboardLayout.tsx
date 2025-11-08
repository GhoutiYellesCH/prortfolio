import { BarChart3, FolderKanban, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activePage: 'statistics' | 'projects';
  onPageChange: (page: 'statistics' | 'projects') => void;
  onLogout: () => void;
}

export function DashboardLayout({ children, activePage, onPageChange, onLogout }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      id: 'statistics' as const,
      label: 'Statistics',
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      id: 'projects' as const,
      label: 'Manage Projects',
      icon: <FolderKanban className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F17]">
      <div className="flex h-screen">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed top-6 right-6 z-50 p-3 rounded-lg bg-[#0F1724] border border-[#00E0FF]/30 text-[#00E0FF]"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Sidebar Overlay for Mobile */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-[#0B0F17]/80 backdrop-blur-sm z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static inset-y-0 right-0 z-40 w-72
            bg-[#0F1724] border-l border-[#00E0FF]/20
            transform transition-transform duration-300 lg:transform-none
            ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
          `}
        >
          <div className="h-full flex flex-col p-6">
            {/* Dashboard Header */}
            <div className="mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-[#00E0FF]/10 border border-[#00E0FF]/30 mb-3">
                <span className="font-mono text-xs text-[#00E0FF] tracking-wider">ADMIN PANEL</span>
              </div>
              <h2 className="font-mono text-xl text-[#E6EEF6]">Dashboard</h2>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200 font-mono text-sm
                    ${
                      activePage === item.id
                        ? 'bg-[#00E0FF]/10 text-[#00E0FF] border border-[#00E0FF]/30'
                        : 'text-[#9AA6B2] hover:text-[#E6EEF6] hover:bg-[#00E0FF]/5'
                    }
                  `}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#00E0FF]/30 text-[#9AA6B2] hover:text-[#E6EEF6] hover:border-[#00E0FF] transition-all font-mono text-sm"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}