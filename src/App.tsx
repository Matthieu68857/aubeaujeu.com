import { Hero } from './components/Hero';
import { Boutique } from './components/Boutique';
import { Bar } from './components/Bar';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  return (
    <div className="min-h-screen bg-abj-cream text-abj-dark flex flex-col selection:bg-abj-secondary selection:text-white">
      <header className="sr-only">
        <h1>Au Beau Jeu - Bar à jeux et Boutique à Lille</h1>
      </header>

      <main className="flex-1">
        <Hero />
        <Boutique />
        <Bar />
      </main>

      <Footer />
      <MobileQuickBar />
    </div>
  );
}
