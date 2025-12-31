import {Button} from '@/components/ui/button';
import {ArrowLeft, ArrowRight} from 'lucide-react';

export function BackButton() {
  return (
    <Button style={{
      width: '85px',
      height: '36px',
      gap: '4px',
      paddingTop: '8px',
      paddingRight: '16px',
      paddingBottom: '8px',
      paddingLeft: '16px',
      fontSize: '14px'
    }}>
      <ArrowLeft size={16} />
      Back
    </Button>
  );
}

export function NextButton() {
  return (
    <Button style={{
      width: '85px',
      height: '36px',
      gap: '4px',
      paddingTop: '8px',
      paddingRight: '16px',
      paddingBottom: '8px',
      paddingLeft: '16px',
      fontSize: '14px'
    }}>
      Next
      <ArrowRight size={16} />
    </Button>
  );
}