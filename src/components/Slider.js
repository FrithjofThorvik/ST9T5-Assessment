import React from "react";
import { useStateValue } from "./StateProvider";
import SliderCard from "./SliderCard";
import { scroller } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../css/Slider.css";

function Slider({ cardType }) {
  const [{ recommended }, dispatch] = useStateValue();

  return (
    <div className="slider">
      <div className="slider-header">
        {sessionStorage.getItem("sessionTest") === "sfm-assessment" ? (
          <div>
            <h1>Your Recommendations</h1>
            <p>
              We recommend making a list of all your recommendations to be most
              effective in the Vault
            </p>
          </div>
        ) : (
          <div>
            <h1>Important Message</h1>
            <p>
              We recommend watching this video explaining what you should do
              next.
            </p>
            {/* Video Block */}
            <div className="slider-iframeBox">
              <div className="slider-iframeContainer">
                <iframe
                  title="Video Title"
                  src="https://www.youtube.com/embed/i3YnkXLFJH0"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="slider-viewMore">
                <ExpandMoreIcon
                  onClick={() => {
                    scroller.scrollTo("slider-recommendedAnchor", {
                      duration: 1500,
                      delay: 0,
                      smooth: "easeIn",
                    });
                  }}
                />
              </div>
            </div>
            <div className="slider-recommendedAnchor">
              <h1>Your Recommendations</h1>
              <p>
                These are your recommendations ranked from your best match to worst. The rankings does not indicate that you should pick one over the other. Go for the option that suits you best, and try the other ones later.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="slider-headerBorder"></div>
      <div className="slider-body">
        {cardType === "SliderCard" &&
          recommended?.map((path, i) => (
            <SliderCard
              onClick={() => {
                scroller.scrollTo("result-bodyAnchor", {
                  duration: 1200,
                  delay: 0,
                  smooth: "easeIn",
                });
                dispatch({ type: "PATH_SELECTED", path: path });
              }}
              key={path.id}
              id={path.id}
              title={path.title}
              intro={path.intro}
              description={path.description}
              rank={i + 1}
              score={path?.score}
            />
          ))}
      </div>
      <div className="slider-footerBorder"></div>
    </div>
  );
}

export default Slider;
