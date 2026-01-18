'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/';
  };

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* <Link href="/" className="text-2xl font-bold flex ">
            <img src="/fire.png" className='w-10 h-10' alt="Logo" />
            <h1>
              FoodIX
            </h1>
          </Link> */}

          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-extrabold"
          >
            <img
              src="/fire.png"
              className="w-9 h-9 object-contain transition-transform group-hover:rotate-12"
              alt="Logo"
            />
            <h1 className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-3xl text-transparent ">
              FoodIX
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className={`hover:text-yellow-300 ${pathname === '/' ? 'text-yellow-300' : ''}`}>
              Home
            </Link>
            <Link href="/items" className={`hover:text-yellow-300 ${pathname === '/items' ? 'text-yellow-300' : ''}`}>
              Menu
            </Link>
            <Link href="/about" className={`hover:text-yellow-300 ${pathname === '/about' ? 'text-yellow-300' : ''}`}>
              About
            </Link>
            <Link href="/contact" className={`hover:text-yellow-300 ${pathname === '/contact' ? 'text-yellow-300' : ''}`}>
              Contact
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/add-item" className={`hover:text-yellow-300 ${pathname === '/add-item' ? 'text-yellow-300' : ''}`}>
                  Add Item
                </Link>
                <button onClick={handleLogout} className="bg-yellow-400 text-red-600 px-4 py-2 rounded hover:bg-yellow-300">
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="bg-yellow-400 text-red-600 px-4 py-2 rounded hover:bg-yellow-300">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-yellow-300">Home</Link>
            <Link href="/items" className="block py-2 hover:text-yellow-300">Menu</Link>
            <Link href="/about" className="block py-2 hover:text-yellow-300">About</Link>
            <Link href="/contact" className="block py-2 hover:text-yellow-300">Contact</Link>
            {isLoggedIn ? (
              <>
                <Link href="/add-item" className="block py-2 hover:text-yellow-300">Add Item</Link>
                <button onClick={handleLogout} className="block w-full text-left py-2 hover:text-yellow-300">Logout</button>
              </>
            ) : (
              <Link href="/login" className="block py-2 hover:text-yellow-300">Login</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
