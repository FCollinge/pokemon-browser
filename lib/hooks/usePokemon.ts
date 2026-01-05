import useSWR from 'swr';
import {getPokemonList} from '../api/pokemon';

export const usePokemonList = (limit: number = 12, offset: number = 0) => {
  const { data, error } = useSWR(`pokemon-list-${limit}-${offset}`, () => getPokemonList(limit, offset));
  return { data, error, isLoading: !data && !error };
};