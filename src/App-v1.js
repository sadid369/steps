import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((s) => {
        return s - 1;
      });
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => {
        return s + 1;
      });
    }
  }
  const handleCross = () => {
    setIsOpen((is) => {
      return !is;
    });
  };

  return (
    <>
      <button className="close" onClick={() => handleCross()}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button style={{ backgroundColor: "#7950f2" }} onClick={handleNext}>
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
