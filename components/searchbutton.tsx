export default function SearchButton() {
  return (
    <button style={{
      width: '79px',
      height: '36px',
      paddingTop: '8px',
      paddingRight: '16px',
      paddingBottom: '8px',
      paddingLeft: '16px',
      borderRadius: '6px',
      background: '#181A1B',
      boxShadow: '0px 1px 2px 0px #0000000D',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <span style={{
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#FAFAFA'
      }}>
        Search
      </span>
    </button>
  );
}