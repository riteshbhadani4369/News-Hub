import { 
  Monitor, 
  TrendingUp, 
  Heart, 
  Leaf, 
  Rocket, 
  Beaker,
  Camera,
  Globe,
  Trophy,
  Music,
  Car,
  Home,
  ImageOff
} from "lucide-react";

interface CategoryPlaceholderProps {
  category: string;
  className?: string;
}

const categoryIconMap: Record<string, any> = {
  // Technology categories
  'technology': Monitor,
  'tech': Monitor,
  'science': Beaker,
  'space': Rocket,
  'startup': Monitor,
  'ai': Monitor,
  'crypto': Monitor,
  
  // Business categories
  'business': TrendingUp,
  'finance': TrendingUp,
  'economy': TrendingUp,
  'markets': TrendingUp,
  'stock': TrendingUp,
  'investment': TrendingUp,
  'corporate': TrendingUp,
  
  // Health categories
  'health': Heart,
  'medical': Heart,
  'healthcare': Heart,
  'medicine': Heart,
  'wellness': Heart,
  'fitness': Heart,
  'nutrition': Heart,
  
  // Environment categories
  'environment': Leaf,
  'climate': Leaf,
  'sustainability': Leaf,
  'green': Leaf,
  
  // Sports categories
  'sports': Trophy,
  'football': Trophy,
  'basketball': Trophy,
  'soccer': Trophy,
  
  // Entertainment categories
  'entertainment': Music,
  'movies': Music,
  'music': Music,
  'celebrity': Music,
  
  // Auto categories
  'automotive': Car,
  'cars': Car,
  'auto': Car,
  
  // Lifestyle categories
  'lifestyle': Home,
  'home': Home,
  'design': Home,
  
  // Travel categories
  'travel': Globe,
  'tourism': Globe,
  
  // Default
  'default': ImageOff
};

const categoryColorMap: Record<string, string> = {
  'technology': 'hsl(221 83% 53%)',
  'tech': 'hsl(221 83% 53%)',
  'science': 'hsl(221 83% 53%)',
  'space': 'hsl(221 83% 53%)',
  'business': 'hsl(142 76% 36%)',
  'finance': 'hsl(142 76% 36%)',
  'health': 'hsl(0 84% 60%)',
  'medical': 'hsl(0 84% 60%)',
  'environment': 'hsl(142 76% 36%)',
  'sports': 'hsl(38 92% 50%)',
  'entertainment': 'hsl(271 76% 53%)',
  'automotive': 'hsl(220 13% 18%)',
  'lifestyle': 'hsl(221 83% 53%)',
  'travel': 'hsl(142 76% 36%)',
  'default': 'hsl(220 8.9% 46.1%)'
};

export const CategoryPlaceholder = ({ category, className = "" }: CategoryPlaceholderProps) => {
  const normalizedCategory = category.toLowerCase().trim();
  
  // Find the appropriate icon
  let IconComponent = categoryIconMap.default;
  let color = categoryColorMap.default;
  
  // Check for exact match first
  if (categoryIconMap[normalizedCategory]) {
    IconComponent = categoryIconMap[normalizedCategory];
    color = categoryColorMap[normalizedCategory] || color;
  } else {
    // Check for partial matches
    for (const [key, icon] of Object.entries(categoryIconMap)) {
      if (key !== 'default' && normalizedCategory.includes(key)) {
        IconComponent = icon;
        color = categoryColorMap[key] || color;
        break;
      }
    }
  }

  return (
    <div className={`relative bg-muted flex items-center justify-center ${className}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 40 40">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Icon and text */}
      <div className="text-center z-10">
        <div 
          className="mx-auto mb-3 p-4 rounded-full bg-background/80 backdrop-blur-sm"
          style={{ color }}
        >
          <IconComponent className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            Image not available
          </p>
          <p className="text-xs text-muted-foreground/70 capitalize">
            {category} • Placeholder
          </p>
        </div>
      </div>
      
      {/* Subtle overlay */}
      <div 
        className="absolute inset-0 opacity-5 rounded-lg"
        style={{ 
          background: `linear-gradient(135deg, ${color}22, ${color}11)` 
        }}
      />
    </div>
  );
};

/**
 * Generate a data URL for the category placeholder as a fallback
 * @param category - The news article category
 * @returns Data URL for the placeholder image
 */
export const getCategoryPlaceholderDataUrl = (category: string): string => {
  const normalizedCategory = category.toLowerCase().trim();
  let color = categoryColorMap.default;
  
  // Find appropriate color
  if (categoryColorMap[normalizedCategory]) {
    color = categoryColorMap[normalizedCategory];
  } else {
    for (const [key, categoryColor] of Object.entries(categoryColorMap)) {
      if (key !== 'default' && normalizedCategory.includes(key)) {
        color = categoryColor;
        break;
      }
    }
  }

  // Create a simple SVG placeholder
  const svg = `
    <svg width="400" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#f8fafc"/>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <rect x="175" y="110" width="50" height="30" rx="25" fill="${color}" opacity="0.1"/>
      <circle cx="200" cy="125" r="12" fill="${color}" opacity="0.3"/>
      <text x="200" y="130" text-anchor="middle" fill="${color}" font-family="system-ui" font-size="16" opacity="0.4">📷</text>
      <text x="200" y="155" text-anchor="middle" fill="${color}" font-family="system-ui" font-size="12" opacity="0.6">Image not available</text>
      <text x="200" y="175" text-anchor="middle" fill="${color}" font-family="system-ui" font-size="10" opacity="0.4">${category}</text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};