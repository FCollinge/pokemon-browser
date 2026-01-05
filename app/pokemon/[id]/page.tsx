import Separator from '@/components/separator';
import Footer from '@/components/footer';
import {getPokemon, getPokemonSpecies, getAbility} from '@/lib/api/pokemon';
import StatBar from '@/components/detailstatbar';
import TypeBadge from '@/components/typebadge';
import {ArrowLeft} from 'lucide-react';
import Link from 'next/link';
import {getWeaknesses} from '@/lib/weaknesses';
import Image from 'next/image';
import DetailSidebarItem from '@/components/detailsidebaritem';
import {descriptionFinder} from '@/lib/descriptions';

export default async function PokemonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pokemon = await getPokemon(id);
  
  let species;
  try {
    species = await getPokemonSpecies(id);
  } catch {
    species = null;
  }
  
  const description = species ? descriptionFinder(species.flavor_text_entries) : 'No description available.';

  const category = species?.genera
    ?.find(g => g.language.name === 'en')
    ?.genus.slice(0, -8) || 'Unknown';

  const heightInMeters = (pokemon.height / 10).toFixed(1);
  const weightInKg = (pokemon.weight / 10).toFixed(1);

  const getGender = (rate: number) => {
    if (rate === -1) return 'Genderless';
    if (rate === 0) return 'Male only';
    if (rate === 8) return 'Female only';
    return 'Male / Female';
  };
  const gender = species ? getGender(species.gender_rate) : 'Unknown';

const getStatPercentage = (statName: string) => {
const stat = pokemon.stats.find(s => s.stat.name === statName);
return stat ? Math.round((stat.base_stat / 255) * 100) : 0;
};

const stats = [
  { name: 'HP', key: 'hp' },
  { name: 'Attack', key: 'attack' },
  { name: 'Defense', key: 'defense' },
  { name: 'Special Attack', key: 'special-attack' },
  { name: 'Special Defense', key: 'special-defense' },
  { name: 'Speed', key: 'speed' }
].map(stat => ({
  ...stat,
  percentage: getStatPercentage(stat.key)
}));

const sidebarItems = [
  { label: 'Height', value: `${heightInMeters}m` },
  { label: 'Category', value: category },
  { label: 'Weight', value: `${weightInKg} kg` },
  { label: 'Gender', value: gender }
];

