import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    correctAnswer: 3
  },
  {
    question: "Which keyword is used to declare a constant in JS?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2
  },
  {
    question: "React is mainly used for?",
    options: ["Database", "UI", "Server", "Networking"],
    correctAnswer: 1
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="container">
      {!showResult ? (
        <div className="quiz-box">
          <h2>
            Question {currentQuestion + 1} / {questions.length}
          </h2>

          <p className="question">
            {questions[currentQuestion].question}
          </p>

          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="option">
              <input
                type="radio"
                name="option"
                value={index}
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
              />
              {option}
            </label>
          ))}

          <button
            className="next-btn"
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="result-box">
          <h2>Quiz Completed 🎉</h2>
          <p>Your Score: {score}</p>
          <p>Total Questions: {questions.length}</p>

          <button className="restart-btn" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
