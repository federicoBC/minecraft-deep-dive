// src/data/knowledgeBase.ts
// Minecraft Deep Wiki Hub - Knowledge Base (Versione Ottimizzata)

export interface InfoItem {
  id: string;
  category: 'farm' | 'combat' | 'mob' | 'redstone' | 'trick' | 'info';
  subcategory: string;
  title: string;
  description: string;
  details?: string[];
  tips?: string[];
  errors?: string[];
  difficulty?: 'Noob' | 'Pro' | 'Master' | 'Legend';
  table?: { headers: string[]; rows: string[][] };
  keywords: string[];
  images?: { url: string; caption: string }[];
  videoUrl?: string;
  steps?: { step: number; title: string; description: string; imageUrl?: string }[];
}

export const knowledgeBase: InfoItem[] = [
  // === INFO MINERALI ===
  {
    id: 'diamonds-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Diamanti - Livello Y Ottimale',
    description: 'I diamanti si generano tra Y -64 e Y 16, con la massima concentrazione a Y -59.',
    details: [
      'Range di generazione: Y -64 a Y 16',
      'Livello ottimale: Y -59 (massima densità)',
      'Attenzione alla lava che si genera naturalmente a Y -54',
      'I diamanti sono più rari vicino ad aree esposte all\'aria (cave)'
    ],
    tips: [
      'Usa Fortune III per massimizzare i drop',
      'Branch mining a Y -59 con tunnel ogni 2 blocchi',
      'Porta secchi d\'acqua per la lava'
    ],
    keywords: ['diamanti', 'diamonds', 'y level', 'livello', 'minerali', 'mining', 'scavare']
  },
  {
    id: 'iron-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Ferro - Livello Y Ottimale',
    description: 'Il ferro ha due picchi di generazione: Y 16 e Y 232.',
    details: [
      'Primo picco: Y 16 (migliore per branch mining)',
      'Secondo picco: Y 232 (in montagne alte)',
      'Range totale: Y -64 a Y 320',
      'Più comune del carbone in certi livelli'
    ],
    tips: [
      'Le montagne sono ottime per ferro esposto',
      'Fortune non funziona sul ferro grezzo',
      'Considera una iron farm per quantità industriali'
    ],
    keywords: ['ferro', 'iron', 'y level', 'livello', 'minerali', 'mining']
  },
  {
    id: 'netherite-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Netherite (Ancient Debris) - Livello Y Ottimale',
    description: 'L\'Ancient Debris è il minerale più raro del gioco, trovato solo nel Nether.',
    details: [
      'Range: Y 8 a Y 119 (nel Nether)',
      'Livello ottimale: Y 15 (massima concentrazione)',
      'Massimo 2 vene per chunk',
      'Non brucia nella lava',
      'Servono 4 scrap + 4 lingotti d\'oro = 1 Netherite Ingot'
    ],
    tips: [
      'Usa bed/TNT mining: fai esplodere letti per scavare velocemente',
      'Branch mining a Y 15 è il più efficiente',
      'Fortune NON funziona',
      'Porta Fire Resistance per la lava'
    ],
    keywords: ['netherite', 'ancient debris', 'nether', 'y level', 'minerali', 'debris']
  },
  {
    id: 'gold-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Oro - Livello Y Ottimale',
    description: 'L\'oro si genera sotto Y 32 nell\'Overworld (picco Y -16) e abbondantemente nel Nether.',
    details: [
      'Overworld: Y -64 a Y 32, picco a Y -16',
      'Nether: Y 15 a Y 117 (molto più comune)',
      'Nel Nether anche nei Basalt Deltas'
    ],
    tips: [
      'Il Nether è 10x più efficiente per l\'oro',
      'Usa Fortune per massimizzare'
    ],
    keywords: ['oro', 'gold', 'y level', 'minerali', 'nether']
  },

  // === INFO BASICS ===
  {
    id: 'crafting-table-basics',
    category: 'info',
    subcategory: 'Basics',
    title: 'Crafting Table - Come Craftare',
    description: 'Il tavolo da lavoro è il primo oggetto essenziale. Si crafta con 4 assi di legno.',
    details: [
      'Recipe: 4 assi di legno (qualsiasi tipo) in un quadrato 2x2',
      'Permette crafting in griglia 3x3',
      'Essenziale per quasi tutti gli strumenti'
    ],
    keywords: ['crafting', 'table', 'tavolo', 'lavoro', 'craft', 'basics', 'come si fa']
  },
  {
    id: 'furnace-basics',
    category: 'info',
    subcategory: 'Basics',
    title: 'Fornace - Come Usarla',
    description: 'La fornace cuoce cibi, smelta minerali e crea altri materiali.',
    details: [
      'Recipe: 8 cobblestone in cerchio (centro vuoto)',
      'Slot superiore: oggetto da cuocere',
      'Slot inferiore: combustibile',
      'Output: slot a destra'
    ],
    tips: [
      'Carbone cuoce 8 item',
      'Lava bucket cuoce 100 item (il migliore)',
      'Blast Furnace: 2x veloce per minerali'
    ],
    keywords: ['fornace', 'furnace', 'cuocere', 'smelting', 'smeltare']
  },

  // === INFO ENCHANTING ===
  {
    id: 'enchanting-basics',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Incantamento - Guida Base',
    description: 'Il tavolo degli incantesimi usa lapis e livelli per applicare enchant casuali.',
    details: [
      'Recipe tavolo: 4 obsidian + 2 diamanti + 1 libro',
      'Librerie: massimo 15 per enchant lvl 30',
      'Distanza librerie: 1 blocco dal tavolo',
      'Costo: 1-3 lapis + 1-3 livelli XP'
    ],
    tips: [
      'Sempre incanta al livello 30 per best enchant',
      'Incanta libro se non vuoi l\'enchant offerto',
      'Anvil per combinare enchant'
    ],
    keywords: ['incantare', 'enchant', 'enchanting', 'tavolo', 'librerie', 'bookshelf']
  },
  {
    id: 'how-get-mending',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Come Ottenere Mending',
    description: 'Mending è il treasure enchant più importante. Non si trova al tavolo degli incantesimi.',
    details: [
      'Villager Librarian: trade (può essere resettato)',
      'Chest loot: Dungeon, Mineshaft, End City',
      'Fishing: possibile ma molto raro',
      'NON ottenibile dal tavolo degli incantesimi'
    ],
    tips: [
      'Resetta i librarian fino a Mending al primo slot',
      'Curare zombie villager = Mending per 1 emerald'
    ],
    keywords: ['mending', 'come', 'ottenere', 'trovare', 'librarian', 'villager']
  },
  {
    id: 'best-enchants-tools',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Migliori Enchant Strumenti',
    description: 'Gli enchant ottimali per piccone, ascia, pala e zappa.',
    details: [
      'Piccone: Efficiency V, Unbreaking III, Mending, Fortune III/Silk Touch',
      'Ascia: Efficiency V, Unbreaking III, Mending, Sharpness V',
      'Pala: Efficiency V, Unbreaking III, Mending, Silk Touch',
      'Zappa: Efficiency V, Unbreaking III, Mending'
    ],
    tips: [
      'Fortune III: 2.2x drop in media per diamanti',
      'Silk Touch: essenziale per grass, glass, ender chest',
      'Usa 2 picconi: uno Fortune, uno Silk Touch'
    ],
    keywords: ['enchant', 'piccone', 'pickaxe', 'efficiency', 'fortune', 'silk touch']
  },

  // === FARM ===
  {
    id: 'creeper-farm',
    category: 'farm',
    subcategory: 'Gunpowder',
    title: 'Creeper Farm - Guida Completa',
    description: 'Le creeper farm sfruttano il fatto che i creeper sono alti 1.7 blocchi.',
    details: [
      'Altezza piattaforma: 2 blocchi con trapdoor aperte in alto',
      'I trapdoor "ingannano" il pathfinding dei mob',
      'Usa carpet per prevenire spawn di spider',
      'Distanza spawn: 24-128 blocchi dal giocatore'
    ],
    tips: [
      'Costruisci sopra un oceano per massimizzare le rate',
      'AFK a 100+ blocchi di altezza dal terreno',
      'Looting III sulla spada aumenta il drop'
    ],
    videoUrl: 'https://www.youtube.com/embed/y0yd2LRxlBM',
    keywords: ['creeper', 'farm', 'gunpowder', 'polvere da sparo', 'tnt', 'trapdoor']
  },
  {
    id: 'iron-farm',
    category: 'farm',
    subcategory: 'Ferro',
    title: 'Iron Farm - Meccaniche Complete',
    description: 'Le iron farm sfruttano i villager spaventati che evocano Iron Golem.',
    details: [
      'Requisiti: 3 villager + 3 letti + 3 postazioni lavoro',
      'Lo zombie deve essere visibile ai villager',
      'I golem spawnano in un\'area 16x6x16',
      'Cooldown spawn: 35 secondi dopo la morte del golem precedente'
    ],
    tips: [
      'Usa vetro per proteggere i villager dallo zombie',
      'Name tag sullo zombie per non farlo despawnare',
      'Hopper + chest per raccolta automatica'
    ],
    videoUrl: 'https://www.youtube.com/embed/0L_optIDhKo',
    keywords: ['ferro', 'iron', 'farm', 'golem', 'villager', 'automatica']
  },
  {
    id: 'xp-farm-enderman',
    category: 'farm',
    subcategory: 'XP',
    title: 'Enderman XP Farm - End',
    description: 'La farm di enderman nell\'End è la più efficiente per XP.',
    details: [
      'Costruisci a 128+ blocchi dall\'isola centrale',
      'Piattaforma con endermite in minecart come esca',
      'Gli enderman aggrano l\'endermite e cadono',
      'XP: ~30 livelli al minuto con buone rate'
    ],
    tips: [
      'L\'endermite deve essere intrappolata in un minecart',
      'Usa name tag sull\'endermite',
      'Looting III per perle extra'
    ],
    videoUrl: 'https://www.youtube.com/embed/nh8voJScSbw',
    keywords: ['xp', 'enderman', 'farm', 'end', 'esperienza', 'livelli']
  },
  {
    id: 'villager-trading',
    category: 'farm',
    subcategory: 'Villager',
    title: 'Villager Trading Hall',
    description: 'Un trading hall efficiente permette di ottenere libri incantati e risorse.',
    details: [
      'Ogni villager ha bisogno di: 1 letto + 1 postazione',
      'Cambia professione rompendo/rimettendo la postazione',
      'Zombie villager curati hanno sconto permanente'
    ],
    tips: [
      'Cura zombie villager per prezzi 1 emerald',
      'Librarian = libri incantati',
      'Armorer/Weaponsmith = diamond gear per emeraldi'
    ],
    keywords: ['villager', 'trading', 'scambio', 'smeraldi', 'emerald', 'libri']
  },

  // === COMBAT ===
  {
    id: 'mob-detection-range',
    category: 'combat',
    subcategory: 'Meccaniche',
    title: 'Distanza di Rilevamento Mob',
    description: 'Ogni mob ha una distanza specifica a cui può vedere e aggredire il giocatore.',
    table: {
      headers: ['Mob', 'Distanza Base', 'Note'],
      rows: [
        ['Zombie', '40 blocchi', 'Line of sight necessaria'],
        ['Skeleton', '16 blocchi', 'Attacca da lontano'],
        ['Creeper', '16 blocchi', 'Si avvicina silenzioso'],
        ['Enderman', '64 blocchi', 'Solo se lo guardi'],
        ['Warden', 'Suono/Vibrazione', 'È cieco, usa l\'udito']
      ]
    },
    keywords: ['mob', 'distanza', 'detection', 'aggro', 'range']
  },
  {
    id: 'critical-hits',
    category: 'combat',
    subcategory: 'PvP/PvE',
    title: 'Colpi Critici - Come Funzionano',
    description: 'I critical hits infliggono il 150% del danno base.',
    details: [
      'Danno: 150% del danno normale',
      'Requisiti: caduta, non sulla scala, non in acqua',
      'Il salto è il modo più comune per ottenerli',
      'Particelle stellate indicano un critico'
    ],
    tips: [
      'Salta e colpisci al momento giusto',
      'In PvP, il timing è fondamentale'
    ],
    keywords: ['critico', 'critical', 'danno', 'damage', 'pvp', 'pve']
  },
  {
    id: 'warden-strategy',
    category: 'combat',
    subcategory: 'Boss',
    title: 'Warden - Strategie di Sopravvivenza',
    description: 'Il Warden è il mob più forte del gioco. Non combatterlo: evitalo.',
    details: [
      '500 HP (250 cuori) - più di qualsiasi boss',
      'Danno devastante anche con Netherite',
      'Rileva tramite suono e vibrazioni',
      'Attacco sonoro passa attraverso i blocchi'
    ],
    tips: [
      'Sneaking = non produce vibrazioni',
      'Lana blocca le vibrazioni',
      'Lanciare snowball/frecce distrae il Warden',
      'NON COMBATTERE: non vale la pena'
    ],
    keywords: ['warden', 'deep dark', 'sculk', 'ancient city', 'evitare']
  },
  {
    id: 'ender-dragon-strategy',
    category: 'combat',
    subcategory: 'Boss',
    title: 'Ender Dragon - Guida Completa',
    description: 'L\'Ender Dragon è il boss finale principale.',
    details: [
      '200 HP - si rigenera dai cristalli',
      'Fase 1: Distruggi tutti i cristalli End',
      'Fase 2: Attacca quando scende a terra',
      'Immune a frecce durante il volo'
    ],
    tips: [
      'Slow Falling potion per non morire',
      'Pumpkin head per evitare aggro Enderman',
      'Letti esplodono nell\'End = danno massiccio'
    ],
    videoUrl: 'https://www.youtube.com/embed/LUCEJz3OGBA',
    keywords: ['ender dragon', 'drago', 'end', 'boss', 'cristalli']
  },

  // === MOB ===
  {
    id: 'enderman-behavior',
    category: 'mob',
    subcategory: 'Neutral',
    title: 'Enderman - Comportamento',
    description: 'Gli Enderman sono mob neutrali che aggrediscono solo se guardati negli occhi.',
    details: [
      'Si teletrasportano se colpiti o guardati',
      'Prendono danno dall\'acqua e dalla pioggia',
      'Possono raccogliere alcuni blocchi',
      'HP: 40 (20 cuori)'
    ],
    tips: [
      'Pumpkin head: puoi guardarli senza aggro',
      'Attacca le gambe: troppo bassi per contrattaccare',
      'Acqua intorno a te = safe zone'
    ],
    keywords: ['enderman', 'ender', 'mob', 'teletrasporto', 'perla', 'pearl']
  },
  {
    id: 'creeper-behavior',
    category: 'mob',
    subcategory: 'Hostile',
    title: 'Creeper - Comportamento e Meccaniche',
    description: 'I Creeper sono mob silenziosi che esplodono vicino al giocatore.',
    details: [
      'Fuse time: 1.5 secondi prima dell\'esplosione',
      'Explosion radius: 3 blocchi',
      'Charged Creeper: colpito da fulmine, esplosione 2x',
      'Gatti li spaventano (entro 6 blocchi)'
    ],
    tips: [
      'Sprint + hit + back: colpisci e allontanati',
      'Shield blocca l\'esplosione',
      'Charged Creeper = unico modo per ottenere teste mob'
    ],
    keywords: ['creeper', 'esplosione', 'charged', 'gunpowder', 'gatto']
  },
  {
    id: 'villager-mechanics',
    category: 'mob',
    subcategory: 'Passive',
    title: 'Villager - Meccaniche Complete',
    description: 'I villager sono mob passivi con cui fare trading.',
    details: [
      'Richiedono: letto + postazione lavoro',
      'Professioni cambiano in base alla postazione',
      'Trade si refreshano 2 volte al giorno',
      'Breeding: servono letti extra e cibo'
    ],
    tips: [
      'Cura zombie villager per sconti permanenti',
      'Non colpirli: aumenta i prezzi',
      'Proteggi il villaggio da raid'
    ],
    keywords: ['villager', 'trading', 'professione', 'sconti', 'breeding']
  },

  // === REDSTONE ===
  {
    id: 'redstone-basics',
    category: 'redstone',
    subcategory: 'Basics',
    title: 'Redstone - Basi del Segnale',
    description: 'La redstone è il sistema di circuiti di Minecraft.',
    details: [
      'Forza massima: 15',
      'Decadimento: -1 per blocco di distanza',
      'Repeater: resetta a 15 e aggiunge delay',
      'Comparator: confronta, sottrae, legge container'
    ],
    tips: [
      'Torche invertono il segnale',
      'Sticky piston può spostare 12 blocchi',
      'Observer detecta cambiamenti di stato'
    ],
    keywords: ['redstone', 'segnale', 'circuito', 'repeater', 'comparator']
  },
  {
    id: 'piston-mechanics',
    category: 'redstone',
    subcategory: 'Componenti',
    title: 'Piston e Sticky Piston',
    description: 'I pistoni sono fondamentali per costruzioni redstone.',
    details: [
      'Push limit: 12 blocchi',
      'Sticky piston: tira indietro 1 blocco',
      'Alcuni blocchi sono immovibili (obsidian, bedrock)',
      'Slime/honey blocks creano strutture movibili'
    ],
    tips: [
      'Slime + honey non si attaccano tra loro',
      'Usa per porte segrete, farm, flying machines'
    ],
    keywords: ['piston', 'sticky', 'redstone', 'slime', 'honey', 'push']
  },
  {
    id: 'automatic-door',
    category: 'redstone',
    subcategory: 'Progetti',
    title: 'Porta Automatica con Piston',
    description: 'Una porta a pistoni 2x2 o 3x3 è un classico progetto redstone.',
    details: [
      '2x2: richiede 2 sticky piston per lato',
      '3x3: servono sticky piston e slime blocks',
      'Attivazione: pressure plate, button, lever'
    ],
    tips: [
      'Inizia con una 2x2, più semplice',
      'Usa redstone lamp per indicare stato'
    ],
    keywords: ['porta', 'door', 'piston', 'automatica', 'redstone', '2x2']
  },

  // === TRICKS ===
  {
    id: 'mlg-water',
    category: 'trick',
    subcategory: 'Clutch',
    title: 'MLG Water Bucket',
    description: 'Piazzare acqua sotto di te un istante prima di toccare terra per annullare il fall damage.',
    difficulty: 'Pro',
    details: [
      'Guarda verso il basso durante la caduta',
      'Click destro per piazzare l\'acqua',
      'Timing: circa 2-3 blocchi dal suolo',
      'Richiede un blocco solido sotto'
    ],
    tips: [
      'Pratica da altezze basse prima',
      'Funziona anche con secchio di polvite',
      'In PvP, può salvare la vita'
    ],
    keywords: ['mlg', 'water', 'bucket', 'clutch', 'fall damage', 'secchio']
  },
  {
    id: 'pearl-clutch',
    category: 'trick',
    subcategory: 'Clutch',
    title: 'Ender Pearl Clutch',
    description: 'Lanciare una ender pearl verso un blocco sicuro mentre cadi nel vuoto.',
    difficulty: 'Master',
    details: [
      'La pearl deve atterrare prima che tu muoia',
      'Prendi 5 cuori di danno dal teletrasporto',
      'Timing critico: lancia quando sei ancora abbastanza in alto',
      'Non funziona nell\'End void sotto Y 0'
    ],
    tips: [
      'In the End: salva la vita dal void',
      'Pearl speed: circa 30 blocchi/secondo',
      'Calcola in anticipo dove atterrerà'
    ],
    keywords: ['pearl', 'ender', 'clutch', 'void', 'teletrasporto', 'end']
  },
  {
    id: 'elytra-boost-methods',
    category: 'trick',
    subcategory: 'Movement',
    title: 'Elytra Boost Methods',
    description: 'Tutti i modi per accelerare con l\'elytra.',
    difficulty: 'Pro',
    details: [
      'Firework: boost standard, 1-3 gunpowder = diversa potenza',
      'Trident + Riptide: boost infinito durante pioggia',
      'TNT: boost estremo ma dannoso'
    ],
    tips: [
      'Firework senza stars = no damage',
      'Riptide III + pioggia = velocità massima',
      'Unbreaking + Mending essenziali per elytra'
    ],
    keywords: ['elytra', 'boost', 'firework', 'riptide', 'volo', 'fly']
  }
];

// Funzioni di ricerca
export function searchKnowledgeBase(query: string): InfoItem[] {
  const lowerQuery = query.toLowerCase();
  return knowledgeBase.filter(item => 
    item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery)) ||
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery)
  );
}

export function getByCategory(category: InfoItem['category']): InfoItem[] {
  return knowledgeBase.filter(item => item.category === category);
}

export function getBySubcategory(category: InfoItem['category'], subcategory: string): InfoItem[] {
  return knowledgeBase.filter(item => item.category === category && item.subcategory === subcategory);
}

export function getSubcategories(category: InfoItem['category']): string[] {
  const items = getByCategory(category);
  return [...new Set(items.map(item => item.subcategory))];
}
