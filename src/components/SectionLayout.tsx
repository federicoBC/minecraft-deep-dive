import { ReactNode, useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Navbar } from './Navbar';
import { cn } from '@/lib/utils';

interface SectionLayoutProps {
  title: string;
  description: string;
  icon: ReactNode;
  subcategories: string[];
  children: (activeSubcategory: string | null, searchQuery: string) => ReactNode;
}

export function SectionLayout({
  title,
  description,
  icon,
  subcategories,
  children,
}: SectionLayoutProps) {
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/20 text-primary mb-4">
              {icon}
            </div>
            <h1 className="minecraft-title text-2xl md:text-3xl text-primary mb-2">{title}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={`Cerca in ${title.toLowerCase()}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-border"
              />
            </div>

            {/* Subcategory Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveSubcategory(null)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeSubcategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                Tutti
              </button>
              {subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    activeSubcategory === sub
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  )}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="grid gap-4 md:grid-cols-2">
            {children(activeSubcategory, searchQuery)}
          </div>
        </div>
      </main>
    </div>
  );
}
