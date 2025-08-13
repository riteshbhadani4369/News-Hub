import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { value: "all", label: "All News" },
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business" },
  { value: "health", label: "Health" },
  { value: "sports", label: "Sports" },
  { value: "entertainment", label: "Entertainment" },
];

export const CategoryTabs = () => {
  return (
    <div className="w-full overflow-x-auto">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-6 w-full lg:w-auto lg:inline-flex">
          {categories.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="whitespace-nowrap data-[state=active]:bg-news-primary data-[state=active]:text-white"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};