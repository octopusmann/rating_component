import star from "../images/star.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MainContainer() {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  const handleOptionClick = (option) => {

    if (selectedOption === option) {
      setSelectedOption(null);
    } 

    else {
      setSelectedOption(option);
    }
  };

  const handleEventClick = () => {
    if (selectedOption !== null) {
      navigate(`/redirected?selectedOption=${selectedOption}`);
    } else {
      alert("Please select an option before submitting.");
    }
  };

  return (
    <div className="main-box">
      <div className="wrapped-box">
        <div className="logo-container">
          <img src={star} alt="star" />
        </div>
        <div className="text-container">
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your <br /> support request. All
            feedback is appreciated <br /> to help us improve our offering!
          </p>
        </div>

        <div className="options">
          <div
            className={`first-selection ${
              selectedOption === 1 ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(1)}
          >
            1
          </div>
          <div
            className={`second-selection ${
              selectedOption === 2 ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(2)}
          >
            2
          </div>
          <div
            className={`third-selection ${
              selectedOption === 3 ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(3)}
          >
            3
          </div>
          <div
            className={`fourth-selection ${
              selectedOption === 4 ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(4)}
          >
            4
          </div>
          <div
            className={`fifth-selection ${
              selectedOption === 5 ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(5)}
          >
            5
          </div>
        </div>

        <div className="button-container">
          <button onClick={handleEventClick} className="submit-button">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