const types = pokemon.types.map(t => t.type.name);
const weaknesses = getWeaknesses(types);
const abilityDetails = await Promise.all(
  pokemon.abilities.filter(a => !a.is_hidden).map(a => getAbility(a.ability.name))
);

  return (
    <div style={{
      width: '1440px',
      height: '1704px',
      gap: '48px',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column'
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
              
            <Image 
            src={pokemon.sprites.front_default || '/cherish-ball.png'}
            alt={pokemon.name}
            width={208}
            height={208}
            style={{
                position: 'relative',
                imageRendering: 'pixelated'
            }}
            unoptimized
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
        paddingLeft: '140px',
        display: 'flex',
        flexDirection: 'column'
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
        <Image 
        src="/cherish-ball.png"
        alt="Cherish ball"
        width={101.73}
        height={97}
        style={{
            position: 'relative',
            imageRendering: 'pixelated'
        }}
        unoptimized
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
        gap: '24px',
        display: 'flex'
        }}>
        {/* Left Information Sidebar (Lower Body Child) */}
        <div style={{
        width: '329px',
        height: '634px',
        gap: '32px',
        paddingTop: '36px',
        paddingRight: '48px',
        paddingBottom: '36px',
        paddingLeft: '48px',
        borderRadius: '12px',
        border: '1px solid #E4E4E7',
        background: '#FFFFFF',
        boxShadow: '0px 1px 2px 0px #0000000D',
        display: 'flex',
        flexDirection: 'column'
        }}>
        {sidebarItems.map((item) => (
        <DetailSidebarItem key={item.label} label={item.label} value={item.value} />
        ))}
        </div>

    {/* Right Information Section (Child of Body) */}
    <div style={{
    width: '807px',
    height: '634px',
    gap: '24px',
    display: 'flex',
    flexDirection: 'column'
    }}>
    {/* Type, Weaknesses and Ability (top right section; child of body) */}
    <div style={{
    width: '807px',
    height: '286px',
    gap: '24px',
    display: 'flex'
    }}>
    {/* Type and Weaknesses */}
    <div style={{
    width: '391.5px',
    height: '286px',
    gap: '32px',
    paddingTop: '36px',
    paddingRight: '48px',
    paddingBottom: '36px',
    paddingLeft: '48px',
    borderRadius: '12px',
    border: '1px solid #E4E4E7',
    background: '#FFFFFF',
    boxShadow: '0px 1px 2px 0px #0000000D',
    display: 'flex',
    flexDirection: 'column'
    }}>
    {/* Type */}
    <div style={{
        width: '295.5px',
        height: '72px',
        gap: '12px',
        display: 'flex',
        flexDirection: 'column'
    }}>
        <div style={{
        width: '295.5px',
        height: '32px',
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '32px',
        letterSpacing: '-2.5%',
        color: '#181A1B'
        }}>
        Type
        </div>
        <div style={{
        width: '295.5px',
        height: '28px',
        gap: '12px',
        paddingTop: '4px',
        paddingBottom: '4px',
        display: 'flex'
        }}>
        {pokemon.types.map((type) => (
        <TypeBadge key={type.type.name} type={type.type.name} />
        ))}
        </div>
    </div>

    {/* Weaknesses */}
    <div style={{
        width: '295.5px',
        height: '72px',
        gap: '12px',
        display: 'flex',
        flexDirection: 'column'
    }}>
        <div style={{
        width: '295.5px',
        height: '32px',
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '32px',
        letterSpacing: '-2.5%',
        color: '#181A1B'
        }}>
        Weaknesses
        </div>
        <div style={{
        width: '295.5px',
        height: '28px',
        gap: '12px',
        paddingTop: '4px',
        paddingBottom: '4px',
        display: 'flex',
        flexWrap: 'wrap' // Abomasnow has 7 weaknesses so we need to use this
        }}>
        {weaknesses.map((weakness) => (
        <TypeBadge key={weakness} type={weakness} />
        ))}
        </div>
    </div>
    </div>

    {/* Ability */}
    <div style={{
        width: '391.5px',
        height: '286px',
        gap: '12px',
        paddingTop: '36px',
        paddingRight: '48px',
        paddingBottom: '36px',
        paddingLeft: '48px',
        borderRadius: '12px',
        border: '1px solid #E4E4E7',
        background: '#FFFFFF',
        boxShadow: '0px 1px 2px 0px #0000000D',
        display: 'flex',
        flexDirection: 'column'
    }}>
        <div style={{
            width: '295.5px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '32px',
            letterSpacing: '-2.5%',
            color: '#181A1B'
        }}>
        {abilityDetails.length === 2 ? 'Abilities' : 'Ability'}
        </div>
        <div style={{
            width: '295.5px',
            height: '84px',
            fontFamily: 'Inter',
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0%',
            color: '#181A1B'
        }}>
        {abilityDetails.map((abilityDetail, index) => {
            const ability = pokemon.abilities.filter(a => !a.is_hidden)[index];
            const description = abilityDetail?.effect_entries
                ?.find(entry => entry.language.name === 'en')
                ?.short_effect || 'No description available.';
            
            return (
                <div key={ability.ability.name} style={{marginBottom: index === abilityDetails.length - 1 ? '0' : '12px' }}>
                    <div style={{ fontWeight: '400' }}>
                        {ability.ability.name.split('-').map(word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                    </div>
                    <div style={{ fontWeight: '300', fontStyle: 'italic' }}>
                        {description}
                    </div>
                </div>
            );
        })}

</div>
    </div>
    </div>

    {/* Statistics Chart */}
    <div style={{
    width: '807px',
    height: '324px',
    gap: '12px',
    paddingTop: '36px',
    paddingRight: '48px',
    paddingBottom: '36px',
    paddingLeft: '48px',
    borderRadius: '12px',
    border: '1px solid #E4E4E7',
    background: '#FFFFFF',
    boxShadow: '0px 1px 2px 0px #0000000D',
    display: 'flex',
    flexDirection: 'column'
    }}>
        {stats.map(stat => (
        <StatBar key={stat.key} title={stat.name} percentage={stat.percentage} />
        ))}
    </div>
    </div>
        </div>

            <div style={{
            width: '1160px',
            height: '36px',
            gap: '10px'
            }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
                <div style={{
                width: '144px',
                height: '36px',
                gap: '8px',
                paddingTop: '8px',
                paddingRight: '16px',
                paddingBottom: '8px',
                paddingLeft: '16px',
                borderRadius: '6px',
                background: '#181A1B',
                boxShadow: '0px 1px 2px 0px #0000000D',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
                }}>
                <div style={{
                    width: '16px',
                    height: '16px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ArrowLeft style={{
                    width: '9.33px',
                    height: '9.33px',
                    color: '#FAFAFA',
                    position: 'absolute',
                    top: '3.33px',
                    left: '3.33px'
                    }} />
                </div>
                <div style={{
                    width: '88px',
                    height: '20px',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0%',
                    color: '#FAFAFA'
                }}>
                    Return Home
                </div>
                </div>
            </Link>
            </div>
      </div>

      <Separator />
      <Footer height="216px" />
    </div>
  );
}