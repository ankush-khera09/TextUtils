import React, { useState } from "react";

export default function TextForm(props) {
    const convertToUpper = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to UPPERCASE :)", "success");
    }

    const convertToLower = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to lowercase :)", "success");
    }

    const clearText = () => {
        setText("");                   // making it an empty string again
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard :)", "success");
    }

    const convertToTitleCase = () => {
        let mytext = text.split(" ");
        for (let i = 0; i < mytext.length; i++) {
            mytext[i] = mytext[i][0].toUpperCase() + mytext[i].slice(1);
        }
        // slice(1) will extract from index 1 to the end of the string
        setText(mytext.join(" "));            // join converts array to string on the basis of this given separator
        props.showAlert("Converted to Title Case :)", "success");
    }

    const RemoveExtraSpaces = () => {
        // jha bhi ek se zyda spaces hai => uske basis pe split krdo
        let mytext = text.split(/[ ]+/);
        // fir ek space lgake join krdo
        setText(mytext.join(" "));
        // join() => returns array as a string
        props.showAlert("Extra Spaces Removed :)", "success");
    }

    const handleListen = ()=>{
        var msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1>{props.heading}</h1>
                <div>
                    <textarea name="textarea" value={text} id="myBox" cols="130" rows="10" placeholder="Start typing..." onChange={handleChange} style={{ color: props.mode === "dark" ? "white" : "#042743", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white"}}></textarea>
                </div>
                {/* , border: props.mode === "dark" ? "1px solid white" : "1px solid #042743" */}
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertToUpper}>UPPERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertToLower}>lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertToTitleCase}>Title Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleListen}>Listen Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear</button>

                <div className="container my-3">
                    <h2>Your Text Summary:</h2>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    {/* \s+ => means 1 or more white spaces (spaces include new line also) */}
                    <p>Average time to read: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
                    <h2>Text Preview:</h2>
                    <p>{text.length===0 ? "Nothing to preview!" : text}</p>
                </div>
            </div>
        </>
    );
}