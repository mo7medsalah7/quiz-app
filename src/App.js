import { useState, useContext } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import QuizContext from "./Helpers/Context";
import Layout from "./components/Layout";

function App() {
  const [gameState, setGameState] = useState("menu");

  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1 className="text-2xl py-8">Quiz App</h1>

      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        <Layout>
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endScreen" && <EndScreen />}
        </Layout>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
