import React from "react";
import Slider from "./Slider";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CourseCard from "./CourseCard";
import { scroller } from "react-scroll";
import axios from "axios";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import "../css/Result.css";

function Result() {
  const [{ recommended, activePath, answers }] = useStateValue();
  const history = useHistory();

  // Send POST Data With TagId For Chosen Path
  const applyChosenPath = (activeTag) => {
    if (sessionStorage.getItem("sessionContactId")) {
      if (activeTag > 0) {
        axios
          .post(
            "https://scrapthe9to5.com/scripts/IS/ISVaultAssessment.php?assessment=applyChosenPath",
            {
              contactId: sessionStorage.getItem("sessionContactId"),
              chosenPath: activeTag,
            }
          )
          .then((res) => {
            console.log(res);
          });
      }
    }
  };

  return (
    <div className="result">
      {/* Redirect If Answers Not Provided */}
      {!recommended ? history.replace("/") : null}

      {/* Warning Message For SFM */}
      {sessionStorage.getItem("sessionTest") === "sfm-assessment" &&
      answers[0] !== 1 ? (
        <div className="result-warning">
          <div className="result-warningBox">
            <ErrorOutlineIcon />
            <div className="result-warningSubtext">
              <p>
                Before accessing the courses below in the Vault, we recommend
                that you finish the SFM/Mentors Getting Started modules
              </p>
              <p>
                Of course you're free to watch anything below, however it's
                important to stay focused on getting the foundations in place at
                the start of your journey. The Vault is optimised to pick up
                where the modules finish and help you on the next stages of your
                online business journey.
              </p>
            </div>
          </div>
          <div className="result-warningViewMore">
            <ExpandMoreIcon
              onClick={() => {
                scroller.scrollTo("result-top", {
                  duration: 1500,
                  delay: 0,
                  smooth: "easeIn",
                });
              }}
            />
          </div>
        </div>
      ) : null}

      {/* Slider / Recommendations */}
      <div className="result-top">
        <Slider cardType={"SliderCard"} />
      </div>
      <div className="result-bodyAnchor"></div>

      {/* Active Paths / Cards */}
      {activePath ? (
        <div className="result-body">
          <div className="result-viewMore">
            <ExpandMoreIcon
              onClick={() => {
                scroller.scrollTo("result-courseHeader", {
                  duration: 1500,
                  delay: 0,
                  smooth: "easeIn",
                });
              }}
            />
          </div>
          <div className="result-courseHeader">{activePath?.title}</div>
          <div className="result-bodyContent">
            <div
              className={`result-left ${
                sessionStorage.getItem("sessionTest") === "vault-assessment" &&
                "result-leftMargin"
              }`}
            >
              {/* Vault Video Block */}
              {activePath?.video && (
                <div className="result-iframeBox">
                  <div className="result-iframeContainer">
                    <iframe
                      title={activePath?.title}
                      src={activePath?.video}
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
              <div className="result-leftCourses">
                {/* SFM Path Cards */}
                {activePath?.courses?.map((path, id) => (
                  <CourseCard
                    key={id}
                    title={path.title}
                    description={path.description}
                    img={path.img}
                    link={path.link}
                  />
                ))}

                {/* Vault Path Cards */}
              </div>
            </div>
            <div className="result-right">
              <div className="result-rightDescription">
                <h2>{activePath?.title}</h2>
                <p>{activePath?.description}</p>
              </div>
            </div>
          </div>
          {/* Vault Next Step Link */}
          {activePath?.link && (
            <div className="result-nextStep">
              <div
                onClick={() => {
                  activePath?.activeTag &&
                    applyChosenPath(activePath.activeTag);
                  sessionStorage.getItem("sessionEmail") !== null
                    ? (window.location.href = `${
                        activePath.link
                      }?email=${sessionStorage.getItem("sessionEmail")}`)
                    : (window.location.href = activePath.link);
                }}
                className="result-nextStepButton"
              >
                Next Step
              </div>
            </div>
          )}
        </div>
      ) : null}
      <div className="result-footer"></div>
    </div>
  );
}

export default Result;
