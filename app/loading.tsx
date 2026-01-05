import Hero from '@/components/hero';
import Separator from '@/components/separator';
import Footer from '@/components/footer';
import {Skeleton} from '@/components/ui/skeleton';

export default function LoadingDetailPage() {
  return (
    <div style={{
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: '48px'
    }}>
      <Hero />
      <Separator />
      
      <div style={{
        width: '1440px',
        paddingRight: '140px',
        paddingLeft: '140px'
      }}>
        <div style={{
          width: '1160px',
          height: '40px',
          marginBottom: '48px'
        }}>
          <Skeleton className="w-full h-full" />
        </div>
        <div style={{
          width: '1160px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px'
        }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="w-[266px] h-[391px]" />
          ))}
        </div>
        <div style={{
          width: '1160px',
          height: '36px',
          marginTop: '48px'
        }}>
          <Skeleton className="w-full h-full" />
        </div>
      </div>
      
      <Separator />
      <Footer />
    </div>
  );
}