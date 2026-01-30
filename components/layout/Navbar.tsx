import React from 'react';
import Link from 'next/link';
import { Wallet, UserCircle } from 'lucide-react'; 
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-50">
      
      {/* 1. Logo Section */}
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg">
          <div className="w-4 h-4 bg-white rounded-full opacity-30" />
        </div>
        <span className="text-2xl font-bold text-brand-dark tracking-tighter">
          EQUINOX
        </span>
      </div>

      {/* 2. Navigation Links (Center) */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-gray-500 hover:text-brand-primary transition-colors font-medium text-sm uppercase tracking-wide">
          Explore
        </Link>
        <Link href="/creators" className="text-gray-500 hover:text-brand-primary transition-colors font-medium text-sm uppercase tracking-wide">
          For Creators
        </Link>
      </div>

      {/* 3. Action Buttons */}
      <div className="flex items-center gap-4">
        {/* Sign In (Secondary Action) */}
        <Link href="/login" className="hidden md:flex items-center gap-2 text-brand-dark font-medium hover:text-brand-primary transition-colors">
            <UserCircle size={20} />
            <span>Sign In</span>
        </Link>

        {/* Connect Wallet (Primary Action) */}
        <div className="flex items-center gap-2"> {/* Wrapper for alignment */}
            <ConnectButton 
                showBalance={false} 
                accountStatus="address" 
                chainStatus="icon"
            />
        </div>
</div>
      
    </nav>
  );
}