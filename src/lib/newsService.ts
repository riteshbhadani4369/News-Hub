interface NewsArticle {
  article_id: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  description: string;
  content: string;
  pubDate: string;
  pubDateTZ: string;
  image_url: string | null;
  video_url: string | null;
  source_id: string;
  source_name: string;
  source_priority: number;
  source_url: string;
  source_icon: string;
  language: string;
  country: string[];
  category: string[];
  duplicate: boolean;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  results: NewsArticle[];
  nextPage?: string;
}

export const fetchLatestNews = async (): Promise<NewsResponse> => {
  const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;
  const baseUrl = import.meta.env.VITE_NEWSDATA_BASE_URL;
  
  try {
    // const response = await fetch(
    //   `${baseUrl}?apikey=${apiKey}&language=en`
    // );
    const response = await fetch('https://news-hub-backend.vercel.app/api/news', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data: NewsResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const fetchNewsByCategory = async (category: string): Promise<NewsResponse> => {
  const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;
  const baseUrl = import.meta.env.VITE_NEWSDATA_BASE_URL;
  
  try {
    const response = await fetch(
      `${baseUrl}?apikey=${apiKey}&category=${category}&prioritydomain=top`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch ${category} news`);
    }

    const data: NewsResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    throw error;
  }
};

export const getNewsById = async (id: string): Promise<NewsArticle | null> => {
  const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;
  const baseUrl = import.meta.env.VITE_NEWSDATA_BASE_URL;

  try {
    const response = await fetch(
      `${baseUrl}?apikey=${apiKey}&id=${id}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch news article with ID: ${id}`);
    }

    const data: NewsArticle = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching news article with ID ${id}:`, error);
    throw error;
  }
};

export type { NewsArticle, NewsResponse };
