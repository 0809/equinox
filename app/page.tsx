import Link from 'next/link'; // <--- 1. Import Link
import { Lock, ArrowRight, Twitter, Github, Disc, Zap, ShieldCheck } from 'lucide-react';

// --- 1. DEFINE THE ANIMATION STYLES HERE ---
const spinStyle = {
  animation: 'spin 15s linear infinite',
};

const keyframesStyle = `
  @keyframes spin {
    0% { transform: perspective(1000px) rotateY(0deg); }
    100% { transform: perspective(1000px) rotateY(360deg); }
  }
`;

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg selection:bg-brand-primary selection:text-white flex flex-col">
      
      {/* --- INJECT STYLES --- */}
      <style>{keyframesStyle}</style>
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-32 px-6 overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: The Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white border border-gray-100 shadow-sm text-brand-primary font-semibold text-sm animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Live on Sepolia Testnet
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-brand-dark mb-6 tracking-tight leading-[1.1]">
              Ownership is the new <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary animate-gradient-x">
                Subscription.
              </span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Equinox replaces monthly fees with NFTs. Buy a pass once, unlock the content forever, and sell it when you're done.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* BUTTON 1: Go to Explore */}
              <Link 
                href="/explore"
                className="px-8 py-4 bg-brand-dark text-white rounded-2xl font-bold shadow-xl shadow-brand-dark/20 hover:transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Start Exploring <ArrowRight size={18} />
              </Link>

              {/* BUTTON 2: Go to Login */}
              <Link 
                href="/login"
                className="px-8 py-4 bg-white text-brand-dark border-2 border-gray-100 rounded-2xl font-bold hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm hover:shadow-md flex items-center justify-center"
              >
                Create a Drop
              </Link>
            </div>
          </div>

          {/* Right: The Visual (Floating Card) */}
          <div className="relative hidden lg:block perspective-1000">
             <div 
               className="relative w-96 h-[500px] mx-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-700 shadow-2xl shadow-brand-primary/30 group"
               style={spinStyle}
             >
                <div className="h-full w-full border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                      <Lock className="text-white" size={20} />
                    </div>
                    <div className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-lg text-xs font-bold border border-brand-accent/20">
                      TIER 1 ACCESS
                    </div>
                  </div>
                  <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-white">Access Pass</h3>
                      <p className="text-gray-400 text-sm">Valid Validation Key</p>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 bg-white relative flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark tracking-tight">Trending Drops</h2>
              <p className="text-gray-400 mt-2 text-lg">Exclusive content dropping this week.</p>
            </div>
            <Link href="/dashboard" className="text-brand-primary font-bold hover:underline">
                View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedCard 
              title="DeFi Trading Masterclass" 
              author="CryptoWizard" 
              price="0.05 ETH" 
              imgUrl="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
            />
            <FeaturedCard 
              title="Backstage Studio Tour" 
              author="AudioLabs" 
              price="0.02 ETH" 
              imgUrl="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop"
            />
            <FeaturedCard 
              title="Indie Game Assets Pack" 
              author="PixelArtisans" 
              price="0.08 ETH" 
              imgUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* --- CREATOR CALLOUT --- */}
      <CreatorCallout />

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full opacity-30" />
                </div>
                <span className="text-xl font-bold text-white tracking-tighter">EQUINOX</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The next evolution of creator ownership. 
                Built for the Hackathon 2026.
              </p>
            </div>

            {/* Column 2: Platform */}
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/dashboard" className="hover:text-brand-primary transition-colors">Explore Drops</Link></li>
                <li><Link href="/login" className="hover:text-brand-primary transition-colors">For Creators</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">How it Works</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-brand-primary transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">Smart Contract</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Column 4: Socials */}
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-primary hover:scale-110 transition-all">
                    <Twitter size={18} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all">
                    <Github size={18} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-indigo-600 hover:scale-110 transition-all">
                    <Disc size={18} /> 
                 </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2026 Equinox Protocol. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-2 md:mt-0">Designed with Next.js & Tailwind</p>
          </div>
        </div>
      </footer>

    </main>
  );
}

// Helper Card Component
function FeaturedCard({ title, author, price, imgUrl }: any) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-3xl p-3 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="h-64 rounded-2xl relative overflow-hidden mb-4">
        <img 
          src={imgUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter blur-[2px] group-hover:blur-0" 
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-transparent transition-all">
          <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 transition-transform">
             <Lock className="text-white" size={20} />
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-bold border border-white/10">
           LOCKED
        </div>
      </div>
      <div className="px-2 pb-2">
        <h3 className="font-bold text-xl text-brand-dark mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">by {author}</p>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl group-hover:bg-brand-bg transition-colors">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 uppercase font-bold">Price</span>
            <span className="text-brand-dark font-bold">{price}</span>
          </div>
          <Link 
            href="/login" 
            className="px-4 py-2 bg-brand-dark text-white text-sm font-bold rounded-lg shadow-lg shadow-brand-dark/20 group-hover:bg-brand-accent group-hover:shadow-brand-accent/30 transition-all"
          >
            Mint Pass
          </Link>
        </div>
      </div>
    </div>
  );
}

function CreatorCallout() {
  return (
    <section className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-brand-secondary/30 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-72 h-72 bg-brand-primary/20 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Keep <span className="text-brand-accent">100%</span> of your revenue.
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Stop paying 30% to platforms. With Equinox, you own the contract, you own the audience, and you keep the money. Instant payouts to your wallet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <div className="w-10 h-10 bg-brand-primary/20 text-brand-primary rounded-lg flex items-center justify-center mb-4">
               <Zap size={20} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Instant Settlement</h3>
            <p className="text-gray-400 text-sm">No "Net-30" waiting periods. Money hits your wallet the second a fan mints.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <div className="w-10 h-10 bg-brand-secondary/20 text-brand-secondary rounded-lg flex items-center justify-center mb-4">
               <ShieldCheck size={20} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Zero Platform Risk</h3>
            <p className="text-gray-400 text-sm">We can't ban you. Your content lives on decentralized storage and your audience is on-chain.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <div className="w-10 h-10 bg-brand-accent/20 text-brand-accent rounded-lg flex items-center justify-center mb-4">
               <Lock size={20} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Token Gating</h3>
            <p className="text-gray-400 text-sm">Upload a video, tick a box, and we handle the encryption. Only holders can watch.</p>
          </div>
        </div>

        <Link 
            href="/login"
            className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-bold shadow-lg shadow-brand-secondary/25 hover:scale-105 transition-transform inline-block"
        >
          Start Creator Account
        </Link>
      </div>
    </section>
  );
}