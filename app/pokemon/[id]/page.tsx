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
        top bar and top section
      </div>

      <div style={{
        width: '1440px',
        height: '883px',
        gap: '40px',
        paddingRight: '140px',
        paddingLeft: '140px'
      }}>
        Body content here
      </div>

      <Separator />
      <Footer height="216px" />
    </div>
  );
}