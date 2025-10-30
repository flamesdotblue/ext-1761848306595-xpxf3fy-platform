import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070A0A] text-white antialiased">
      <div className="fixed inset-0 -z-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full blur-3xl bg-emerald-500/20" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full blur-3xl bg-cyan-500/10" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
