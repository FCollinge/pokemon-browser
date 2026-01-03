import Hero from '@/components/hero';
import Separator from '@/components/separator';
import Footer from '@/components/footer';
import SearchBar from '@/components/searchbar';
import PokemonCard from '@/components/pokemoncard';
import {getPokemonList, getPokemon} from '@/lib/api/pokemon';
import {BackButton, NextButton} from '@/components/pagbuttons';
import Link from 'next/link';

export default async function SearchResultsPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ q?: string; page?: string }> 
}) {
  const params = await searchParams;
  const query = params.q || '';
  const currentPage = parseInt(params.page || '1');
  const limit = 12;

  let pokemonList: Array<{id: number, name: string, image: string, types: string[]}> = [];
  let totalResults = 0;

  if (query) {
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
        image: details.sprites.front_default,
        types: details.types.map(t => t.type.name)
      };
    });
    
    pokemonList = await Promise.all(pokemonPromises);
  }

  const hasNextPage = totalResults > currentPage * limit;

  return (
    <div style={{
      width: '1440px',
      minHeight: '1216px',
      gap: '48px',
      background: '#FFFFFF'
    }}>
      <Hero />
      <Separator />
      
      <div style={{
        width: '1440px',
        minHeight: '563px',
        gap: '48px',
        paddingRight: '140px',
        paddingLeft: '140px'
      }}>
        <div style={{
          width: '1160px',
          height: '40px',
          justifyContent: 'space-between',
          display: 'flex'
        }}>
          <h2 style={{
            width: '410px',
            height: '36px',
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '30px',
            lineHeight: '36px',
            letterSpacing: '-2.5%',
            color: '#181A1B'
          }}>
            Search Results for '{query}'
          </h2>

          <div style={{
            width: '342px',
            height: '40px',
            gap: '12px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <SearchBar/>
          </div>
        </div>

        <div style={{
          width: '1160px',
          minHeight: '391px',
          gap: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)'
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
            <Link href={`/search?q=${query}&page=${currentPage - 1}`}>
              <BackButton />
            </Link>
          </div>
          <div style={{ 
            opacity: !hasNextPage ? 0.5 : 1,
            pointerEvents: !hasNextPage ? 'none' : 'auto'
          }}>
            <Link href={`/search?q=${query}&page=${currentPage + 1}`}>
              <NextButton />
            </Link>
          </div>
        </div>
      </div>

      <Separator />
      <Footer height="215px" />
    </div>
  );
}