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
                <img src="/icons/critical-illness.webp" alt="Critical Illness" className="object-contain" />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 px-6 pb-12">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-3xl font-bold text-black">Critical Illness</h1>
                    <p className="text-black text-left py-2">
                        Get critical illness insurance and give yourself financial security while you recover from serious illnesses like cancer, heart attack, stroke, and other life-threatening conditions.
                    </p>
                    <div className="flex flex-col">
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">Dental treatment</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">Damages of eyeglasses and contact lenses</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">Braces, casts, crutches, and other equipment</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">Hospital accommodation & expenses</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">Travel medical coverage</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="/icons/check-green.webp" alt="Green Check Icon" className="w-6 h-6 mr-2" />
                            <p className="indent-8 text-left text-gray-500 text-sm">Up to $5,000 of critical illness insurance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-auto p-4">
                <Link href="/home/kids-insurance/quote">
                    <button className="bg-pink-500 text-white font-bold py-6 px-16 rounded">Get A Quote</button>
                </Link>
            </div>
        </div>
    );
}
