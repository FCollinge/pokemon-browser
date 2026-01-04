import Hero from '@/components/hero';
import Separator from '@/components/separator';
import Footer from '@/components/footer';
import {BackButton, NextButton} from '@/components/pagbuttons';
import PokemonCard from '@/components/pokemoncard';
import SearchBar from '@/components/searchbar';
import {getPokemonList, getPokemon} from '@/lib/api/pokemon';
import Link from 'next/link';
import {Suspense} from 'react';
import {Loader2} from 'lucide-react';

export default async function LandingPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ page?: string; q?: string }> 
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1');
  const query = params.q || '';
  
  return (
    <div style={{ background: '#FFFFFF' }}>
      <Hero />
      <Separator />
      
      <Suspense key={`${query}-${currentPage}`} fallback={
        <div style={{
          maxWidth: '1440px',
          width: '100%',
          padding: '0 140px',
          height: '1465px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Loader2 className="animate-spin" size={76} strokeWidth={1}/>
        </div>
      }>
        <PokemonListContent currentPage={currentPage} query={query} />
      </Suspense>
      
      <Separator />
      <Footer height={query ? "215px" : undefined} />
    </div>
  );
}
  
async function PokemonListContent({ currentPage, query }: { currentPage: number; query: string }) {
  const limit = 12;
  let pokemonList: Array<{id: number, name: string, image: string, types: string[]}> = [];
  let totalResults = 0;

  if (query) {
    // Search mode: fetch all Pokemon and filter
    const allPokemon = await getPokemonList(2000, 0);
    const filtered = allPokemon.results.filter(p => p.name.includes(query.toLowerCase()));
    totalResults = filtered.length;
    
    const offset = (currentPage - 1) * limit;
    const paginatedResults = filtered.slice(offset, offset + limit);
    
    const pokemonPromises = paginatedResults.map(async (pokemon) => {
      const id = parseInt(pokemon.url.split('/').slice(-2, -1)[0]);
      const details = await getPokemon(id);
      return {
        id: details.id,
        name: details.name,
        image: details.sprites.front_default || '/cherish-ball.png',
        types: details.types.map(t => t.type.name)
      };
    });
    
    pokemonList = await Promise.all(pokemonPromises);
  } else {
    // Browse mode: paginated fetch
    const offset = (currentPage - 1) * limit;
    const listData = await getPokemonList(limit, offset);
    const pokemonPromises = listData.results.map(async (pokemon) => {
      const id = parseInt(pokemon.url.split('/').slice(-2, -1)[0]);
      const details = await getPokemon(id);
      return {
        id: details.id,
        name: details.name,
        image: details.sprites.front_default,
        types: details.types.map(t => t.type.name)
      };
    });

    pokemonList = await Promise.all(pokemonPromises);
  }

  const hasNextPage = query ? totalResults > currentPage * limit : true;
  
  return (
    <div style={{
      background: '#FFFFFF'
    }}>
      <div style={{
        maxWidth: '1440px',
        width: '100%',
        minHeight: '1465px',
        gap: '48px',
        padding: '0 140px',
        margin: '0 auto'
      }}>
        <div style={{
          maxWidth: '1160px',
          width: '100%',
          minHeight: '40px',
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto'
        }}>
          <h2 style={{
            maxWidth: query ? '410px' : '241px',
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
            maxWidth: '342px',
            width: '100%',
            height: '40px',
            gap: '12px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <SearchBar />
          </div>
        </div>

        <div style={{
          maxWidth: '1160px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(266px, 1fr))',
          gap: '32px',
          margin: '0 auto'
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
          maxWidth: '1160px',
          width: '100%',
          minHeight: '36px',
          gap: '16px',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto'
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