import Navigation from "@ui/Navigation";
import Hero from "./components/ui/Hero";

export default function App() {
  return (
    <div className="min-h-[screen] text-zinc-900 dark:text-zinc-300">
      <div className="absolute top-0 h-full w-full z-[-2] dark:bg-zinc-900 bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <header>
        <Navigation>
          <div className="flex items-center gap-x-8 shrink-0">
            <a href="#">Home</a>
            <a href="#">About me</a>
          </div>
        </Navigation>
        <Hero />
      </header>

      <main className="container-grid">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis culpa
          vero reiciendis tenetur tempore in delectus modi qui sed quam ullam
          ducimus, quia voluptatibus beatae sequi totam consequatur quasi autem.
        </p>
      </main>
    </div>
  );
}
