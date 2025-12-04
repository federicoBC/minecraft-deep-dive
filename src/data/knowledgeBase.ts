// Minecraft Deep Wiki Hub - Knowledge Base
// This file contains all the information used by the site and AI

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
}

export const knowledgeBase: InfoItem[] = [
  // === MINERALS / INFO GENERALI ===
  {
    id: 'diamonds-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Diamanti - Livello Y Ottimale',
    description: 'I diamanti si generano tra Y -64 e Y 16, con la massima concentrazione a Y -59. Dal 1.18+ la distribuzione è "triangolare", quindi scavare più in basso è sempre meglio.',
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
    description: 'Il ferro ha due picchi di generazione: Y 16 e Y 232. Per il mining tradizionale, Y 16 è il migliore. In montagna puoi trovarlo esposto in superficie.',
    details: [
      'Primo picco: Y 16 (migliore per branch mining)',
      'Secondo picco: Y 232 (in montagne alte)',
      'Range totale: Y -64 a Y 320',
      'Più comune del carbone in certi livelli'
    ],
    tips: [
      'Le montagne sono ottime per ferro esposto',
      'Fortune non funziona sul ferro grezzo, usa Silk Touch per smelting bonus',
      'Considera una iron farm per quantità industriali'
    ],
    keywords: ['ferro', 'iron', 'y level', 'livello', 'minerali', 'mining']
  },
  {
    id: 'coal-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Carbone - Livello Y Ottimale',
    description: 'Il carbone si genera principalmente tra Y 0 e Y 320, con picco a Y 96. È estremamente comune in superficie e nelle colline.',
    details: [
      'Range: Y 0 a Y 320',
      'Picco: Y 96',
      'Vene fino a 17 blocchi',
      'Molto comune in superficie'
    ],
    tips: [
      'Fortune III può dare fino a 4 carbone per blocco',
      'In early game, esplora cave in superficie',
      'Considera wither skeleton per carbone infinito'
    ],
    keywords: ['carbone', 'coal', 'y level', 'minerali', 'mining']
  },
  {
    id: 'redstone-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Redstone - Livello Y Ottimale',
    description: 'La redstone si genera sotto Y 16, con concentrazione massima a Y -59. Simile ai diamanti ma leggermente più comune.',
    details: [
      'Range: Y -64 a Y 16',
      'Livello ottimale: Y -59',
      'Vene fino a 10 blocchi',
      'Drop 4-5 polvere per blocco (più con Fortune)'
    ],
    keywords: ['redstone', 'pietra rossa', 'y level', 'minerali', 'mining']
  },
  {
    id: 'lapis-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Lapislazzuli - Livello Y Ottimale',
    description: 'Il lapislazzuli ha una distribuzione unica centrata a Y 0, con massima concentrazione proprio a quel livello.',
    details: [
      'Range: Y -64 a Y 64',
      'Livello ottimale: Y 0 (centro della distribuzione)',
      'Vene fino a 7 blocchi',
      'Essenziale per incantamenti'
    ],
    keywords: ['lapis', 'lapislazzuli', 'y level', 'minerali', 'enchanting', 'incantamenti']
  },
  {
    id: 'gold-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Oro - Livello Y Ottimale',
    description: 'L\'oro si genera sotto Y 32 nell\'Overworld (picco Y -16) e abbondantemente nel Nether tra Y 15 e Y 117.',
    details: [
      'Overworld: Y -64 a Y 32, picco a Y -16',
      'Nether: Y 15 a Y 117 (molto più comune)',
      'Nel Nether anche nei Basalt Deltas',
      'I Piglin aggro se mini oro vicino a loro'
    ],
    tips: [
      'Il Nether è 10x più efficiente per l\'oro',
      'Usa Fortune per massimizzare',
      'L\'oro del Nether richiede fornace'
    ],
    keywords: ['oro', 'gold', 'y level', 'minerali', 'nether', 'piglin']
  },
  {
    id: 'emerald-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Smeraldi - Livello Y Ottimale',
    description: 'Gli smeraldi si generano SOLO nei biomi montani, tra Y -16 e Y 320, con picco a Y 236.',
    details: [
      'SOLO in biomi: Mountains, Windswept Hills, ecc.',
      'Range: Y -16 a Y 320',
      'Picco: Y 236 (alte montagne)',
      'Sempre vene singole (1 blocco)'
    ],
    tips: [
      'Il trading con villager è molto più efficiente',
      'Fortune III essenziale (fino a 4 smeraldi)',
      'Cerca nelle montagne più alte'
    ],
    keywords: ['smeraldi', 'emerald', 'y level', 'minerali', 'villager', 'montagne']
  },
  {
    id: 'copper-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Rame - Livello Y Ottimale',
    description: 'Il rame si genera tra Y -16 e Y 112, con picco a Y 48. Molto comune nelle Dripstone Caves.',
    details: [
      'Range: Y -16 a Y 112',
      'Livello ottimale: Y 48',
      'Bonus nelle Dripstone Caves',
      'Vene fino a 20 blocchi'
    ],
    keywords: ['rame', 'copper', 'y level', 'minerali', 'dripstone']
  },
  {
    id: 'netherite-y-level',
    category: 'info',
    subcategory: 'Minerali',
    title: 'Netherite (Ancient Debris) - Livello Y Ottimale',
    description: 'L\'Ancient Debris è il minerale più raro del gioco, trovato solo nel Nether. Si smelta in Netherite Scrap.',
    details: [
      'Range: Y 8 a Y 119 (nel Nether)',
      'Livello ottimale: Y 15 (massima concentrazione)',
      'Massimo 2 vene per chunk',
      'Non brucia nella lava (può essere trovato nella lava)',
      'Servono 4 scrap + 4 lingotti d\'oro = 1 Netherite Ingot',
      'Blast resistant: non viene distrutto dalle esplosioni'
    ],
    tips: [
      'Usa bed/TNT mining: fai esplodere letti per scavare velocemente',
      'Branch mining a Y 15 è il più efficiente',
      'Fortune NON funziona - usa Silk Touch o piccone normale',
      'Porta Fire Resistance per la lava',
      'Un set completo richiede circa 36 Ancient Debris'
    ],
    errors: [
      'Minare troppo in alto (sopra Y 22)',
      'Usare Fortune (non aumenta i drop)',
      'Dimenticare la Fire Resistance'
    ],
    keywords: ['netherite', 'ancient debris', 'nether', 'y level', 'minerali', 'debris', 'scrap', 'bed mining', 'tnt mining', 'armatura', 'best armor']
  },
  // BASIC INFO CHE L'AI DEVE SAPERE
  {
    id: 'crafting-table-basics',
    category: 'info',
    subcategory: 'Basics',
    title: 'Crafting Table - Come Craftare',
    description: 'Il tavolo da lavoro è il primo oggetto essenziale. Si crafta con 4 assi di legno.',
    details: [
      'Recipe: 4 assi di legno (qualsiasi tipo) in un quadrato 2x2',
      'Permette crafting in griglia 3x3',
      'Essenziale per quasi tutti gli strumenti',
      'Può essere piazzato e riutilizzato'
    ],
    keywords: ['crafting', 'table', 'tavolo', 'lavoro', 'craft', 'basics', 'come si fa', 'come crafto']
  },
  {
    id: 'furnace-basics',
    category: 'info',
    subcategory: 'Basics',
    title: 'Fornace - Come Usarla',
    description: 'La fornace cuoce cibi, smelta minerali e crea altri materiali. Fondamentale per la progressione.',
    details: [
      'Recipe: 8 cobblestone in cerchio (centro vuoto)',
      'Slot superiore: oggetto da cuocere',
      'Slot inferiore: combustibile',
      'Output: slot a destra'
    ],
    tips: [
      'Carbone cuoce 8 item',
      'Lava bucket cuoce 100 item (il migliore)',
      'Kelp block cuoce 20 item (rinnovabile)',
      'Blast Furnace: 2x veloce per minerali',
      'Smoker: 2x veloce per cibo'
    ],
    keywords: ['fornace', 'furnace', 'cuocere', 'smelting', 'smeltare', 'carbone', 'combustibile']
  },
  {
    id: 'wood-types',
    category: 'info',
    subcategory: 'Basics',
    title: 'Tipi di Legno',
    description: 'Esistono 10+ tipi di legno in Minecraft, tutti funzionalmente identici ma esteticamente diversi.',
    details: [
      'Overworld: Oak, Spruce, Birch, Jungle, Acacia, Dark Oak, Mangrove, Cherry',
      'Nether: Crimson, Warped (non bruciano!)',
      'Tutti danno 4 assi per blocco',
      'I log possono essere "stripped" con ascia'
    ],
    keywords: ['legno', 'wood', 'oak', 'quercia', 'spruce', 'abete', 'birch', 'betulla', 'jungle', 'acacia', 'dark oak', 'mangrove', 'cherry', 'ciliegio', 'crimson', 'warped']
  },
  {
    id: 'hunger-system',
    category: 'info',
    subcategory: 'Basics',
    title: 'Sistema della Fame',
    description: 'La fame diminuisce con le azioni e influenza la rigenerazione della salute.',
    details: [
      'Barra fame: 20 punti (10 "cosce")',
      'Saturazione: valore nascosto che rallenta la perdita di fame',
      'Sotto 6 punti: non puoi sprintare',
      'Sotto 0 punti: perdi vita (Easy/Normal) o muori (Hard)',
      'A fame piena + saturazione: rigeneri HP'
    ],
    tips: [
      'Golden Carrot: miglior saturazione',
      'Steak/Porkchop: ottimo rapporto cibo/saturazione',
      'Suspicious Stew: può dare effetti bonus',
      'Non mangiare quando sei già pieno (sprechi saturazione)'
    ],
    keywords: ['fame', 'hunger', 'cibo', 'food', 'mangiare', 'saturazione', 'saturation', 'health', 'vita', 'regeneration']
  },
  {
    id: 'health-regeneration',
    category: 'info',
    subcategory: 'Basics',
    title: 'Rigenerazione Vita',
    description: 'La vita si rigenera automaticamente quando la fame è alta. Esistono vari metodi per curarsi.',
    details: [
      'Natural Regen: fame 18+ e saturazione > 0',
      'Difficoltà Peaceful: regen istantanea',
      'Golden Apple: 4 cuori + absorption',
      'Enchanted Golden Apple: 8 cuori + absorption + resistances',
      'Potion of Healing: cura istantanea'
    ],
    keywords: ['vita', 'health', 'cuori', 'hearts', 'regen', 'rigenerazione', 'cura', 'healing', 'golden apple', 'pozione']
  },
  {
    id: 'tool-materials',
    category: 'info',
    subcategory: 'Basics',
    title: 'Materiali degli Strumenti',
    description: 'Gli strumenti hanno 6 livelli di materiale, ognuno con durabilità e velocità diverse.',
    table: {
      headers: ['Materiale', 'Durabilità', 'Velocità', 'Note'],
      rows: [
        ['Legno', '59', '2.0', 'Solo per inizio'],
        ['Pietra', '131', '4.0', 'Facile da ottenere'],
        ['Ferro', '250', '6.0', 'Bilanciato'],
        ['Oro', '32', '12.0', 'Velocissimo ma fragile'],
        ['Diamante', '1561', '8.0', 'End-game Overworld'],
        ['Netherite', '2031', '9.0', 'Migliore in assoluto']
      ]
    },
    keywords: ['tools', 'strumenti', 'pickaxe', 'piccone', 'sword', 'spada', 'axe', 'ascia', 'shovel', 'pala', 'durability', 'durabilità', 'materiale']
  },
  {
    id: 'armor-protection',
    category: 'info',
    subcategory: 'Basics',
    title: 'Protezione Armatura',
    description: 'L\'armatura riduce il danno ricevuto. La protezione massima è 80%.',
    table: {
      headers: ['Set', 'Punti Armor', 'Toughness', 'Riduzione'],
      rows: [
        ['Leather', '7', '0', '28%'],
        ['Gold', '11', '0', '44%'],
        ['Chain', '12', '0', '48%'],
        ['Iron', '15', '0', '60%'],
        ['Diamond', '20', '8', '80%'],
        ['Netherite', '20', '12', '80% + knockback res']
      ]
    },
    details: [
      'Armor Toughness riduce il danno da attacchi forti',
      'Netherite ha Knockback Resistance intrinseca',
      'Protection enchant aumenta ulteriormente'
    ],
    keywords: ['armatura', 'armor', 'protezione', 'protection', 'leather', 'gold', 'iron', 'diamond', 'netherite', 'toughness']
  },
  {
    id: 'biomes-overview',
    category: 'info',
    subcategory: 'World',
    title: 'Panoramica Biomi',
    description: 'Minecraft ha oltre 60 biomi diversi, ognuno con caratteristiche uniche.',
    details: [
      'Plains: villager comuni, cavalli',
      'Forest: legno abbondante, wolf',
      'Desert: temple, cactus, no pioggia',
      'Jungle: cocoa, ocelot, temple, meloni',
      'Taiga: wolf, sweet berry, village',
      'Swamp: witch hut, slime, blue orchid',
      'Ocean: monument, conduit, drowned',
      'Mountain: smeraldi, goat, neve',
      'Mushroom Island: no mob ostili spawn!'
    ],
    keywords: ['biomi', 'biome', 'plains', 'forest', 'desert', 'jungle', 'taiga', 'swamp', 'ocean', 'mountain', 'mushroom']
  },
  {
    id: 'nether-biomes',
    category: 'info',
    subcategory: 'World',
    title: 'Biomi del Nether',
    description: 'Il Nether ha 5 biomi principali dal 1.16, ognuno con risorse uniche.',
    details: [
      'Nether Wastes: classico, ghast, fortress',
      'Crimson Forest: hoglins, fungo rosso',
      'Warped Forest: enderman, fungo blu, sicuro',
      'Soul Sand Valley: skeleton, ghast, soul speed',
      'Basalt Deltas: magma cube, blackstone, oro'
    ],
    tips: [
      'Warped Forest è il bioma più sicuro',
      'Basalt Deltas ottimo per oro e blackstone',
      'Soul Sand Valley per ossa e soul speed'
    ],
    keywords: ['nether', 'biomi', 'crimson', 'warped', 'soul sand', 'basalt', 'fortress']
  },
  {
    id: 'end-dimension',
    category: 'info',
    subcategory: 'World',
    title: 'The End - Dimensione',
    description: 'L\'End è la dimensione finale con il Dragon, End Cities e Elytra.',
    details: [
      'Accesso: End Portal nelle Stronghold',
      'Main island: Ender Dragon fight',
      'Outer islands: a 1000 blocchi, End Cities',
      'End Cities: shulker, elytra, ottimo loot',
      'Chorus fruit: cresce nell\'End, teletrasporto random'
    ],
    tips: [
      'Porta blocchi per bridging',
      'Ender chest per salvare loot prezioso',
      'Slow Falling potion essenziale'
    ],
    keywords: ['end', 'dragon', 'ender', 'elytra', 'end city', 'shulker', 'chorus', 'stronghold']
  },
  {
    id: 'xp-sources',
    category: 'info',
    subcategory: 'Progression',
    title: 'Fonti di XP',
    description: 'L\'esperienza serve per incantare e riparare. Ecco le migliori fonti.',
    details: [
      'Mob kill: varia per mob (Ender Dragon 12000 XP!)',
      'Breeding animali: 1-7 XP',
      'Trading: 3-6 XP per trade',
      'Smelting: 0.1-1 XP per item',
      'Mining: quarzo, redstone, diamanti, carbone, lapis',
      'Fishing: 1-6 XP per catch',
      'Bottle o\' Enchanting: 3-11 XP'
    ],
    tips: [
      'Enderman farm: migliore per XP/ora',
      'Quartz nel Nether: facile early game',
      'Furnace XP: si accumula, raccogli tutto insieme'
    ],
    keywords: ['xp', 'esperienza', 'experience', 'livelli', 'levels', 'farming', 'enchanting']
  },
  {
    id: 'sleeping-mechanics',
    category: 'info',
    subcategory: 'Basics',
    title: 'Dormire - Meccaniche',
    description: 'Dormire salta la notte, imposta lo spawn point e resetta il timer dei Phantom.',
    details: [
      'Letto: 3 lana + 3 assi',
      'Dorme solo di notte o durante temporale',
      'Imposta il respawn point',
      'In multiplayer: tutti devono dormire (o % configurabile)',
      'Nel Nether/End: ESPLODE!'
    ],
    keywords: ['dormire', 'sleep', 'letto', 'bed', 'spawn', 'respawn', 'notte', 'night', 'phantom']
  },
  {
    id: 'coordinate-system',
    category: 'info',
    subcategory: 'Basics',
    title: 'Sistema di Coordinate',
    description: 'Le coordinate X, Y, Z ti aiutano a orientarti e trovare posizioni specifiche.',
    details: [
      'X: Est (+) / Ovest (-)',
      'Y: Alto (+) / Basso (-) - altitudine',
      'Z: Sud (+) / Nord (-)',
      'F3 per vedere le coordinate',
      'Il sole sorge a Est (X+), tramonta a Ovest (X-)'
    ],
    tips: [
      'Segna le coordinate di base/portal/strutture',
      'Nether: dividi X e Z per 8 per calcolare la posizione Overworld',
      '/tp @p x y z per teletrasportarti (creative/cheats)'
    ],
    keywords: ['coordinate', 'xyz', 'posizione', 'f3', 'debug', 'navigare', 'orientamento']
  },
  {
    id: 'swimming-mechanics',
    category: 'info',
    subcategory: 'Movement',
    title: 'Nuoto e Respirazione',
    description: 'Nuotare consuma ossigeno. Esistono vari modi per respirare sott\'acqua.',
    details: [
      'Barra ossigeno: 15 secondi (300 bubble)',
      'Respiration: +15 sec per livello',
      'Turtle Shell: +10 secondi',
      'Conduit: respirazione infinita nell\'area',
      'Water Breathing potion: 3/8 minuti'
    ],
    tips: [
      'Porta porte/torce: creano sacche d\'aria',
      'Magma block: crea colonne di bolle verso il basso',
      'Soul Sand: colonne verso l\'alto',
      'Depth Strider: nuota più veloce'
    ],
    keywords: ['nuotare', 'swim', 'respirare', 'breath', 'ossigeno', 'oxygen', 'drowning', 'conduit', 'respiration']
  },
  {
    id: 'fall-damage-calc',
    category: 'info',
    subcategory: 'Mechanics',
    title: 'Calcolo Danno da Caduta',
    description: 'Il danno da caduta inizia dopo 3 blocchi di caduta. Formula: (blocchi - 3) = cuori persi.',
    details: [
      'Caduta sicura: 3 blocchi',
      '4 blocchi: 0.5 cuori',
      '23 blocchi: 10 cuori (morte senza armatura)',
      'Feather Falling IV: -48% danno',
      'Protection IV (full): riduzione aggiuntiva'
    ],
    tips: [
      'Hay bale: -80% fall damage',
      'Slime/honey block: annulla il danno',
      'Acqua: annulla completamente',
      'Slow Falling: nessun danno'
    ],
    keywords: ['caduta', 'fall damage', 'danno', 'altezza', 'feather falling', 'morte']
  },
  {
    id: 'spawning-rules',
    category: 'info',
    subcategory: 'Mechanics',
    title: 'Regole di Spawn Mob',
    description: 'I mob spawnano seguendo regole precise di luce, spazio e distanza.',
    details: [
      'Mob ostili: luce 0 (dal 1.18)',
      'Distanza spawn: 24-128 blocchi dal player',
      'Despawn: >128 blocchi istantaneo, >32 random',
      'Mob cap: 70 mob ostili per player',
      'Spawnable blocks: solidi, non trasparenti'
    ],
    tips: [
      'Illumina le cave per farm più efficienti',
      'Mob cap globale = meno spawn ovunque',
      'Slabs/glass prevengono spawn',
      'Carpet su spawn block = spawn bloccato'
    ],
    keywords: ['spawn', 'mob', 'luce', 'light', 'despawn', 'mob cap', 'hostile']
  },
  {
    id: 'enchanting-basics',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Incantamento - Guida Base',
    description: 'Il tavolo degli incantesimi usa lapis e livelli per applicare enchant casuali.',
    details: [
      'Recipe tavolo: 4 obsidian + 2 diamanti + 1 libro',
      'Librerie: massimo 15 per enchant lvl 30',
      'Distanza librerie: 1 blocco dal tavolo, niente in mezzo',
      'Costo: 1-3 lapis + 1-3 livelli XP'
    ],
    tips: [
      'Sempre incanta al livello 30 per best enchant',
      'Incanta libro se non vuoi l\'enchant offerto',
      'Grindstone rimuove enchant e dà XP',
      'Anvil per combinare enchant'
    ],
    table: {
      headers: ['Livello', 'Librerie Richieste', 'Costo Lapis'],
      rows: [
        ['1-8', '0', '1'],
        ['9-17', '1-8', '1-2'],
        ['18-26', '9-14', '2-3'],
        ['27-30', '15', '3']
      ]
    },
    keywords: ['incantare', 'enchant', 'enchanting', 'tavolo', 'librerie', 'bookshelf', 'lapis', 'xp', 'livello 30']
  },
  {
    id: 'best-enchants-armor',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Migliori Enchant Armatura',
    description: 'Gli enchant ottimali per ogni pezzo di armatura.',
    details: [
      'Helmet: Protection IV, Unbreaking III, Mending, Aqua Affinity, Respiration III',
      'Chestplate: Protection IV, Unbreaking III, Mending',
      'Leggings: Protection IV, Unbreaking III, Mending, Swift Sneak III',
      'Boots: Protection IV, Unbreaking III, Mending, Feather Falling IV, Depth Strider III/Frost Walker II, Soul Speed III'
    ],
    tips: [
      'Protection IV > specialized protection per uso generale',
      'Fire Protection per Nether intensivo',
      'Blast Protection per Wither fight',
      'Thorns consuma durabilità velocemente'
    ],
    keywords: ['enchant', 'armatura', 'protection', 'mending', 'unbreaking', 'feather falling', 'helmet', 'boots']
  },
  {
    id: 'best-enchants-tools',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Migliori Enchant Strumenti',
    description: 'Gli enchant ottimali per piccone, ascia, pala e zappa.',
    details: [
      'Piccone: Efficiency V, Unbreaking III, Mending, Fortune III/Silk Touch',
      'Ascia: Efficiency V, Unbreaking III, Mending, Sharpness V (weapon backup)',
      'Pala: Efficiency V, Unbreaking III, Mending, Silk Touch (grass)',
      'Zappa: Efficiency V, Unbreaking III, Mending, Fortune III (nether wart)'
    ],
    tips: [
      'Fortune III: 2.2x drop in media per diamanti',
      'Silk Touch: essenziale per grass, glass, ender chest',
      'Usa 2 picconi: uno Fortune, uno Silk Touch'
    ],
    keywords: ['enchant', 'piccone', 'pickaxe', 'efficiency', 'fortune', 'silk touch', 'mending', 'tools']
  },
  {
    id: 'best-enchants-weapons',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Migliori Enchant Armi',
    description: 'Gli enchant ottimali per spada, arco, balestra e tridente.',
    details: [
      'Spada: Sharpness V, Unbreaking III, Mending, Looting III, Sweeping Edge III, Fire Aspect II',
      'Arco: Power V, Infinity/Mending, Unbreaking III, Flame, Punch II',
      'Balestra: Quick Charge III, Multishot/Piercing IV, Unbreaking III, Mending',
      'Tridente: Loyalty III, Impaling V, Channeling (OR) Riptide III, Unbreaking III, Mending'
    ],
    tips: [
      'Smite V > Sharpness per undead (Wither!)',
      'Bane of Arthropods per spider/silverfish',
      'Looting III: essenziale per rare drops',
      'Infinity vs Mending: Infinity per comodità, Mending per durabilità'
    ],
    keywords: ['enchant', 'spada', 'sword', 'arco', 'bow', 'tridente', 'trident', 'sharpness', 'looting', 'power']
  },
  {
    id: 'anvil-mechanics',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Incudine - Meccaniche',
    description: 'L\'incudine combina enchant, ripara item e rinomina. Ha costi crescenti.',
    details: [
      'Prior Work Penalty: il costo raddoppia ogni uso',
      'Max cost: 39 livelli (oltre = "Too Expensive")',
      'Ordine combinazione: metti l\'item più lavorato a destra',
      'Riparare: stessa item O materiale base',
      'Rinominare: 1 livello (utile per tool naming)'
    ],
    tips: [
      'Combina enchant in ordine ottimale per ridurre costi',
      'Libri con 1 enchant costano meno',
      'Rinomina PRIMA di enchantare',
      'Too Expensive? Grindstone e riparti'
    ],
    keywords: ['anvil', 'incudine', 'combinare', 'riparare', 'too expensive', 'prior work', 'rename']
  },
  {
    id: 'how-get-mending',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Come Ottenere Mending',
    description: 'Mending è il treasure enchant più importante. Non si trova al tavolo degli incantesimi.',
    details: [
      'Villager Librarian: trade (può essere resettato)',
      'Chest loot: Dungeon, Mineshaft, End City, Ancient City',
      'Fishing: possibile ma molto raro',
      'Raid: drop dagli Evoker (raro)',
      'NON ottenibile dal tavolo degli incantesimi'
    ],
    tips: [
      'Resetta i librarian fino a Mending al primo slot',
      'Curare zombie villager = Mending per 1 emerald',
      'Una volta trovato, non tradare altro per bloccarlo'
    ],
    keywords: ['mending', 'come', 'ottenere', 'trovare', 'librarian', 'villager', 'repair', 'riparare']
  },
  {
    id: 'how-get-looting',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Come Ottenere Looting III',
    description: 'Looting aumenta i drop dei mob. Essenziale per farming.',
    details: [
      'Tavolo degli incantesimi: possibile al livello 30',
      'Villager Librarian: acquistabile come libro',
      'Chest loot: varie strutture',
      'Effetto: +1 drop per livello di Looting'
    ],
    tips: [
      'Looting III = fino a +3 drop extra',
      'Funziona su tutte le rare drops',
      'Essenziale per Wither Skeleton skull farming',
      'Stack con altre fonti di drop (es. charged creeper heads)'
    ],
    keywords: ['looting', 'come', 'ottenere', 'drop', 'rare', 'farm', 'enchant']
  },
  {
    id: 'brewing-basics',
    category: 'info',
    subcategory: 'Pozioni',
    title: 'Brewing - Guida Base',
    description: 'Il Brewing Stand crea pozioni usando Blaze Powder come fuel e vari ingredienti.',
    details: [
      'Fuel: Blaze Powder (20 usi)',
      'Base: Water Bottle',
      'Step 1: Nether Wart → Awkward Potion',
      'Step 2: Ingrediente effetto',
      'Step 3: Modificatori (Redstone=durata, Glowstone=potenza)'
    ],
    tips: [
      'Gunpowder: rende splash (lanciabile)',
      'Dragon Breath: rende lingering (area)',
      'Fermented Spider Eye: corrompe l\'effetto'
    ],
    keywords: ['brewing', 'pozioni', 'potions', 'potion', 'alchimia', 'blaze', 'nether wart', 'awkward']
  },
  {
    id: 'useful-potions',
    category: 'info',
    subcategory: 'Pozioni',
    title: 'Pozioni Più Utili',
    description: 'Le pozioni essenziali per survival, combat e esplorazione.',
    table: {
      headers: ['Pozione', 'Ingrediente', 'Effetto'],
      rows: [
        ['Fire Resistance', 'Magma Cream', 'Immune al fuoco/lava (8 min)'],
        ['Night Vision', 'Golden Carrot', 'Vedi nel buio (8 min)'],
        ['Strength', 'Blaze Powder', '+3 danno melee (8 min)'],
        ['Speed', 'Sugar', '+20% velocità (8 min)'],
        ['Healing', 'Glistering Melon', 'Cura 4 cuori (instant)'],
        ['Slow Falling', 'Phantom Membrane', 'Caduta lenta (4 min)'],
        ['Water Breathing', 'Pufferfish', 'Respira sott\'acqua (8 min)']
      ]
    },
    keywords: ['pozioni', 'potions', 'fire resistance', 'night vision', 'strength', 'speed', 'healing', 'slow falling']
  },
  {
    id: 'villager-professions',
    category: 'info',
    subcategory: 'Villager',
    title: 'Tutte le Professioni Villager',
    description: 'I villager hanno 13 professioni, ognuna con trade unici.',
    table: {
      headers: ['Professione', 'Workstation', 'Trade Chiave'],
      rows: [
        ['Armorer', 'Blast Furnace', 'Diamond armor'],
        ['Butcher', 'Smoker', 'Cooked meat'],
        ['Cartographer', 'Cartography Table', 'Explorer maps'],
        ['Cleric', 'Brewing Stand', 'Ender Pearl, Redstone'],
        ['Farmer', 'Composter', 'Golden Carrot, food'],
        ['Fisherman', 'Barrel', 'Fishing rod, campfire'],
        ['Fletcher', 'Fletching Table', 'Arrows, bows'],
        ['Leatherworker', 'Cauldron', 'Leather armor'],
        ['Librarian', 'Lectern', 'ENCHANTED BOOKS'],
        ['Mason', 'Stonecutter', 'Quartz, terracotta'],
        ['Shepherd', 'Loom', 'Wool, beds'],
        ['Toolsmith', 'Smithing Table', 'Diamond tools'],
        ['Weaponsmith', 'Grindstone', 'Diamond sword, axe']
      ]
    },
    keywords: ['villager', 'professioni', 'profession', 'workstation', 'trade', 'librarian', 'armorer', 'farmer']
  },

  // === FARM ===
  {
    id: 'creeper-farm',
    category: 'farm',
    subcategory: 'Gunpowder',
    title: 'Creeper Farm - Guida Completa',
    description: 'Le creeper farm sfruttano il fatto che i creeper sono alti 1.7 blocchi. Usando trapdoor aperte sul soffitto, solo i creeper possono spawnare.',
    details: [
      'Altezza piattaforma: 2 blocchi con trapdoor aperte in alto',
      'I trapdoor "ingannano" il pathfinding dei mob',
      'Usa carpet per prevenire spawn di spider',
      'Distanza spawn: 24-128 blocchi dal giocatore',
      'Usa acqua per portare i creeper a una killing chamber'
    ],
    tips: [
      'Costruisci sopra un oceano per massimizzare le rate',
      'AFK a 100+ blocchi di altezza dal terreno',
      'Looting III sulla spada aumenta il drop'
    ],
    errors: [
      'Trapdoor chiuse = spawn di altri mob',
      'Troppo vicino = mob non spawnano',
      'Troppo lontano = mob despawnano',
      'Luce residua blocca lo spawn'
    ],
    keywords: ['creeper', 'farm', 'gunpowder', 'polvere da sparo', 'tnt', 'trapdoor']
  },
  {
    id: 'iron-farm',
    category: 'farm',
    subcategory: 'Ferro',
    title: 'Iron Farm - Meccaniche Complete',
    description: 'Le iron farm sfruttano i villager spaventati che evocano Iron Golem. Servono 3 villager con letto e postazione lavoro, più uno zombie per spaventarli.',
    details: [
      'Requisiti: 3 villager + 3 letti + 3 postazioni lavoro',
      'Lo zombie deve essere visibile ai villager',
      'I golem spawnano in un\'area 16x6x16 centrata sul POI',
      'Distanza minima tra farm: 64 blocchi',
      'Cooldown spawn: 35 secondi dopo la morte del golem precedente'
    ],
    tips: [
      'Usa vetro per proteggere i villager dallo zombie',
      'Name tag sullo zombie per non farlo despawnare',
      'Hopper + chest per raccolta automatica',
      'Lava per uccidere i golem (no drop ridotti)'
    ],
    errors: [
      'Villager senza line of sight sullo zombie',
      'Letti non accessibili (villager non dormono)',
      'Altra farm troppo vicina',
      'Postazioni lavoro rubate da altri villager'
    ],
    keywords: ['ferro', 'iron', 'farm', 'golem', 'villager', 'automatica']
  },
  {
    id: 'xp-farm-enderman',
    category: 'farm',
    subcategory: 'XP',
    title: 'Enderman XP Farm - End',
    description: 'La farm di enderman nell\'End è la più efficiente per XP. Sfrutta il fatto che l\'End ha quasi solo spawn di enderman.',
    details: [
      'Costruisci a 128+ blocchi dall\'isola centrale',
      'Piattaforma con endermite in minecart come esca',
      'Gli enderman aggrano l\'endermite e cadono',
      'Drop di 2-3 secondi per arrivare a 1 HP',
      'XP: ~30 livelli al minuto con buone rate'
    ],
    tips: [
      'L\'endermite deve essere intrappolata in un minecart',
      'Usa name tag sull\'endermite',
      'Looting III per perle extra'
    ],
    keywords: ['xp', 'enderman', 'farm', 'end', 'esperienza', 'livelli']
  },
  {
    id: 'gold-farm-nether',
    category: 'farm',
    subcategory: 'Oro',
    title: 'Gold Farm - Nether Piglin',
    description: 'Le gold farm nel Nether sfruttano i Zombified Piglin. Aggrandone uno, tutti quelli nelle vicinanze attaccano.',
    details: [
      'Costruisci nel Nether roof (Y 128+) se possibile',
      'Piattaforme di spawn con turtle eggs come aggro',
      'I piglin cercano di rompere le uova',
      'Usa magma blocks o caduta per danneggiarli',
      'Entity cramming (24 mob) per kill automatiche'
    ],
    tips: [
      'Looting III aumenta notevolmente il drop',
      'Anche ottima per XP',
      'Porta un\'incudine per riparare Looting sword'
    ],
    keywords: ['oro', 'gold', 'farm', 'piglin', 'nether', 'xp']
  },
  {
    id: 'villager-trading',
    category: 'farm',
    subcategory: 'Villager',
    title: 'Villager Trading Hall',
    description: 'Un trading hall efficiente permette di ottenere libri incantati, smeraldi infiniti, e oggetti diamond per emeraldi.',
    details: [
      'Ogni villager ha bisogno di: 1 letto + 1 postazione',
      'Cambia professione rompendo/rimettendo la postazione',
      'I trade si bloccano dopo il primo scambio',
      'Zombie villager curati hanno sconto permanente',
      'Hero of the Village riduce i prezzi del 30%'
    ],
    tips: [
      'Cura zombie villager per prezzi 1 emerald',
      'Librarian = libri incantati',
      'Armorer/Weaponsmith = diamond gear per emeraldi',
      'Farmer compra crop per emeraldi infiniti'
    ],
    table: {
      headers: ['Professione', 'Postazione', 'Best Trade'],
      rows: [
        ['Librarian', 'Lectern', 'Qualsiasi libro incantato'],
        ['Armorer', 'Blast Furnace', 'Diamond armor per emeraldi'],
        ['Toolsmith', 'Smithing Table', 'Diamond tools per emeraldi'],
        ['Farmer', 'Composter', 'Vende Golden Carrot'],
        ['Cleric', 'Brewing Stand', 'Ender Pearl, Redstone']
      ]
    },
    keywords: ['villager', 'trading', 'scambio', 'smeraldi', 'emerald', 'libri', 'enchant']
  },
  {
    id: 'mob-spawner-farm',
    category: 'farm',
    subcategory: 'Spawner',
    title: 'Mob Spawner Farm (Dungeon)',
    description: 'I mob spawner trovati nei dungeon possono essere convertiti in farm efficienti. Non distruggerli!',
    details: [
      'Range di attivazione: 16 blocchi',
      'Spawn ogni 10-40 secondi',
      'Max 6 mob dello stesso tipo in un\'area 9x9x9',
      'Livello luce 7 o meno per spawn',
      'Usa acqua per portare mob a una killing chamber'
    ],
    tips: [
      'Zombie spawner = XP + ferro + carote',
      'Skeleton spawner = XP + ossa + archi',
      'Spider spawner = stringhe + spider eye',
      'Usa torce per disattivare temporaneamente'
    ],
    keywords: ['spawner', 'dungeon', 'farm', 'zombie', 'skeleton', 'xp']
  },
  {
    id: 'witch-farm',
    category: 'farm',
    subcategory: 'Witch',
    title: 'Witch Farm - Witch Hut',
    description: 'Le Witch Hut in palude sono l\'unico posto dove le streghe spawnano in modo affidabile. Farm complesse ma ottime per redstone e glowstone.',
    details: [
      'Solo nel bioma Swamp, dentro il bounding box della hut',
      'Spawna solo streghe in quel volume specifico',
      'Drop: redstone, glowstone, gunpowder, stick, pozioni',
      'Richiede di illuminare le cave sottostanti'
    ],
    keywords: ['witch', 'strega', 'farm', 'redstone', 'glowstone', 'palude', 'swamp']
  },
  {
    id: 'raid-farm',
    category: 'farm',
    subcategory: 'Raid',
    title: 'Raid Farm - Pillager',
    description: 'Le raid farm sfruttano il Bad Omen per triggerare raid infiniti. Ottime per totem of undying e smeraldi.',
    details: [
      'Richiede un villaggio funzionale',
      'Attiva Bad Omen uccidendo un Pillager Captain',
      'Ogni wave del raid dropa loot diversi',
      'Gli Evoker droppano Totem of Undying',
      'Tutte le wave completate = Hero of the Village'
    ],
    tips: [
      'Usa villager in barca per un villaggio minimale',
      'TNT per clear automatiche',
      'Totem = sopravvivenza garantita'
    ],
    keywords: ['raid', 'pillager', 'farm', 'totem', 'undying', 'evoker', 'smeraldi']
  },

  // === COMBAT ===
  {
    id: 'mob-detection-range',
    category: 'combat',
    subcategory: 'Meccaniche',
    title: 'Distanza di Rilevamento Mob',
    description: 'Ogni mob ha una distanza specifica a cui può vedere e aggredire il giocatore. Conoscerle è fondamentale per il combat.',
    table: {
      headers: ['Mob', 'Distanza Base', 'Con Armatura', 'Note'],
      rows: [
        ['Zombie', '40 blocchi', 'Ridotta', 'Line of sight necessaria'],
        ['Skeleton', '16 blocchi', 'Ridotta', 'Attacca da lontano'],
        ['Creeper', '16 blocchi', '-', 'Si avvicina silenzioso'],
        ['Enderman', '64 blocchi', '-', 'Solo se lo guardi negli occhi'],
        ['Spider', '16 blocchi', '-', 'Neutrale di giorno'],
        ['Piglin', '16 blocchi', '-', 'Solo senza oro addosso'],
        ['Warden', 'Suono/Vibrazione', '-', 'È cieco, usa l\'udito']
      ]
    },
    details: [
      'L\'armatura riduce la detection range in base all\'equipaggiamento',
      'Sneaking riduce ulteriormente la detection',
      'La testa di mob riduce il range di quel mob specifico',
      'Invisibilità senza armatura = quasi nullo il range'
    ],
    keywords: ['mob', 'distanza', 'detection', 'aggro', 'range', 'armatura', 'sneaking']
  },
  {
    id: 'mob-head-mechanic',
    category: 'combat',
    subcategory: 'Meccaniche',
    title: 'Meccanica Teste di Mob',
    description: 'Indossare la testa di un mob riduce drasticamente la distanza a cui quel mob può vederti.',
    details: [
      'Zombie Head: zombie detection -50%',
      'Skeleton Skull: skeleton detection -50%',
      'Creeper Head: creeper detection -50%',
      'Piglin: con oro addosso non attaccano',
      'Wither Skeleton Skull: necessaria per evocare il Wither'
    ],
    tips: [
      'Le teste droppano solo con Charged Creeper explosion',
      'Utili per attraversare aree pericolose',
      'Non funziona se il mob è già aggrato'
    ],
    keywords: ['testa', 'head', 'skull', 'mob', 'detection', 'creeper', 'charged']
  },
  {
    id: 'critical-hits',
    category: 'combat',
    subcategory: 'PvP/PvE',
    title: 'Colpi Critici - Come Funzionano',
    description: 'I critical hits infliggono il 150% del danno base. Richiedono di essere in caduta e non in acqua/scala.',
    details: [
      'Danno: 150% del danno normale',
      'Requisiti: caduta, non sulla scala, non in acqua, non volando',
      'Il salto è il modo più comune per ottenerli',
      'Particelle stellate indicano un critico',
      'Funziona con qualsiasi arma melee'
    ],
    tips: [
      'Salta e colpisci al momento giusto',
      'In PvP, il timing è fondamentale',
      'Combinato con Sharpness V = danno devastante'
    ],
    keywords: ['critico', 'critical', 'danno', 'damage', 'pvp', 'pve', 'combat']
  },
  {
    id: 'shield-mechanics',
    category: 'combat',
    subcategory: 'PvP/PvE',
    title: 'Scudo - Meccaniche Complete',
    description: 'Lo scudo blocca il 100% del danno da attacchi frontali, ma ha dei limiti importanti.',
    details: [
      'Blocca: frecce, attacchi melee, esplosioni (parziale)',
      'NON blocca: danno da dietro, magia, effetti status',
      'Disabilitato per 5 secondi da un\'ascia',
      'Durabilità: 337 usi',
      'Crouch per attivarlo (tasto sneak)'
    ],
    tips: [
      'Contro skeleton: shield sempre alzato',
      'In PvP: attenzione agli ascia-user',
      'Può essere incantato con Unbreaking e Mending'
    ],
    keywords: ['scudo', 'shield', 'bloccare', 'ascia', 'axe', 'pvp', 'defense']
  },
  {
    id: 'invincibility-frames',
    category: 'combat',
    subcategory: 'Meccaniche',
    title: 'I-Frames (Invincibility Frames)',
    description: 'Dopo aver subito danno, hai 0.5 secondi di invincibilità durante i quali non puoi subire ulteriori danni.',
    details: [
      'Durata: 10 tick (0.5 secondi)',
      'Durante questo tempo sei immune a nuovi danni',
      'Funziona anche con il danno da caduta',
      'Alcuni attacchi ignorano parzialmente i frame'
    ],
    tips: [
      'Importante in PvP per timing degli attacchi',
      'Non spammare click: aspetta la ricarica',
      'Sweep attack può colpire più nemici nonostante i-frames'
    ],
    keywords: ['i-frames', 'invincibilità', 'danno', 'timing', 'pvp', 'tick']
  },
  {
    id: 'knockback-mechanics',
    category: 'combat',
    subcategory: 'PvP/PvE',
    title: 'Knockback - Come Sfruttarlo',
    description: 'Il knockback è fondamentale in PvP e PvE. Può salvare la vita o essere usato offensivamente.',
    details: [
      'Knockback base: tutti gli attacchi ne hanno',
      'Sprint + attacco = knockback aumentato',
      'Enchant Knockback: aggiunge livelli extra',
      'Punch (arco): knockback per frecce',
      'Riptide: può essere usato per knockback su se stessi'
    ],
    tips: [
      'W-tap: rilascia e ripremi W per resettare lo sprint',
      'Colpisci verso il vuoto per kill facili',
      'In PvP, knockback ridotto = più combo'
    ],
    keywords: ['knockback', 'rinculo', 'sprint', 'pvp', 'combo', 'w-tap']
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
      'Attacco sonoro passa attraverso i blocchi',
      'Spawna dopo 3 attivazioni di Sculk Shrieker'
    ],
    tips: [
      'Sneaking = non produce vibrazioni',
      'Lana blocca le vibrazioni',
      'Se spawnato, allontanati lentamente (sneak)',
      'Lanciare snowball/frecce distrae il Warden',
      'NON combattere: non vale la pena (nessun drop utile)'
    ],
    keywords: ['warden', 'deep dark', 'sculk', 'ancient city', 'evitare', 'sneak']
  },
  {
    id: 'ender-dragon-strategy',
    category: 'combat',
    subcategory: 'Boss',
    title: 'Ender Dragon - Guida Completa',
    description: 'L\'Ender Dragon è il boss finale principale. Richiede preparazione.',
    details: [
      '200 HP - si rigenera dai cristalli',
      'Fase 1: Distruggi tutti i cristalli End',
      'Fase 2: Attacca quando scende a terra',
      'Il breath crea lingering damage area',
      'Immune a frecce durante il volo'
    ],
    tips: [
      'Slow Falling potion per non morire di fall damage',
      'Pumpkin head per evitare aggro Enderman',
      'Letti esplodono nell\'End = danno massiccio',
      'Porta secchi d\'acqua per emergenze'
    ],
    keywords: ['ender dragon', 'drago', 'end', 'boss', 'cristalli', 'fight']
  },
  {
    id: 'wither-strategy',
    category: 'combat',
    subcategory: 'Boss',
    title: 'Wither - Guida al Combat',
    description: 'Il Wither è evocabile con 4 Soul Sand/Soil e 3 Wither Skeleton Skull.',
    details: [
      '300 HP su Java (600 su Bedrock)',
      'Fase 1 (sopra 50% HP): vulnerabile alle frecce',
      'Fase 2 (sotto 50% HP): immune alle frecce, scudo',
      'Infligge Wither effect (danno over time)',
      'Distrugge quasi tutti i blocchi'
    ],
    tips: [
      'Smite V è il migliore enchant contro di lui',
      'Evocalo nel Nether sotto la bedrock roof',
      'Milk bucket rimuove Wither effect',
      'Golden Apple durante il fight',
      'Beacon richiede Nether Star (drop del Wither)'
    ],
    keywords: ['wither', 'boss', 'nether star', 'beacon', 'skull', 'wither skeleton']
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
      'Non attraversano portali quando aggrati',
      'Aggro anche attraverso vetro trasparente ma non tinted glass'
    ],
    tips: [
      'Pumpkin head: puoi guardarli senza aggro',
      'Attacca le gambe: troppo bassi per contrattaccare',
      'Acqua intorno a te = safe zone',
      'Farm migliore nell\'End'
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
      'Non attirano altri mob con il rumore',
      'Gatti li spaventano (entro 6 blocchi)'
    ],
    tips: [
      'Sprint + hit + back: colpisci e allontanati',
      'Shield blocca l\'esplosione',
      'Charged Creeper = unico modo per ottenere teste mob',
      'Usa channeling trident durante temporale per charged'
    ],
    keywords: ['creeper', 'esplosione', 'charged', 'gunpowder', 'farm', 'gatto']
  },
  {
    id: 'villager-mechanics',
    category: 'mob',
    subcategory: 'Passive',
    title: 'Villager - Meccaniche Complete',
    description: 'I villager sono mob passivi con cui fare trading. Hanno meccaniche complesse.',
    details: [
      'Richiedono: letto + postazione lavoro',
      'Professioni cambiano in base alla postazione',
      'Trade si refreshano 2 volte al giorno',
      'Reputation system: prezzi variano',
      'Breeding: servono letti extra e cibo'
    ],
    tips: [
      'Cura zombie villager per sconti permanenti',
      'Non colpirli: aumenta i prezzi',
      'Trading aumenta i loro XP = unlock nuovi trade',
      'Proteggi il villaggio da raid'
    ],
    keywords: ['villager', 'trading', 'professione', 'sconti', 'breeding', 'zombie']
  },
  {
    id: 'phantom-mechanics',
    category: 'mob',
    subcategory: 'Hostile',
    title: 'Phantom - Come Evitarli',
    description: 'I Phantom spawnano se non dormi per 3+ giorni in-game.',
    details: [
      'Spawn dopo 3 notti senza dormire (72000 tick)',
      'Spawnano solo in superficie, di notte',
      'Più notti = più phantom',
      'Drop: Phantom Membrane (per Slow Falling e Elytra repair)'
    ],
    tips: [
      'Dormi anche un secondo per resettare il timer',
      'Gatti li spaventano',
      'Possono essere farmati per membrane',
      'Stai sotto un tetto per evitarli'
    ],
    keywords: ['phantom', 'dormire', 'sleep', 'insomnia', 'membrane', 'elytra']
  },
  {
    id: 'piglin-trading',
    category: 'mob',
    subcategory: 'Neutral',
    title: 'Piglin Bartering',
    description: 'I Piglin nel Nether possono essere usati per bartering con lingotti d\'oro.',
    details: [
      'Lancia lingotti d\'oro per ricevere item random',
      'Loot table include: ender pearl, fire resistance potion, crying obsidian',
      'Indossa oro per non essere attaccato',
      'Si trasformano in Zombified Piglin nell\'Overworld'
    ],
    table: {
      headers: ['Item', 'Probabilità', 'Quantità'],
      rows: [
        ['Ender Pearl', '~2.2%', '2-4'],
        ['Fire Res Potion', '~1.7%', '1'],
        ['Crying Obsidian', '~8.7%', '1-3'],
        ['Obsidian', '~8.7%', '1'],
        ['Gravel', '~8.7%', '8-16'],
        ['Iron Nugget', '~2.2%', '10-36']
      ]
    },
    keywords: ['piglin', 'bartering', 'oro', 'gold', 'ender pearl', 'nether']
  },

  // === REDSTONE ===
  {
    id: 'redstone-basics',
    category: 'redstone',
    subcategory: 'Basics',
    title: 'Redstone - Basi del Segnale',
    description: 'La redstone è il sistema di circuiti di Minecraft. Il segnale ha forza 15 e decade di 1 per blocco.',
    details: [
      'Forza massima: 15',
      'Decadimento: -1 per blocco di distanza',
      'Repeater: resetta a 15 e aggiunge delay',
      'Comparator: confronta, sottrae, legge container',
      'I blocchi solidi possono essere "powered"'
    ],
    tips: [
      'Torce invertono il segnale',
      'Sticky piston può spostare 12 blocchi',
      'Observer detecta cambiamenti di stato',
      'Usa redstone dust per connessioni semplici'
    ],
    keywords: ['redstone', 'segnale', 'circuito', 'repeater', 'comparator', 'basics']
  },
  {
    id: 'redstone-tick',
    category: 'redstone',
    subcategory: 'Basics',
    title: 'Redstone Tick vs Game Tick',
    description: 'Un redstone tick = 2 game tick = 0.1 secondi. Fondamentale per timing.',
    details: [
      'Game tick: 0.05 secondi (20 al secondo)',
      'Redstone tick: 0.1 secondi (10 al secondo)',
      'Repeater delay: 1-4 redstone tick',
      'Piston: 1.5 tick per estendersi, 0 per ritrarsi (sticky)',
      'Observer: emette 1 tick pulse'
    ],
    table: {
      headers: ['Componente', 'Delay', 'Note'],
      rows: [
        ['Repeater (1)', '1 RT', 'Minimo delay'],
        ['Repeater (4)', '4 RT', 'Massimo delay'],
        ['Comparator', '1 RT', 'In modalità subtract'],
        ['Torch', '1 RT', 'Per accendersi/spegnersi'],
        ['Observer', '1 GT pulse', 'Detecta cambiamenti']
      ]
    },
    keywords: ['tick', 'timing', 'redstone', 'delay', 'repeater', 'game tick']
  },
  {
    id: 'redstone-clock',
    category: 'redstone',
    subcategory: 'Circuiti',
    title: 'Clock Circuit - Circuito ad Orologio',
    description: 'I clock generano un segnale che si alterna on/off continuamente.',
    details: [
      'Observer clock: 2 observer facing each other = fastest clock',
      'Repeater clock: loop di repeater per timing variabile',
      'Comparator clock: usa il delay del comparator',
      'Torch burnout: le torce si "bruciano" se toggleate troppo velocemente'
    ],
    tips: [
      'Observer clock = 1 game tick (troppo veloce per molti usi)',
      'Repeater clock minimo pratico: 4 tick',
      'Hopper clock per timing lunghi',
      'Etho hopper clock: compatto e affidabile'
    ],
    keywords: ['clock', 'orologio', 'circuito', 'redstone', 'observer', 'repeater']
  },
  {
    id: 'piston-mechanics',
    category: 'redstone',
    subcategory: 'Componenti',
    title: 'Piston e Sticky Piston',
    description: 'I pistoni sono fondamentali per costruzioni redstone. Possono spingere fino a 12 blocchi.',
    details: [
      'Push limit: 12 blocchi',
      'Sticky piston: tira indietro 1 blocco',
      'Alcuni blocchi sono immovibili (obsidian, bedrock)',
      'Slime/honey blocks creano strutture movibili',
      'Quasi-connectivity: può essere attivato dal blocco sopra'
    ],
    tips: [
      'Slime + honey non si attaccano tra loro',
      'Usa per porte segrete, farm, flying machines',
      '0-tick piston = instant retraction (sticky)',
      'BUD (Block Update Detector) sfrutta quasi-connectivity'
    ],
    keywords: ['piston', 'sticky', 'redstone', 'slime', 'honey', 'push', 'flying machine']
  },
  {
    id: 'redstone-solid-blocks',
    category: 'redstone',
    subcategory: 'Basics',
    title: 'Blocchi Solidi vs Trasparenti',
    description: 'I blocchi solidi possono essere "powered" e trasmettere segnale. I trasparenti no.',
    details: [
      'Blocchi solidi: stone, dirt, wood, etc.',
      'Blocchi trasparenti: glass, glowstone, slabs (top), stairs',
      'Un blocco solid può essere strongly o weakly powered',
      'Strongly powered: può attivare dust adiacente',
      'Weakly powered: attiva solo componenti attaccati'
    ],
    tips: [
      'Glass per isolare circuiti',
      'Glowstone trasmette segnale verso il basso (slab behavior)',
      'Slabs e stairs: ottimi per compact builds',
      'Concrete, terracotta = solidi'
    ],
    keywords: ['solido', 'trasparente', 'blocco', 'redstone', 'powered', 'glass']
  },
  {
    id: 'logic-gates',
    category: 'redstone',
    subcategory: 'Circuiti',
    title: 'Logic Gates - Porte Logiche',
    description: 'Le porte logiche sono la base di qualsiasi circuito complesso.',
    details: [
      'OR: input in parallelo nella stessa dust',
      'AND: due torce → una torcia',
      'NOT: una torcia (inverter)',
      'NOR: torcia con due input',
      'XOR: output solo se gli input sono diversi'
    ],
    tips: [
      'Inizia con circuiti semplici',
      'I comparator possono fare sottrazione',
      'Combina gate per memoria (RS latch)',
      'Molti tutorial usano porte logiche come base'
    ],
    keywords: ['logic gate', 'porta logica', 'and', 'or', 'not', 'xor', 'redstone']
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
      'Attivazione: pressure plate, button, lever',
      'Flush design: nasconde i piston nel muro'
    ],
    tips: [
      'Inizia con una 2x2, più semplice',
      'Seamless: i blocchi tornano nella posizione originale',
      'Usa redstone lamp per indicare stato',
      'Hipster door: completamente nascosta'
    ],
    keywords: ['porta', 'door', 'piston', 'automatica', 'redstone', '2x2', '3x3']
  },

  // === TRICKS & CLUTCH ===
  {
    id: 'mlg-water',
    category: 'trick',
    subcategory: 'Clutch',
    title: 'MLG Water Bucket',
    description: 'La tecnica di piazzare acqua sotto di te un istante prima di toccare terra per annullare il fall damage.',
    difficulty: 'Pro',
    details: [
      'Guarda verso il basso durante la caduta',
      'Click destro per piazzare l\'acqua',
      'Timing: circa 2-3 blocchi dal suolo',
      'Richiede un blocco solido sotto',
      'Riprendi l\'acqua subito dopo'
    ],
    tips: [
      'Pratica da altezze basse prima',
      'Funziona anche con secchio di polvite',
      'In PvP, può salvare la vita',
      'Server lag può complicare il timing'
    ],
    keywords: ['mlg', 'water', 'bucket', 'clutch', 'fall damage', 'secchio', 'acqua']
  },
  {
    id: 'mlg-slime',
    category: 'trick',
    subcategory: 'Clutch',
    title: 'MLG Slime Block',
    description: 'Piazzare uno slime block per rimbalzare e annullare il fall damage.',
    difficulty: 'Master',
    details: [
      'Lo slime block annulla completamente il fall damage',
      'Rimbalzi verso l\'alto (circa 60% dell\'altezza originale)',
      'Puoi tenerlo piazzato o rimuoverlo',
      'Non funziona se sneaki'
    ],
    tips: [
      'Più difficile del water: il blocco è più piccolo',
      'Puoi usare honey block (no rimbalzo ma nessun danno)',
      'Ottimo per parkour',
      'Può essere usato per flying machine escape'
    ],
    keywords: ['mlg', 'slime', 'clutch', 'fall damage', 'rimbalzo', 'bounce']
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
      'Velocità di caduta: 20 blocchi/secondo dopo terminal velocity',
      'Pearl speed: circa 30 blocchi/secondo',
      'Calcola in anticipo dove atterrerà'
    ],
    keywords: ['pearl', 'ender', 'clutch', 'void', 'teletrasporto', 'end']
  },
  {
    id: 'cobweb-clutch',
    category: 'trick',
    subcategory: 'Clutch',
    title: 'Cobweb Clutch',
    description: 'Piazzare una ragnatela durante la caduta per rallentare e annullare il danno.',
    difficulty: 'Pro',
    details: [
      'Le cobweb rallentano la caduta drasticamente',
      'Puoi piazzarle su qualsiasi blocco',
      'Rompile con una spada per uscire velocemente',
      'Funzionano anche in orizzontale per rallentare'
    ],
    tips: [
      'Più facili del water per alcuni',
      'Ottime in PvP per bloccare nemici',
      'Si ottengono nelle mineshaft',
      'Shears o Silk Touch per raccoglierle'
    ],
    keywords: ['cobweb', 'ragnatela', 'clutch', 'fall', 'rallentare', 'slow']
  },
  {
    id: 'boat-clutch',
    category: 'trick',
    subcategory: 'Clutch',
    title: 'Boat Clutch',
    description: 'Piazzare una barca sotto di te per annullare il fall damage entrando dentro.',
    difficulty: 'Legend',
    details: [
      'La barca deve essere piazzata E devi entrarci',
      'Due azioni: click destro per piazzare, poi per entrare',
      'Timing estremamente stretto',
      'La barca assorbe il danno'
    ],
    tips: [
      'Tra i clutch più difficili',
      'La barca può rompersi all\'impatto se troppo veloce',
      'Pratica molto prima di usarlo in survival',
      'Alcuni preferiscono il double click rapido'
    ],
    keywords: ['boat', 'barca', 'clutch', 'fall damage', 'difficile']
  },
  {
    id: 'tnt-jump',
    category: 'trick',
    subcategory: 'Movement',
    title: 'TNT Jump / Cannon',
    description: 'Usare l\'esplosione di TNT per lanciarsi in aria o attraverso lunghe distanze.',
    difficulty: 'Master',
    details: [
      'Il TNT spinge i giocatori via dall\'esplosione',
      'Il danno può essere ridotto con armatura/resistance',
      'Più TNT = più boost ma più danno',
      'Timing: 4 secondi dal piazzamento all\'esplosione'
    ],
    tips: [
      'Usa blast protection armor',
      'Potion of Resistance aiuta molto',
      'Totem of Undying come safety net',
      'Calcola la direzione prima'
    ],
    keywords: ['tnt', 'jump', 'cannon', 'esplosione', 'boost', 'launch']
  },
  {
    id: 'bridging-techniques',
    category: 'trick',
    subcategory: 'Movement',
    title: 'Tecniche di Bridging',
    description: 'Metodi per costruire ponti velocemente, utili in PvP e speedrun.',
    difficulty: 'Pro',
    details: [
      'Ninja bridging: shift al bordo, guarda giù, piazza',
      'Speed bridging: piazza mentre ti muovi',
      'God bridging: tecnica avanzata senza guardare giù',
      'Moonwalk: cammina all\'indietro mentre piazzi'
    ],
    tips: [
      'Inizia con ninja bridging',
      'CPS (click per second) alto aiuta',
      'Su Bedrock è più facile per alcuni metodi',
      'Pratica in creative mode'
    ],
    keywords: ['bridging', 'bridge', 'ponte', 'speed', 'pvp', 'bedwars']
  },
  {
    id: 'block-clutch',
    category: 'trick',
    subcategory: 'Clutch',
    title: 'Block Clutch (scaffolding/hay)',
    description: 'Piazzare blocchi che riducono il fall damage durante la caduta.',
    difficulty: 'Pro',
    details: [
      'Hay bale: riduce l\'80% del fall damage',
      'Scaffolding: rallenta la caduta se entri dentro',
      'Sweet berry bush: rallenta e fa poco danno',
      'Powder snow: rallenta completamente'
    ],
    tips: [
      'Hay bale più facile da ottenere',
      'Scaffolding si piazza facilmente in stack',
      'Powder snow richiede bucket di powder snow',
      'Combina tecniche per safety'
    ],
    keywords: ['block', 'clutch', 'hay', 'scaffolding', 'fall', 'powder snow']
  },

  // === INFO GENERALI ===
  {
    id: 'enchanting-guide',
    category: 'info',
    subcategory: 'Enchanting',
    title: 'Guida agli Incantamenti',
    description: 'Gli incantamenti potenziano armi, armature e strumenti. Il sistema si basa su livelli XP e lapislazzuli.',
    details: [
      'Enchanting table: richiede 15 librerie per il massimo',
      'Anvil: combina item o libri incantati',
      'Grindstone: rimuove incantamenti (restituisce XP)',
      'Il costo in livelli aumenta con ogni modifica in anvil',
      'Too Expensive: oltre 39 livelli, l\'anvil rifiuta'
    ],
    table: {
      headers: ['Incantamento', 'Max Level', 'Applicazione'],
      rows: [
        ['Sharpness', 'V', 'Spade'],
        ['Fortune', 'III', 'Picconi, pale, asce'],
        ['Looting', 'III', 'Spade'],
        ['Protection', 'IV', 'Armatura'],
        ['Mending', 'I', 'Qualsiasi'],
        ['Unbreaking', 'III', 'Qualsiasi'],
        ['Efficiency', 'V', 'Strumenti'],
        ['Silk Touch', 'I', 'Strumenti']
      ]
    },
    tips: [
      'Mending > Unbreaking per item a lungo termine',
      'Fortune III sul piccone: ~2.2 diamanti per blocco',
      'Looting III: drop 3x da mob',
      'Librarian villager per libri specifici'
    ],
    keywords: ['enchant', 'incantamento', 'xp', 'livelli', 'anvil', 'fortune', 'mending', 'looting']
  },
  {
    id: 'food-saturation',
    category: 'info',
    subcategory: 'Food',
    title: 'Cibo e Saturazione',
    description: 'Il cibo ripristina fame e saturazione. La saturazione è una "riserva nascosta" che ritarda la fame.',
    table: {
      headers: ['Cibo', 'Hunger', 'Saturazione', 'Note'],
      rows: [
        ['Golden Carrot', '6', '14.4', 'Migliore saturazione'],
        ['Steak/Porkchop', '8', '12.8', 'Facili da farmare'],
        ['Golden Apple', '4', '9.6', 'Regeneration bonus'],
        ['Bread', '5', '6', 'Facile early game'],
        ['Baked Potato', '5', '6', 'Farm automatizzabile'],
        ['Suspicious Stew', 'Varia', 'Varia', 'Effetti dipendono dal fiore']
      ]
    },
    details: [
      'Saturazione: buff invisibile che ritarda la fame',
      'Quando saturazione = 0, inizia a calare la hunger bar',
      'Rigenerazione HP richiede hunger bar 18+ (9 cosce)',
      'Sprint drena la fame più velocemente'
    ],
    keywords: ['cibo', 'food', 'hunger', 'fame', 'saturazione', 'saturation', 'golden carrot']
  },
  {
    id: 'potion-brewing',
    category: 'info',
    subcategory: 'Pozioni',
    title: 'Brewing - Guida alle Pozioni',
    description: 'Le pozioni si creano nel brewing stand usando Blaze Powder come combustibile.',
    details: [
      'Base: Nether Wart + Water Bottle = Awkward Potion',
      'Modifier: Redstone (durata) o Glowstone (potenza)',
      'Splash: Gunpowder (lanciabile)',
      'Lingering: Dragon\'s Breath (area effect)',
      'Corrupted: Fermented Spider Eye (effetto opposto)'
    ],
    table: {
      headers: ['Pozione', 'Ingrediente', 'Effetto'],
      rows: [
        ['Healing', 'Glistering Melon', 'Cura istantanea'],
        ['Regeneration', 'Ghast Tear', 'Regen over time'],
        ['Strength', 'Blaze Powder', '+3 danno melee'],
        ['Speed', 'Sugar', 'Movimento +20%'],
        ['Fire Resistance', 'Magma Cream', 'Immune al fuoco'],
        ['Night Vision', 'Golden Carrot', 'Vedi al buio'],
        ['Slow Falling', 'Phantom Membrane', 'Caduta lenta']
      ]
    },
    keywords: ['pozioni', 'potion', 'brewing', 'alchimia', 'nether wart', 'blaze']
  },
  {
    id: 'beacon-guide',
    category: 'info',
    subcategory: 'Late Game',
    title: 'Beacon - Guida Completa',
    description: 'Il Beacon fornisce buff in un\'area. Richiede Nether Star (drop del Wither) e piramide di minerali.',
    details: [
      'Piramide: iron, gold, diamond, emerald o netherite blocks',
      '1 livello (9 blocchi): Speed I o Haste I',
      '2 livelli (34 blocchi): +Resistance I o Jump Boost I',
      '3 livelli (83 blocchi): +Strength I',
      '4 livelli (164 blocchi): +Regeneration I, poteri secondari'
    ],
    tips: [
      'Iron blocks sono i più economici',
      'Range: 20-50 blocchi in base al livello',
      'Il beacon deve vedere il cielo',
      'Puoi avere più beacon con poteri diversi'
    ],
    keywords: ['beacon', 'faro', 'nether star', 'wither', 'buff', 'piramide']
  },
  {
    id: 'nether-travel',
    category: 'info',
    subcategory: 'Travel',
    title: 'Nether Travel - Distanze',
    description: '1 blocco nel Nether = 8 blocchi nell\'Overworld. Fondamentale per viaggiare velocemente.',
    details: [
      'Ratio: 1:8 (Nether:Overworld)',
      'Coordinate Overworld ÷ 8 = Coordinate Nether',
      'Portali: collegamento automatico al più vicino',
      'Portali troppo vicini possono buggarsi',
      'Distanza minima tra portali: 128 blocchi Overworld'
    ],
    tips: [
      'Costruisci highway nel Nether per viaggi veloci',
      'Il Nether roof (sopra Y 128) è piatto e sicuro',
      'Blue ice + boat = velocità massima',
      'Calcola SEMPRE le coordinate prima'
    ],
    keywords: ['nether', 'travel', 'viaggio', 'portale', 'coordinate', 'highway']
  },
  {
    id: 'elytra-guide',
    category: 'info',
    subcategory: 'Late Game',
    title: 'Elytra - Guida al Volo',
    description: 'L\'Elytra permette di planare e, con i razzi, di volare. Si trova nelle End City.',
    details: [
      'Trovabile: End Ship (End City)',
      'Durabilità: 432 punti',
      'Riparabile con Phantom Membrane o Mending',
      'Attivazione: salta in aria + doppio spazio',
      'Firework: boost di velocità e altezza'
    ],
    tips: [
      'Mending è essenziale per Elytra',
      'Firework senza stelle = nessun danno',
      'Firework con stelle = danno se esplode su di te',
      'Puoi atterrare in acqua senza danno'
    ],
    keywords: ['elytra', 'volo', 'fly', 'end', 'firework', 'razzo', 'mending']
  },
  {
    id: 'speedrun-tips',
    category: 'info',
    subcategory: 'Speedrun',
    title: 'Speedrun Tips',
    description: 'Consigli base per completare il gioco velocemente.',
    details: [
      'Priorità: letti, cibo, armi base',
      'Blaze rod: minimo 7 per sicurezza',
      'Ender pearl: trading con Piglins è più veloce',
      'Stronghold: triangolazione con eye of ender',
      'Dragon: usa letti come esplosivo'
    ],
    tips: [
      'Pratica enter al Nether velocemente',
      'Impara le strutture generate (bastion, fortress)',
      'F3+G per vedere i chunk boundaries',
      'La fortuna conta molto nei seed'
    ],
    keywords: ['speedrun', 'veloce', 'record', 'ender', 'dragon', 'blaze']
  },

  // === NUOVE VOCI INFO GENERALI (10) ===
  {
    id: 'hidden-durability-mechanics',
    category: 'info',
    subcategory: 'Meccaniche Nascoste',
    title: 'Durabilità - Segreti Nascosti',
    description: 'La durabilità ha meccaniche nascoste che pochi conoscono, incluso come Unbreaking funziona realmente.',
    details: [
      'Unbreaking NON aggiunge durabilità: dà probabilità di non consumarla',
      'Unbreaking III: 25% chance di consumare durabilità (strumenti)',
      'Unbreaking III su armatura: 30% chance',
      'Sweeping Edge consuma durabilità solo per il primo colpo',
      'Usare una spada per rompere bamboo non consuma durabilità'
    ],
    tips: [
      'Mending ripara 2 durabilità per 1 XP',
      'Tool può essere usato a durabilità 1 infinitamente (con Mending)',
      'F3+H mostra durabilità esatta',
      'Anvil ha 25% chance di non consumare uso'
    ],
    keywords: ['durabilità', 'durability', 'unbreaking', 'mending', 'armatura', 'tool']
  },
  {
    id: 'light-level-secrets',
    category: 'info',
    subcategory: 'Meccaniche Nascoste',
    title: 'Livelli di Luce - Meccaniche Complete',
    description: 'Il sistema di luce in Minecraft è complesso. Dalla 1.18, i mob spawnano solo a luce 0.',
    details: [
      'Block light: da torce, glowstone, etc. (max 15)',
      'Sky light: dal cielo (max 15, ridotto da blocchi)',
      'Dalla 1.18: mob spawn solo a light level 0',
      'Pre-1.18: mob spawn a light level 7 o meno',
      'La luce si propaga in modo sferico, non cubico',
      'Soul torch: luce 10 (non 14 come normale)'
    ],
    tips: [
      'F3 mostra il light level esatto',
      'Slab trasparente trasmette luce completamente',
      'Carpet non blocca la luce dal basso',
      'Redstone lamp: 15, Sea lantern: 15, Glowstone: 15'
    ],
    keywords: ['luce', 'light', 'spawn', 'mob', 'torcia', 'torch', 'livello']
  },
  {
    id: 'random-tick-speed',
    category: 'info',
    subcategory: 'Meccaniche Nascoste',
    title: 'Random Tick Speed',
    description: 'Il random tick controlla la crescita delle piante, spread del fuoco, decay delle foglie e molto altro.',
    details: [
      'Default: 3 (Java), 1 (Bedrock)',
      'Ogni chunk processa 3 blocchi random per game tick',
      'Controlla: crescita crop, spread grass, decay foglie',
      'Comandi: /gamerule randomTickSpeed [numero]',
      'randomTickSpeed 0 = niente cresce/decade'
    ],
    tips: [
      'Per farm automatiche il tick speed non importa (usa bone meal)',
      'Aumentare troppo causa lag',
      'Utile per test veloci in creative',
      'Fire spread usa anche random tick'
    ],
    keywords: ['random tick', 'crescita', 'growth', 'farm', 'gamerule', 'crop']
  },
  {
    id: 'chunk-loading-mechanics',
    category: 'info',
    subcategory: 'Meccaniche Nascoste',
    title: 'Chunk Loading - Meccaniche Avanzate',
    description: 'I chunk si caricano in modi specifici. Capirlo è fondamentale per farm e redstone.',
    details: [
      'Spawn chunk: sempre caricati (19x19 area)',
      'Entity processing: 5x5 chunk attorno al player',
      'Lazy chunk: caricati ma senza entity processing',
      'Nether portal: carica chunk temporaneamente',
      'Chunk border: entità possono buggarsi'
    ],
    tips: [
      'Le farm negli spawn chunk funzionano sempre',
      'Hopper sempre attivi nei chunk caricati',
      'F3+G per vedere i bordi dei chunk',
      'Usa nether portal per chunk loader permanente'
    ],
    keywords: ['chunk', 'loading', 'spawn chunk', 'lazy', 'entity', 'farm']
  },
  {
    id: 'hidden-mob-caps',
    category: 'info',
    subcategory: 'Meccaniche Nascoste',
    title: 'Mob Cap - Sistema di Spawn',
    description: 'Il mob cap limita quanti mob possono esistere. È fondamentale per farm efficienti.',
    details: [
      'Hostile mob cap: 70 per player',
      'Passive mob cap: 10 per player',
      'Ambient (bats): 15 per player',
      'Water creature: 5 per player',
      'Solo i mob nei chunk caricati contano verso il cap'
    ],
    tips: [
      'Illumina le cave per aumentare rate delle farm in superficie',
      'Mob nel Nether non contano verso cap Overworld',
      'Nametagged mob NON contano verso il cap',
      'Mob in minecart/boat contano verso il cap'
    ],
    keywords: ['mob cap', 'spawn', 'limite', 'farm', 'hostile', 'passive']
  },
  {
    id: 'debug-commands-secrets',
    category: 'info',
    subcategory: 'Comandi Debug',
    title: 'F3 - Comandi Debug Nascosti',
    description: 'La schermata F3 ha molte combinazioni nascoste che pochi conoscono.',
    details: [
      'F3+A: Ricarica tutti i chunk',
      'F3+T: Ricarica texture/suoni/web-loaded resources',
      'F3+D: Pulisce la chat',
      'F3+C: Copia coordinate (tenuto 10s = crash report)',
      'F3+G: Mostra chunk borders',
      'F3+H: Advanced tooltips (ID, durabilità)',
      'F3+B: Mostra hitbox delle entità',
      'F3+N: Switcha creative/spectator',
      'F3+F4: Switcha gamemode (in creative)'
    ],
    tips: [
      'F3+Q mostra tutti i comandi F3',
      'F3+Esc: pausa senza menu',
      'F3+L: capture profiling data (per debug)',
      'Alt+F3: mostra FPS graph'
    ],
    keywords: ['f3', 'debug', 'comandi', 'chunk', 'hitbox', 'tooltip']
  },
  {
    id: 'structure-generation-secrets',
    category: 'info',
    subcategory: 'World Gen',
    title: 'Generazione Strutture - Segreti',
    description: 'Le strutture si generano seguendo regole precise. Conoscerle aiuta a trovarle.',
    details: [
      'Stronghold: 3 nel primo anello (1408-2688 blocchi dal mondo spawn)',
      'Fortress: ogni 480 blocchi nel Nether (circa)',
      'Bastion: escludono Fortress nello stesso chunk',
      'Village: ogni 32 chunk in plains/desert/etc',
      'Mansion: 80+ chunk dallo spawn, solo Dark Forest',
      'Monument: 32 chunk apart, solo Deep Ocean'
    ],
    tips: [
      '/locate per trovare strutture',
      'Eyes of Ender puntano al portale, non alla stronghold',
      'Alcune strutture possono sovrapporsi',
      'Il seed determina posizioni esatte'
    ],
    keywords: ['struttura', 'structure', 'stronghold', 'fortress', 'bastion', 'village', 'locate']
  },
  {
    id: 'experience-mechanics',
    category: 'info',
    subcategory: 'Meccaniche Nascoste',
    title: 'XP - Meccaniche Complete',
    description: 'L\'esperienza ha molte meccaniche nascoste tra cui formule e comportamenti.',
    details: [
      'XP orbs si attraggono entro 8 blocchi (6 se fermi)',
      'XP richiesto aumenta dopo level 16, poi ancora dopo 31',
      'Level 30: 1395 XP totali',
      'Level 50: 5345 XP totali',
      'Morendo perdi tutto tranne max 100 XP (7 livelli)',
      'XP orbs si combinano se troppi (riduce lag)'
    ],
    tips: [
      'Enchanting costa sempre lo stesso XP per tier',
      'Grindstone restituisce XP in base al livello incantamento',
      'Furnace accumula XP finché non estrai items',
      'Breeding dà 1-7 XP per animale'
    ],
    keywords: ['xp', 'experience', 'esperienza', 'livelli', 'level', 'grindstone', 'enchant']
  },
  {
    id: 'villager-gossip-system',
    category: 'info',
    subcategory: 'Meccaniche Nascoste',
    title: 'Villager Gossip System',
    description: 'I villager hanno un sistema di "gossip" nascosto che influenza prezzi e Iron Golem spawn.',
    details: [
      'Gossip types: major_negative, minor_negative, major_positive, minor_positive, trading',
      'Colpire villager = major_negative (prezzi +25%)',
      'Trading = minor_positive (prezzi -1% per trade)',
      'Zombie cure = major_positive (sconto enorme)',
      'Gossip si diffonde tra villager vicini',
      'Golem spawna basandosi su gossip negativi (paura)'
    ],
    tips: [
      'Gossip decade col tempo',
      'Zombie villager curato più volte = prezzi 1 emerald',
      'Non colpire mai villager!',
      'Hero of the Village è separato dal gossip system'
    ],
    keywords: ['villager', 'gossip', 'prezzi', 'prices', 'reputation', 'trading', 'sconto']
  },
  {
    id: 'hidden-game-mechanics',
    category: 'info',
    subcategory: 'Meccaniche Nascoste',
    title: 'Meccaniche di Gioco Nascoste',
    description: 'Piccole meccaniche che quasi nessuno conosce ma che possono essere utili.',
    details: [
      'Sneaking estende il reach su blocchi di 0.3',
      'Puoi piazzare blocchi attraverso l\'erba alta',
      'I fiori possono essere "bone mealed" per duplicarli',
      'L\'acqua si può raccogliere da caldron con pioggia',
      'Punching mob sul letto li spinge senza danno',
      'I villager si riproducono solo con 12+ food nei loro inventory',
      'I fulmini trasformano: creeper→charged, pig→zombified piglin, villager→witch'
    ],
    tips: [
      'Couch + slab = sedersi sui slab',
      'Le campane rivelano i raid (particelle sui raider)',
      'Composter può contenere item senza hopperare via',
      'Cactus distrugge item istantaneamente'
    ],
    keywords: ['meccaniche', 'hidden', 'nascosto', 'segreti', 'secrets', 'tricks']
  },

  // === NUOVE VOCI FARM (10) ===
  {
    id: 'wither-rose-farm',
    category: 'farm',
    subcategory: 'Fiori',
    title: 'Wither Rose Farm',
    description: 'Le Wither Rose droppano quando il Wither uccide mob. Utili per pozioni e XP farm.',
    details: [
      'Ogni mob ucciso dal Wither droppa 1 Wither Rose',
      'Funziona con qualsiasi mob (meglio chicken)',
      'Le rose danno Wither effect ai mob che le toccano',
      'Usabili in pozioni tramite Suspicious Stew',
      'Ottima base per XP farm (mob si danneggiano sulle rose)'
    ],
    tips: [
      'Usa chicken dispenser per farm automatica',
      'Wither sotto bedrock per sicurezza',
      'Le rose non despawnano',
      'Wither Skeleton immune alle Wither Rose'
    ],
    keywords: ['wither rose', 'rosa', 'fiore', 'farm', 'wither', 'chicken']
  },
  {
    id: 'shulker-farm',
    category: 'farm',
    subcategory: 'End',
    title: 'Shulker Farm - Duplicazione',
    description: 'Gli Shulker possono duplicarsi se colpiti da un altro shulker mentre hanno poca vita.',
    details: [
      'Shulker sotto 50% HP + colpito da proiettile shulker = 25% chance di duplicarsi',
      'Il nuovo shulker appare in un blocco adiacente libero',
      'Richiede setup complesso per automatizzare',
      'Rate: circa 100-200 shell/ora con buon design'
    ],
    tips: [
      'Costruisci nella End dimension',
      'Usa Looting III per shell extra',
      'Il design "shulker box" è rinnovabile',
      'Alcuni design usano TNT per uccisioni'
    ],
    keywords: ['shulker', 'farm', 'end', 'shell', 'duplicazione', 'box']
  },
  {
    id: 'guardian-farm',
    category: 'farm',
    subcategory: 'Ocean',
    title: 'Guardian Farm - Ocean Monument',
    description: 'I Guardian spawnano solo negli Ocean Monument. Farm molto efficiente per XP e prismarine.',
    details: [
      'Spawna solo nel bounding box del monument',
      'Richiede rimozione dell\'acqua per massima efficienza',
      'Elder Guardian: 3 per monument (non respawnano)',
      'Drop: prismarine shard, crystal, fish, XP',
      'Rate possibili: 100k+ XP/ora'
    ],
    tips: [
      'Rimuovi acqua con spugne o flying machine',
      'Usa nether portal per teletrasportarli',
      'Lava per instant kill (no Looting)',
      'I tridente drop sono rari'
    ],
    keywords: ['guardian', 'monument', 'farm', 'prismarine', 'xp', 'ocean', 'elder']
  },
  {
    id: 'wither-skeleton-farm',
    category: 'farm',
    subcategory: 'Nether',
    title: 'Wither Skeleton Farm',
    description: 'I Wither Skeleton spawnano solo nelle Nether Fortress. Le skull sono essenziali per il Wither.',
    details: [
      'Spawna solo su Nether Brick nella bounding box della fortress',
      'Skull drop: 2.5% base, +1% per livello Looting',
      'Looting III: 5.5% chance per skull',
      'Altezza mob: 2.4 blocchi (filtrabile)',
      'Spawna anche Blaze e Piglin nella fortress'
    ],
    tips: [
      'Usa Wither Rose per uccisioni automatiche',
      'Slab a 2 blocchi di altezza blocca solo Wither Skeleton',
      'Illumina il resto della fortress per aumentare rate',
      'Looting III è quasi obbligatorio'
    ],
    keywords: ['wither skeleton', 'skull', 'farm', 'nether', 'fortress', 'wither']
  },
  {
    id: 'slime-chunk-farm',
    category: 'farm',
    subcategory: 'Slime',
    title: 'Slime Farm - Chunk Farming',
    description: 'Gli slime spawnano sotto Y40 solo in "slime chunk" specifici o nelle swamp di notte.',
    details: [
      '1 su 10 chunk è "slime chunk" (determinato dal seed)',
      'Spawna sotto Y40 in slime chunk (qualsiasi luce)',
      'Spawna in Swamp sopra Y50 di notte (light 7 o meno)',
      'Spawn rate dipende dalla fase lunare in swamp',
      'Slime grandi = più XP e slimeball'
    ],
    tips: [
      'Usa tool online per trovare slime chunk col seed',
      '/seed per vedere il seed del mondo',
      'Iron golem attira gli slime',
      'Magma block per uccisioni automatiche'
    ],
    keywords: ['slime', 'chunk', 'farm', 'slimeball', 'swamp', 'y40']
  },
  {
    id: 'piglin-bartering-farm',
    category: 'farm',
    subcategory: 'Bartering',
    title: 'Piglin Bartering Farm Automatica',
    description: 'Farm automatica per bartering con i Piglin. Ottima per ender pearl e altri item.',
    details: [
      'Dispenser con lingotti d\'oro sul Piglin',
      'Hopper raccoglie item droppati',
      'Rate: circa 360 gold/ora per Piglin',
      'Ender pearl: ~2.2% chance per barter',
      'Non despawna se in range o nametagged'
    ],
    tips: [
      'Usa più Piglin per rate maggiori',
      'Gold farm + bartering = combo perfetta',
      'Crying obsidian molto utile per respawn anchor',
      'Fire resistance potion salva nel Nether'
    ],
    keywords: ['piglin', 'bartering', 'farm', 'gold', 'ender pearl', 'automatica']
  },
  {
    id: 'tree-farm-automatic',
    category: 'farm',
    subcategory: 'Legno',
    title: 'Tree Farm Automatica AFK',
    description: 'Farm di legno completamente automatica usando TNT o piston.',
    details: [
      'Design con TNT: esplode il tronco, hopper raccoglie',
      'Design con piston: spinge il tronco man mano che cresce',
      'Bone meal da dispenser per crescita istantanea',
      'Oak: 1x1 spazio, cresce sempre',
      'Birch: mai ramificato, più facile da farmare'
    ],
    tips: [
      'Dark oak richiede 4 saplings 2x2',
      'Spruce 2x2 = mega tree (molto legno)',
      'Le foglie hanno 5% chance di droppare sapling',
      'Fortune aumenta apple drop da oak leaves'
    ],
    keywords: ['tree', 'legno', 'wood', 'farm', 'automatica', 'tnt', 'sapling']
  },
  {
    id: 'honey-farm',
    category: 'farm',
    subcategory: 'Api',
    title: 'Honey/Honeycomb Farm',
    description: 'Le api producono miele nei beehive. Farm automatica con dispenser e comparator.',
    details: [
      'Beehive: max 3 api per hive',
      'Honey level 5 = pieno (comparator legge il livello)',
      'Shears su hive pieno = honeycomb',
      'Bottle su hive pieno = honey bottle',
      'Campfire sotto = api non si arrabbiano'
    ],
    tips: [
      'Le api impollinano crop (crescita veloce)',
      'Flower + beehive = api si riproducono',
      '1 ape visita ~10 fiori prima di tornare',
      'Le api muoiono dopo aver punto (come IRL)'
    ],
    keywords: ['honey', 'miele', 'farm', 'api', 'bee', 'beehive', 'honeycomb']
  },
  {
    id: 'moss-farm',
    category: 'farm',
    subcategory: 'Blocchi',
    title: 'Moss Farm - Bone Meal Efficiency',
    description: 'Il moss block si espande con bone meal. Una delle farm più efficienti per vegetazione.',
    details: [
      'Bone meal su moss: espande fino a ~7 blocchi',
      'Può convertire: stone, cave vines, grass',
      'Genera azalea, moss carpet, vines',
      'Azalea può crescere in azalea tree',
      'Perfetta per produrre bone meal extra (composter)'
    ],
    tips: [
      'Loop: moss → composter → bone meal → moss',
      'Trovabile in Lush Caves',
      'Ottima per decorazione e landscaping',
      'Si ottiene anche da shipwreck'
    ],
    keywords: ['moss', 'muschio', 'farm', 'bone meal', 'lush caves', 'azalea']
  },
  {
    id: 'sculk-xp-farm',
    category: 'farm',
    subcategory: 'XP',
    title: 'Sculk XP Farm',
    description: 'I blocchi sculk conservano XP quando mob muoiono vicino a un catalyst. Si può estrarre dopo.',
    details: [
      'Sculk Catalyst: converte mob death XP in sculk blocks',
      'Rompere sculk blocks restituisce XP',
      'Sculk sensor/shrieker: più XP',
      'Hoe è lo strumento migliore per rompere sculk',
      'Silk Touch: ottieni il blocco senza XP'
    ],
    tips: [
      'Combina con mob farm per storage di XP',
      'Sculk non attiva Mending quando si rompe',
      'Sculk vein droppa niente senza Silk Touch',
      'Può essere usato per decorazione'
    ],
    keywords: ['sculk', 'xp', 'farm', 'catalyst', 'deep dark', 'esperienza']
  },

  // === NUOVE VOCI COMBAT (10) ===
  {
    id: 'attack-cooldown-mechanics',
    category: 'combat',
    subcategory: 'Meccaniche',
    title: 'Attack Cooldown - Timing Perfetto',
    description: 'Dalla 1.9, le armi hanno cooldown. Colpire prima che si ricarichi = danno ridotto.',
    details: [
      'Spada: 0.625s cooldown, 4 damage tick',
      'Axe: 1s (stone/iron/diamond/netherite), 5 damage tick',
      'L\'indicatore sotto il crosshair mostra la ricarica',
      'Sweeping Edge: danno area solo a piena ricarica',
      'Colpire al 50% ricarica = ~50% danno'
    ],
    tips: [
      'In PvP, timing è tutto',
      'Axe è burst damage, sword è DPS consistente',
      'Haste aumenta la velocità di attacco',
      'Switching items resetta il cooldown'
    ],
    keywords: ['cooldown', 'attack', 'timing', 'spada', 'sword', 'axe', 'pvp']
  },
  {
    id: 'armor-damage-reduction',
    category: 'combat',
    subcategory: 'Armatura',
    title: 'Armatura - Formula Danno',
    description: 'L\'armatura riduce il danno secondo una formula specifica. I punti armatura non sono lineari.',
    details: [
      'Full Netherite: 20 armor points + 16 toughness',
      'Full Diamond: 20 armor points + 8 toughness',
      'Damage reduction: (armor * 0.04) capped',
      'Toughness riduce l\'efficacia dei colpi forti',
      'Protection IV: -16% danno per pezzo (max -64%)',
      'Armatura si deteriora più velocemente da esplosioni'
    ],
    tips: [
      'Protection > specific protection in generale',
      'Feather Falling IV: -48% fall damage',
      'Fire Protection: riduce tempo on fire',
      'Blast Protection: riduce knockback esplosivo'
    ],
    keywords: ['armatura', 'armor', 'danno', 'damage', 'protection', 'toughness', 'netherite']
  },
  {
    id: 'potion-combat-guide',
    category: 'combat',
    subcategory: 'Pozioni',
    title: 'Pozioni in Combattimento',
    description: 'Le pozioni possono cambiare completamente uno scontro. Ecco quelle essenziali.',
    details: [
      'Strength II: +6 damage (raddoppia quasi il danno)',
      'Speed II: +40% movimento (evasione)',
      'Instant Damage II: 12 cuori di danno (splash)',
      'Slowness: -60% movimento (ferma nemici)',
      'Weakness: -4 danno (riduce threat)'
    ],
    tips: [
      'Healing su undead = danno',
      'Instant Damage su undead = cura',
      'Turtle Master: slowness + resistance estremi',
      'Pre-buff prima di boss fight'
    ],
    keywords: ['pozioni', 'potion', 'combat', 'strength', 'speed', 'damage', 'splash']
  },
  {
    id: 'bow-mechanics-advanced',
    category: 'combat',
    subcategory: 'Range',
    title: 'Bow - Meccaniche Avanzate',
    description: 'L\'arco ha meccaniche complesse: tempo di carica, gravità delle frecce, enchant speciali.',
    details: [
      'Charge time: 1 secondo per full power',
      'Full power: 9-10 damage (più critico possibile)',
      'Arrow speed: 53 m/s a full charge',
      'Freccia ha gravità: punta in alto per distanza',
      'Infinity: frecce infinite ma non funziona con tipped arrows',
      'Flame: target brucia per 5 secondi (4 damage totali)'
    ],
    tips: [
      'Power V + full charge = 25 damage max',
      'Punch II per knockback (utile per cliff)',
      'Skeleton possono avere archi Power/Punch',
      'Le frecce si possono recuperare dai blocchi'
    ],
    keywords: ['arco', 'bow', 'freccia', 'arrow', 'power', 'infinity', 'flame']
  },
  {
    id: 'crossbow-vs-bow',
    category: 'combat',
    subcategory: 'Range',
    title: 'Crossbow vs Bow - Confronto',
    description: 'Crossbow e Bow hanno differenze fondamentali. Ecco quando usare quale.',
    details: [
      'Crossbow: può restare carico, reload 1.25s',
      'Bow: shoot istantaneo a full charge, più DPS',
      'Multishot: 3 frecce ma consuma 1',
      'Piercing: attraversa mob (ignore shield)',
      'Quick Charge III: reload quasi istantaneo',
      'Crossbow può sparare firework rockets'
    ],
    tips: [
      'Crossbow per alpha strike (spara, switch)',
      'Bow per sustained damage',
      'Firework + crossbow = AoE devastante',
      'Multishot inutile a lunga distanza (spread)'
    ],
    keywords: ['crossbow', 'balestra', 'bow', 'arco', 'multishot', 'piercing', 'confronto']
  },
  {
    id: 'trident-mechanics',
    category: 'combat',
    subcategory: 'Range',
    title: 'Trident - Guida Completa',
    description: 'Il Trident è l\'arma più versatile. Melee + ranged + movement.',
    details: [
      'Danno melee: 9 (4.5 cuori)',
      'Danno ranged: 8 (4 cuori)',
      'Loyalty: ritorna dopo essere lanciato',
      'Riptide: ti lancia nell\'acqua/pioggia',
      'Channeling: evoca fulmine durante tempesta',
      'Riptide incompatibile con Loyalty/Channeling'
    ],
    tips: [
      'Impaling: +2.5 damage per level vs aquatic mob',
      'Riptide III + Elytra = movimento incredibile',
      'Channeling + Creeper = Charged Creeper',
      'Si ottiene SOLO da Drowned (rarissimo)'
    ],
    keywords: ['trident', 'tridente', 'loyalty', 'riptide', 'channeling', 'impaling']
  },
  {
    id: 'totem-mechanics',
    category: 'combat',
    subcategory: 'Sopravvivenza',
    title: 'Totem of Undying - Meccaniche',
    description: 'Il Totem salva dalla morte ma ha regole specifiche.',
    details: [
      'Deve essere nella main hand o off-hand',
      'Attiva quando HP scendono a 0',
      'Ripristina: 1 HP, rimuove tutti gli effetti negativi',
      'Dà: Regeneration II (40s), Absorption II (5s)',
      'NON salva dal void damage',
      'NON salva dal /kill'
    ],
    tips: [
      'Tieni sempre in off-hand per sicurezza',
      'Si ottiene solo da Evoker (Raid/Mansion)',
      'Raid farm = totem infiniti',
      'Non funziona in inventario, solo in mano'
    ],
    keywords: ['totem', 'undying', 'sopravvivenza', 'morte', 'evoker', 'raid']
  },
  {
    id: 'sweeping-edge-mechanics',
    category: 'combat',
    subcategory: 'Meccaniche',
    title: 'Sweeping Edge - Danno ad Area',
    description: 'Sweeping Edge aumenta il danno dell\'attacco sweep della spada.',
    details: [
      'Sweep attack: attacco ad area a piena ricarica',
      'Danno sweep base: 1 + weapon_damage × (sweep_level / (sweep_level + 1))',
      'Sweeping Edge III: 75% del danno principale',
      'Range: 1 blocco dal target originale',
      'Knockback colpisce tutti i mob nell\'area'
    ],
    tips: [
      'Perfetto per mob grinder',
      'Non funziona con critical hit (solo il target)',
      'Fire Aspect si applica solo al target principale',
      'Looting si applica solo al target principale'
    ],
    keywords: ['sweeping', 'edge', 'sweep', 'spada', 'sword', 'area', 'damage']
  },
  {
    id: 'mace-mechanics',
    category: 'combat',
    subcategory: 'Armi',
    title: 'Mace - La Nuova Arma (1.21)',
    description: 'La Mace è un\'arma che scala con l\'altezza di caduta. Devastante.',
    details: [
      'Danno base: 6 (3 cuori)',
      'Smash attack: +7 damage per blocco caduto',
      'Nega il fall damage su hit',
      'Breach: ignora armatura parzialmente',
      'Density: aumenta danno per blocco caduto',
      'Wind Burst: knockback area + salto'
    ],
    tips: [
      'Combinala con Wind Charge per combo aeree',
      'Density + alta caduta = one-shot quasi tutto',
      'Si crafta con Breeze Rod (Trial Chamber)',
      'Heavy Core si trova in Vault'
    ],
    keywords: ['mace', 'mazza', 'smash', 'caduta', 'fall', 'breach', 'density', 'wind']
  },
  {
    id: 'pvp-combos-advanced',
    category: 'combat',
    subcategory: 'PvP/PvE',
    title: 'Combo PvP Avanzate',
    description: 'Tecniche di combattimento avanzate usate nei PvP competitivi.',
    details: [
      'W-tap: rilascia W tra colpi per resettare sprint (più knockback)',
      'S-tap: muovi indietro brevemente per timing',
      'Blockhit: attacca mentre alzi lo scudo (legacy)',
      'Crit chaining: salta ripetutamente per critici continui',
      'Rod combo: fishing rod per stun + follow up',
      'Trade-off: scambia colpi calcolando i danni'
    ],
    tips: [
      'La pratica è essenziale',
      'FPS alti aiutano col timing',
      'Impara a leggere i pattern nemici',
      'Lo strafing confonde l\'avversario'
    ],
    keywords: ['pvp', 'combo', 'w-tap', 's-tap', 'crit', 'competitive', 'tecniche']
  },

  // === NUOVE VOCI MOB (10) ===
  {
    id: 'warden-complete-guide',
    category: 'mob',
    subcategory: 'Hostile',
    title: 'Warden - Meccaniche Complete',
    description: 'Il Warden è il mob più pericoloso. Ecco tutto ciò che devi sapere.',
    details: [
      '500 HP (250 cuori) - più dell\'Ender Dragon',
      'Attacco melee: 16-45 damage (dipende da difficoltà)',
      'Sonic boom: 6 cuori, ignora armatura, 15 blocchi range',
      'È cieco: detecta tramite vibrazione e odore',
      'Può "sniffare" e localizzarti anche se sneaki',
      'Despawna dopo 60s senza stimoli'
    ],
    tips: [
      'Wool blocks non trasmettono vibrazione',
      'Snowball/arrow distraggono temporaneamente',
      'La corsa o il salto = vibrazione',
      'Rimani a 15+ blocchi per evitare il sonic boom'
    ],
    keywords: ['warden', 'deep dark', 'sculk', 'cieco', 'vibrazione', 'sonic boom']
  },
  {
    id: 'allay-mechanics',
    category: 'mob',
    subcategory: 'Passive',
    title: 'Allay - Raccoglitore Automatico',
    description: 'L\'Allay raccoglie item identici a quello che gli dai e li porta a te o ai noteblock.',
    details: [
      'Raccoglie item nel raggio di 32 blocchi',
      'Porta item a te o all\'ultimo noteblock suonato',
      'Duplication: se balla vicino a jukebox + amethyst shard',
      'Immune al danno dell\'owner',
      '5 minuti cooldown per duplicazione'
    ],
    tips: [
      'Perfetto per sorting system senza hopper',
      'Si trova in Pillager Outpost e Woodland Mansion',
      'Il noteblock lo "linka" per 30 secondi',
      'Può trasportare 64 item stackabili'
    ],
    keywords: ['allay', 'raccoglie', 'item', 'noteblock', 'sorting', 'duplicazione']
  },
  {
    id: 'iron-golem-mechanics',
    category: 'mob',
    subcategory: 'Neutral',
    title: 'Iron Golem - Meccaniche Nascoste',
    description: 'Gli Iron Golem hanno comportamenti complessi legati ai villager.',
    details: [
      '100 HP (50 cuori), si può vedere dallo stato (crepe)',
      'Danno: 7.5-21.5 a seconda della difficoltà',
      'Spawna naturalmente nei villaggi (1 ogni 10 villager)',
      'Può essere costruito: 4 iron block a T + pumpkin',
      'Non attacca il creatore se costruito',
      'Attacca mob che danneggiano villager'
    ],
    tips: [
      'Offri papavero ai giocatori (easter egg)',
      'Si possono curare con iron ingot',
      'Non prendono fall damage',
      'Annegano ma non prendono suffocation damage'
    ],
    keywords: ['iron golem', 'golem', 'villager', 'protezione', 'ferro', 'hp']
  },
  {
    id: 'axolotl-mechanics',
    category: 'mob',
    subcategory: 'Passive',
    title: 'Axolotl - Compagno Acquatico',
    description: 'Gli Axolotl sono alleati acquatici che attaccano mob ostili e ti aiutano.',
    details: [
      'Spawna solo in Lush Caves, in acqua',
      'Attacca: Drowned, Guardian, Elder Guardian, Squid, Glow Squid',
      'Blue variant: 1/1200 chance (rarissima)',
      'Si finge morto: rigenera HP e rimuove Mining Fatigue',
      'Può essere trasportato in bucket'
    ],
    tips: [
      'Porta 5+ axolotl per ocean monument = easy mode',
      'Bucket of axolotl stacka a 1',
      'Si riproducono con bucket of tropical fish',
      'Muoiono fuori dall\'acqua dopo 5 minuti'
    ],
    keywords: ['axolotl', 'acqua', 'water', 'lush caves', 'guardian', 'bucket']
  },
  {
    id: 'breeze-mechanics',
    category: 'mob',
    subcategory: 'Hostile',
    title: 'Breeze - Trial Chamber Mob (1.21)',
    description: 'Il Breeze è un mob delle Trial Chamber che usa attacchi di vento.',
    details: [
      '30 HP (15 cuori)',
      'Attacca con Wind Charge (knockback + danno)',
      'Può saltare molto in alto',
      'Il suo proiettile interagisce con redstone',
      'Droppa Breeze Rod (per craftare Mace/Wind Charge)',
      'Immune al fall damage e al knockback'
    ],
    tips: [
      'I suoi proiettili possono attivare button/lever',
      'Utile per farm redstone automatiche',
      'Wind Charge del player lo knockbacka comunque',
      'È debole agli attacchi in aria'
    ],
    keywords: ['breeze', 'wind', 'trial chamber', 'vento', 'knockback', 'rod', 'mace']
  },
  {
    id: 'camel-mechanics',
    category: 'mob',
    subcategory: 'Passive',
    title: 'Camel - 2 Player Mount',
    description: 'Il Camel è l\'unico mount che può trasportare 2 giocatori.',
    details: [
      '32 HP (16 cuori)',
      '2 posti: 1 guida, 1 passeggero',
      'Altezza: 2.5 blocchi (zombie non possono colpire)',
      'Dash ability: corsa lunga (cooldown)',
      'Si trova nei Desert Village',
      'Si riproduce con cactus'
    ],
    tips: [
      'Ottimo per exploration in coppia',
      'I mob bassi non ti raggiungono mentre cavalchi',
      'Non può salire blocchi alti',
      'Dash copre ~12 blocchi'
    ],
    keywords: ['camel', 'cammello', 'mount', 'cavalcare', 'desert', 'dash', '2 player']
  },
  {
    id: 'sniffer-mechanics',
    category: 'mob',
    subcategory: 'Passive',
    title: 'Sniffer - Ancient Seeds',
    description: 'Lo Sniffer è un mob antico che può trovare semi unici scavando.',
    details: [
      'Si ottiene da Sniffer Egg (Suspicious Sand in Warm Ocean Ruins)',
      'Annusa il terreno e scava semi antichi',
      'Trova: Torchflower Seed, Pitcher Pod',
      'I semi droppati sono esclusivi (non trovabili altrove)',
      'L\'uovo impiega ~20 minuti a schiudersi',
      'Si riproduce con Torchflower Seed'
    ],
    tips: [
      'Sniffer scava ogni ~8 minuti',
      'Non scava lo stesso blocco due volte (memoria)',
      'Torchflower usabile per sospicious stew',
      'Il Sniffer baby è ancora più carino'
    ],
    keywords: ['sniffer', 'ancient', 'seed', 'torchflower', 'pitcher', 'scavare', 'egg']
  },
  {
    id: 'elder-guardian-mechanics',
    category: 'mob',
    subcategory: 'Boss',
    title: 'Elder Guardian - Mini Boss',
    description: 'L\'Elder Guardian è un mini-boss che infligge Mining Fatigue.',
    details: [
      '80 HP (40 cuori)',
      '3 per Ocean Monument (mai respawnano)',
      'Mining Fatigue III: -99.73% mining speed per 5 minuti',
      'Attacco laser: 8 damage, richiede line of sight',
      'Immune a quasi tutti i status effect',
      'Droppa: Prismarine Shard, Sponge (raro), Fish'
    ],
    tips: [
      'Milk rimuove Mining Fatigue (ma si riapplica)',
      'Efficienza V + Haste II beacon può minare con Mining Fatigue',
      'Uccidili prima di svuotare il monument',
      'Axolotl rimuovono Mining Fatigue quando uccidono qualcosa'
    ],
    keywords: ['elder guardian', 'monument', 'mining fatigue', 'boss', 'sponge']
  },
  {
    id: 'ender-dragon-detailed',
    category: 'mob',
    subcategory: 'Boss',
    title: 'Ender Dragon - Meccaniche Dettagliate',
    description: 'Meccaniche avanzate del boss finale che pochi conoscono.',
    details: [
      '200 HP, si rigenera dai cristalli (1 HP/half second)',
      'Perching phase: scende sulla fontana centrale',
      'Dragon breath: raccoglibile con glass bottle',
      'Damage cap: max 1/8 HP per colpo (da proiettili)',
      'Exit portal si attiva alla morte',
      'Respawnabile con 4 End Crystal sui lati del portale'
    ],
    tips: [
      'I letti fanno danno massivo durante perching',
      'Il respawn genera nuovi cristalli (XP farm)',
      'Prima uccisione: 12000 XP',
      'Respawn: 500 XP',
      'Le torri più alte hanno gabbie protettive'
    ],
    keywords: ['ender dragon', 'drago', 'end', 'boss', 'respawn', 'cristalli', 'perching']
  },
  {
    id: 'hoglin-mechanics',
    category: 'mob',
    subcategory: 'Hostile',
    title: 'Hoglin - Food Source nel Nether',
    description: 'Gli Hoglin sono l\'unica fonte di cibo farmabile nel Nether.',
    details: [
      '40 HP (20 cuori)',
      'Droppano: Raw Porkchop, Leather',
      'Spawna in Crimson Forest',
      'Scappano da Warped Fungus e Nether Portal',
      'Si riproducono con Crimson Fungus',
      'Diventano Zoglin nell\'Overworld/End dopo 15s'
    ],
    tips: [
      'Warped fungus su stick non li controlla (li spaventa)',
      'Looting III = più carne',
      'Baby hoglin non attacca',
      'Ottimi per food nel Nether'
    ],
    keywords: ['hoglin', 'nether', 'food', 'cibo', 'porkchop', 'crimson', 'zoglin']
  },

  // === NUOVE VOCI REDSTONE (10) ===
  {
    id: 'observer-deep-mechanics',
    category: 'redstone',
    subcategory: 'Componenti',
    title: 'Observer - Meccaniche Profonde',
    description: 'L\'Observer detecta cambiamenti di block state, non solo piazzamento/rottura.',
    details: [
      'Detecta: block state changes (es: porta aperta/chiusa)',
      'Emette 2 game tick pulse (1 redstone tick)',
      'Detecta anche: crop growth, liquid flow, comparator output',
      'Non detecta: entity changes, light level',
      'Può creare 0-tick farms (sfruttando il timing)',
      'BUD-proof: non soffre di quasi-connectivity'
    ],
    tips: [
      '2 observer facing each other = fastest clock',
      'Può detectare dispenser che spara',
      'Utile per flying machines',
      'Detecta anche note block pitch changes'
    ],
    keywords: ['observer', 'detect', 'block state', 'pulse', 'clock', 'bud']
  },
  {
    id: 'comparator-advanced',
    category: 'redstone',
    subcategory: 'Componenti',
    title: 'Comparator - Usi Avanzati',
    description: 'Il Comparator ha molti più usi del semplice confronto.',
    details: [
      'Compare mode (front torch off): output se lato >= dietro',
      'Subtract mode (front torch on): output = dietro - max(lato)',
      'Legge: chest fullness, cake slices, cauldron level, jukebox',
      'Item frame: 1-8 signal basato su rotazione',
      'Lectern: 1-15 basato sulla pagina',
      'Respawn anchor: 0-15 basato sulle cariche'
    ],
    tips: [
      'Cake = 7 signal levels (utile per combination locks)',
      'Item frame = 8 rotazioni = filtri precisi',
      'Può leggere through blocks solidi',
      'Delay: 1 redstone tick'
    ],
    keywords: ['comparator', 'compare', 'subtract', 'container', 'signal', 'item frame']
  },
  {
    id: 'quasi-connectivity',
    category: 'redstone',
    subcategory: 'Bugs/Features',
    title: 'Quasi-Connectivity (BUD)',
    description: 'Bug/feature: i piston possono essere attivati dal blocco sopra di loro.',
    details: [
      'Il piston "eredita" il power state del blocco sopra',
      'Richiede un block update per attivare',
      'BUD switch: sfrutta questo per detector',
      'Funziona anche per dropper/dispenser (Java)',
      'È intenzionalmente non fixato (feature)',
      'Non esiste su Bedrock Edition'
    ],
    tips: [
      'Utile per build compatte',
      'Può creare circuiti impossibili altrimenti',
      'Flying machine spesso usa BUD',
      'Il block update può venire da qualsiasi fonte'
    ],
    keywords: ['quasi-connectivity', 'bud', 'bug', 'piston', 'update', 'java']
  },
  {
    id: 'flying-machine-basics',
    category: 'redstone',
    subcategory: 'Progetti',
    title: 'Flying Machine - Basi',
    description: 'Le flying machine usano slime/honey + piston per muoversi.',
    details: [
      'Slime blocks: si attaccano tra loro e a blocchi vicini',
      'Honey blocks: si attaccano ma non a slime',
      'Observer + sticky piston = propulsione',
      'Max 12 blocchi pushable per piston',
      'Glazed terracotta non si attacca a slime/honey'
    ],
    tips: [
      'Inizia con design semplici (2-way)',
      'Return station con observer',
      'Utile per farm (world eater)',
      'Può trasportare storage/entità'
    ],
    keywords: ['flying machine', 'slime', 'honey', 'piston', 'observer', 'volare']
  },
  {
    id: 'hopper-mechanics',
    category: 'redstone',
    subcategory: 'Componenti',
    title: 'Hopper - Meccaniche Complete',
    description: 'Gli Hopper sono fondamentali per automazione ma hanno comportamenti complessi.',
    details: [
      'Transfer rate: 1 item ogni 8 game tick (0.4s)',
      'Priorità: prende prima, poi trasferisce',
      'Hopper pointing into hopper: 2.5 item/s',
      'Locked con segnale redstone (qualsiasi forza)',
      'Pickup range: 1 blocco sopra il centro',
      'Può prendere da minecart/boat anche se locked'
    ],
    tips: [
      'Hopper clock: 2 hopper con item per timing',
      'Item filter: rename item per renderlo non-stackable',
      'Causa lag: usa meno hopper possibili',
      'Comparator legge il riempimento'
    ],
    keywords: ['hopper', 'transfer', 'item', 'sorting', 'filter', 'automazione']
  },
  {
    id: 'sculk-sensor-redstone',
    category: 'redstone',
    subcategory: 'Componenti',
    title: 'Sculk Sensor - Wireless Redstone',
    description: 'Il Sculk Sensor detecta vibrazioni e emette redstone. Wireless redstone!',
    details: [
      'Range: 8 blocchi',
      'Output: signal strength basato su distanza e tipo vibrazione',
      'Cooldown: 40 game tick dopo attivazione',
      'Wool blocks bloccano le vibrazioni',
      'Detecta: passi, blocchi piazzati/rotti, proiettili, etc.',
      'Calibrated sensor: filtra per tipo di vibrazione (amethyst)'
    ],
    tips: [
      'Perfetto per trap invisibili',
      'Wool path = stealth route',
      'Comparator output varia per tipo evento',
      'Può attivare sculk shrieker (spawna Warden)'
    ],
    keywords: ['sculk sensor', 'wireless', 'vibrazione', 'detect', 'wool', 'redstone']
  },
  {
    id: 'target-block-mechanics',
    category: 'redstone',
    subcategory: 'Componenti',
    title: 'Target Block - Precision Redstone',
    description: 'Il Target Block emette segnale basato su quanto vicino al centro colpisci.',
    details: [
      'Centro = signal 15, bordo = signal 1',
      'Funziona con: frecce, trident, snowball, egg, ender pearl',
      'Durata segnale: 10 redstone tick (1 secondo)',
      'Non si attiva con proiettili di mob',
      'Può essere mosso da piston',
      'Conduce redstone come blocco solido'
    ],
    tips: [
      'Utile per minigame/parkour',
      'Precision-based doors/traps',
      'Può creare randomizer con aim impreciso',
      'Snowball = munizione infinita per test'
    ],
    keywords: ['target', 'bersaglio', 'precision', 'freccia', 'arrow', 'signal']
  },
  {
    id: 'daylight-detector-tricks',
    category: 'redstone',
    subcategory: 'Componenti',
    title: 'Daylight Detector - Trucchi',
    description: 'Il Daylight Detector ha usi nascosti oltre all\'orario.',
    details: [
      'Signal: 0-15 basato su luce del cielo',
      'Inverted mode: output di notte',
      'Detecta anche fasi lunari (leggermente)',
      'Pioggia riduce il segnale',
      'Funziona anche nel Nether (sempre 0)',
      'Underground: sempre 0 (non c\'è sky light)'
    ],
    tips: [
      'Automatic lighting systems',
      'Moon phase detector (variazione minima)',
      'Può triggerare eventi time-based',
      'Combina con comparator per precisione'
    ],
    keywords: ['daylight', 'detector', 'luce', 'giorno', 'notte', 'luna', 'sky']
  },
  {
    id: 'redstone-dust-optimization',
    category: 'redstone',
    subcategory: 'Ottimizzazione',
    title: 'Redstone Dust - Ottimizzazione Lag',
    description: 'La redstone dust causa molto lag. Ecco come ridurlo.',
    details: [
      'Ogni dust block causa block updates ai vicini',
      'Catene lunghe = molti update = lag',
      'Comparator/repeater non causano updates cascade',
      'Instant repeater: 0-tick pulse (torch + repeater)',
      'Block update detector: rari ma utili'
    ],
    tips: [
      'Usa repeater ogni 15 blocchi invece di dust lunga',
      'Instant wire: piston + observer',
      'Alternative: observer chains (meno lag)',
      'Profiling: /debug per vedere lag sources'
    ],
    keywords: ['redstone dust', 'lag', 'optimization', 'update', 'performance']
  },
  {
    id: 'storage-tech-basics',
    category: 'redstone',
    subcategory: 'Progetti',
    title: 'Storage Tech - Item Sorting',
    description: 'I sistemi di sorting automatico sono essenziali per basi avanzate.',
    details: [
      'Filter base: hopper con 41 item target + 4 non-stackable',
      'Overflow protection: comparator per rilevare full',
      'Multi-item sorter: più complesso ma possibile',
      'Shulker box loader: auto-fill e unload',
      'Allay-based: nuovo metodo (meno hopper)'
    ],
    tips: [
      'I named item non stackano (utili per filler)',
      'Unstackable item non sortabili normalmente',
      'Compact vs espandibile: scegli il design',
      'Water stream per trasporto item veloce'
    ],
    keywords: ['storage', 'sorting', 'item', 'filter', 'hopper', 'organizzazione']
  },

  // === NUOVE VOCI TRICKS (10) ===
  {
    id: 'wind-charge-mechanics',
    category: 'trick',
    subcategory: 'Movement',
    title: 'Wind Charge - Movement Tech (1.21)',
    description: 'Il Wind Charge è craftabile e dà mobilità incredibile.',
    difficulty: 'Pro',
    details: [
      'Knockback su te stesso e target',
      'Craftabile con Breeze Rod',
      'Reset fall damage se usato in aria',
      'Interagisce con redstone (button, lever)',
      'Può essere usato per boosted jump'
    ],
    tips: [
      'Wind Charge + caduta + Mace = combo devastante',
      'Usalo per salvati da fall damage',
      'Può spingere altri player in PvP',
      'Interazione con water bucket = advanced saves'
    ],
    keywords: ['wind charge', 'vento', 'movement', 'knockback', 'jump', 'breeze']
  },
  {
    id: 'elytra-ring-launch',
    category: 'trick',
    subcategory: 'Movement',
    title: 'Elytra Ring Launch',
    description: 'Tecnica per lanciare l\'elytra da fermo usando un anello d\'acqua.',
    difficulty: 'Master',
    details: [
      'Costruisci un anello d\'acqua verticale',
      'Nuota verso l\'alto, attiva elytra nel momento giusto',
      'L\'acqua ti dà momentum iniziale',
      'Poi usa firework per accelerare',
      'Alternativa: piston launch (più veloce)'
    ],
    tips: [
      'Riptide + rain = launch infinito',
      'Soul sand bubble column per boost maggiore',
      'Magma block per discendere velocemente',
      'Practice in creative prima'
    ],
    keywords: ['elytra', 'launch', 'anello', 'acqua', 'ring', 'volo']
  },
  {
    id: 'entity-cramming-uses',
    category: 'trick',
    subcategory: 'Farm',
    title: 'Entity Cramming - Kill Automatico',
    description: 'Se più di 24 entità sono nello stesso blocco, iniziano a morire.',
    difficulty: 'Pro',
    details: [
      'Default: 24 entità max per blocco',
      'Sopra il limite: danno di soffocamento',
      'Usato nelle farm per kill automatico',
      'Mantiene XP e drop (no need weapon)',
      'Gamerule maxEntityCramming modifica il limite'
    ],
    tips: [
      'Perfetto per gold farm e villager breeder',
      'I mob spinti da acqua si accumulano',
      'Hopper sotto per raccolta drop',
      'XP si accumula finché non raccogli'
    ],
    keywords: ['entity cramming', 'soffocamento', 'farm', 'kill', '24', 'automatico']
  },
  {
    id: 'bed-explosion-damage',
    category: 'trick',
    subcategory: 'Combat',
    title: 'Bed Bombing - Danno Esplosivo',
    description: 'I letti esplodono se usati nel Nether/End. Arma potente contro boss.',
    difficulty: 'Pro',
    details: [
      'Esplosione: circa come TNT',
      'Danno scala con distanza',
      'Funziona contro Ender Dragon e Wither',
      'Richiede timing preciso (click sul letto)',
      'Il messaggio di morte è "was killed by [Intentional Game Design]"'
    ],
    tips: [
      'Blast Protection riduce il danno a te',
      'Usa quando il dragon perches sulla fontana',
      'Porta molti letti per boss fight',
      'Totem come backup'
    ],
    keywords: ['bed', 'letto', 'explosion', 'nether', 'end', 'dragon', 'wither']
  },
  {
    id: 'nether-roof-access',
    category: 'trick',
    subcategory: 'Exploit',
    title: 'Nether Roof Access',
    description: 'Accedere sopra la bedrock del Nether roof per farm e highway.',
    difficulty: 'Master',
    details: [
      'Metodo ender pearl: lancia pearl attraverso 1-block gap',
      'Metodo ladder: glitch con ladder e trapdoor',
      'Metodo piston: breaking bedrock (complex)',
      'Sopra Y 128: piatto, safe, nessun mob spawn',
      'Perfetto per gold farm e ice highway'
    ],
    tips: [
      'Porta materiali per portale di ritorno',
      'Non tutti i server permettono questa tecnica',
      'Bedrock breaking è complesso ma possibile',
      'Blue ice + boat = viaggio velocissimo'
    ],
    keywords: ['nether roof', 'bedrock', 'glitch', 'exploit', 'pearl', 'highway']
  },
  {
    id: 'minecart-speed-boost',
    category: 'trick',
    subcategory: 'Movement',
    title: 'Minecart Speed Boost',
    description: 'Tecniche per aumentare la velocità delle minecart oltre il normale.',
    difficulty: 'Pro',
    details: [
      'Powered rail boost: multiple powered rail = più velocità',
      'Downhill momentum: la gravità aiuta',
      'Furnace minecart: può spingere altri cart',
      'Entity collision boost: glitch con mob',
      'Max speed: 8 m/s normalmente'
    ],
    tips: [
      'Powered rail ogni ~32 blocchi per mantenere speed',
      'Diagonal rails are faster (exploit)',
      'Ice under rail non aumenta la velocità',
      'Storage minecart per trasporto item'
    ],
    keywords: ['minecart', 'speed', 'rail', 'boost', 'powered', 'velocità']
  },
  {
    id: 'item-duplication-awareness',
    category: 'trick',
    subcategory: 'Exploit',
    title: 'Item Duplication - Consapevolezza',
    description: 'Esistono glitch di duplicazione. Conoscerli per evitarli o... usarli.',
    difficulty: 'Legend',
    details: [
      'TNT duping: il più comune per TNT infinito',
      'Carpet duping: carpet infiniti (design specifico)',
      'Rail duping: rotaie infinite (piston)',
      'Donkey dupe: patched in recenti versioni',
      'Mojang fixa molti dupe nelle patch'
    ],
    tips: [
      'Molti server bannano per duping',
      'Alcuni dupe sono "accepted" nella community tecnica',
      'TNT dupe praticamente standard per tree farm',
      'Always backup before trying exploits'
    ],
    keywords: ['dupe', 'duplicazione', 'glitch', 'exploit', 'tnt', 'carpet']
  },
  {
    id: 'zero-tick-farm-concept',
    category: 'trick',
    subcategory: 'Farm',
    title: 'Zero-Tick Farms (Legacy)',
    description: 'Le 0-tick farm sfruttavano un glitch per crescita istantanea. Patchate in 1.16.',
    difficulty: 'Legend',
    details: [
      'Concetto: piston muove e rimette blocco nello stesso tick',
      'Il crop riceve molti "random tick" istantaneamente',
      'Crescita istantanea di sugarcane, bamboo, etc.',
      'Rimosso in 1.16 (Java)',
      'Ancora funzionante su alcune versioni Bedrock'
    ],
    tips: [
      'Ora si usano design con bone meal',
      'Observer-based farm sono l\'alternativa',
      'Alcune farm legacy ancora funzionano',
      'Check version before building'
    ],
    keywords: ['zero tick', '0-tick', 'farm', 'instant', 'legacy', 'piston']
  },
  {
    id: 'f3-debug-tricks',
    category: 'trick',
    subcategory: 'Utility',
    title: 'F3 Debug Screen Tricks',
    description: 'Informazioni nascoste nella schermata debug che aiutano enormemente.',
    difficulty: 'Noob',
    details: [
      'Biome: mostra il biome esatto',
      'Light: block light e sky light separati',
      'Looking at: coordinate del blocco guardato',
      'Targeted Block/Entity: info sul target',
      'Local Difficulty: scala con tempo nel chunk'
    ],
    tips: [
      'E (entities) mostra count (per mob cap debug)',
      'Memory: per capire se il gioco lagga',
      'Facing: direzione esatta (utile per nether coords)',
      'Day: giorni passati nel mondo'
    ],
    keywords: ['f3', 'debug', 'info', 'coordinate', 'biome', 'light', 'utility']
  },
  {
    id: 'advanced-parkour-tech',
    category: 'trick',
    subcategory: 'Movement',
    title: 'Advanced Parkour Tech',
    description: 'Tecniche di parkour avanzate per movimenti impossibili.',
    difficulty: 'Master',
    details: [
      'Neo: 1 block jump con turn in aria (90°)',
      '4-block jump: sprint + jump perfetto = max 4 blocchi',
      'Head hitter: salto sotto 2-block ceiling per boost',
      'Ladder clutch: grab ladder last second',
      'Trapdoor jump: trapdoor accelera il salto'
    ],
    tips: [
      'Timing è tutto',
      'Sprint-jumping: 45° angle = max distance',
      'Practice maps disponibili online',
      'Some jumps require specific strats'
    ],
    keywords: ['parkour', 'jump', 'neo', '4-block', 'movement', 'advanced']
  },

  // === NUOVE VOCI PRO LEVEL ===
  
  // INFO PRO
  {
    id: 'update-order-mechanics',
    category: 'info',
    subcategory: 'Mechanics',
    title: 'Update Order - Meccaniche Avanzate',
    description: 'L\'ordine in cui i blocchi si aggiornano è deterministico e sfruttabile.',
    details: [
      'Horizontal: WEST, EAST, DOWN, UP, NORTH, SOUTH',
      'I circuiti redstone dipendono da questo ordine',
      'Alcuni glitch funzionano solo in certe direzioni',
      'Chunk borders possono causare aggiornamenti diversi',
      'Block updates si propagano in modo specifico'
    ],
    keywords: ['update order', 'block update', 'bud', 'ordine', 'direzione', 'glitch']
  },
  {
    id: 'heightmap-secrets',
    category: 'info',
    subcategory: 'Mechanics',
    title: 'Heightmap - Spawn e Generazione',
    description: 'Gli heightmap influenzano spawn, strutture e generazione luce.',
    details: [
      'WORLD_SURFACE: blocco più alto non-aria',
      'MOTION_BLOCKING: blocco che blocca il movimento',
      'OCEAN_FLOOR: usato per strutture oceaniche',
      'I mob calcolano spawn basandosi su heightmap',
      'Slime chunks usano seed + chunk coords'
    ],
    keywords: ['heightmap', 'spawn', 'slime chunk', 'generazione', 'seed']
  },
  {
    id: 'entity-collision-box',
    category: 'info',
    subcategory: 'Mechanics',
    title: 'Collision Box e Hitbox',
    description: 'Ogni entità ha hitbox diversi per combattimento e collisione.',
    details: [
      'Hitbox: area colpibile (visibile con F3+B)',
      'Collision box: area che blocca movimento',
      'Player: 1.8 blocchi alto, 0.6 largo',
      'Sneaking: 1.5 blocchi (passa sotto 1.5 gap)',
      'Swimming/elytra: 0.6 blocchi (passa in 1-block gap)',
      'Baby zombie: 0.975 alto (passa ovunque)'
    ],
    keywords: ['hitbox', 'collision', 'box', 'sneak', 'crawl', 'gap', '1 block']
  },
  {
    id: 'tick-scheduling',
    category: 'info',
    subcategory: 'Mechanics',
    title: 'Tick Scheduling - Ordine Operazioni',
    description: 'Cosa succede in ogni game tick e in che ordine.',
    details: [
      '1. Block events (piston)',
      '2. Scheduled ticks (redstone)',
      '3. Block entity ticks (furnace, hopper)',
      '4. Entity ticks (mob AI, player)',
      '5. Player actions',
      'Questo ordine è cruciale per redstone timing'
    ],
    keywords: ['tick', 'scheduling', 'order', 'operazioni', 'game tick', 'timing']
  },
  {
    id: 'structure-seed-mechanics',
    category: 'info',
    subcategory: 'Mechanics',
    title: 'Seed e Generazione Strutture',
    description: 'Come il seed determina la posizione delle strutture.',
    details: [
      'Ogni struttura ha spacing e separation values',
      'Stronghold: ring pattern dal spawn (1st ring: 3)',
      'Nether Fortress: generate in fasce (banding)',
      'Village: ogni biome type ha seed modifier',
      'Ocean Monument: 32 chunk spacing',
      'Tools come Chunkbase usano queste formule'
    ],
    keywords: ['seed', 'struttura', 'structure', 'stronghold', 'fortress', 'chunkbase', 'generazione']
  },
  
  // FARM PRO
  {
    id: 'mob-cap-manipulation',
    category: 'farm',
    subcategory: 'Advanced',
    title: 'Mob Cap Manipulation',
    description: 'Controllare il mob cap è la chiave per farm efficienti.',
    details: [
      'Mob cap: 70 hostile per player (single player)',
      'Conta solo i mob nella simulation distance',
      'Mob in nether/end contano separatamente per spawn location',
      'Mob cap = constant spawning attempts',
      'Perimeter: rimuovi tutti gli altri spawn = spawn solo nella farm'
    ],
    tips: [
      'Perimeter di 128 blocchi = massime rate',
      'Mob in minecart/boat non contano vs cap',
      'Peaceful poi Hard resetta i mob'
    ],
    keywords: ['mob cap', 'farm', 'spawn', 'perimeter', 'rate', 'efficiency']
  },
  {
    id: 'portal-based-farm',
    category: 'farm',
    subcategory: 'Advanced',
    title: 'Portal-Based Gold/XP Farm',
    description: 'Le farm basate su portali sfruttano lo spawn di Zombified Piglin.',
    details: [
      'I portali generano Zombified Piglin casualmente',
      'Rate: ~19.2 spawn attempts per portal block per minute',
      'Massimo efficiente: 1000+ portali',
      'Entity cramming per kill automatiche',
      'Rates: 100k+ oro/ora possibili'
    ],
    tips: [
      'Costruisci nell\'Overworld roof',
      'Portali 23x23 (max size)',
      'Looting switch per farm switching'
    ],
    keywords: ['portal', 'farm', 'gold', 'piglin', 'nether', 'xp', 'oro']
  },
  {
    id: 'item-sorting-advanced',
    category: 'farm',
    subcategory: 'Storage',
    title: 'Item Sorting System - Overflow Proof',
    description: 'Sistema di smistamento oggetti che non si rompe.',
    details: [
      'Classic: hopper con 41 item + 4 filler',
      'Filler: item che non droppa mai (renamed stick)',
      'Signal strength 3 = comparator output per filter',
      'Overflow protection: hopper lock con redstone',
      'Multi-item: multipli filter in sequenza'
    ],
    tips: [
      'Non stackable items: use different design',
      'Allay sorting: per item non filtrabili',
      'Water stream per distribuzione iniziale'
    ],
    keywords: ['sorting', 'storage', 'hopper', 'filter', 'item', 'smistamento', 'automatico']
  },
  {
    id: 'crop-growth-mechanics',
    category: 'farm',
    subcategory: 'Crops',
    title: 'Meccaniche Crescita Crop',
    description: 'Come funziona la crescita delle coltivazioni in dettaglio.',
    details: [
      'Random tick: 3 per chunk per game tick (default)',
      'Growth chance dipende da: light, farmland hydration, surrounding crops',
      'Optimal layout: righe singole alternate',
      'Bonemeal: cresce istantaneamente (1-7 usi per maturità)',
      'Sugar cane/cactus: non usano random tick per crescita'
    ],
    tips: [
      'Crop spacing: checkerboard pattern è ottimale',
      'Bone meal farm con composter',
      'Nether wart: cresce in qualsiasi light level'
    ],
    keywords: ['crop', 'farm', 'growth', 'crescita', 'wheat', 'carrot', 'potato', 'random tick']
  },
  {
    id: 'spawn-proofing-techniques',
    category: 'farm',
    subcategory: 'Advanced',
    title: 'Spawn Proofing Techniques',
    description: 'Modi per impedire lo spawn di mob in specifiche aree.',
    details: [
      'Light level 0+ ora blocca mob ostili',
      'Bottom slabs: no spawn',
      'Glass: no spawn',
      'Carpet: no spawn (ma attenzione a sotto)',
      'Buttons/pressure plates: spawn proof',
      'String: invisibile + spawn proof',
      'Trapdoor: spawn proof se aperto'
    ],
    keywords: ['spawn', 'proof', 'light', 'slab', 'carpet', 'mob', 'bloccare']
  },
  
  // COMBAT PRO
  {
    id: 'damage-immunity-exploit',
    category: 'combat',
    subcategory: 'Meccaniche',
    title: 'Damage Immunity Exploit',
    description: 'Exploit avanzati del sistema di i-frames.',
    details: [
      'I-frames: 0.5 secondi dopo ogni danno',
      'Exploit: danno basso prima di danno alto = blocca danno alto',
      'Cactus + fall damage = puoi sopravvivere a cadute mortali',
      'Berry bush triggera i-frames senza danno significativo',
      'Magma block tick damage = reset continuo'
    ],
    keywords: ['i-frame', 'immunity', 'exploit', 'damage', 'survival', 'invincibility']
  },
  {
    id: 'crit-and-combo-tech',
    category: 'combat',
    subcategory: 'PvP/PvE',
    title: 'Critical + Combo Tech',
    description: 'Tecniche avanzate per massimizzare DPS.',
    details: [
      'Crit: 150% damage richiede caduta',
      'Jump crit: basic, colpisci appena inizi a scendere',
      'W-tap: rilascia W per resettare sprint, knockback max',
      'S-tap: indietro durante cooldown, poi W per attack',
      'Blockhit: blocca mentre attacchi (legacy combat)',
      'Sprint reset con S o rilascio W'
    ],
    keywords: ['crit', 'combo', 'pvp', 'dps', 'w-tap', 's-tap', 'sprint']
  },
  {
    id: 'totem-mechanics-deep',
    category: 'combat',
    subcategory: 'Items',
    title: 'Totem of Undying - Deep Mechanics',
    description: 'Meccaniche avanzate del Totem che pochi conoscono.',
    details: [
      'Deve essere in mano (main o offhand) per attivarsi',
      'Resetta HP a 1 cuore + dà effetti',
      'Effetti: 40s Regen II, 45s Fire Res, 5s Absorption II',
      'NON salva da: void, /kill, starvation damage (hard)',
      'Consumed anche in creative se tieni',
      'Può essere attivato dalla "stessa morte" 2 volte (raro bug)'
    ],
    keywords: ['totem', 'undying', 'survival', 'effetti', 'death', 'void']
  },
  {
    id: 'crossbow-vs-bow-analysis',
    category: 'combat',
    subcategory: 'Armi',
    title: 'Crossbow vs Bow - Analisi Dettagliata',
    description: 'Quando conviene usare balestra vs arco.',
    details: [
      'Bow: 6-15 damage (drawn), DPS più alto',
      'Crossbow: 6-11 damage, ma Multishot/Piercing',
      'Multishot: 3 frecce, solo 1 consuma durabilità',
      'Piercing: attraversa mob, ottimo vs gruppi',
      'Quick Charge III: quasi uguale all\'arco in velocità',
      'Rocket crossbow: damage istantaneo, burst'
    ],
    tips: [
      'Bow + Power V = best single target',
      'Crossbow + Multishot = best crowd control',
      'Firework crossbow per dragons/crowd'
    ],
    keywords: ['crossbow', 'bow', 'balestra', 'arco', 'multishot', 'piercing', 'damage']
  },
  {
    id: 'sweeping-attack-mechanics',
    category: 'combat',
    subcategory: 'PvP/PvE',
    title: 'Sweeping Edge Attack',
    description: 'L\'attacco sweep della spada e come massimizzarlo.',
    details: [
      'Sweep: colpisce mob vicini al target primario',
      'Raggio: 1 blocco intorno al target',
      'Damage: 1 + floor(base_damage * sweep_multiplier)',
      'Sweep multiplier: 0.5 base, +12.5% per livello di Sweeping Edge',
      'Sweeping Edge III: 75% del danno del colpo principale',
      'Non si attiva se salti (i.e., durante crit)'
    ],
    keywords: ['sweep', 'sweeping', 'edge', 'spada', 'sword', 'aoe', 'crowd']
  },
  
  // MOB PRO
  {
    id: 'mob-pathfinding-exploit',
    category: 'mob',
    subcategory: 'AI',
    title: 'Pathfinding Exploit',
    description: 'Come sfruttare il pathfinding dei mob per trap e farm.',
    details: [
      'I mob calcolano il path verso il player',
      'Preferiscono blocchi "cammabili"',
      'Trapdoor aperto = considerato bloccato',
      'I mob camminano su magma/campfire se è il path più breve',
      'Porte: zombies cercano di romperle, skeleton no'
    ],
    tips: [
      'Trapdoor trap: mob cadono perché pensano sia suolo',
      'Magma walkway: damage passivo',
      'Iron golem aggro per guidare mob specifici'
    ],
    keywords: ['pathfinding', 'ai', 'mob', 'trap', 'trapdoor', 'exploit']
  },
  {
    id: 'mob-spawning-limits',
    category: 'mob',
    subcategory: 'AI',
    title: 'Spawn Limits e Eccezioni',
    description: 'Mob che ignorano le normali regole di spawn.',
    details: [
      'Slime: solo in slime chunks O swamp (night)',
      'Magma Cube: ignora light level nel Nether',
      'Ghast: 4+ blocchi spazio richiesto',
      'Iron Golem: spawn da villager, no mob cap',
      'Warden: spawn da sculk shrieker, no mob cap',
      'Patrols: spawn overrida condizioni normali'
    ],
    keywords: ['spawn', 'limits', 'exception', 'slime', 'magma', 'golem', 'warden']
  },
  {
    id: 'mob-xp-values',
    category: 'mob',
    subcategory: 'Stats',
    title: 'XP Values per Mob',
    description: 'Quanto XP droppano i vari mob.',
    table: {
      headers: ['Mob', 'XP', 'Note'],
      rows: [
        ['Ender Dragon (first)', '12000', 'Respawn: 500'],
        ['Wither', '50', 'Difficile da farmare'],
        ['Blaze', '10', 'Ottimo ratio'],
        ['Enderman', '5', 'Facile da farmare'],
        ['Piglin Brute', '20', 'Non respawna'],
        ['Guardian', '10', 'Monument farm'],
        ['Evoker', '10', '+ totem'],
        ['Phantom', '5', 'Sleep per evitare'],
        ['Baby Zombie', '12', '+ equipment XP']
      ]
    },
    keywords: ['xp', 'experience', 'drop', 'mob', 'farming', 'livelli']
  },
  {
    id: 'zombie-villager-cure',
    category: 'mob',
    subcategory: 'Mechanics',
    title: 'Zombie Villager Cure - Dettagli',
    description: 'Processo completo e sconti permanenti.',
    details: [
      '1. Lancia Splash Weakness (o freccia)',
      '2. Usa Golden Apple sullo zombie villager',
      '3. Attendi 3-5 minuti (faster se vicino a letti/barre di ferro)',
      'Lo sconto è PERMANENTE e CUMULATIVO',
      'Si resetta se il villager muore',
      'Funziona solo in Normal/Hard (no peaceful/easy)'
    ],
    tips: [
      'Cura lo stesso villager 5+ volte = 1 emerald per tutto',
      'Iron bars e letti velocizzano la cura',
      'Zombie villager mantiene la professione'
    ],
    keywords: ['zombie villager', 'cure', 'cura', 'sconto', 'discount', 'golden apple', 'weakness']
  },
  {
    id: 'mob-drops-looting',
    category: 'mob',
    subcategory: 'Stats',
    title: 'Rare Drops e Looting Effect',
    description: 'Come Looting influenza le rare drops.',
    details: [
      'Looting aumenta max drops di 1 per livello',
      'Rare drops: +1% chance per livello',
      'Wither Skeleton skull: 2.5% → 5.5% con Looting III',
      'Ender Pearl (Enderman): 0-1 → 0-4 con Looting III',
      'Blaze Rod: 0-1 → 0-4 con Looting III',
      'Alcune drops hanno cap (non aumentano)'
    ],
    keywords: ['looting', 'drops', 'rare', 'skull', 'blaze rod', 'ender pearl']
  },
  
  // REDSTONE PRO
  {
    id: 'instant-wire',
    category: 'redstone',
    subcategory: 'Advanced',
    title: 'Instant Wire - 0-tick Propagation',
    description: 'Propagare segnale istantaneamente senza delay.',
    details: [
      'La redstone dust ha 0 delay di propagazione',
      'Il delay viene dai componenti (repeater, comparator)',
      'Instant wire: piston + observer per propagazione a distanza',
      'Alternativa: comparator chain in subtract mode',
      'Utile per: sincronizzazione farm, cannoni TNT'
    ],
    keywords: ['instant', 'wire', '0-tick', 'propagation', 'delay', 'piston']
  },
  {
    id: 'double-piston-extender',
    category: 'redstone',
    subcategory: 'Circuiti',
    title: 'Double/Triple Piston Extender',
    description: 'Estendere la portata dei pistoni oltre il limite di 1 blocco.',
    details: [
      'Double: 2 pistoni in fila, segnale temporizzato',
      'Il secondo piston spinge il primo (extended)',
      'Retraction: inverse order',
      'Triple: più complesso, richiede timing preciso',
      'Slime blocks: può creare extender seamless'
    ],
    keywords: ['piston', 'extender', 'double', 'triple', 'timing', 'redstone']
  },
  {
    id: 'tnt-duplicator',
    category: 'redstone',
    subcategory: 'Advanced',
    title: 'TNT Duplicator',
    description: 'Meccanismo per duplicare TNT usando glitch.',
    details: [
      'Sfrutta il fatto che TNT primed e block esistono insieme per 1 tick',
      'Piston ritrae TNT mentre è primed',
      'Risultato: TNT entity + TNT block',
      'Necessario per cannoni infiniti',
      'Funziona su Java, non su Bedrock'
    ],
    tips: [
      'Coral fan design è il più compatto',
      'Può causare lag se abusato',
      'Essential per world eaters'
    ],
    keywords: ['tnt', 'duplicator', 'dupe', 'glitch', 'piston', 'cannon']
  },
  {
    id: 'chunk-loading-redstone',
    category: 'redstone',
    subcategory: 'Advanced',
    title: 'Chunk Loaders con Redstone',
    description: 'Mantenere chunk caricati per farm AFK.',
    details: [
      'Entity processing: 5 chunk radius dal player',
      'Nether portal: carica chunk per 15 secondi',
      'Chunk loader: entità che attraversa portale ripetutamente',
      'Hopper + minecart: attraversano chunk borders',
      'Spawn chunks: sempre caricati ma no entity processing'
    ],
    keywords: ['chunk', 'loading', 'loader', 'afk', 'farm', 'entity']
  },
  {
    id: 'wireless-redstone',
    category: 'redstone',
    subcategory: 'Advanced',
    title: 'Wireless Redstone',
    description: 'Trasmettere segnale senza connessione fisica.',
    details: [
      'Sculk sensor: rileva vibrazioni a distanza (8 blocchi)',
      'Piston + observer: rileva a chunk distance',
      'Allays: possono trasportare item (con note block)',
      'TNT cannon: può attivare target block a distanza',
      'Ender pearl in chunk loader: teleport trigger'
    ],
    keywords: ['wireless', 'sculk', 'sensor', 'distanza', 'remote', 'trigger']
  },
  
  // TRICK PRO
  {
    id: 'water-bucket-tech',
    category: 'trick',
    subcategory: 'Utility',
    title: 'Water Bucket Tech Avanzato',
    description: 'Usi avanzati del secchio d\'acqua.',
    difficulty: 'Pro',
    details: [
      'MLG: timing a ~2 blocchi dal suolo',
      'Waterfall: piazza alto, raccogli basso per discesa',
      'Enemy displacement: spingi mob lontano/in trappole',
      'Enderman safe zone: cerchio d\'acqua intorno',
      'Fire extinguish: spegni fuoco su te stesso',
      'Obsidian farming: acqua su lava source'
    ],
    keywords: ['water', 'bucket', 'secchio', 'acqua', 'mlg', 'trick', 'utility']
  },
  {
    id: 'lava-bucket-strats',
    category: 'trick',
    subcategory: 'Combat',
    title: 'Lava Bucket Strategies',
    description: 'Usare la lava come arma offensiva.',
    difficulty: 'Pro',
    details: [
      'Piazza lava ai piedi del nemico',
      'Raccogli dopo 2-3 secondi (prima che sparisca)',
      'Bypassa armor (fire damage)',
      'Ottimo vs mob senza fire resistance',
      'Combinabile con knockback',
      'In Nether: infinite lava = infinite weapon'
    ],
    keywords: ['lava', 'bucket', 'combat', 'fire', 'damage', 'pvp']
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
      'TNT: boost estremo ma dannoso',
      'Punch bow: spara mentre plani per boost',
      'Wind Charge: nuovo metodo in 1.21'
    ],
    tips: [
      'Firework senza stars = no damage',
      'Riptide III + pioggia = velocità massima',
      'Unbreaking + Mending essenziali per elytra'
    ],
    keywords: ['elytra', 'boost', 'firework', 'riptide', 'volo', 'fly']
  },
  {
    id: 'inventory-management',
    category: 'trick',
    subcategory: 'Utility',
    title: 'Inventory Management Pro',
    description: 'Shortcut e trucchi per gestire l\'inventario velocemente.',
    difficulty: 'Noob',
    details: [
      'Shift+click: sposta stack intero',
      'Ctrl+Q: droppa stack intero',
      'Doppio click: raccoglie tutti gli item uguali',
      'Drag+click: distribuisce item',
      'Numeri 1-9: hotbar swap',
      'F: swap main/offhand'
    ],
    tips: [
      'Organizza hotbar: sword, pick, axe, food, blocks, torch, water, misc',
      'Ender chest per valuables',
      'Shulker box per massimo storage'
    ],
    keywords: ['inventory', 'inventario', 'management', 'shortcut', 'hotkey', 'quick']
  },
  {
    id: 'nether-travel-optimization',
    category: 'trick',
    subcategory: 'Travel',
    title: 'Nether Travel Optimization',
    description: 'Viaggiare 8x più velocemente usando il Nether.',
    difficulty: 'Pro',
    details: [
      '1 blocco nel Nether = 8 blocchi nell\'Overworld',
      'Formula: Overworld coords / 8 = Nether coords',
      'Crea hub nel Nether roof (Y 128+) per viaggi sicuri',
      'Ice roads + boat: 40+ m/s possibile',
      'Blue ice: 70+ m/s con boat'
    ],
    tips: [
      'Porta obsidian e flint & steel',
      'Coordinate Y non scalano',
      'Mappa il Nether roof per viaggi sicuri'
    ],
    keywords: ['nether', 'travel', 'viaggio', 'veloce', 'fast', 'ice', 'boat', '8x']
  }
];

// Function to search the knowledge base
export function searchKnowledgeBase(query: string): InfoItem[] {
  const lowerQuery = query.toLowerCase();
  return knowledgeBase.filter(item => 
    item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery)) ||
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery)
  );
}

// Function to get items by category
export function getByCategory(category: InfoItem['category']): InfoItem[] {
  return knowledgeBase.filter(item => item.category === category);
}

// Function to get items by subcategory
export function getBySubcategory(category: InfoItem['category'], subcategory: string): InfoItem[] {
  return knowledgeBase.filter(item => item.category === category && item.subcategory === subcategory);
}

// Get all unique subcategories for a category
export function getSubcategories(category: InfoItem['category']): string[] {
  const items = getByCategory(category);
  return [...new Set(items.map(item => item.subcategory))];
}
