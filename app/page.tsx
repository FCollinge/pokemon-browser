'use client';
import {usePokemonList} from '@/lib/hooks/usePokemon';

import Hero from '@/components/hero';
import Separator from '@/components/separator';
import Footer from '@/components/footer';
import {BackButton, NextButton} from '@/components/pagbuttons';
import PokemonCard from '@/components/pokemoncard';
import SearchBar from '@/components/searchbar';
import {getPokemonList, getPokemon} from '@/lib/api/pokemon';
import Link from 'next/link';
import {Suspense} from 'react';
import React from 'react';
import {Skeleton} from '@/components/ui/skeleton';
import {useSearchParams} from 'next/navigation';

export default function LandingPage() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');
  const query = searchParams.get('q') || '';
  
  return (
    <div style={{
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: '48px'
     }}>
      <Hero />
      <Separator />
      
      <Suspense key={`${query}-${currentPage}`} fallback={
        <div style={{
          width: '1440px',
          paddingRight: '140px',
          paddingLeft: '140px'
        }}>
          <div style={{
            width: '1160px',
            height: '40px',
            marginBottom: '48px'
          }}>
            <Skeleton className="w-full h-full" />
          </div>
          <div style={{
            width: '1160px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <Skeleton key={i} className="w-[266px] h-[391px]" />
            ))}
          </div>
          <div style={{
            width: '1160px',
            height: '36px',
            marginTop: '48px'
          }}>
            <Skeleton className="w-full h-full" />
          </div>
        </div>
      }>
        <PokemonListContent currentPage={currentPage} query={query} />
      </Suspense>
      
      <Separator />
      <Footer height={query ? "215px" : undefined} />
    </div>
  );
}
  
function PokemonListContent({ currentPage, query }: { currentPage: number; query: string }) {
  const limit = 12;
  const offset = (currentPage - 1) * limit;
  const { data, error, isLoading } = usePokemonList(limit, offset);

  // All hooks must be called unconditionally and at the top
  const [searchResults, setSearchResults] = React.useState<any[]>([]);
  const [totalResults, setTotalResults] = React.useState(0);
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [detailedList, setDetailedList] = React.useState<any[]>([]);

  React.useEffect(() => {
    let ignore = false;
    if (query) {
      setSearchLoading(true);
      (async () => {
        const allPokemon = await getPokemonList(2000, 0);
        const filtered = allPokemon.results.filter((p: any) =>
          p.name.includes(query.toLowerCase())
        );
        setTotalResults(filtered.length);
        const paginated = filtered.slice(offset, offset + limit);
        const pokemonPromises = paginated.map(async (pokemon: any) => {
          const id = parseInt(pokemon.url.split('/').slice(-2, -1)[0]);
          const details = await getPokemon(id);
          return {
            id: details.id,
            name: details.name,
            image: details.sprites.front_default,
            types: details.types.map((t: any) => t.type.name),
          };
        });
        const results = await Promise.all(pokemonPromises);
        if (!ignore) {
          setSearchResults(results);
          setSearchLoading(false);
        }
      })();
    }
    return () => {
      ignore = true;
    };
  }, [query, offset, limit]);

  React.useEffect(() => {
    let ignore = false;
    if (!query && data && Array.isArray(data.results) && data.results.length > 0) {
      (async () => {
        const details = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const id = parseInt(pokemon.url.split('/').slice(-2, -1)[0]);
            const details = await getPokemon(id);
            return {
              id: details.id,
              name: details.name,
              image: details.sprites.front_default,
              types: details.types.map((t: any) => t.type.name),
            };
          })
        );
        if (!ignore) setDetailedList(details);
      })();
    }
    return () => {
      ignore = true;
    };
  }, [data, query]);

  const pokemonList = query ? searchResults : detailedList;
  const hasNextPage = query
    ? totalResults > currentPage * limit
    : data?.next !== null;

  if ((query && searchLoading) || (!query && isLoading)) return null;
  if (error) return <div>Error loading Pokémon.</div>;

  return (
    <div style={{
      background: '#FFFFFF'
    }}>
      <div style={{
          width: '1440px',
          gap: '48px',
          paddingRight: '140px',
          paddingLeft: '140px',
          display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
            width: '1160px',
            height: '40px',
            justifyContent: 'space-between',
            display: 'flex',
          alignItems: 'center'
        }}>
          <h2 style={{
              width: query ? '410px' : '241px',
              height: '36px',
              fontFamily: 'Inter',
              fontWeight: '600',
              fontSize: '30px',
              lineHeight: '36px',
              letterSpacing: '-2.5%',
            color: query ? '#181A1B' : '#09090B'
          }}>
            {query ? `Search Results for '${query}'` : 'Explore Pokémon'}
          </h2>

          <div style={{
              width: '342px',
              height: '40px',
              gap: '12px',
              display: 'flex',
            alignItems: 'center'
          }}>
            <SearchBar />
          </div>
        </div>

        <div style={{
            width: '1160px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px'
        }}>
          {pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />
          ))}
        </div>

        <div style={{
            width: '1160px',
            height: '36px',
            gap: '16px',
            display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{ 
              opacity: currentPage === 1 ? 0.5 : 1,
            pointerEvents: currentPage === 1 ? 'none' : 'auto'
          }}>
            <Link href={query ? `/?q=${query}&page=${currentPage - 1}` : `/?page=${currentPage - 1}`}>
              <BackButton />
            </Link>
          </div>
          <div style={{ 
              opacity: !hasNextPage ? 0.5 : 1,
            pointerEvents: !hasNextPage ? 'none' : 'auto'
          }}>
            <Link href={query ? `/?q=${query}&page=${currentPage + 1}` : `/?page=${currentPage + 1}`}>
              <NextButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}