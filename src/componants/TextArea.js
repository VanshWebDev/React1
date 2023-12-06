import React, { useState } from 'react';

export default function Textarea(props) {
    const detail = document.querySelector(".detail")
    const [text, setText] = useState("");
    function upperCase() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    function lowerCase() {
        let newText = text.toLowerCase();
        setText(newText);
    }
    function removeSpace() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }
    function copy() {
        navigator.clipboard.writeText(text);
    }
    function paste() {
        detail.innerHTML = `Characters: ${text.replace(/\s/g, '').length} Words: ${text.split(/\s+/).filter((word) => word !== '').length}`;
        navigator.clipboard.readText()
            .then((data) => {
                // Append the pasted text to the existing text
                setText((prevText) => prevText + data);
            })
            .catch((error) => {
                console.error('Error pasting text:', error);
            });

    }
    function clear() {
        setText("");
        detail.innerHTML="empty"
    }


    function textTracker(e) {
        let inputText = e.target.value;
        setText(inputText)

        const charCount = inputText.replace(/\s/g, '').length;
        const wordCount = inputText.split(/\s+/).filter((word) => word !== '').length;

        document.querySelector(".detail").innerHTML = `Characters: ${charCount} Words: ${wordCount}`;

    }

    return (
        <div className="mb-3 my-4 container text-dark">

            <h2 className={`text-${props.textMode}`}>{props.heading}</h2>
            <textarea className="form-control" placeholder='Enter your text' value={text} id="exampleFormControlTextarea1" rows="3" onChange={textTracker}></textarea>
            <div>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={upperCase}>Upper Case</button>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={lowerCase}>Lower Case</button>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={removeSpace}>Remoce extra space</button>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={copy}>Copy</button>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={paste}>Paste</button>
                <button type="button" className="btn btn-danger my-2 mx-2" onClick={clear}>Clear</button>
            </div>
            <div>
                <p className={`detail text-${props.textMode}`}></p>
            </div>
        </div>
    )
}
