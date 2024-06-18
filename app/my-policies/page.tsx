import React from 'react';
import Link from 'next/link';

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-white">
            <header className="px-6 py-4">
                <h1 className="text-4xl font-semibold text-black">My Policies</h1>
            </header>
            <main className="flex-1 flex flex-col items-center justify-center px-4 gap-12">
                <img src="/images/umbrella.webp" alt="Umbrella" className="h-75 w-75" />
                <div className="text-center space-y-4">
                    <p className="text-black">
                        You do not have any active policies. Protect your tailfeathers today!
                    </p>
                    <Link href="/home">
                        <button className="bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-500 px-16 py-6 text-base font-medium mt-8 rounded">
                            Get a Quote Now
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    )
}
// needs navbar!