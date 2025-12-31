import Separator from '@/components/separator';
import Footer from '@/components/footer';

export default function PokemonDetailPage({ params }: { params: { id: string } }) {
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
          background: '#FFFFFF'
        }}>
          Top Bar
        </div>

        <div style={{
          width: '1440px',
          height: '380px'
        }}>
          Top of Profile Section
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
          boxShadow: '0px 4px 6px -1px #0000001A, 0px 2px 4px -2px #0000001A'
        }}>
          Information Bar
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