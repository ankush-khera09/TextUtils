import React from "react";

export default function About(props) {

  let myStyle = {
    color: props.mode==="dark" ? "white" : "black",
    backgroundColor: props.mode==="dark" ? "rgb(36 74 104)" : "white",
  }

  return (
    <div className="container my-3" style={{backgroundColor: props.mode==="dark" ? "#042743" : "white"}}>
      <h1 style={{color: props.mode==="dark" ? "white" : "black"}}>About Us:</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What this app is all about?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is a Text-Utility app.</strong> It provides features like converting your text to UPPERCASE, lowercase & Title Case. It also provides a feture to remove all extra spaces in the given text. It is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Analyze your text:
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
                TextUtils enables you to analyze your text quickly and efficiently.<strong> Be it word count, character count or average time to read.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser-Compatible App:
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Yes, it is browser-compatible!</strong> It works in all web browsers such as Chrome, FireFox, Internet Explorer, Safari, Opera etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
