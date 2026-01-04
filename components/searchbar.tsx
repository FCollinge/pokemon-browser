'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const doSearch = () => {
    if (query.trim()) {
      router.push(`/?q=${query.trim()}`);
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <input 
        type="text"
        placeholder="Find Pokémon "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && doSearch()}
        style={{
          maxWidth: '251px',
          width: '100%',
          height: '36px',
          paddingTop: '4px',
          paddingRight: '12px',
          paddingBottom: '4px',
          paddingLeft: '12px',
          borderRadius: '6px',
          border: '1px solid #E4E4E7',
          background: '#FFFFFF',
          boxShadow: '0px 1px 2px 0px #0000000D'
        }}
      />
      <Button 
        onClick={doSearch}
        style={{
          minWidth: '79px',
          height: '36px',
          paddingTop: '8px',
          paddingRight: '16px',
          paddingBottom: '8px',
          paddingLeft: '16px',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        Search
      </Button>
    </>
  );
}