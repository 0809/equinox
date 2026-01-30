'use client'; // <--- 1. Makes this page interactive

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Wallet, Mail } from 'lucide-react';
import { useConnectModal } from '@rainbow-me/rainbowkit'; // <--- 2. Import Wallet Hook
import { useAccount } from 'wagmi'; // <--- 3. To check if user is connected

export default function LoginPage() {
  const router = useRouter();
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();

  // 4. Auto-redirect to Dashboard if wallet connects
  useEffect(() => {
    if (isConnected) {
      router.push('/explore');
    }
  }, [isConnected, router]);

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      
      {/* LEFT SIDE: Visuals */}
      <div className="hidden md:flex flex-col justify-between bg-brand-dark p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[100px]" />
        
        <div className="relative z-10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full opacity-30" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tighter">EQUINOX</span>
        </div>

        <div className="relative z-10 max-w-md">
            <h2 className="text-4xl font-bold text-white mb-6">"The future of the creator economy is ownership, not rental."</h2>
            <p className="text-gray-400">Join 10,000+ creators and collectors building the new internet.</p>
        </div>

        <p className="relative z-10 text-gray-500 text-sm">© 2026 Equinox Protocol</p>
      </div>

      {/* RIGHT SIDE: The Form */}
      <div className="flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
            
            <div>
                <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-brand-primary mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>
                <h1 className="text-3xl font-bold text-brand-dark mb-2">Welcome back</h1>
                <p className="text-gray-500">Choose your preferred login method.</p>
            </div>

            <div className="space-y-4">
                
                {/* Option 1: Wallet (Now Functional!) */}
                <button 
                    onClick={openConnectModal} // <--- 5. The Magic Trigger
                    className="w-full flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-brand-dark bg-brand-dark text-white font-bold hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95"
                >
                    <Wallet size={20} />
                    Sign in with Wallet
                </button>

                <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or continue with email</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Option 2: Email (Placeholder for now) */}
                <button 
                    onClick={() => alert("Email login is coming in Phase 2! Try Wallet for now.")}
                    className="w-full flex items-center justify-center gap-3 p-4 rounded-xl border border-gray-200 text-brand-dark font-bold hover:border-brand-primary hover:text-brand-primary hover:bg-brand-bg transition-all"
                >
                    <Mail size={20} />
                    Sign in with Email
                </button>
            </div>

            <p className="text-center text-sm text-gray-400">
                Don't have an account? <span className="text-brand-primary font-bold cursor-pointer hover:underline">Sign up for free</span>
            </p>

        </div>
      </div>

    </main>
  );
}