import { useState, useEffect } from 'react';
import { strapi, StrapiResponse, StrapiItem } from '../lib/strapi';
import { useMockStrapiData, useMockStrapiSingle } from './useMockData';

// Check if we should use mock data (when Strapi is not available)
const USE_MOCK_DATA = !import.meta.env.VITE_STRAPI_URL || import.meta.env.VITE_STRAPI_URL.includes('localhost');

export function useStrapiData<T>(
  endpoint: string,
  params?: Record<string, any>,
  dependencies: any[] = []
) {
  // Use mock data if Strapi is not available
  if (USE_MOCK_DATA) {
    return useMockStrapiData<T>(endpoint, params);
  }

  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await strapi.get<StrapiItem[]>(endpoint, {
          populate: '*',
          ...params,
        });

        // Transform Strapi response to our format
        const transformedData = response.data.map((item: StrapiItem) => ({
          id: item.id,
          ...item.attributes,
          // Transform media fields
          ...Object.keys(item.attributes).reduce((acc, key) => {
            const value = item.attributes[key];
            if (value && typeof value === 'object' && value.data) {
              // Handle single media
              if (value.data.attributes) {
                acc[key] = {
                  url: strapi.getMediaURL(value.data.attributes.url),
                  alternativeText: value.data.attributes.alternativeText,
                };
              }
              // Handle multiple media
              else if (Array.isArray(value.data)) {
                acc[key] = value.data.map((media: any) => ({
                  url: strapi.getMediaURL(media.attributes.url),
                  alternativeText: media.attributes.alternativeText,
                }));
              }
            }
            return acc;
          }, {} as Record<string, any>),
        })) as T[];

        setData(transformedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching Strapi data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: () => setLoading(true) };
}

export function useStrapiSingle<T>(
  endpoint: string,
  params?: Record<string, any>,
  dependencies: any[] = []
) {
  // Use mock data if Strapi is not available
  if (USE_MOCK_DATA) {
    return useMockStrapiSingle<T>(endpoint, params);
  }

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await strapi.get<StrapiItem>(endpoint, {
          populate: '*',
          ...params,
        });

        // Transform single item
        const transformedData = {
          id: response.data.id,
          ...response.data.attributes,
          // Transform media fields
          ...Object.keys(response.data.attributes).reduce((acc, key) => {
            const value = response.data.attributes[key];
            if (value && typeof value === 'object' && value.data) {
              if (value.data.attributes) {
                acc[key] = {
                  url: strapi.getMediaURL(value.data.attributes.url),
                  alternativeText: value.data.attributes.alternativeText,
                };
              }
            }
            return acc;
          }, {} as Record<string, any>),
        } as T;

        setData(transformedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching Strapi data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: () => setLoading(true) };
}