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

export default async function LandingPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1');
  
  return (
    <div style={{ background: '#FFFFFF' }}>
      <Hero />
      <Separator />
      
      <Suspense key={currentPage} fallback={
        <div style={{
          width: '1440px',
          height: '1465px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Loader2 className="animate-spin" size={76} strokeWidth={1}/>
        </div>
      }>
        <PokemonListContent currentPage={currentPage} />
      </Suspense>
      
      <Separator />
      <Footer />
    </div>
  );
}
  
async function PokemonListContent({ currentPage }: { currentPage: number }) {
  const limit = 12;
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

  const pokemonList = await Promise.all(pokemonPromises);
  
  return (
    <div style={{
      background: '#FFFFFF'
    }}>
      <div style={{
        width: '1440px',
        height: '1465px',
        gap: '48px',
        paddingRight: '140px',
        paddingLeft: '140px'
      }}>
        <div style={{
          width: '1160px',
          height: '40px',
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center'
        }}>
          <h2 style={{
            width: '241px',
            height: '36px',
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '30px',
            lineHeight: '36px',
            letterSpacing: '-2.5%',
            color: '#09090B'
          }}>
            Explore Pokémon
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
          height: '1293px',
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
            <Link href={`/?page=${currentPage - 1}`}>
              <BackButton />
            </Link>
          </div>
          <Link href={`/?page=${currentPage + 1}`}>
            <NextButton />
          </Link>
        </div>
      </div>
    </div>
  );
}