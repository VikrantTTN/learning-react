import React,{useState} from "react";

function Form(props) {

  const [text, settext] = useState("")

  const handleClick=()=>{
    const upperCaseText=text.toUpperCase();
    settext(upperCaseText)
  }

  const handleLowClick=()=>{
    const lowerCaseText=text.toLowerCase();
    settext(lowerCaseText)
  }

  const handleCapitalise=()=>{
    const words=text.split(' ');

    let capitalisedString=[];

    words.forEach((word)=>{
      word=word[0].toUpperCase()+word.substring(1);
      capitalisedString.push(word);
    })
    capitalisedString=capitalisedString.join(" ");
    settext(capitalisedString)
    
  }

  const handleOnChange=(event)=>{
    settext(event.target.value)
  }
  return (
    <>
        <h1>{props.title}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="formBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        />
      </div>

      <button className="btn btn-primary mx-2" onClick={handleClick}>
        Convert to Upper Case
      </button>

      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to Lower Case
      </button>


      <button className="btn btn-primary" onClick={handleCapitalise}>
        Capitalise the First Letter
      </button>

      <h1>Summary</h1>

      <p>Words:{text.split(" ").length}</p>
      <p>Characters:{text.length}</p>
      

    </>

    


  );
}

export default Form;
