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
