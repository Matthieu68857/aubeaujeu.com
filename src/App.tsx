import { Hero } from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-abj-cream text-abj-dark flex flex-col selection:bg-abj-secondary selection:text-white">
      <header className="sr-only">
        <h1>Au Beau Jeu - Bar à jeux et Boutique à Lille</h1>
      </header>

      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
