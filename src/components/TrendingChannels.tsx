import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp as TrendUp } from 'lucide-react';
import { mockData } from '../lib/utils';

export function TrendingChannels() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Trending Channels</h2>
        <TrendUp className="w-6 h-6 text-blue-500" />
      </div>
      
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockData.trendingChannels}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="subscribers" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockData.trendingChannels.slice(0, 3).map((channel) => (
          <div key={channel.name} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">{channel.name}</h3>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-gray-600">{channel.subscribers.toLocaleString()} subs</span>
              <span className="text-green-500 text-sm">+{channel.growth}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}