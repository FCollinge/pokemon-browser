export function getWeaknesses(types: string[]): string[] {
  const allTypes = ['normal','fighting','flying','poison','ground','rock',
                    'bug','ghost','steel','fire','water','grass',
                    'electric','psychic','ice','dragon','dark','fairy']
  
  const output: string[] = [];
  
  for (const weakness of allTypes) {
    let mult = 1;
    
    for (const type of types) {
    if (isImmuneAgainst(type, weakness)) {
        mult = 0;
        break;
    } else if (isWeakAgainst(type, weakness)) {
        mult *= 2;
    } else if (isStrongAgainst(type, weakness)) {
        mult *= 0.5;
    }
    }
    
    if (mult > 1) {
      output.push(weakness);
    }
  }
  
  return output;
}

// For clarification this map was written because it saves a lot of API queries.
// The API does carry this information but would require fetching each type's data
// separately which would be inefficient.
// There are arguments against them but my ultimate reasoning is that this is a
// very small dataset that is highly unlikely to change. Thus hardcoding it is acceptable.
const typeChart: Record<string, { weakTo: string[], resistantTo: string[], immuneTo: string[] }> = {
  normal: {weakTo: ['fighting'], resistantTo: [], immuneTo: ['ghost']},
  fire: {weakTo: ['water','ground','rock'], resistantTo: ['fire','grass','ice','bug','steel','fairy'], immuneTo: []},
  water: {weakTo: ['grass','electric'], resistantTo: ['fire','water','ice','steel'], immuneTo: []},
  grass: {weakTo: ['fire','ice','poison','flying','bug'], resistantTo: ['water','electric','grass','ground'], immuneTo: []},
  electric: {weakTo: ['ground'], resistantTo: ['electric','flying','steel'], immuneTo: []},
  ice: {weakTo: ['fire','fighting','rock','steel'], resistantTo: ['ice'], immuneTo: []},
  fighting: {weakTo: ['flying','psychic','fairy'], resistantTo: ['bug','rock','dark'], immuneTo: []},
  poison: {weakTo: ['ground','psychic'], resistantTo: ['grass','fighting','poison','bug','fairy'], immuneTo: []},
  ground: {weakTo: ['water','grass','ice'], resistantTo: ['poison','rock'], immuneTo: ['electric']},
  flying: {weakTo: ['electric','ice','rock'], resistantTo: ['grass','fighting','bug'], immuneTo: ['ground']},
  psychic: {weakTo: ['bug','ghost','dark'], resistantTo: ['fighting','psychic'], immuneTo: []},
  bug: {weakTo: ['fire','flying','rock'], resistantTo: ['grass','fighting','ground'], immuneTo: []},
  rock: {weakTo: ['water','grass','fighting','ground','steel'], resistantTo: ['normal','fire','poison','flying'], immuneTo: []},
  ghost: {weakTo: ['ghost','dark'], resistantTo: ['poison','bug'], immuneTo: ['normal','fighting']},
  dragon: {weakTo: ['ice','dragon','fairy'], resistantTo: ['fire','water','grass','electric'], immuneTo: []},
  dark: {weakTo: ['fighting','bug','fairy'], resistantTo: ['ghost','dark'], immuneTo: ['psychic']},
  steel: {weakTo: ['fire','fighting','ground'], resistantTo: ['normal','grass','ice','flying','psychic','bug','rock','dragon','steel','fairy'], immuneTo: ['poison']},
  fairy: {weakTo: ['poison','steel'], resistantTo: ['fighting','bug','dark'], immuneTo: ['dragon']},
};

function isWeakAgainst(defenderType: string, attackType: string): boolean {
  return typeChart[defenderType]?.weakTo.includes(attackType);
}

function isStrongAgainst(defenderType: string, attackType: string): boolean {
  return typeChart[defenderType]?.resistantTo.includes(attackType);
}

function isImmuneAgainst(defenderType: string, attackType: string): boolean {
  return typeChart[defenderType]?.immuneTo.includes(attackType);
}