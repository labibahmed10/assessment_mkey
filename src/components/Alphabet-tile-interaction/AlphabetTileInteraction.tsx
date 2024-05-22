import { useState } from "react";
import alphabets from "./utils/alphabets";

const AlphabetTileInteraction = () => {
  const [output, setOutput] = useState<string>("");

  const reWriteAlphabet = (letter: string) => {
    const concatedString = output + letter;
    const result = concatedString.replace(/(.)\1\1/g, (match) => "_".repeat(match.length));
    setOutput(result);
  };

  return (
    <section className="max-w-80 mx-auto flex justify-center flex-col items-center w-full h-[calc(100vh-400px)] space-y-10">
      <div className="grid sm:grid-cols-7 grid-cols-5 place-items-center gap-x-6 gap-y-2 px-4">
        {alphabets.map((letter) => (
          <p key={letter} className="textStyle bg-teal-600" onClick={() => reWriteAlphabet(letter)}>
            {letter}
          </p>
        ))}
      </div>

      <div id="outputString" className="max-w-80 mx-auto flex justify-center flex-col items-center  space-y-3">
        <h2 className="bg-pink-600 textStyle size-auto px-14">Output</h2>
        <p>{output}</p>
      </div>
    </section>
  );
};

export default AlphabetTileInteraction;
