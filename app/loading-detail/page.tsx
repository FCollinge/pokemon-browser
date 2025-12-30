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
        top bar
      </div>

      <div style={{
        width: '1440px',
        height: '1225px',
        background: '#FFFFFF'
      }}>
        loading state frame
      </div>

      <div style={{
        width: '1440px',
        height: '1px'
      }}>
      </div>

      <div style={{
        width: '1440px',
        height: '216px',
        background: '#FFFFFF',
        borderTop: '1px solid black'
      }}>
        footer
      </div>
    </div>
  );
}