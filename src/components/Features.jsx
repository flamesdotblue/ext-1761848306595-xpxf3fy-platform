import { Shield, Lock, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Adaptive Risk Engine',
    desc: 'Detects anomalies in realtime using device signals, velocity checks, and behavior modeling.'
  },
  {
    icon: Lock,
    title: 'Passwordless Auth',
    desc: 'Passkeys and magic links with built-in step-up verification to reduce friction and fraud.'
  },
  {
    icon: Zap,
    title: 'Edge Rules',
    desc: 'Write allow/deny and MFA rules that run globally at the edge in <10ms for every request.'
  },
  {
    icon: Globe,
    title: 'Global Compliance',
    desc: 'Region-aware data residency, audit trails, and encryption that meets strict standards.'
  }
];

function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to ship secure flows</h2>
          <p className="mt-3 text-white/70">SDKs, APIs, and a beautiful dashboard. Start with drop-in components or craft fully custom experiences.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-emerald-500/40 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-1 ring-inset ring-white/10">
                <Icon className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="mt-4 text-xs text-emerald-300/80 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>
        <div id="pricing" className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-transparent">
            <h3 className="text-xl font-medium">Developer-first pricing</h3>
            <p className="mt-2 text-white/70">Generous free tier. Simple usage-based pricing as you scale. No contracts required.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="rounded-md bg-white/5 px-3 py-2 text-sm">10k verifications free</div>
              <div className="rounded-md bg-white/5 px-3 py-2 text-sm">$0.005 per request after</div>
              <div className="rounded-md bg-white/5 px-3 py-2 text-sm">Enterprise SLAs available</div>
            </div>
            <a href="#get-started" className="mt-6 inline-flex items-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 hover:brightness-110 transition">Get started</a>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h4 className="text-sm uppercase tracking-wider text-white/60">What you get</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>• Passkeys & MFA</li>
              <li>• Risk scoring API</li>
              <li>• Webhooks & audit logs</li>
              <li>• SOC2 & ISO controls</li>
              <li>• 24/7 support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
