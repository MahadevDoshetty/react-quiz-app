import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "./ScoreContext";
import './style.css';

const Quiz = () => {
    const { score, setScore } = useContext(ScoreContext);
    const [userResponse, setUserresponse] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    let navigate = useNavigate();

    const Questions = [
        ["What is the capital of India ?", ["New Delhi", "Karnataka", "Mumbai", "Kolkata"], "New Delhi"],
        ["What is the capital of Karnataka ?", ["Chennai", "Bengaluru", "Mumbai", "West Bengal"], "Bengaluru"],
        ["What is the capital of Maharashtra ?", ["New Delhi", "Kohlapur", "Mumbai", "Solapur"], "Mumbai"],
        ["What is the capital of Telangana ?", ["Hyderabad", "Mehndipatnam", "Mumbai", "Sangareddy"], "Hyderabad"],
        ["What is the capital of Bihar ?", ["New Delhi", "Patna", "Mumbai", "Kolkata"], "Patna"]
    ];



    const currentQuestion = Questions[currentIndex];

    const handleClick = (option) => {
        if (userResponse === null) {
            setUserresponse(option.target.innerText);
        }
    };

    const validateInput = () => {
        if (userResponse === Questions[currentIndex][2]) {
            setScore(prev => prev + 1);
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="container">
                <h1>Current Affairs Quiz</h1>
                <h2>{currentQuestion[0]}</h2>

                <div className="main">
                    {currentQuestion[1].map((option, index) => (
                        <button
                            id="optionBtns"
                            onClick={handleClick}
                            key={index}
                            disabled={userResponse !== null}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className="footerSection">
                    <button
                        id="pBtn"
                        type="button"
                        onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
                    >
                        ⬅️ Previous
                    </button>

                    <input
                        type="range"
                        id="mySlider"
                        disabled
                        readOnly
                        value={currentIndex}
                        min="0"
                        max={Questions.length - 1}
                        step="1"
                    />

                    <button
                        id="nBtn"
                        type="button"
                        onClick={() => {
                            validateInput();
                            if (currentIndex == Questions.length-1) {
                                navigate("/Finalpage");
                            }else{
                            setCurrentIndex(prev => prev + 1);}
                            setUserresponse(null);
                        }}
                    >
                        Next ➡️
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Quiz;
