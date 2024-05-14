import Navigation from "@ui/Navigation";
import Hero from "./components/ui/Hero";

export default function App() {
  return (
    <div className="bg-slate-200/50 min-h-screen">
      <header>
        <Navigation>
          <div className="flex items-center gap-x-8">
            <a href="#">Home</a>
            <a href="#">About me</a>
          </div>
        </Navigation>
        <Hero />
      </header>

      <main></main>
    </div>
  );
}
