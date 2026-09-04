import { Hero } from './components/Hero';
import { Boutique } from './components/Boutique';
import { Bar } from './components/Bar';
import { TcgSection } from './components/TcgSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { WaveDivider } from './components/WaveDivider';

export function App() {
  return (
    <div className="min-h-screen bg-abj-cream text-abj-dark flex flex-col selection:bg-abj-secondary selection:text-white font-sans">
      <header className="sr-only">
        <h1>Au Beau Jeu - Bar à jeux et Boutique à Lille</h1>
      </header>

      <main className="flex-1">
        <Hero />
        <WaveDivider color="#FFFFFF" variant="gentle" />
        <Boutique />
        <WaveDivider color="#fbfbf8" variant="curved" />
        <Bar />
        <WaveDivider color="#FDF6EB" variant="double" />
        <TcgSection />
        <WaveDivider color="#333333" variant="gentle" />
      </main>

      <Footer />
      <MobileQuickBar />
    </div>
  );
}

export default App;
