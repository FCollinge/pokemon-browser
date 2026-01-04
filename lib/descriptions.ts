const VERSION_PRIORITY = [ // Gen 9 to Gen 1
  'scarlet', 'violet', 'the-teal-mask', 'the-indigo-disk', 'legends-za', 'mega-dimension',
  'sword', 'shield', 'the-isle-of-armor', 'the-crown-tundra', 'brilliant-diamond', 'shining-pearl', 'legends-arceus',
  'sun', 'moon', 'ultra-sun', 'ultra-moon', 'lets-go-pikachu', 'lets-go-eevee',
  'x', 'y', 'omega-ruby', 'alpha-sapphire',
  'black', 'white', 'black-2', 'white-2',
  'diamond', 'pearl', 'platinum', 'heartgold', 'soulsilver',
  'ruby', 'sapphire', 'emerald', 'firered', 'leafgreen', 'colosseum', 'xd',
  'gold', 'silver', 'crystal',
  'red', 'blue', 'yellow', 'red-japan', 'green-japan', 'blue-japan'
];

export function descriptionFinder(flavorTextEntries: { flavor_text: string; language: { name: string }; version: { name: string } }[]): string {
  for (const version of VERSION_PRIORITY) {
    const entry = flavorTextEntries.find(
      e => e.language.name === 'en' && e.version.name === version
    );
    if (entry) return entry.flavor_text.replace(/\f/g, ' ');
  }
  
  return 'No description available.';
}