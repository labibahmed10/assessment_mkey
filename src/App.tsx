import { useState } from "react";
import AlphabetTileInteraction from "./components/Alphabet-tile-interaction/AlphabetTileInteraction";
import RecursivePartitioning from "./components/Recursive-partitioning/RecursivePartitioning";

function App() {
  const [showRecursive, setSHowrecursive] = useState(true);

  return (
    <div className="app">
      <div className="flex justify-center items-center w-96 mx-auto my-10 ">
        <button className="buttonStyle bg-indigo-700 mx-auto" onClick={() => setSHowrecursive(true)}>
          Recursive partition task
        </button>
        <button className="buttonStyle bg-indigo-700 mx-auto" onClick={() => setSHowrecursive(false)}>
          Alphabetic tile task
        </button>
      </div>

      {showRecursive ? <RecursivePartitioning /> : <AlphabetTileInteraction />}
    </div>
  );
}

export default App;
