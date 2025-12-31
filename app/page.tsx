import Hero from '@/components/hero';
import Separator from '@/components/separator';
import Footer from '@/components/footer';
import {BackButton, NextButton} from '@/components/pagbuttons';
import PokemonCard from '@/components/pokemoncard';
import SearchInput from '@/components/searchinput';
import SearchButton from '@/components/searchbutton';

export default function LandingPage() {
  const currentPage = 1; // will come from state/API later
  
  // Dummy data for now - will be replaced with API call
  const dummyPokemon = [
    { id: 1, name: 'bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', types: ['grass', 'poison'] },
    { id: 2, name: 'ivysaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png', types: ['grass', 'poison'] },
    { id: 3, name: 'venusaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png', types: ['grass', 'poison'] },
    { id: 4, name: 'charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', types: ['fire'] },
  ];
  
  return (
    <div style={{
      background: '#FFFFFF'
    }}>
      <Hero />
      <Separator />
      
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
            <SearchInput />
            <SearchButton />
          </div>
        </div>

        <div style={{
          width: '1160px',
          height: '1293px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px'
        }}>
          {dummyPokemon.map((pokemon) => (
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
            <BackButton />
          </div>
          <NextButton />
        </div>
      </div>

      <Separator />
      <Footer />
    </div>
  );
}