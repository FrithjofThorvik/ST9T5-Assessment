import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStateValue } from "./StateProvider";
import "../css/Navigator.css";

function Navigator() {
  const [{ answers, questionNum }, dispatch] = useStateValue();

  return (
    <div className="navigator">
      <div
        onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}
        className="navigator-previous"
      >
        <ChevronLeftIcon />
      </div>
      <div className="navigator-number">{questionNum}</div>
      <div
        onClick={() => {
          if (answers[questionNum - 1] != null) {
            dispatch({ type: "NEXT_QUESTION" });
          } else {
            alert("Please select an answer before advancing...");
          }
        }}
        className="navigator-next"
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
}

export default Navigator;
