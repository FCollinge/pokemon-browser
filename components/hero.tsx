export default function Hero() {
  return (
    <div style={{
      width: '1440px',
      height: '244px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '525px',
        height: '122px',
        gap: '8px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h1 style={{
          width: '525px',
          height: '78px',
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
          width: '446px',
          height: '36px',
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