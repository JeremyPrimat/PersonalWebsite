import { useState, useEffect } from 'react';
import { mockProfile, mockBlogPosts, mockQuestions, mockSkills } from '../data/mockData';
import { Profile, BlogPost, Question, Skill } from '../types/strapi';

// Mock hook that simulates Strapi data fetching
export function useMockStrapiData<T>(
  endpoint: string,
  params?: Record<string, any>
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMockData = async () => {
      setLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      try {
        let mockData: any[] = [];
        
        switch (endpoint) {
          case 'skills':
            mockData = mockSkills;
            break;
          case 'blog-posts':
            mockData = mockBlogPosts;
            if (params?.pagination?.limit) {
              mockData = mockData.slice(0, params.pagination.limit);
            }
            break;
          case 'questions':
            mockData = mockQuestions;
            if (params?.filters?.featured?.$eq) {
              mockData = mockData.filter((q: Question) => q.featured);
            }
            if (params?.pagination?.limit) {
              mockData = mockData.slice(0, params.pagination.limit);
            }
            break;
          default:
            mockData = [];
        }
        
        setData(mockData as T[]);
      } catch (err) {
        setError('Failed to fetch mock data');
      } finally {
        setLoading(false);
      }
    };

    fetchMockData();
  }, [endpoint, JSON.stringify(params)]);

  return { data, loading, error, refetch: () => setLoading(true) };
}

export function useMockStrapiSingle<T>(
  endpoint: string,
  params?: Record<string, any>
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMockData = async () => {
      setLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      try {
        let mockData: any = null;
        
        switch (endpoint) {
          case 'profile':
            mockData = mockProfile;
            break;
          default:
            mockData = null;
        }
        
        setData(mockData as T);
      } catch (err) {
        setError('Failed to fetch mock data');
      } finally {
        setLoading(false);
      }
    };

    fetchMockData();
  }, [endpoint, JSON.stringify(params)]);

  return { data, loading, error, refetch: () => setLoading(true) };
}