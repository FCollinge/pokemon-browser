import Link from 'next/link';

export default function LoadingDetailPage() {
  return (
    <div>
      <h1>Loading State</h1>
      <p>Pokemon Detail Page</p>
      <Link href="/">Back to Home</Link>

      <div>
        <p>Loading pokemon details...</p>
      </div>
    </div>
  );
}