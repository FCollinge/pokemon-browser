import Link from 'next/link';

export default function SearchResultsPage() {
  return (
    <div>
      <h1>Search Results</h1>
      <Link href="/">Back to Home</Link>

      <div>
        <input type="text" placeholder="Search Pokemon"/>
      </div>

      <div>
        <Link href="/pokemon/1">Bulbasaur</Link>
      </div>
    </div>
  );
}