// import { useState } from "react"
import React,{ useState } from 'react'



export default function Textfrom(props) {
    const convertUppercase = () =>{
        //// console.log("Uppercase function called" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAl(" Converted into UpperCase", "danger", "Success")
    }
    const convertlowercase = () =>{
        //// console.log("Uppercase function called" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAl(" Converted into lowerCase", "danger", "Success")

    }
    const Firstletter = () =>{
        let newtext = text.toLowerCase().split(' ');
        for (var i = 0; i < newtext.length; i++) {
            newtext[i] = newtext[i].charAt(0).toUpperCase() + newtext[i].substring(1);     
        }
        let newText = newtext.join(' ');
        setText(newText);
        props.showAl(" Make First Letter Capital ", "info", "Success")
    }
    const hundleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAl(" All Text Copied !", "success", "Success")

    }
    const RmvexSpace = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      props.showAl("Remove Extra Sapce", "secondary", "Success")

    }
    const clearBox =() =>{
        ////document.getElementById('myBox').value = "";
        let newText = "";
        setText(newText)
        props.showAl(" Clear all Textarea !", "dark", "Success")
    }
    const handleOnChange = (e) =>{
        //// console.log("OnChange text in box")
        setText(e.target.value)
    }
    const [text, setText] = useState('')
    return (
    <>
    <div className='container' style = {{color:props.mode==="dark"?'white':'black'}}>
        <h3 className='mt-5 mb-3'>{props.heading}</h3>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor:props.mode === "dark"?'#000340':'white', color:props.mode==="dark"?'white':'black', cursor:"pointer"}}id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1"onClick={clearBox}>   X   </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1"onClick={hundleCopy}>Copy Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1"onClick={convertUppercase}>Convert to Uppercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1"onClick={convertlowercase}>Convert to lowercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1"onClick={Firstletter}>First letter</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1"onClick={RmvexSpace}>Extra space</button>

    </div>
    <div className="container mt-5 mb-3" style = {{color:props.mode==="dark"?'white':'black'}}>
        <h3>Your text Summary</h3>
        <p>{text.split(/\s+/).filter((space) =>{return space.length!==0}).length} words and {Array.from(text).filter((elm) => {return elm !== " "}).length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
