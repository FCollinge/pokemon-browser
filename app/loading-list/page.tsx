import Link from 'next/link';

export default function LoadingListPage() {
  return (
    <div>
      <h1>Loading State</h1>
      <p>Landing Page / Results Page</p>
      <Link href="/">Back to Home</Link>

      <div>
        <div>Loading...</div>
      </div>
    </div>
  );
}