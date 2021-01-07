import React, { useEffect } from "react";
import Question from "./Question";
import Answer from "./Answer";
import Navigator from "./Navigator";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import "../css/Test.css";

function Test({ location }) {
  const [{ test, contactId }, dispatch] = useStateValue();
  const history = useHistory();

  // Contact Processing useEffect
  useEffect(() => {
    // Connect Session Storage With Test Type
    const processTest = () => {
      // Check if session contains Test
      if (sessionStorage.getItem("sessionTest")) {
        console.log("🔐 Session Test: ", sessionStorage.getItem("sessionTest"));
        dispatch({
          type: "SET_TEST",
          test: sessionStorage.getItem("sessionTest"),
        });
      }

      // Set Test From URL Params
      else {
        const urlParams = new URLSearchParams(location.search);
        var test;

        // Process "test" Parameter
        if (urlParams.has("test")) {
          test = urlParams.get("test");
          console.log("🔐 Param Test: ", test);
          // Sfm Assessment
          if (test === "sfm-assessment") {
            sessionStorage.setItem("sessionTest", test);
          }
          // Vault Assessment
          else if (test === "vault-assessment") {
            sessionStorage.setItem("sessionTest", test);
          }
          // Default
          else {
            console.log("🔐 Test param value not valid!");
          }
          // Activate Test
          dispatch({
            type: "SET_TEST",
            test: sessionStorage.getItem("sessionTest"),
          });
        } else {
          console.log("🔐 Test param was not found!");
        }

        // Remove contactId From Params
        urlParams.delete("test");
        history.replace({
          search: urlParams.toString(),
        });
      }
    };

    // Connect Session Storage to IS ContactId
    const processContactId = () => {
      // Declare variable
      var contactId;

      // Check if session contains contactId
      if (sessionStorage.getItem("sessionContactId")) {
        dispatch({ type: "SET_CONTACT_ID" });
        console.log(
          "🔐 ContactId Validated: ",
          sessionStorage.getItem("sessionContactId")
        );
      }

      // Set contactId from URL params
      else {
        // Fetch URL parameters
        const urlParams = new URLSearchParams(location.search);

        if (urlParams.has("contactId")) {
          contactId = +urlParams.get("contactId");

          // Validate contactId & process
          if (!isNaN(contactId)) {
            // Set session storage
            sessionStorage.setItem("sessionContactId", contactId);
            // Update DataLayer to validate session population
            dispatch({ type: "SET_CONTACT_ID" });
            console.log("🔐 contactId: ", contactId);
          } else {
            console.log("🔐 contactId is NaN...");
          }
        } else {
          console.log("🔐 contactId param was not found!");
        }
      }
    };

    // Connect Session Storage to Email
    const processEmail = () => {
      // Declare variable
      var email;

      // Check if session contains contactId
      if (sessionStorage.getItem("sessionEmail")) {
        console.log(
          "🔐 Email Validated: ",
          sessionStorage.getItem("sessionEmail")
        );
      } else {
        // Fetch URL parameters
        const urlParams = new URLSearchParams(location.search);

        if (urlParams.has("email")) {
          // Set email
          email = urlParams.get("email");
          console.log("🔐 email: ", email);
          // Set session storage
          sessionStorage.setItem("sessionEmail", email);
        } else {
          console.log("🔐 Email param was not found!");
        }
      }
    };

    // Remove URL Params
    const processUrl = () => {
      // Fetch URL parameters
      const urlParams = new URLSearchParams(location.search);

      if (urlParams.has("email")) {
        urlParams.delete("email");
      }
      if (urlParams.has("contactId")) {
        urlParams.delete("contactId");
      }
      if (urlParams.has("test")) {
        urlParams.delete("test");
      }

      // Remove contactId From Params
      history.replace({
        search: urlParams.toString(),
      });
    };

    processContactId();
    processEmail();
    processTest();
    processUrl();
  }, [dispatch, history, location.search]);

  return (
    <div className="test">
      {!contactId && (
        <div className="test-errorMissingID">
          <div className="test-errorMissingIDBox">
            <ErrorOutlineIcon />
            <p>Your data will not be saved...</p>
            <p>
              You can still take the assessment, but your data will not transfer
              to the vault.
            </p>
          </div>
        </div>
      )}
      {test ? (
        <div className="test-container">
          <div className="test-header">Questions</div>
          <Question />
          <Answer />
          <Navigator />
        </div>
      ) : (
        <div className="test-errorMissingTest">
          <div className="test-errorMissingTestBox">
            <h1>Pick Your Assessment</h1>
            <p>
              If you are not a SFM Member, please click take the Vault
              Assessment...
            </p>
            <div className="test-errorMissingTestButtons">
              <a href="?test=sfm-assessment">
                <button>SFM Assessment</button>
              </a>
              <a href="?test=vault-assessment">
                <button>Vault Assessment</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Test;
