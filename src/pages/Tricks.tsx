import { Zap } from 'lucide-react';
import { SectionLayout } from '@/components/SectionLayout';
import { InfoCard } from '@/components/InfoCard';
import { getByCategory, getSubcategories, InfoItem } from '@/data/knowledgeBase';

const TricksPage = () => {
  const items = getByCategory('trick');
  const subcategories = getSubcategories('trick');

  const filterItems = (activeSubcategory: string | null, searchQuery: string): InfoItem[] => {
    let filtered = items;
    
    if (activeSubcategory) {
      filtered = filtered.filter(item => item.subcategory === activeSubcategory);
    }
    
    if (searchQuery.length > 1) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.keywords.some(k => k.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  };

  return (
    <SectionLayout
      title="Trick & Clutch"
      description="Tecniche avanzate di movimento e salvataggi epici. Dal MLG water al boat clutch."
      icon={<Zap className="w-8 h-8" />}
      subcategories={subcategories}
    >
      {(activeSubcategory, searchQuery) => {
        const filteredItems = filterItems(activeSubcategory, searchQuery);
        
        if (filteredItems.length === 0) {
          return (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Nessun risultato trovato.</p>
            </div>
          );
        }

        return filteredItems.map((item) => (
          <InfoCard key={item.id} item={item} highlightKeyword={searchQuery} />
        ));
      }}
    </SectionLayout>
  );
};

export default TricksPage;
