import { useState } from 'react';
import { Send, Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { searchKnowledgeBase, InfoItem } from '@/data/knowledgeBase';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'ai';
  content: string;
  relatedItems?: InfoItem[];
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateAIResponse = (query: string): { response: string; items: InfoItem[] } => {
    const results = searchKnowledgeBase(query);
    
    if (results.length === 0) {
      // Try broader search
      const words = query.toLowerCase().split(' ');
      const broadResults: InfoItem[] = [];
      
      for (const word of words) {
        if (word.length > 3) {
          broadResults.push(...searchKnowledgeBase(word));
        }
      }
      
      const uniqueResults = [...new Map(broadResults.map(item => [item.id, item])).values()];
      
      if (uniqueResults.length > 0) {
        return {
          response: `Non ho trovato informazioni esatte per "${query}", ma ecco alcune informazioni correlate che potrebbero esserti utili:`,
          items: uniqueResults.slice(0, 3)
        };
      }
      
      return {
        response: `Mi dispiace, non ho ancora informazioni su "${query}" nella mia knowledge base. Prova a cercare qualcosa come: diamanti, creeper farm, incantamenti, redstone, MLG water, o mob detection.`,
        items: []
      };
    }

    // Build detailed response
    const mainItem = results[0];
    let response = `## ${mainItem.title}\n\n${mainItem.description}\n\n`;

    if (mainItem.details && mainItem.details.length > 0) {
      response += `### Dettagli:\n`;
      mainItem.details.forEach(detail => {
        response += `- ${detail}\n`;
      });
      response += '\n';
    }

    if (mainItem.tips && mainItem.tips.length > 0) {
      response += `### Consigli:\n`;
      mainItem.tips.forEach(tip => {
        response += `- ${tip}\n`;
      });
      response += '\n';
    }

    if (mainItem.errors && mainItem.errors.length > 0) {
      response += `### ⚠️ Errori comuni:\n`;
      mainItem.errors.forEach(error => {
        response += `- ${error}\n`;
      });
      response += '\n';
    }

    if (mainItem.table) {
      response += `### ${mainItem.table.headers.join(' | ')}\n`;
      response += `| ${mainItem.table.headers.join(' | ')} |\n`;
      response += `| ${mainItem.table.headers.map(() => '---').join(' | ')} |\n`;
      mainItem.table.rows.forEach(row => {
        response += `| ${row.join(' | ')} |\n`;
      });
      response += '\n';
    }

    if (mainItem.difficulty) {
      response += `\n**Difficoltà:** ${mainItem.difficulty}\n`;
    }

    return {
      response,
      items: results.slice(1, 4)
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    const { response, items } = generateAIResponse(input);
    const aiMessage: Message = { 
      role: 'ai', 
      content: response,
      relatedItems: items
    };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const renderMarkdown = (text: string) => {
    // Simple markdown rendering
    const lines = text.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-bold text-primary mb-2">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-lg font-semibold text-foreground mt-4 mb-2">{line.slice(4)}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="ml-4 text-foreground/90">{line.slice(2)}</li>;
      }
      if (line.startsWith('| ')) {
        const cells = line.split('|').filter(Boolean).map(c => c.trim());
        if (line.includes('---')) return null;
        return (
          <div key={i} className="grid grid-cols-3 gap-2 text-sm py-1 border-b border-border">
            {cells.map((cell, j) => (
              <span key={j} className={j === 0 ? 'font-medium' : 'text-muted-foreground'}>{cell}</span>
            ))}
          </div>
        );
      }
      if (line.startsWith('**')) {
        const match = line.match(/\*\*(.+?)\*\*(.+)?/);
        if (match) {
          return <p key={i} className="mt-2"><strong className="text-primary">{match[1]}</strong>{match[2]}</p>;
        }
      }
      if (line.trim()) {
        return <p key={i} className="text-foreground/90">{line}</p>;
      }
      return null;
    });
  };

  return (
    <div className="stone-card overflow-hidden">
      {/* Header */}
      <div className="bg-primary/10 border-b border-border p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center animate-pulse-glow">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-foreground">Minecraft AI Assistant</h2>
            <p className="text-sm text-muted-foreground">Chiedi qualsiasi cosa su Minecraft Java Edition</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <Sparkles className="w-12 h-12 text-primary/50 mb-4" />
            <p className="text-muted-foreground mb-4">
              Ciao! Sono il tuo assistente Minecraft. Chiedimi qualsiasi cosa!
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Livello diamanti', 'Creeper farm', 'MLG water', 'Incantamenti'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, i) => (
          <div
            key={i}
            className={cn(
              "animate-slide-up",
              message.role === 'user' ? 'flex justify-end' : ''
            )}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-lg p-4",
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary'
              )}
            >
              {message.role === 'ai' ? (
                <div className="prose prose-invert prose-sm max-w-none">
                  {renderMarkdown(message.content)}
                  
                  {message.relatedItems && message.relatedItems.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-2">Argomenti correlati:</p>
                      <div className="flex flex-wrap gap-2">
                        {message.relatedItems.map((item) => (
                          <span
                            key={item.id}
                            className="text-xs px-2 py-1 bg-primary/20 text-primary rounded"
                          >
                            {item.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground animate-pulse">
            <Bot className="w-5 h-5" />
            <span>Sto cercando...</span>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Chiedi qualsiasi cosa su Minecraft (es. come ottenere Looting III, altezza migliore per i diamanti, come funziona una farm di creeper...)"
            className="min-h-[60px] max-h-32 bg-secondary border-border resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="px-6 bg-primary hover:bg-primary/90"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  );
}
