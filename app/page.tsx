import Hero from '@/components/hero';
import Separator from '@/components/separator';
import Footer from '@/components/footer';
import { BackButton, NextButton } from '@/components/pagbuttons';

export default function LandingPage() {
  const currentPage = 1; // will come from state/API later
  
  return (
    <div style={{
      background: '#FFFFFF'
    }}>
      <Hero />
      <Separator />
      
      <div style={{
        width: '1440px',
        height: '1465px',
        gap: '48px',
        paddingRight: '140px',
        paddingLeft: '140px'
      }}>
        <div style={{
          width: '1160px',
          height: '40px',
          justifyContent: 'space-between',
          display: 'flex'
        }}>
          Sub-Heading and Search
        </div>

        <div style={{
          width: '1160px',
          height: '1293px',
          justifyContent: 'space-between'
        }}>
          Pokemon List
        </div>

        <div style={{
          width: '1160px',
          height: '36px',
          gap: '16px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{ 
            opacity: currentPage === 1 ? 0.5 : 1,
            pointerEvents: currentPage === 1 ? 'none' : 'auto'
          }}>
            <BackButton />
          </div>
          <NextButton />
        </div>
      </div>

      <Separator />
      <Footer />
    </div>
  );
}