import Link from 'next/link';

export default function LandingPage() {
  return (
    <div>
      <h1>Pokedex</h1>
      <p>Landing Page</p>

      <div>
        <Link href="/search">Search Results</Link>
        <br/>
        <Link href="/pokemon/1">Pokemon Detail</Link>
        <br/>
        <Link href="/loading-list">Loading List</Link>
        <br/>
        <Link href="/loading-detail">Loading Detail</Link>
      </div>

      <div>
        <p>content goes here</p>
      </div>
    </div>
  );
}