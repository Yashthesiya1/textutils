// import { useState } from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";
export default function From(yash) {
    const changevalue = (event) => {
        // console.log(event);
        setext(event.target.value);
    }
    // changevalue end
    const changeuppercase = () => {
        if (text.toUpperCase() === '') {
            alert('Please Enter The Text');
        } else {

            let newtext = text.toUpperCase();
            setext(newtext);
        }
    }
    // changeuppercase end
    const changelowercase = () => {
        let newtextlower = text.toLowerCase();
        setext(newtextlower);
    }
    const textclean = () => {
        setext("");
    }
    // textclean end
    const copytext = () => {
        setext(text.select());
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }
    // css add
    // darkmode code here
    const togglebtn = () => {
        if (mystyle.color==="white") {
            setstyle({
                color:"black",
                backgroundColor:"white"
            });
            setbtntext("Dark Mode");
        }
        else{
            setstyle({
                color:"white",
                backgroundColor:"black"
            });
            setbtntext("Noraml Mode");
        }
    }

    // text state
    const [text, setext] = useState("");
    // toggle state
    const [mystyle, setstyle] = useState({
        color: "white",
        backgroundColor: "black"
    });
    // btn text state
    const [btntext,setbtntext]= useState("Dark Mode")
    return (
        <>
        <body style={mystyle}>
            <div className="form-floating">
                <textarea className="form-control" value={text} onChange={changevalue} style={mystyle} placeholder="Leave a comment here" rows="10"></textarea>
                <label htmlFor="floatingTextarea">{yash.heading}</label>
            </div>
            <button className="btn btn-info mt-4 " onClick={changeuppercase}>ChangeTextToUpercase</button>
            <button className="btn btn-dark ms-2 mt-4" onClick={changelowercase}>ChangeToLowerCase</button>
            <button className="btn btn-primary mt-4 ms-2" onClick={textclean}>TextClean</button>
            {/* <button className="btn btn-d mt-4 ms-2" onClick={copytext}>TextCopy</button> */}
            <div className="container ">
                {/* <button onClick={wordlength}></button> */}
                <h3 className="mt-3"><strong>Word Count:</strong> {text.split(" ").length - 1} <strong>Character</strong> {text.length}</h3>
            </div>
            <button className="btn btn-dark" style={mystyle} onClick={togglebtn}>{btntext}</button>
            </body>
        </>
    );
}
From.propTypes = { heading: PropTypes.string.isRequired }