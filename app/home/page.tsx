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
          <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
            <img src="/icons/travel-insurance.webp" alt="Travel" className="h-32 w-32 object-contain" />
            <p className="text-black mt-2">Travel Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
            <img src="/icons/life-insurance.webp" alt="Life Insurance" className="h-32 w-32 object-contain" />
            <p className="text-black mt-2">Life Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
            <img src="/icons/critical-illness.webp" alt="Critical Illness" className="h-32 w-32 object-contain" />
            <p className="text-black mt-2">Critical Illness</p>
          </div>
          <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
            <img src="/icons/accident-insurance.webp" alt="AD&D Insurance" className="h-32 w-32 object-contain" />
            <p className="text-black mt-2">AD&D Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
            <img src="/icons/kid-insurance.webp" alt="Kids Insurance" className="h-32 w-32 object-contain" />
            <p className="text-black mt-2">Kids Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg flex flex-col items-center w-[200px]">
            <img src="/icons/icon-income-protection.webp" alt="Income Protection" className="h-32 w-32 object-contain" />
            <p className="text-black mt-2">Income Protection</p>
          </div>
          <div className="bg-white p-4 rounded-lg col-span-2 sm:col-span-1 flex flex-col items-center w-[200px]">
            <img src="/icons/icon-hospital-cash.webp" alt="Hospital Cash" className="h-32 w-32 object-contain" />
            <p className="text-black mt-2">Hospital Cash</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center fixed inset-x-0 bottom-0">
        <nav className="flex bg-white py-2 max-w-[800px]">
          <div className="flex justify-around gap-10 lg:gap-20">
            <a href="home" className="flex flex-col items-center text-xs">
              <img src="/icons/nav-home.webp" alt="Home" className="h-6 w-6 filter-pink" />
              <span className="text-pink-500">Home</span>
            </a>
            <a href="claims" className="flex flex-col items-center text-xs">
              <img src="/icons/nav-claim.webp" alt="Claims" className="h-6 w-6" />
              <span className="text-black">Claims</span>
            </a>
            <a href="my-policies" className="flex flex-col items-center text-xs">
              <img src="/icons/nav-mypolicies.webp" alt="My Policies" className="h-6 w-6" />
              <span className="text-black">My Policies</span>
            </a>
            <a href="contact" className="flex flex-col items-center text-xs">
              <img src="/icons/nav-contact.webp" alt="Contact" className="h-6 w-6" />
              <span className="text-black">Contact</span>
            </a>
            <a href="profile" className="flex flex-col items-center text-xs">
              <img src="/icons/nav-profile.webp" alt="Profile" className="h-6 w-6" />
              <span className="text-black">Profile</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
