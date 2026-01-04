export default function Hero() {
  return (
    <div style={{
      maxWidth: '1440px',
      width: '100%',
      margin: '0 auto',
      padding: '48px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '525px',
        width: '100%',
        gap: '8px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h1 style={{
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '60px',
          lineHeight: '78px',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#181A1B'
        }}>
          Pokémon Browser
        </h1>
        <p style={{
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '30px',
          lineHeight: '36px',
          letterSpacing: '-2.5%',
          textAlign: 'center',
          color: '#71717A'
        }}>
          Search and find Pokémon
        </p>
      </div>
    </div>
  );
}