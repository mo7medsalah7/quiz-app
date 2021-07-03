// see ur score
import { useContext } from "react";
import QuizContext from "../Helpers/Context";

export default function EndScreen() {
  const { score } = useContext(QuizContext);
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div>
      End Screen, your score is {score}
      <br />
      <button
        onClick={() => setGameState("menu")}
        className="bg-black px-2 py-1 text-white mt-2"
      >
        Try Again
      </button>
      <p className="mt-4 font-semibold">
        made with love by Mohamed Salah, using Tailwindcss and React Context
      </p>
    </div>
  );
}
