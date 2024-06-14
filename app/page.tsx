// app/page.tsx
import Link from 'next/link';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="mb-4 text-2xl font-bold text-pink-500">Welcome</h1>
      <Link href="/home">
        <button className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600">
          Start
        </button>
      </Link>
    </div>
  );
};

export default Page;
