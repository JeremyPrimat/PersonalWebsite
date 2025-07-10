const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiItem {
  id: number;
  attributes: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

class StrapiService {
  private baseURL: string;

  constructor() {
    this.baseURL = STRAPI_URL;
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<StrapiResponse<T>> {
    const url = new URL(`${this.baseURL}/api/${endpoint}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    try {
      const response = await fetch(url.toString(), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Strapi API Error:', error);
      throw error;
    }
  }

  // Helper method to get media URL
  getMediaURL(url: string): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${this.baseURL}${url}`;
  }
}

export const strapi = new StrapiService();