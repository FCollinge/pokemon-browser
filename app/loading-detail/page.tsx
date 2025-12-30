import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function LoadingDetailPage() {
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

      <div style={{
        width: '1440px',
        height: '1px',
        border: '1px solid #E4E4E7'
      }}>
      </div>

      <div style={{
        width: '1440px',
        height: '216px',
        background: '#FFFFFF',
        borderTop: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '18px',
          lineHeight: '28px',
          textAlign: 'center',
          color: '#181A1B'
        }}>
          Thank you for using Pokémon Browser!
        </p>
      </div>
    </div>
  );
}