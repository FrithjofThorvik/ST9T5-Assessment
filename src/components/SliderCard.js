import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import "../css/SliderCard.css";

function SliderCard({ id, title, intro, description, ...props }) {
  const [{ activePath }] = useStateValue();

  return (
    <Card
      onClick={props.onClick}
      className={`sliderCard ${activePath?.id === id && "sliderCard--active"}`}
    >
      <CardContent>
        <Typography className="sliderCard-header">{title}</Typography>
        <Typography className="sliderCard-body">{intro}</Typography>
        <Typography className="sliderCard-button">View</Typography>
      </CardContent>
    </Card>
  );
}

export default SliderCard;
