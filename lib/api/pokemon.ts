import {Pokemon, PokemonListResponse, PokemonSpecies} from './types';

export async function getPokemon(id: string | number): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error('Failed to fetch pokemon');
  return res.json();
}

export async function getPokemonList(limit: number = 20, offset: number = 0): Promise<PokemonListResponse> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error('Failed to fetch pokemon list');
  return res.json();
}

export async function getPokemonSpecies(id: string | number): Promise<PokemonSpecies> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  if (!res.ok) throw new Error('Failed to fetch pokemon species');
  return res.json();
}