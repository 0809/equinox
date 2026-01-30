'use client';

import React from 'react';
import Link from 'next/link';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { User } from 'lucide-react'; 

export default function Navbar() {
  const { isConnected } = useAccount();

  return (
    <nav className="w-full h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-50">
      
      {/* 1. Logo Section (Left) */}
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 bg-white rounded-full opacity-30" />
          </div>
          <span className="text-2xl font-bold text-brand-dark tracking-tighter">
            EQUINOX
          </span>
        </Link>

        {/* 2. Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/explore" className="text-gray-500 hover:text-brand-primary transition-colors font-medium text-sm uppercase tracking-wide">
            Explore
          </Link>
          <Link href="/creators" className="text-gray-500 hover:text-brand-primary transition-colors font-medium text-sm uppercase tracking-wide">
            For Creators
          </Link>
        </div>
      </div>

      {/* 3. Action Buttons (Right) */}
      <div className="flex items-center gap-4">
        
        {/* Sign In (Only shows if NOT connected) */}
        {!isConnected && (
            <Link href="/login" className="hidden md:block text-gray-500 font-medium hover:text-brand-primary transition-colors mr-2">
                Sign In
            </Link>
        )}

        {/* Connect Wallet Button */}
        <div className="flex items-center gap-2">
            <ConnectButton 
                showBalance={false} 
                accountStatus="address" 
                chainStatus="icon"
            />
        </div>

        {/* 4. Profile Icon / Dashboard Trigger (Extreme Right) */}
        {isConnected && (
            <Link 
              href="/dashboard" 
              className="w-10 h-10 rounded-full bg-brand-bg border border-gray-200 flex items-center justify-center text-brand-dark hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm group"
              title="Go to Dashboard"
            >
                <User size={20} className="group-hover:scale-110 transition-transform" />
            </Link>
        )}
      </div>
      
    </nav>
  );
}