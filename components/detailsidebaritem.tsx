interface DetailSidebarItemProps {
  label: string;
  value: string;
}

export default function DetailSidebarItem({ label, value }: DetailSidebarItemProps) {
  return (
    <div style={{
      width: '233px',
      height: '72px',
      gap: '12px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        width: '233px',
        height: '32px',
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '32px',
        letterSpacing: '-2.5%',
        color: '#000000'
      }}>
        {label}
      </div>
      <div style={{
        width: '233px',
        height: '28px',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '28px',
        letterSpacing: '0%',
        color: '#181A1B'
      }}>
        {value}
      </div>
    </div>
  );
}