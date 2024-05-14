import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import GolangPNG from "../public/golang.png";
import Heading1 from "@element/H1.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="dark:bg-zinc-800 bg-slate-100 min-h-screen">
      <div className="max-w-[800px] mx-auto py-14">
        <div className="flex items-center justify-center mb-8">
          <a href="https://go.dev" target="_blank" className="inline-block">
            <img src={GolangPNG} className="size-52" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="inline-block">
            <img src={reactLogo} className="size-52" alt="React logo" />
          </a>
        </div>
        <Heading1 content="Go + React.JS" className="text-center mb-8" />
        <p className="text-center">Started Project with golang + react js</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          nemo dolorem optio dolores reiciendis ducimus magnam consequuntur
          fugiat minima, voluptas facilis dolor, iure dolore? Quo enim eum
          eligendi quibusdam in.
        </p>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 px-4 py-3 rounded-md text-white font-normal"
        >
          count is {count}
        </button>
      </div>
    </main>
  );
}

export default App;
