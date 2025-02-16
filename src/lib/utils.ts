import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mockData = {
  trendingChannels: [
    { name: 'Tech News', subscribers: 1250000, growth: 15.3, posts: 342 },
    { name: 'Crypto Updates', subscribers: 890000, growth: 12.8, posts: 287 },
    { name: 'Daily Memes', subscribers: 2100000, growth: 18.2, posts: 456 },
    { name: 'Science Daily', subscribers: 750000, growth: 9.5, posts: 198 },
    { name: 'World News', subscribers: 1800000, growth: 14.7, posts: 389 }
  ],
  engagementData: [
    { date: '2024-01', views: 2.5, interactions: 1.8, shares: 0.9 },
    { date: '2024-02', views: 3.2, interactions: 2.1, shares: 1.2 },
    { date: '2024-03', views: 4.1, interactions: 2.8, shares: 1.5 },
    { date: '2024-04', views: 3.8, interactions: 2.5, shares: 1.3 },
    { date: '2024-05', views: 4.5, interactions: 3.2, shares: 1.8 }
  ],
  categoryDistribution: [
    { name: 'Entertainment', value: 30 },
    { name: 'News', value: 25 },
    { name: 'Education', value: 20 },
    { name: 'Technology', value: 15 },
    { name: 'Others', value: 10 }
  ]
};