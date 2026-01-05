import {Skeleton} from '@/components/ui/skeleton';
import Separator from '@/components/separator';
import Footer from '@/components/footer';

export default function Loading() {
  return (
    <div style={{
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: '48px'
    }}>
      <div style={{
        width: '1440px',
        height: '80px',
        background: '#FFFFFF',
        borderBottom: '1px solid black',
        paddingLeft: '64px',
        paddingRight: '64px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '32px',
          color: '#181A1B'
        }}>
          Pokemon Browser
        </h1>
      </div>

      <div style={{
        width: '1440px',
        height: '460px'
      }}>
        <div style={{
          width: '1440px',
          height: '380px',
          position: 'relative',
          background: '#18181B33'
        }}>
          <Skeleton className="absolute left-1/2 transform -translate-x-1/2 top-[60px] w-[208px] h-[208px] rounded-full" />
          <Skeleton className="absolute left-1/2 transform -translate-x-1/2 top-[284px] w-[243px] h-[36px]" />
        </div>
      </div>

      <div style={{
        width: '1440px',
        paddingRight: '140px',
        paddingLeft: '140px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
        <Skeleton className="w-[1160px] h-[133px] rounded-[12px]" />
        <div style={{
          width: '1160px',
          display: 'flex',
          gap: '24px'
        }}>
          <Skeleton className="w-[329px] h-[634px] rounded-[12px]" />
          <div style={{
            width: '807px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <Skeleton className="w-[807px] h-[286px] rounded-[12px]" />
            <Skeleton className="w-[807px] h-[324px] rounded-[12px]" />
          </div>
        </div>
        <Skeleton className="w-[144px] h-[36px] rounded-[6px]" />
      </div>

      <Separator />
      <Footer height="216px" />
    </div>
  );
}