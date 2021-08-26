import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here ");
    const [btnCopyText, setBtnCopytext] = useState("Copy text");
    // text = "vfvc"// Wrong way to change the state
    // setText("vfvc")// correct way to change the state
    // const analyzedWords = ()=>{
    //     let words text.split(" ").length
    // }
    let wordscount = text===""?0:text.split(/[ ]+/).length
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Converted to Uppercase","success");
    }
    const handlelowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Converted to Lowercase","success");
    }
    const handlecopyClick = ()=>{
        navigator.clipboard.writeText(text);    
        setBtnCopytext("Copied")
        setTimeout(() => {
            setBtnCopytext("Copy Text")
        }, 1000);
        props.alert("Copied to clipboard","success");
    }
    const handleExtraspaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.alert("Extra spaces removed","success");
    }
    const handleclearClick = ()=>{
        setText("");
        props.alert("All text cleared","success");
    }
    const handleCapitalClick = ()=>{
        let newText = text.toLowerCase();
        let start = text.charAt(0).toUpperCase();
        newText = newText.slice(1,)
        setText(start + newText);
        props.alert("Capitalized the text","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    return ( 
        // #dfe9ec
        <div> 
        <div className="container" style={{color : `${props.textTheme==="black"?"white":"black"}`}}>
            <h2>{props.titleheading} </h2>
        <div className="mb-3">
        <textarea className="form-control" onChange = {handleOnChange} id="mytext" rows="3" value= {text} style={{backgroundColor : `${props.textThemedark==="dark"?"#dfe9ec":"white"}`}}></textarea>
        </div>
        <div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlelowClick}>Convert to lowercase </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCapitalClick}>Capitalize</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraspaceClick}>Remove extra spaces</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlecopyClick}>{btnCopyText} </button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleclearClick}>Clear text </button>
        </div>  
        </div>
        <div className="container mx-2" style={{color : `${props.textTheme==="black"?"white":"black"}`}}>
            <h1>Your text analiztion:</h1>
            <p>{wordscount} words, {text.length} characters</p>
            <p>{(4.16)*wordscount} sec :Read time</p>

        </div>
        </div>        
    )
}
