'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Lock, Unlock, Heart, MessageCircle, Share2, Search, UserCircle, Wallet } from 'lucide-react';
import { useAccount } from 'wagmi'; // <--- 1. Import Account Hook

// --- MOCK DATA ---
const POSTS = [
  {
    id: 1,
    creator: "Alice_Crypto",
    avatar: "bg-purple-500",
    time: "2h ago",
    title: "Welcome to the Inner Circle! 🚀",
    content: "This is a free preview of what we are building. I'll be dropping weekly alpha on L2 scaling solutions here. Mint the pass to get the full PDF reports!",
    image: "https://images.unsplash.com/photo-1621504450162-113651318254?auto=format&fit=crop&q=80&w=1000",
    isLocked: false, 
    likes: 124,
    comments: 45
  },
  {
    id: 2,
    creator: "Design_God",
    avatar: "bg-blue-500",
    time: "4h ago",
    title: "Masterclass: 3D Typography",
    content: "Hidden Content",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    isLocked: true, 
    likes: 892,
    comments: 120
  },
  {
    id: 3,
    creator: "Indie_Dev_Mike",
    avatar: "bg-green-500",
    time: "6h ago",
    title: "Devlog #1: The Physics Engine",
    content: "Here is a quick look at the new water physics we just got running. It's fully deterministic and runs on-chain!",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
    isLocked: false, 
    likes: 56,
    comments: 12
  },
  {
    id: 4,
    creator: "Audio_Labs",
    avatar: "bg-red-500",
    time: "12h ago",
    title: "Exclusive Sample Pack Vol. 4",
    content: "Hidden Content",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000",
    isLocked: true, 
    likes: 340,
    comments: 88
  }
];

export default function ExplorePage() {
  const [filter, setFilter] = useState('All');
  const { isConnected, address } = useAccount(); // <--- 2. Check Login Status

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20"> {/* Increased top padding for Navbar */}
      
      {/* --- DYNAMIC HEADER --- */}
      <div className="max-w-2xl mx-auto px-4 mb-8">
        
        {/* LOGIN AWARENESS BANNER */}
        {isConnected ? (
           <div className="bg-brand-dark text-white p-6 rounded-2xl mb-8 flex items-center justify-between shadow-xl shadow-brand-dark/20 animate-fade-in-up">
              <div>
                 <h2 className="font-bold text-xl mb-1">Welcome back, Explorer! 🌍</h2>
                 <p className="text-gray-400 text-xs font-mono">{address?.slice(0,6)}...{address?.slice(-4)}</p>
              </div>
              <Link href="/dashboard" className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold transition-all flex items-center gap-2">
                 <UserCircle size={18} />
                 My Dashboard
              </Link>
           </div>
        ) : (
           <div className="hidden md:flex justify-end mb-4">
              <Link href="/login" className="text-brand-primary text-sm font-bold hover:underline">
                 Connect Wallet to Interact &rarr;
              </Link>
           </div>
        )}

        <h1 className="text-3xl font-bold text-brand-dark mb-2">Explore</h1>
        <p className="text-gray-500 mb-6">Discover the best creators and exclusive drops.</p>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for artists, drops, or tags..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Filters */}
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
          {['All', 'Free Previews', 'Trending', 'New', 'Music', 'Art'].map((tag) => (
            <button 
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                filter === tag 
                ? 'bg-brand-dark text-white shadow-lg' 
                : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* --- FEED --- */}
      <div className="max-w-2xl mx-auto px-4 space-y-8">
        {POSTS.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            
            {/* Post Header */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${post.avatar} flex items-center justify-center text-white font-bold`}>
                  {post.creator[0]}
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-sm">{post.creator}</h3>
                  <p className="text-xs text-gray-400">{post.time}</p>
                </div>
              </div>
              {/* Badge: Free vs Locked */}
              {post.isLocked ? (
                <div className="flex items-center gap-1 bg-brand-bg text-brand-dark px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
                  <Lock size={12} /> Premium
                </div>
              ) : (
                <div className="flex items-center gap-1 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                  <Unlock size={12} /> Free Preview
                </div>
              )}
            </div>

            {/* Post Content */}
            <div className="px-4 pb-2">
              <h4 className="font-bold text-lg mb-2">{post.title}</h4>
              {!post.isLocked && (
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.content}
                </p>
              )}
            </div>

            {/* Image Section (The Gated Logic) */}
            <div className="relative w-full h-80 bg-gray-100">
              <img 
                src={post.image} 
                alt="Post Content" 
                className={`w-full h-full object-cover ${post.isLocked ? 'blur-xl scale-110' : ''}`} 
              />
              
              {/* IF LOCKED: Show Overlay */}
              {post.isLocked && (
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 z-10 backdrop-blur-sm">
                   <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/30">
                      <Lock className="text-white" size={24} />
                   </div>
                   <h3 className="text-white font-bold text-xl mb-2">Holders Only</h3>
                   <p className="text-white/80 text-sm mb-6 max-w-xs">
                     You need the <strong>{post.creator} Genesis Pass</strong> to view this content.
                   </p>
                   {/* Logic: If connected, show "Mint". If not, show "Connect" */}
                   {isConnected ? (
                     <button className="px-6 py-3 bg-brand-primary text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20">
                        Mint Pass (0.05 ETH)
                     </button>
                   ) : (
                     <Link href="/login" className="px-6 py-3 bg-white text-brand-dark font-bold rounded-xl hover:scale-105 transition-transform">
                        Connect Wallet to Unlock
                     </Link>
                   )}
                </div>
              )}
            </div>

            {/* Post Actions */}
            <div className="p-4 flex items-center gap-6 border-t border-gray-50">
               <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                 <Heart size={20} />
                 <span className="text-sm font-medium">{post.likes}</span>
               </button>
               <button className="flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors">
                 <MessageCircle size={20} />
                 <span className="text-sm font-medium">{post.comments}</span>
               </button>
               <button className="ml-auto text-gray-400 hover:text-brand-dark">
                 <Share2 size={20} />
               </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}