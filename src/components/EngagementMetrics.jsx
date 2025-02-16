import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';
import { mockData } from '../lib/utils';

export function EngagementMetrics() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Engagement Overview</h2>
        <Activity className="w-6 h-6 text-blue-500" />
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData.engagementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="views" stroke="#3b82f6" />
            <Line type="monotone" dataKey="interactions" stroke="#10b981" />
            <Line type="monotone" dataKey="shares" stroke="#f59e0b" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-blue-600 font-semibold">Views</h3>
          <p className="text-2xl font-bold text-blue-700 mt-2">4.5M</p>
          <p className="text-sm text-blue-600 mt-1">+12.3% from last month</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-green-600 font-semibold">Interactions</h3>
          <p className="text-2xl font-bold text-green-700 mt-2">3.2M</p>
          <p className="text-sm text-green-600 mt-1">+8.7% from last month</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-yellow-600 font-semibold">Shares</h3>
          <p className="text-2xl font-bold text-yellow-700 mt-2">1.8M</p>
          <p className="text-sm text-yellow-600 mt-1">+15.2% from last month</p>
        </div>
      </div>
    </div>
  );
}