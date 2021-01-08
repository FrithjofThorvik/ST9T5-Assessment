import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import "../css/SliderCard.css";

function SliderCard({ id, title, intro, description, score, rank, ...props }) {
  const [{ activePath }] = useStateValue();

  return (
    <Card
      onClick={props.onClick}
      className={`sliderCard ${activePath?.id === id && "sliderCard--active"}`}
    >
      <CardContent>
        <Typography className="sliderCard-header">{title}</Typography>
        {sessionStorage.getItem("sessionTest") === "vault-assessment" && 
        (
          <div className="sliderCard-scoreContainer">
            <Typography className="sliderCard-score">
              {`Rank: ${rank}`}
              {/* <p>{`Match: ${Math.ceil(score/12 * 100)}%`}</p> */}
          </Typography>
          </div>
        )}
        <Typography className="sliderCard-body">{intro}</Typography>
        <Typography className="sliderCard-button">View</Typography>
      </CardContent>
    </Card>
  );
}

export default SliderCard;
