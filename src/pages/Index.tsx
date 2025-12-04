import { Link } from 'react-router-dom';
import { Pickaxe, Sword, Bug, Cpu, Zap, Info, ChevronRight, Gem, Mountain } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { AIChat } from '@/components/AIChat';
import { knowledgeBase } from '@/data/knowledgeBase';

const sections = [
  {
    path: '/farm',
    title: 'Farm',
    description: 'Guide complete per farm automatiche di ogni tipo',
    icon: Pickaxe,
    color: 'text-grass',
    count: knowledgeBase.filter(i => i.category === 'farm').length,
  },
  {
    path: '/combat',
    title: 'Combattimento',
    description: 'Meccaniche PvP, PvE e strategie boss',
    icon: Sword,
    color: 'text-redstone',
    count: knowledgeBase.filter(i => i.category === 'combat').length,
  },
  {
    path: '/mob',
    title: 'Mob',
    description: 'Comportamento e meccaniche di ogni creatura',
    icon: Bug,
    color: 'text-primary',
    count: knowledgeBase.filter(i => i.category === 'mob').length,
  },
  {
    path: '/redstone',
    title: 'Redstone',
    description: 'Circuiti, componenti e progetti',
    icon: Cpu,
    color: 'text-redstone',
    count: knowledgeBase.filter(i => i.category === 'redstone').length,
  },
  {
    path: '/tricks',
    title: 'Trick & Clutch',
    description: 'Tecniche avanzate e salvataggi epici',
    icon: Zap,
    color: 'text-gold',
    count: knowledgeBase.filter(i => i.category === 'trick').length,
  },
  {
    path: '/info',
    title: 'Info Generali',
    description: 'Minerali, incantamenti, pozioni e altro',
    icon: Info,
    color: 'text-diamond',
    count: knowledgeBase.filter(i => i.category === 'info').length,
  },
];


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl relative">
            {/* Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <Mountain className="w-10 h-10 text-primary animate-float" />
                <Gem className="w-8 h-8 text-diamond animate-float" style={{ animationDelay: '0.5s' }} />
              </div>
              <h1 className="minecraft-title text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
                Minecraft Deep Wiki Hub
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                La risorsa definitiva per Minecraft Java Edition. 
                Tutte le informazioni tecniche, dalle basi alle meccaniche più nascoste.
              </p>
            </div>

            {/* AI Chat - Main Feature */}
            <div className="max-w-3xl mx-auto mb-16">
              <AIChat />
            </div>


            {/* Section Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section) => (
                <Link
                  key={section.path}
                  to={section.path}
                  className="group stone-card p-6 hover:border-primary/50 transition-all hover:glow-primary"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-secondary ${section.color}`}>
                      <section.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                      {section.count} guide
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {section.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-primary font-medium">
                    Esplora
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-sm text-muted-foreground">
              Minecraft Deep Wiki Hub - La tua guida definitiva a Minecraft Java Edition
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Non affiliato con Mojang Studios o Microsoft
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
