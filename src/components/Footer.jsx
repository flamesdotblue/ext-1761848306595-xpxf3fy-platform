function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400" />
            <span className="text-sm font-medium">Sora Secure</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Changelog</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </nav>
        </div>
        <div className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Sora Secure, Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
