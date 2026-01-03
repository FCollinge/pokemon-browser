import {Badge } from '@/components/ui/badge';

interface TypeBadgeProps {
  type: string;
}

export default function TypeBadge({ type }: TypeBadgeProps) {
  return (
    <Badge 
      className="bg-[#181A1B] text-[#FAFAFA] border-none capitalize"
      style={{
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '16px',
        height: '20px',
        paddingTop: '2px',
        paddingRight: '10px',
        paddingBottom: '2px',
        paddingLeft: '10px',
        borderRadius: '6px',
        width: 'fit-content',
        letterSpacing: '0%'
      }}
    >
      {type}
    </Badge>
  );
}