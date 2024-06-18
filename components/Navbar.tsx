'use client'
import React from 'react';
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
    const pathname = usePathname().replaceAll("/", "")
    console.log(pathname)
    const routes = {
        "home": "Home",
        "claim": "Claims",
        "mypolicies": "My Policies",
        "contact": "Contact",
        "profile": "Profile"
    }
    return (
        <div className="flex justify-center fixed inset-x-0 bottom-0">
            <nav className="flex bg-white py-2 max-w-[800px]">
                <div className="flex justify-around gap-10 lg:gap-20">
                    {Object.entries(routes).map(([route, uitext], index) => {
                        return <a key={route} href={route} className={`flex flex-col items-center text-xs ${pathname === route ? "filter-pink" : ""}`}>
                            <img src={`/icons/nav-${route}.webp`} alt={uitext} className="h-6 w-6" />
                            <span className="text-black">{uitext}</span>
                        </a>
                    })}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
