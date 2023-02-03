import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick =()=>{
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange =(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const[text,setText] = useState('Enter text here2');
  return (
<>
  <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
   <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Example textarea</label>
    <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
   </div>
   <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
   <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
   
  </div>
  <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
</> 
  )
}
