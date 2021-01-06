import React from "react";
import { useStateValue } from "./StateProvider";
import "../css/Question.css";

function Question() {
  const [{ questionNum, test, submit }] = useStateValue();

  return (
    <div className="question">
      {!submit ? (
        <div className="question-container">
          <div className="question-number">Question {questionNum}</div>
          <div className="question-text">{test.questions[questionNum - 1]}</div>
          <div className="question-subtext">
            {test.subtext[questionNum - 1]}
          </div>
        </div>
      ) : null}
      {submit ? (
        <div className="question-container">
          <div className="question-number question-submit">Test Finished</div>
          <div className="question-text">
            Would you like to submit your answers?
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Question;
