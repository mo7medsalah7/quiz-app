// see ur score
import { useContext } from "react";
import QuizContext from "../Helpers/Context";

export default function EndScreen() {
  const { score, setScore } = useContext(QuizContext);
  const { gameState, setGameState } = useContext(QuizContext);

  const handleTryAgain = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div>
      End Screen, your score is {score}
      <br />
      <button
        onClick={handleTryAgain}
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
