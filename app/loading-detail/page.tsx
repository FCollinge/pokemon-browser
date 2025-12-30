import Link from 'next/link';

export default function LoadingDetailPage() {
  return (
    <div style={{width: '1440px', height: '1666px', background: '#FFFFFF'}}>
      <div style={{
        width: '1440px', 
        height: '80px', 
        background: '#FFFFFF',
        borderBottom: '1px solid black',
        paddingLeft: '64px',
        paddingRight: '64px'
      }}>
        <div style={{
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
        </div>
      </div>

      <div style={{
        width: '1440px',
        height: '1225px',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '76px',
          height: '76px'
        }}>
          <div style={{
            width: '57px',
            height: '57px',
            border: '1px solid #09090B',
            position: 'relative',
            top: '9.5px',
            left: '9.5px'
          }}>
          </div>
        </div>
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
        <div style={{
          width: '340px',
          height: '28px',
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '18px',
          lineHeight: '28px',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#181A1B'
        }}>
          Thank you for using Pokémon Browser!
        </div>
      </div>
    </div>
  );
}