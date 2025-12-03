import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Pickaxe, Sword, Bug, Cpu, Zap, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchKnowledgeBase } from '@/data/knowledgeBase';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/farm', label: 'Farm', icon: Pickaxe },
  { path: '/combat', label: 'Combattimento', icon: Sword },
  { path: '/mob', label: 'Mob', icon: Bug },
  { path: '/redstone', label: 'Redstone', icon: Cpu },
  { path: '/tricks', label: 'Trick & Clutch', icon: Zap },
  { path: '/info', label: 'Info Generali', icon: Info },
];

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export function Navbar({ onSearch }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchKnowledgeBase>>([]);
  const [showResults, setShowResults] = useState(false);
  const location = useLocation();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 1) {
      const results = searchKnowledgeBase(query);
      setSearchResults(results.slice(0, 5));
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
    onSearch?.(query);
  };

  const getCategoryPath = (category: string) => {
    const paths: Record<string, string> = {
      farm: '/farm',
      combat: '/combat',
      mob: '/mob',
      redstone: '/redstone',
      trick: '/tricks',
      info: '/info',
    };
    return paths[category] || '/';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center group-hover:animate-pulse-glow transition-all">
              <span className="font-pixel text-primary-foreground text-xs">MC</span>
            </div>
            <span className="font-pixel text-sm text-primary hidden sm:block">
              Deep Wiki Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden xl:inline">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cerca..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery.length > 1 && setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
                className="pl-9 w-48 lg:w-64 bg-secondary border-border focus:border-primary"
              />
            </div>

            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-xl overflow-hidden animate-fade-in">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    to={getCategoryPath(result.category)}
                    className="block p-3 hover:bg-secondary transition-colors border-b border-border last:border-0"
                    onClick={() => setShowResults(false)}
                  >
                    <p className="font-semibold text-foreground">{result.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{result.description}</p>
                    <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded bg-primary/20 text-primary">
                      {result.subcategory}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                    location.pathname === item.path
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Search */}
            <div className="mt-4 px-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Cerca nel wiki..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-9 w-full bg-secondary border-border"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
