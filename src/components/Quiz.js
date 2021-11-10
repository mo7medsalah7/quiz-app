// actual quiz

import QuizContext from "../Helpers/Context";
import { useContext, useState } from "react";
import { Questions } from "./../Helpers/QuestionsBank";

export default function Quiz() {
  const { score, setScore } = useContext(QuizContext);
  const { setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState("");

  // every click on nextQuestion will compare the optionChosen with the correct
  // answer,
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  //so in the last question when clicking, we should grap the optionchosen to compare
  // with the correct answer and register the score

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="quiz">
      <header>
        <h2 className="mb-4 font-bold text-2xl text-gray-800">
          {Questions[currentQuestion].prompt}
        </h2>
      </header>

      <ul className="options flex justify-center flex-col space-y-3">
        <li onClick={() => setoptionChosen("A")} className="options-item">
          <button className="answersBtn">
            {Questions[currentQuestion].optionA}
          </button>
        </li>
        <li onClick={() => setoptionChosen("B")} className="options-item">
          <button className="answersBtn">
            {Questions[currentQuestion].optionB}
          </button>
        </li>
        <li onClick={() => setoptionChosen("C")} className="options-item">
          <button className="answersBtn">
            {Questions[currentQuestion].optionC}
          </button>
        </li>
        <li onClick={() => setoptionChosen("D")} className="options-item">
          <button className="answersBtn">
            {Questions[currentQuestion].optionD}
          </button>
        </li>
      </ul>

      {currentQuestion == Questions.length - 1 ? (
        <button
          className="bg-black mt-4 text-white px-4 shadow-md"
          onClick={finishQuiz}
        >
          Finish Quiz
        </button>
      ) : (
        <button
          onClick={() => nextQuestion()}
          className="bg-black mt-4 text-white px-4 shadow-md"
        >
          Next Question
        </button>
      )}
    </div>
  );
}
