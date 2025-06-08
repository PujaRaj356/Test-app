

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <Link href="/contact">CONTACT</Link>
        <br />
        <Link href="/about">ABOUT</Link>
      </main>
    </div>
  );
}

