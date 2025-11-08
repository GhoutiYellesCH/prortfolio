import { TrendingUp, TrendingDown, Users, Clock, Heart, BookOpen, Download, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StatData {
  label: string;
  value: number;
  change: number;
  icon: React.ReactNode;
  color: string;
}

export function DashboardStatistics() {
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month'>('week');
  
  // Mock data - in production, this would come from analytics API
  const stats: StatData[] = [
    {
      label: 'Total Visitors',
      value: 1247,
      change: 12.5,
      icon: <Users className="w-5 h-5" />,
      color: '#00E0FF',
    },
    {
      label: 'Avg. Time Spent',
      value: 342, // in seconds
      change: 8.2,
      icon: <Clock className="w-5 h-5" />,
      color: '#7FD3FF',
    },
    {
      label: 'Support Clicks',
      value: 87,
      change: 15.3,
      icon: <Heart className="w-5 h-5" />,
      color: '#2B50FF',
    },
    {
      label: 'Resume Downloads',
      value: 156,
      change: -3.2,
      icon: <Download className="w-5 h-5" />,
      color: '#6A00FF',
    },
    {
      label: 'Course Views',
      value: 423,
      change: 22.1,
      icon: <BookOpen className="w-5 h-5" />,
      color: '#00E0FF',
    },
    {
      label: 'Project Views',
      value: 892,
      change: 18.7,
      icon: <Eye className="w-5 h-5" />,
      color: '#7FD3FF',
    },
  ];

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const userFlowData = [
    { page: 'Homepage', visits: 1247, avgTime: 145, exitRate: 15 },
    { page: 'Projects', visits: 892, avgTime: 234, exitRate: 22 },
    { page: 'Services', visits: 756, avgTime: 189, exitRate: 18 },
    { page: 'Contact', visits: 432, avgTime: 98, exitRate: 45 },
    { page: 'Support Page', visits: 87, avgTime: 67, exitRate: 67 },
    { page: 'Courses', visits: 423, avgTime: 312, exitRate: 28 },
  ];

  const topReferrers = [
    { source: 'Google Search', visits: 487, percentage: 39 },
    { source: 'Direct', visits: 312, percentage: 25 },
    { source: 'LinkedIn', visits: 234, percentage: 19 },
    { source: 'GitHub', visits: 145, percentage: 12 },
    { source: 'Twitter', visits: 69, percentage: 5 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-mono text-4xl text-[#E6EEF6] mb-2">Statistics Dashboard</h1>
        <p className="text-[#9AA6B2]">Monitor user engagement and portfolio performance</p>
      </div>

      {/* Time Range Selector */}
      <div className="flex gap-2">
        {(['day', 'week', 'month'] as const).map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              timeRange === range
                ? 'bg-[#00E0FF] text-[#0B0F17]'
                : 'bg-[#0F1724] text-[#9AA6B2] hover:text-[#E6EEF6] border border-[#00E0FF]/20'
            }`}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <div style={{ color: stat.color }}>{stat.icon}</div>
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-mono ${
                  stat.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {stat.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {Math.abs(stat.change)}%
              </div>
            </div>
            <div>
              <p className="text-sm text-[#9AA6B2] mb-1">{stat.label}</p>
              <p className="text-3xl text-[#E6EEF6] font-mono">
                {stat.label === 'Avg. Time Spent' ? formatTime(stat.value) : stat.value.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* User Flow Table */}
      <div className="rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 overflow-hidden">
        <div className="p-6 border-b border-[#00E0FF]/20">
          <h2 className="font-mono text-xl text-[#E6EEF6]">User Flow Analysis</h2>
          <p className="text-sm text-[#9AA6B2] mt-1">Page performance and engagement metrics</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#00E0FF]/20">
                <th className="text-left p-4 font-mono text-sm text-[#7FD3FF]">PAGE</th>
                <th className="text-left p-4 font-mono text-sm text-[#7FD3FF]">VISITS</th>
                <th className="text-left p-4 font-mono text-sm text-[#7FD3FF]">AVG. TIME</th>
                <th className="text-left p-4 font-mono text-sm text-[#7FD3FF]">EXIT RATE</th>
              </tr>
            </thead>
            <tbody>
              {userFlowData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#00E0FF]/10 hover:bg-[#00E0FF]/5 transition-colors"
                >
                  <td className="p-4 text-[#E6EEF6]">{row.page}</td>
                  <td className="p-4 text-[#9AA6B2] font-mono">{row.visits.toLocaleString()}</td>
                  <td className="p-4 text-[#9AA6B2] font-mono">{formatTime(row.avgTime)}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-[#0B0F17] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#2B50FF] to-[#6A00FF]"
                          style={{ width: `${row.exitRate}%` }}
                        />
                      </div>
                      <span className="text-[#9AA6B2] font-mono text-sm w-12 text-right">
                        {row.exitRate}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Referrers */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 p-6">
          <h2 className="font-mono text-xl text-[#E6EEF6] mb-6">Traffic Sources</h2>
          <div className="space-y-4">
            {topReferrers.map((referrer, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#E6EEF6]">{referrer.source}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#9AA6B2] font-mono text-sm">
                      {referrer.visits.toLocaleString()}
                    </span>
                    <span className="text-[#7FD3FF] font-mono text-sm w-12 text-right">
                      {referrer.percentage}%
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-[#0B0F17] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2B50FF] to-[#6A00FF]"
                    style={{ width: `${referrer.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Insights */}
        <div className="rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 p-6">
          <h2 className="font-mono text-xl text-[#E6EEF6] mb-6">Quick Insights</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[#00E0FF]/10 border border-[#00E0FF]/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-mono text-green-400">TRENDING UP</span>
              </div>
              <p className="text-[#E6EEF6]">
                Course engagement increased by <span className="text-[#00E0FF]">22%</span> this week
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#2B50FF]/10 border border-[#2B50FF]/20">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#7FD3FF]" />
                <span className="text-sm font-mono text-[#7FD3FF]">PEAK TRAFFIC</span>
              </div>
              <p className="text-[#E6EEF6]">
                Most visitors arrive between <span className="text-[#00E0FF]">2-4 PM</span>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#6A00FF]/10 border border-[#6A00FF]/20">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-[#6A00FF]" />
                <span className="text-sm font-mono text-[#6A00FF]">CONVERSION</span>
              </div>
              <p className="text-[#E6EEF6]">
                <span className="text-[#00E0FF]">7%</span> of visitors click support button
              </p>
            </div>
            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Download className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-mono text-yellow-500">DOWNLOADS</span>
              </div>
              <p className="text-[#E6EEF6]">
                Resume downloaded <span className="text-[#00E0FF]">156 times</span> this week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
