import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../css/Answer.css";

function Answer() {
  const [
    { questionNum, test, answers, recommended, submit, contactId },
    dispatch,
  ] = useStateValue();
  const history = useHistory();

  // Fill array of answers with another array of temporary 0's
  const handleEmptyArray = () => {
    let array = [];
    for (let i = 0; i < test.answers[questionNum - 1].options.length; i++) {
      array.push(0);
    }
    return array;
  };

  // Inverts & updates the multi answer array from previous value
  const handleMultiAnswer = (array, i) => {
    if (array[i] === 0) {
      array[i] = 1;
    } else {
      array[i] = 0;
    }

    return array;
  };

  // Handle POST submission after recommended array is updated & redirects user to results
  useEffect(() => {
    if (recommended !== null) {
      const handleSubmit = () => {
        // Change Post URL
        if (contactId) {
          if (sessionStorage.getItem("sessionContactId")) {
            if (sessionStorage.getItem("sessionTest")) {
              axios
                .post(
                  `https://scrapthe9to5.com/scripts/IS/ISVaultAssessment.php?assessment=${sessionStorage.getItem(
                    "sessionTest"
                  )}`,
                  {
                    contactId: sessionStorage.getItem("sessionContactId"),
                    recommended: recommended,
                    answers: answers,
                    version: 1,
                  }
                )
                .then((res) => {
                  console.log("Data successfully stored.");
                });
            } else {
              console.log("Session test was not recorded...");
            }
          } else {
            console.log("Session contactId was not recorded...");
          }
        } else {
          console.log("Session contactId was not stored...");
        }
        history.push("/result");
      };
      handleSubmit();
    }
  }, [recommended, answers, history, contactId]);

  return (
    <div className="answer">
      {!submit ? (
        <div className="answer-container">
          {test.answers[questionNum - 1].options.map((option, i) => (
            <div
              key={i}
              onClick={() => {
                // Single Answer Questions
                if (test.answers[questionNum - 1].select === "single") {
                  dispatch({ type: "ANSWER", answer: i});
                  dispatch({ type: "NEXT_QUESTION" });
                }

                // Multi Answer Questions
                else if (test.answers[questionNum - 1].select === "multi") {
                  let array = answers[questionNum - 1];

                  // Handle Empty Multi Answer Array
                  if (!array) {
                    array = handleEmptyArray();
                  }

                  // Handle Multi Answer Array
                  array = handleMultiAnswer(array, i);

                  // Apply New Answer Array to DataLayer
                  dispatch({
                    type: "ANSWER",
                    answer: array,
                  });
                }
              }}
              className={`${
                test.answers[questionNum - 1].select === "multi"
                  ? "answer-optionMulti"
                  : "answer-optionSingle"
              }
              ${
                answers[questionNum - 1]?.length > 1
                  ? answers[questionNum - 1][i] === 1
                    ? "answer--selected"
                    : ""
                  : answers[questionNum - 1] === i
                  ? "answer--selected"
                  : ""
              }
              `}
            >
              {option}
            </div>
          ))}
        </div>
      ) : null}
      {submit ? (
        <div className="answer-submit">
          <div
            onClick={() => dispatch({ type: "SUBMIT" })}
            className="answer-submitButton"
          >
            Submit Answers
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Answer;
