import React,{useState}from 'react'

export default function Textform(props) {
    const [text, setText]=useState("");
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Primary","Converted to UpperCase!!");
    }
    const handleDownClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Info","Converted to LowerCase!!");
    }

    const OnTextChange =(event)=>{
        // console.log("The Text is Changed");
        setText(event.target.value);
    }
    const clearText=()=>{
        setText("");
        props.showAlert("Success","Text Cleared : )");
       
    }
    const RemoveSpaces=()=>{
        setText(text.replace(/\s+/g,' ').trim());
        props.showAlert("Info","Extra Spaces Removed!!");
    }
    const copyText=()=>{
        var text2 = document.getElementById("myBox");
        text2.select();
        navigator.clipboard.writeText(text2.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Success","Text Copied!!");
    }

    return (
        <>
        <div className="container mb-2" style={{color:props.mode==='dark'?'white':'#053a88'}}>
            <h3 className="mb-1">{props.heading}</h3>
            <div className="mb-2">
                <textarea className="form-control" style={{background:props.mode==='light'?'white':'#02265a',color:props.mode==='light'?'black':'white'}} value={text} onChange={OnTextChange} id="myBox" rows="9" placeholder="Enter Some Text here: "></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={RemoveSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={clearText}>Clear</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={copyText}>Copy</button>
        </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'#053a88'}}>
                <h4>My text summary: </h4>
                <p>word count: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
                <br/>character count: {text.length}</p>
            </div>
        </>
    )
}
