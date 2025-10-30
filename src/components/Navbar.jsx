import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400" />
            <span className="text-lg font-semibold tracking-tight">Sora Secure</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#solutions" className="hover:text-white transition">Solutions</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#docs" className="hover:text-white transition">Docs</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="text-sm text-white/80 hover:text-white transition">Sign in</a>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 hover:brightness-110 transition">Get Started</a>
          </div>
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 text-white/80 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block rounded-md px-3 py-2 bg-white/5">Features</a>
            <a href="#solutions" className="block rounded-md px-3 py-2 bg-white/5">Solutions</a>
            <a href="#pricing" className="block rounded-md px-3 py-2 bg-white/5">Pricing</a>
            <a href="#docs" className="block rounded-md px-3 py-2 bg-white/5">Docs</a>
            <div className="flex gap-2 pt-2">
              <a href="#login" className="flex-1 rounded-md border border-white/10 px-3 py-2 text-center">Sign in</a>
              <a href="#get-started" className="flex-1 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-2 text-black font-medium">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
