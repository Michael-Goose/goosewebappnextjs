import Link from 'next/link';
import React from 'react';

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex justify-end p-4">
                <Link href="/home">
                    <button className="rounded-full flex items-center">
                        <img src="/icons/close.webp" alt="Close Icon" className="w-6 h-6 mr-2" />
                        <span className="sr-only">Close</span>
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center p-6">
                <img src="/icons/life-insurance.webp" alt="Life Insurance" className="object-contain" />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 px-6 pb-12">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-3xl font-bold text-black">Life Insurance</h1>
                    <p className="text-black text-left py-2">
                        Get life insurance to protect what matters most.  Have peace of mind knowing that this coverage will help pay outstanding debts, final expenses, or whatever is important to you or your loved ones.
                    </p>
                    <div className="flex flex-col">
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">Premiums starting at $5 / month</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">Up to $1,000,000 in coverage</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">No medical exam</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">Cancel at any time</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">30 day money-back guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-auto p-4">
                <Link href="/home/life-insurance/quote">
                    <button className="bg-pink-500 text-white font-bold py-6 px-16 rounded">Get A Quote</button>
                </Link>
            </div>
        </div>
    );
}
