import Hero from '@/components/hero';
import Separator from '@/components/separator';
import Footer from '@/components/footer';
import SearchInput from '@/components/searchinput';
import SearchButton from '@/components/searchbutton';

export default function SearchResultsPage() {
  return (
    <div style={{
      width: '1440px',
      height: '1216px',
      gap: '48px',
      background: '#FFFFFF'
    }}>
      <Hero />
      <Separator />
      
      <div style={{
        width: '1440px',
        height: '563px',
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
          <h2 style={{
            width: '410px',
            height: '36px',
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '30px',
            lineHeight: '36px',
            letterSpacing: '-2.5%',
            color: '#181A1B'
          }}>
            Search Results for 'Query'
          </h2>

          <div style={{
            width: '342px',
            height: '40px',
            gap: '12px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <SearchInput />
            <SearchButton />
          </div>
        </div>

        <div style={{
          width: '1160px',
          height: '391px',
          gap: '32px'
        }}>
          Pokemon List - Search Results
        </div>

        <div style={{
          width: '1160px',
          height: '36px',
          gap: '16px'
        }}>
          Pagination
        </div>
      </div>

      <Separator />
      <Footer height="215px" />
    </div>
  );
}