import techImage from "@/assets/tech-news.jpg";
import businessImage from "@/assets/business-news.jpg";
import healthImage from "@/assets/health-news.jpg";

// Category to image mapping for fallback images
const categoryImageMap: Record<string, string> = {
  // Technology categories
  'technology': techImage,
  'tech': techImage,
  'science': techImage,
  'space': techImage,
  'startup': techImage,
  'ai': techImage,
  'crypto': techImage,
  
  // Business categories
  'business': businessImage,
  'finance': businessImage,
  'economy': businessImage,
  'markets': businessImage,
  'stock': businessImage,
  'investment': businessImage,
  'corporate': businessImage,
  
  // Health categories
  'health': healthImage,
  'medical': healthImage,
  'healthcare': healthImage,
  'medicine': healthImage,
  'wellness': healthImage,
  'fitness': healthImage,
  'nutrition': healthImage,
  
  // Default fallback
  'default': techImage
};

/**
 * Get appropriate fallback image based on article category
 * @param category - The news article category
 * @returns The appropriate fallback image URL
 */
export const getCategoryFallbackImage = (category: string): string => {
  if (!category) return categoryImageMap.default;
  
  const normalizedCategory = category.toLowerCase().trim();
  
  // Check for exact match first
  if (categoryImageMap[normalizedCategory]) {
    return categoryImageMap[normalizedCategory];
  }
  
  // Check for partial matches
  for (const [key, image] of Object.entries(categoryImageMap)) {
    if (key !== 'default' && normalizedCategory.includes(key)) {
      return image;
    }
  }
  
  // Return default fallback
  return categoryImageMap.default;
};

/**
 * Get fallback image with error handling for img onError events
 * @param category - The news article category
 * @returns Image URL for the category
 */
export const handleImageError = (category: string) => {
  return getCategoryFallbackImage(category);
};