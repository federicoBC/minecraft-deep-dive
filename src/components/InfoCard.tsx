import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, Lightbulb, Info, PlayCircle, Image as ImageIcon } from 'lucide-react';
import { InfoItem } from '@/data/knowledgeBase';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface InfoCardProps {
  item: InfoItem;
  highlightKeyword?: string;
}

export function InfoCard({ item, highlightKeyword }: InfoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlightText = (text: string) => {
    if (!highlightKeyword || highlightKeyword.length < 2) return text;
    const regex = new RegExp(`(${highlightKeyword})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-primary/30 text-foreground rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Noob': return 'bg-green-500/20 text-green-400';
      case 'Pro': return 'bg-blue-500/20 text-blue-400';
      case 'Master': return 'bg-purple-500/20 text-purple-400';
      case 'Legend': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-primary/20 text-primary';
    }
  };

  return (
    <div className="stone-card overflow-hidden animate-fade-in hover:border-primary/50 transition-colors">
      {/* Header */}
      <div
        className="p-4 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                {item.subcategory}
              </span>
              {item.difficulty && (
                <span className={cn("text-xs px-2 py-0.5 rounded", getDifficultyColor(item.difficulty))}>
                  {item.difficulty}
                </span>
              )}
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">
              {highlightText(item.title)}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {highlightText(item.description)}
            </p>
          </div>
          <button className="shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-border pt-4 animate-slide-up">
          {/* Details */}
          {item.details && item.details.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground">Dettagli</h4>
              </div>
              <ul className="space-y-1">
                {item.details.map((detail, i) => (
                  <li key={i} className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                    {highlightText(detail)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tips */}
          {item.tips && item.tips.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-gold" />
                <h4 className="font-semibold text-foreground">Consigli</h4>
              </div>
              <ul className="space-y-1">
                {item.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-muted-foreground pl-4 relative before:content-['💡'] before:absolute before:left-0">
                    {highlightText(tip)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Errors */}
          {item.errors && item.errors.length > 0 && (
            <div className="bg-destructive/10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <h4 className="font-semibold text-destructive">Errori Comuni</h4>
              </div>
              <ul className="space-y-1">
                {item.errors.map((error, i) => (
                  <li key={i} className="text-sm text-destructive/80 pl-4">
                    {highlightText(error)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Table */}
          {item.table && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {item.table.headers.map((header, i) => (
                      <th key={i} className="text-left py-2 px-2 font-semibold text-foreground">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.table.rows.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-secondary/50">
                      {row.map((cell, j) => (
                        <td key={j} className="py-2 px-2 text-muted-foreground">
                          {highlightText(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Step-by-Step Guide */}
          {item.steps && item.steps.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ImageIcon className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground">Tutorial Passo-Passo</h4>
              </div>
              <div className="space-y-4">
                {item.steps.map((step) => (
                  <div key={step.step} className="bg-secondary/30 rounded-lg p-3">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground mb-1">{step.title}</h5>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        {step.imageUrl && (
                          <div className="mt-2 rounded-lg overflow-hidden border border-border">
                            <img 
                              src={step.imageUrl} 
                              alt={`Step ${step.step}: ${step.title}`}
                              className="w-full h-auto object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Images Gallery */}
          {item.images && item.images.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ImageIcon className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground">Immagini</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.images.map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-border">
                    <img 
                      src={img.url} 
                      alt={img.caption}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <p className="text-xs text-muted-foreground p-2 bg-secondary/50">{img.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* YouTube Video */}
          {item.videoUrl && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <PlayCircle className="w-4 h-4 text-redstone" />
                <h4 className="font-semibold text-foreground">Video Tutorial</h4>
              </div>
              <div className="rounded-lg overflow-hidden border border-border">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={item.videoUrl}
                    title="Video Tutorial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          )}

          {/* Keywords */}
          <div className="flex flex-wrap gap-1 pt-2">
            {item.keywords.slice(0, 6).map((keyword, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                #{keyword}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
