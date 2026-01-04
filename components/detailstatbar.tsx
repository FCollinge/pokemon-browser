interface StatBarProps {
  title: string;
  percentage: number; 
}

export default function StatBar({ title, percentage }: StatBarProps) {
  const barWidth = (percentage / 100) * 487;

  return (
    <div style={{
      maxWidth: '711px',
      width: '100%',
      height: '32px',
      gap: '24px',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Title */}
      <div style={{
        minWidth: '200px',
        height: '32px',
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '28px',
        letterSpacing: '-2.5%',
        color: '#181A1B',
        display: 'flex',
        alignItems: 'center'
      }}>
        {title}
      </div>

      {/* Process */}
      <div style={{
        maxWidth: '487px',
        width: '100%',
        height: '16px',
        gap: '10px',
        borderRadius: '9999px',
        position: 'relative',
        flex: 1
      }}>
        {/* Area */}
        <div style={{
          maxWidth: '487px',
          width: '100%',
          height: '16px',
          borderRadius: '9999px',
          background: '#F4F4F5',
          position: 'absolute'
        }} />

        {/* Percentage*/}
        <div style={{
          width: `${barWidth}px`,
          height: '16px',
          borderTopLeftRadius: '9999px',
          borderBottomLeftRadius: '9999px',
          borderTopRightRadius: barWidth >= 487 ? '9999px' : '0px',
          borderBottomRightRadius: barWidth >= 487 ? '9999px' : '0px',
          background: '#181A1B',
          position: 'relative'
        }} />
      </div>
    </div>
  );
}