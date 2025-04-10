import React, { useState } from 'react'


export default function Text(props) {

    const upper = () => {
        console.log("on clicked" + text);
        let update = text.toUpperCase();
        settext(update)

    }
    const lower = () => {
        console.log("on clicked" + text);
        let update = text.toLocaleLowerCase();
        settext(update)

    }
    const copy =() =>{
        navigator.clipboard.writeText(text)
    }
    const clear = () => {
        console.log("on clicked" + text);
        let update = "";
        settext(update)

    }

    const handleonChange = (event) => {
        console.log("onchnage ");
        settext(event.target.value)  // without this i can not write on textbox in output

    }
    const [text, settext] = useState("Enter your text here")
    const [lable, uplable] = useState("Dark mode")
    const [mystyle, upstyle] = useState(() => ({
        color: "black",
        backgroundColor: "white"
    }))

    const darkmode = () => {
        if (mystyle.color === "black") {
            upstyle({
                color: "white",
                backgroundColor: "black"
            })
            uplable("White mode")
        }
        else {
            upstyle({
                color: "black",
                backgroundColor: "white"
            })

            uplable("Dark mode")

        }

    }
    return (
        <>
            <div>
                <div className="container mt-10" my-10="true" style={{color : props.mode==="dark"? "white":"black"}}>
                    <link to="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />

                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Textutills - Word counter,Uppercase,Lowercase,Clear</h2></label>
                    <textarea className="form-control" id="mybox" style={{
                        backgroundColor: props.mode === "light" ? "#e9ecef" : "white",
                       color : props.mode==="light"? "dark":"light"
        
                    }} rows="8" value={text} onChange={handleonChange} >{text}</textarea>
                    <button type="button" className="btn btn-primary my-3" onClick={upper}>Upper case</button>
                    <button type="button" className="btn btn-primary my-3 mx-3" onClick={lower}>Lower case</button>
                    <button type="button" className="btn btn-primary my-3 mx-3" onClick={copy}>Copy</button>
                    <button type="button" className="btn btn-primary my-3 mx-2" onClick={clear}>Clear</button>
                </div>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>


                <div className='container' style={mystyle}>
                    <h3>Your Text Summry</h3>
                    <p> Number of words:{text.split(" ").filter((element)=>{
                        return element.length!==0
                    }).length}<br />
                        Number of Character:{text.length}  <br />
                        Number of Sentences:{text.split(".").filter((element)=>{
                        return element.length!==0
                    }).length}</p>

                    <p>
                        Time for read : {0.0076 * text.split("/\s+/").filter((element)=>{
                        return element.length!==0
                    }).length} minutes
                    </p>
                    <h3>preview</h3>
                    <p>{text.length>0? text:"Enter your text in text box"}</p>
                    <button type="button" className='btn btn-primary' onClick={darkmode} >{lable}</button>
                </div>
            </div>
        </>
    )
}
