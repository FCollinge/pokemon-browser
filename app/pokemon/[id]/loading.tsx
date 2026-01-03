import { Loader2 } from 'lucide-react';
import Separator from '@/components/separator';
import Footer from '@/components/footer';

export default function Loading() {
  return (
    <div style={{width: '1440px', height: '1666px', background: '#FFFFFF'}}>
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
        height: '1225px',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Loader2 className="animate-spin" size={76} strokeWidth={1}/>
      </div>

      <Separator />
      <Footer />
    </div>
  );
}