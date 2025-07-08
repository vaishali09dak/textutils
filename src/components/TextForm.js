import React,{useState}from 'react'

export default function TextForm(props) {

const handleUpClick=()=> {
  // console.log("Uppercase was clicked"+text);
  setHistory([...history,text]);
  setRedoHistory([]);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase!","success");
}

const handleDownClick= () => {
  setHistory([...history,text]);
  setRedoHistory([]);
  let newText2 = text.toLowerCase();
  setText(newText2);
  props.showAlert("Converted to lowercase!","success");
}

const handleOnChange=(event)=> {
  // console.log("Onchange");
  setHistory([...history,text]);
  setRedoHistory([]);
  setText(event.target.value);
}

const handleUndo=()=> {
  if(history.length===0) return ;

  let lastText=history[history.length-1];
  setRedoHistory([text,...redoHistory]);
  setText(lastText);
  setHistory(history.slice(0,-1));
}

const handleRedo=()=> {
  if(redoHistory.length===0) return ;

  let newText=redoHistory[0];
  setRedoHistory(redoHistory.slice(1));
  setText(newText);
  setHistory([...history,text]);
}

const handleCopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text copied!","success");
}

const handleClear=()=>{
  setText('');
  setHistory([...history,text]);
  setRedoHistory([]);
  props.showAlert("Text cleared!","success");
}

const handleExtraSpaces=()=>{
  let newText= text.split(/[  ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!","success");
}

  const [text,setText] = useState('');
  //text=new text ----this is a wrong way
  //setText("New text");----this is a correct way

  const[history,setHistory] = useState([]);
  const[redoHistory, setRedoHistory] = useState([]);

  const textColor = props.mode==='dark'?'#ffffff' : (props.themeColor ?'white':'#042743');

  const getButtonStyle = () => {
  if (props.mode === 'dark' && props.themeColor) {
    if (props.themeColor === '#198754') {
    return { backgroundColor: '#157347', color: 'white', border: 'none' }; // darker green
  }

  if (props.themeColor === '#6f42c1') {
    return { backgroundColor: '#8951d4', color: 'white', border: 'none' }; // lighter purple
  }
  }

  if (props.mode === 'dark' && !props.themeColor) {
    return { backgroundColor:'#042743' , color: 'white', border: 'none' }; // default blue
  }

  if (props.themeColor === '#198754') {
    return { backgroundColor: '#157347', color: 'white', border: 'none' }; // darker green
  }

  if (props.themeColor === '#6f42c1') {
    return { backgroundColor: '#8951d4', color: 'white', border: 'none' }; // lighter purple
  }

  return { backgroundColor: '#0d6efd', color: 'white', border: 'none' }; // default light mode
};

  return (
    <>
    <div className = "container" style={{color: textColor}} >
        <h1>{props.heading}</h1>
     <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example Textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{   backgroundColor: props.mode === 'dark' ? (props.themeColor ||'#042743') : (props.themeColor || 'white'),color:textColor}} rows="8"></textarea>
     </div>
     <button className="btn mx-2"  style={getButtonStyle()} onClick={handleUpClick}>Convert to uppercase</button>
     <button className="btn mx-2"  style={getButtonStyle()} onClick={handleDownClick} >Convert to lowercase</button>
     <button className="btn mx-2"  style={getButtonStyle()} onClick={handleUndo}>Undo</button>
     <button className="btn  my-2"  style={getButtonStyle()} onClick={handleRedo} >Redo</button>
     <button className="btn  mx-2"   style={getButtonStyle()} onClick={handleCopy} >Copy Text</button>
     <button className="btn  mx-2"  style={getButtonStyle()} onClick={handleClear} >Clear</button>
     <button className="btn"   style={getButtonStyle()} onClick={handleExtraSpaces}  >Remove extra spaces</button>
     
     </div>

     <div className="container my-3" style={{color: textColor}} >
      <h2>Your text summary</h2>
      <p> {text.trim()===""?0:text.trim().split(/\s+/).length} words,{text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
     </div>
    </>
  )
}


//{text.length==0?0:text.split(" ").length}{text.split(" ").length}