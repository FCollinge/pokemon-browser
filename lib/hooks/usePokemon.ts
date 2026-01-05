import useSWR, { mutate } from 'swr';
import { getPokemonList, getPokemon, getPokemonSpecies } from '../api/pokemon';
import { useEffect } from 'react';

export const usePokemonList = (limit: number = 12, offset: number = 0) => {
  const { data, error } = useSWR(
    `pokemon-list-${limit}-${offset}`,
    () => getPokemonList(limit, offset)
  );

  useEffect(() => {
    if (!data?.results) return;
    data.results.forEach((pokemon: { name: string; url: string }) => {
      const id = parseInt(pokemon.url.split('/').slice(-2, -1)[0]);
        mutate(
        `pokemon-detail-${id}`,
        getPokemon(id),
        false
        );
      mutate(
        `pokemon-species-${id}`,
        getPokemonSpecies(id),
        false
      );
    });
  }, [data]);

  return { data, error, isLoading: !data && !error };
};