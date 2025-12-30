export default function Footer({ height = '244px' }: { height?: string }) {
  return (
    <div style={{
      width: '1440px',
      height: height,
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
  );
}