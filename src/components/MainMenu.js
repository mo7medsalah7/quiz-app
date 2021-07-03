import { useContext } from "react";
import QuizContext from "../Helpers/Context";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <header className="">
      <button
        className="bg-black text-white px-4 shadow-md"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </header>
  );
}
