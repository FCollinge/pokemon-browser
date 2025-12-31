import Link from 'next/link';
import {Card} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export default function PokemonCard({ id, name, image, types }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${id}`} style={{ textDecoration: 'none' }}>
      <Card style={{
        width: '266px',
        height: '391px',
        boxShadow: '0px 4px 6px -1px #0000001A, 0px 2px 4px -2px #0000001A',
        padding: '0',
        overflow: 'hidden'
      }}>
        <div style={{
          width: '266px',
          height: '224px',
          background: '#F4F4F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'
        }}>
          <img src={image} alt={name} style={{ width: '266px', height: '224px', imageRendering: 'pixelated'}} />
        </div>

        <div style={{
          width: '266px',
          height: '167px',
          padding: '24px',
          gap: '6px',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px'
        }}>
          <h3 style={{
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '32px',
            letterSpacing: '-2.5%',
            color: '#09090B',
            textTransform: 'capitalize',
            marginBottom: '6px'
          }}>
            {name}
          </h3>
          <p style={{
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#71717A',
            marginBottom: '12px'
          }}>
            #{String(id).padStart(4, '0')}
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            {types.map((type) => (
              <Badge key={type} style={{
                background: '#181A1B',
                color: '#FAFAFA',
                fontSize: '12px'
              }}>
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}