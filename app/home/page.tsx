import Navbar from '@/components/Navbar';
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen flex justify-center bg-white">
      <div className="pt-8 pb-16 md:px-4">
        <div className="px-4">
          <img src="/goose_logo.svg" alt="Goose Logo" className="mb-4" />
          <h1 className="text-black py-2">Hi Michael, what would you like to protect?</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gradient-to-b from-[#ff7eb9] to-[#ffe6f1] p-6 rounded-lg max-w-[800px]">
          <a href="/home/travel-insurance" className="group">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
              <img src="/icons/travel-insurance.webp" alt="Travel" className="h-32 w-32 object-contain" />
              <p className="text-black mt-2">Travel Insurance</p>
            </div>
          </a>
          <a href="/home/life-insurance" className="group">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
              <img src="/icons/life-insurance.webp" alt="Life Insurance" className="h-32 w-32 object-contain" />
              <p className="text-black mt-2">Life Insurance</p>
            </div>
          </a>
          <a href="/home/critical-illness" className="group">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
              <img src="/icons/critical-illness.webp" alt="Critical Illness" className="h-32 w-32 object-contain" />
              <p className="text-black mt-2">Critical Illness</p>
            </div>
          </a>
          <a href="/home/accident-insurance" className="group">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
              <img src="/icons/accident-insurance.webp" alt="AD&D Insurance" className="h-32 w-32 object-contain" />
              <p className="text-black mt-2">AD&D Insurance</p>
            </div>
          </a>
          <a href="/home/kids-insurance" className="group">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
              <img src="/icons/kid-insurance.webp" alt="Kids Insurance" className="h-32 w-32 object-contain" />
              <p className="text-black mt-2">Kids Insurance</p>
            </div>
          </a>
          <a href="/home/income-protection" className="group">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
              <img src="/icons/icon-income-protection.webp" alt="Income Protection" className="h-32 w-32 object-contain" />
              <p className="text-black mt-2">Income Protection</p>
            </div>
          </a>
          <a href="/home/hospital-cash" className="group">
            <div className="bg-white p-4 rounded-lg col-span-2 sm:col-span-1 flex flex-col items-center w-[200px]">
              <img src="/icons/icon-hospital-cash.webp" alt="Hospital Cash" className="h-32 w-32 object-contain" />
              <p className="text-black mt-2">Hospital Cash</p>
            </div>
          </a>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
