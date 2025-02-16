import React from 'react';
import { TrendingChannels } from './components/TrendingChannels';
import { EngagementMetrics } from './components/EngagementMetrics';
import { CategoryDistribution } from './components/CategoryDistribution';
import { BarChart3 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <BarChart3 className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">TeleMetrics</span>
            </div>
            <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8">
          <TrendingChannels />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EngagementMetrics />
            <CategoryDistribution />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;