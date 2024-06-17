import React from 'react';

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-[#ff7eb9] to-white min-h-screen">
      <div className="pt-8 pb-16 px-4 text-center">
        <img src="/goose_logo.svg" alt="Goose Logo" className="mx-auto mb-4" />
        <h1 className="text-2xl font-semibold mb-6">Hi Michael, what would you like to protect?</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <img src="/Travel@3x.webp" alt="Travel" />
            <p className="text-black">Travel Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img src="/Life-Insurance3x.png" alt="Life Insurance" />
            <p className="text-black">Life Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img src="/Critical-Illness3x.png" alt="Critical Illness" />
            <p className="text-black">Critical Illness</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img src="/ADD3x.png" alt="AD&D Insurance" />
            <p className="text-black">AD&D Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img src="/Kids3x.png" alt="Kids Insurance" />
            <p className="text-black">Kids Insurance</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <img src="/Income-Protection3x.png" alt="Income Protection" />
            <p className="text-black">Income Protection</p>
          </div>
          <div className="bg-white p-4 rounded-lg col-span-2 sm:col-span-1">
            <img src="/Hospital-Cash3x.png" alt="Hospital Cash" />
            <p className="text-black">Hospital Cash</p>
          </div>
        </div>
      </div>
      <nav className="fixed inset-x-0 bottom-0 bg-white py-2">
        <div className="flex justify-around">
          <a href="home" className="flex flex-col items-center text-xs">
            <img src="/icons/nav-home.webp" alt="Home" className="h-6 w-6 text-pink-500" />
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
  );
}
