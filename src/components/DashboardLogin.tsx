import { useState } from 'react';
import { Lock, User, Eye, EyeOff, Shield } from 'lucide-react';

interface DashboardLoginProps {
  onLogin: (username: string, password: string) => boolean;
}

export function DashboardLogin({ onLogin }: DashboardLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a slight delay for better UX
    setTimeout(() => {
      const success = onLogin(username, password);
      
      if (!success) {
        setError('Invalid username or password');
        setPassword('');
      }
      
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo/Branding */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-[#2B50FF]/20 to-[#6A00FF]/20 border border-[#00E0FF]/30 mb-4">
            <Shield className="w-12 h-12 text-[#00E0FF]" />
          </div>
          <h1 className="font-mono text-3xl text-[#E6EEF6] mb-2">
            Admin Dashboard
          </h1>
          <p className="text-[#9AA6B2] text-sm">
            Enter your credentials to access the admin panel
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-[#0F1724] rounded-xl border border-[#00E0FF]/20 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-mono text-[#7FD3FF] mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA6B2]">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#0B0F17] border border-[#00E0FF]/30 text-[#E6EEF6] placeholder-[#9AA6B2]/50 focus:border-[#00E0FF] focus:outline-none transition-colors"
                  placeholder="Enter your username"
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-mono text-[#7FD3FF] mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA6B2]">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3 rounded-lg bg-[#0B0F17] border border-[#00E0FF]/30 text-[#E6EEF6] placeholder-[#9AA6B2]/50 focus:border-[#00E0FF] focus:outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9AA6B2] hover:text-[#E6EEF6] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                <p className="text-sm text-red-400 font-mono">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#2B50FF] to-[#6A00FF] text-[#E6EEF6] hover:shadow-[0_0_30px_rgba(43,80,255,0.4)] transition-all duration-300 font-mono disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Authenticating...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Demo Credentials Note */}
          <div className="mt-6 p-4 rounded-lg bg-[#00E0FF]/5 border border-[#00E0FF]/20">
            <p className="text-xs text-[#7FD3FF] font-mono mb-2">
              💡 DEMO CREDENTIALS:
            </p>
            <div className="space-y-1 text-xs text-[#9AA6B2] font-mono">
              <p>Username: <span className="text-[#E6EEF6]">admin</span></p>
              <p>Password: <span className="text-[#E6EEF6]">admin123</span></p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-[#9AA6B2]">
            🔒 This is a secure area. All login attempts are monitored.
          </p>
        </div>
      </div>
    </div>
  );
}
