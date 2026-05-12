// Use relative URLs so it works on both localhost and Vercel
const getApiUrl = (endpoint: string): string => {
  // Server-side: need absolute URL
  if (typeof window === 'undefined') {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    return `${baseUrl}${endpoint}`;
  }
  // Client-side: use relative URL
  return endpoint;
};

export const apiClient = {
  async get(endpoint: string) {
    try {
      const url = getApiUrl(endpoint);
      const res = await fetch(url, {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      return res.json();
    } catch (error) {
      console.error(`API GET error for ${endpoint}:`, error);
      return null;
    }
  },

  async post(endpoint: string, data: any) {
    try {
      const url = getApiUrl(endpoint);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      return res.json();
    } catch (error) {
      console.error(`API POST error for ${endpoint}:`, error);
      throw error;
    }
  },
};
