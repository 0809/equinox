'use client';

import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Crown, 
  Settings, 
  LogOut, 
  TrendingUp, 
  Users, 
  ShieldCheck,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function Dashboard() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();

  // MOCK DATA: Forcing "Whale" status to test the luxury UI
  const userStats = {
    balance: "142.80 ETH",
    nftsOwned: 156,
    tier: "Whale", 
    rank: "#12"
  };

  const isWhale = userStats.tier === "Whale";

  React.useEffect(() => {
    if (!isConnected) router.push('/');
  }, [isConnected, router]);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-sans">
      
      {/* --- SIDEBAR: Ultra Dark --- */}
      <aside className="w-72 border-r border-white/5 bg-black flex flex-col p-8">
        <div className="flex items-center gap-3 mb-16">
            <div className={`w-8 h-8 rounded-full ${isWhale ? 'bg-gradient-to-tr from-yellow-600 to-yellow-200' : 'bg-brand-primary'}`} />
            <span className="font-black tracking-tighter text-2xl italic">EQUINOX</span>
        </div>

        <nav className="flex-grow space-y-4">
            <SidebarItem icon={<LayoutDashboard size={20}/>} label="Overview" active={isWhale} />
            <SidebarItem icon={<Crown size={20}/>} label="My COllection" />
            <SidebarItem icon={<Users size={20}/>} label="Following" />
            <SidebarItem icon={<Settings size={20}/>} label="Settings" />
        </nav>

        <button 
          onClick={() => disconnect()}
          className="flex items-center gap-3 text-gray-600 hover:text-white transition-all p-3 mt-auto group"
        >
          <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
          <span className="font-bold text-xs uppercase tracking-widest">Terminate Session</span>
        </button>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow p-12 relative overflow-hidden">
        
        {/* Luxury Background Accents */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-yellow-600/5 rounded-full blur-[150px] -z-10" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-yellow-900/5 to-transparent -z-10" />

        {/* HEADER */}
        <header className="flex justify-between items-end mb-16">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-5xl font-black tracking-tighter uppercase italic">The Sovereign</h1>
                    {isWhale && <Crown className="text-yellow-500 animate-pulse" size={32} />}
                </div>
                <p className="text-yellow-600/60 font-mono text-sm tracking-widest uppercase">{address}</p>
            </div>
            
            <div className="flex flex-col items-end">
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-1 font-bold">Current Standing</span>
                <div className="px-6 py-2 bg-gradient-to-r from-yellow-700/20 to-yellow-500/20 border border-yellow-500/30 rounded-full shadow-[0_0_30px_rgba(161,98,7,0.15)]">
                    <span className="text-sm font-black text-yellow-500 uppercase tracking-widest">
                        {userStats.tier} Class
                    </span>
                </div>
            </div>
        </header>

        {/* STATS GRID: Gold Outlined */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <StatCard label="Total Liquidity" value={userStats.balance} isGold />
            <StatCard label="Vaulted Assets" value={userStats.nftsOwned.toString()} isGold />
            <StatCard label="Global Preeminence" value={userStats.rank} isGold />
        </div>

        {/* RECENT ACTIVITY: Sleek Black List */}
        <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-[40px] p-10 backdrop-blur-3xl">
            <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">Wallet Activity</h3>
                <button className="flex items-center gap-2 text-yellow-600 font-bold text-xs uppercase tracking-widest hover:text-yellow-400 transition-colors">
                    Request Full Report <ChevronRight size={14} />
                </button>
            </div>
            
            <div className="space-y-2">
                <ActivityRow title="Acquisition: Monad Genesis #001" date="JAN 30, 2026" price="+ 12.00 ETH" isGold />
                <ActivityRow title="Strategic Exit: Bored Ape #44" date="JAN 29, 2026" price="+ 64.50 ETH" isGold />
                <ActivityRow title="Network Contribution" date="JAN 28, 2026" price="- 2.00 ETH" />
            </div>
        </div>
      </main>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function SidebarItem({ icon, label, active = false }: any) {
    return (
        <div className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
            active 
            ? 'bg-yellow-600/10 text-yellow-500 border border-yellow-600/20 shadow-[inset_0_0_20px_rgba(161,98,7,0.05)]' 
            : 'text-gray-600 hover:text-white hover:bg-white/5'
        }`}>
            {icon}
            <span className="font-black text-xs uppercase tracking-widest">{label}</span>
        </div>
    );
}

function StatCard({ label, value, isGold }: any) {
    return (
        <div className={`p-8 rounded-[32px] transition-all border ${
            isGold ? 'bg-black border-yellow-600/20 hover:border-yellow-600/50' : 'bg-white/5 border-white/5'
        }`}>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">{label}</p>
            <p className={`text-4xl font-black tracking-tighter italic ${isGold ? 'text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600' : 'text-white'}`}>
                {value}
            </p>
        </div>
    );
}

function ActivityRow({ title, date, price, isGold = false }: any) {
    return (
        <div className="flex items-center justify-between p-6 rounded-2xl hover:bg-white/[0.02] transition-all border border-transparent hover:border-white/5 group">
            <div>
                <p className={`font-black text-sm uppercase tracking-tight ${isGold ? 'text-yellow-500/90' : 'text-gray-300'}`}>{title}</p>
                <p className="text-[10px] text-gray-600 font-bold mt-1 tracking-widest">{date}</p>
            </div>
            <span className={`text-sm font-mono font-black ${price.startsWith('+') ? 'text-yellow-500' : 'text-gray-500'}`}>
                {price}
            </span>
        </div>
    );
}