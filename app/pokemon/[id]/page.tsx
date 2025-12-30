import Link from 'next/link';

export default function PokemonDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <Link href="/search">Back to Results</Link>
      <h1>Pokemon #{params.id}</h1>
      
      <div>
        <p>pokemon details here</p>
      </div>

      <Link href="/pokemon/2">Next Pokemon</Link>
    </div>
  );
}