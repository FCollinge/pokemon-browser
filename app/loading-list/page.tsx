import Hero from '@/components/hero';
import Separator from '@/components/separator';
import Footer from '@/components/footer';

export default function LoadingListPage() {
  return (
    <div style={{
      width: '1440px',
      height: '2143px',
      gap: '48px',
      background: '#FFFFFF'
    }}>
      <Hero />
      <Separator />
      
      <div style={{
        width: '1440px',
        height: '1461px',
        gap: '48px',
        paddingRight: '140px',
        paddingLeft: '140px'
      }}>
        Body content here
      </div>

      <Separator />
      <Footer />
    </div>
  );
}