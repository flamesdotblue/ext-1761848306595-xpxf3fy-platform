import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Realtime threat monitoring
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Secure identity and payments for the modern web
            </h1>
            <p className="mt-5 max-w-xl text-white/70">
              A developer-first security platform that protects accounts, verifies identity, and stops fraud—without sacrificing user experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 hover:brightness-110 transition">
                Start free
              </a>
              <a href="#docs" className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition">
                View docs
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-2xl font-semibold">99.99%</div>
                <div className="text-xs text-white/60">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-semibold"><span className="text-emerald-400">10x</span></div>
                <div className="text-xs text-white/60">Faster integration</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">Global</div>
                <div className="text-xs text-white/60">Edge network</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2">
              <div className="rounded-xl overflow-hidden bg-black/60" style={{ height: '60vh' }}>
                <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-500/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
