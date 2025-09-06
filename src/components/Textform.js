import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercasewasclciked");
        let  newText = text.toUpperCase();
        setTest(newText)
        props.showAlert("converted to uppercase", "success");
    }
    const handleLowClick = ()=>{
      let newTest = text.toLowerCase();
      setTest(newTest)
      props.showAlert("converted to Lowercase", "success");
    }
    const handleClearClick = ()=>{
      let newTest = "";
      setTest(newTest)
    }
    const handleRemoveSpaceClick = ()=>{
      let newTest = text.replaceAll(" " , "");
      setTest(newTest)
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setTest(event.target.value)

    }
    const [text, setTest] = useState("");
//   Test("new text"); // wrong way to change the value of text
//    setTest("new text");//correct way to change value of text
  return (
    <>
    <div className="container" style={{color:(props.mode === 'dark' || props.mode === 'red' || props.mode === 'yellow'||props.mode==='green')?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black' }} id="myBox" onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleRemoveSpaceClick}>Remove Spaces</button>
    
    </div>
    <div className="container my-3" style={{color:(props.mode === 'dark' || props.mode === 'red' || props.mode === 'yellow'|| props.mode==='green')?'white':'black'}}>
<h2>Your Text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>read time {text.split(" ").length * 0.008} minutes</p>
<h2>Preview</h2>
<p>{text.length>0? text: "Enter text in above textbox to preview it here."}</p>
    </div>
    </>
  )
}
