import Separator from '@/components/separator';
import Footer from '@/components/footer';
import {getPokemon, getPokemonSpecies} from '@/lib/api/pokemon';

export default async function PokemonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pokemon = await getPokemon(id);
  const species = await getPokemonSpecies(id);
  
  const description = species.flavor_text_entries
    .find(entry => entry.language.name === 'en' && entry.version.name === 'soulsilver')
    ?.flavor_text.replace(/\f/g, ' ') || 'No description available.';

  return (
    <div style={{
      width: '1440px',
      height: '1704px',
      gap: '48px',
      background: '#FFFFFF'
    }}>
      <div style={{
        width: '1440px',
        height: '460px'
      }}>
        <div style={{
          width: '1440px',
          height: '80px',
          gap: '10px',
          borderBottom: '1px solid black',
          paddingRight: '64px',
          paddingLeft: '64px',
          background: '#FFFFFF',
          display: 'flex',
          alignItems: 'center'
        }}>
          <h1 style={{
            width: '202px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '32px',
            letterSpacing: '-2.5%',
            color: '#181A1B'
          }}>
            Pokemon Browser
          </h1>
        </div>

        <div style={{
          width: '1440px',
          height: '380px',
          position: 'relative'
        }}>
          <div style={{
            width: '1440px',
            height: '168px',
            background: '#18181B33'
          }}>
          </div>

          <div style={{
            width: '243px',
            height: '260px',
            gap: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '60px'
          }}>
            {/* Pokemon Avatar */}
            <div style={{
              width: '208px',
              height: '208px',
              borderRadius: '9999px',
              border: '4px solid #FAFAFA',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                width: '208px',
                height: '208px',
                borderRadius: '9999px',
                background: '#F4F4F5',
                position: 'absolute',
                top: 0,
                left: 0
              }} />
              
              <img 
                src={pokemon.sprites.front_default} 
                alt={pokemon.name}
                style={{
                  width: '208px',
                  height: '208px',
                  position: 'relative',
                  imageRendering: 'pixelated'
                }}
              />
            </div>

            {/* Name and number */}
            <div style={{
              width: '243px',
              height: '36px',
              gap: '12px',
              display: 'flex',
              alignItems: 'center'
            }}>
              {/* Pokemon name */}
              <div style={{
                width: '140px',
                height: '36px',
                fontFamily: 'Inter',
                fontWeight: '600',
                fontSize: '30px',
                lineHeight: '36px',
                letterSpacing: '-2.5%',
                textAlign: 'center',
                color: '#181A1B',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {pokemon.name}
              </div>

              {/* Pokemon number */}
              <div style={{
                width: '91px',
                height: '36px',
                fontFamily: 'Inter',
                fontWeight: '600',
                fontSize: '30px',
                lineHeight: '36px',
                letterSpacing: '-2.5%',
                textAlign: 'center',
                color: '#71717A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                #{String(pokemon.id).padStart(4, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        width: '1440px',
        height: '883px',
        gap: '40px',
        paddingRight: '140px',
        paddingLeft: '140px'
      }}>
        <div style={{
        width: '1160px',
        height: '133px',
        gap: '28px',
        paddingRight: '12px',
        paddingLeft: '12px',
        borderRadius: '12px',
        border: '1px solid #E4E4E7',
        background: '#F5F4F4',
        boxShadow: '0px 4px 6px -1px #0000001A, 0px 2px 4px -2px #0000001A',
        display: 'flex',
        alignItems: 'center'
        }}>

        {/* Cherish ball icon */}
        <div style={{
        width: '101.73px',
        height: '97px',
        position: 'relative',
        flexShrink: 0
        }}>
        {/* Ellipse bg */}
        <div style={{
            width: '97.42px',
            height: '92.89px',
            position: 'absolute',
            top: '2.47px',
            left: '2.16px',
            background: '#FFFFFF',
            border: '1px solid #E4E4E7',
            borderRadius: '50%'
        }} />
        
        {/* cherish-ball 2 */}
        <img 
            src="/cherish-ball.png"
            alt="Cherish ball"
            style={{
            width: '101.73px',
            height: '97px',
            position: 'relative',
            imageRendering: 'pixelated'
            }}
        />
        </div>

        {/* Description */}
        <div style={{
        width: '934.27px',
        height: '56px',
        fontFamily: 'Inter',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#181A1B',
        display: 'flex',
        alignItems: 'center'
        }}>
        {description}
        </div>
        </div>

        <div style={{
          width: '1160px',
          height: '634px',
          gap: '24px'
        }}>
          Statistics
        </div>

        <div style={{
          width: '1160px',
          height: '36px',
          gap: '10px'
        }}>
          Lower Nav
        </div>
      </div>

      <Separator />
      <Footer height="216px" />
    </div>
  );
}