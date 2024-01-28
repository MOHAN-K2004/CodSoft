import React, { useEffect, useState } from "react";

import "./Calculator.css";
const Calculator = () => {
  const [output,setOutput] = useState("");
  const [display,setDisplay] = useState("");
  const specialChars = ["%", "*", "/", "-", "+", "="];
  const calculate = (btnValue) => {
    // display.focus();
    if (btnValue === "=" && output !== "") {
      setOutput(eval(output.replace("%", "/100")));
    } else if (btnValue === "AC") {
      setOutput("");
    } else if (btnValue === "DEL") {
      setOutput(output.toString().slice(0, -1));
    } else {
      if (output === "" && specialChars.includes(btnValue)) return;
          setOutput(output+""+btnValue);
    }
    setDisplay(output);
  };
  useEffect(() => {
   setDisplay(output);
  }, [output])
  

  // buttons.forEach((button) => {
  //   button.addEventListener("click", (e) => calculate(e.target.dataset.value));
  // });
  return (
    <>
      <div className="area">
        <h1 className="title">Calculator</h1>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="circles1">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="container">
          <input type="text" className="display" value={display} />
          <div className="buttons">
            <button onClick={()=>calculate("AC")} className="operator" data-value="AC">
              AC
            </button>
            <button onClick={()=>calculate("DEL")} className="operator" data-value="DEL">
              DEL
            </button>
            <button onClick={()=>calculate("%")} className="operator" data-value="%">
              %
            </button>
            <button onClick={()=>calculate("/")} className="operator" data-value="/">
              /
            </button>
            <button onClick={()=>calculate("7")} data-value="7">7</button>
            <button onClick={()=>calculate("8")} data-value="8">8</button>
            <button onClick={()=>calculate("9")} data-value="9">9</button>
            <button onClick={()=>calculate("*")} className="operator" data-value="*">
              *
            </button>
            <button onClick={()=>calculate("4")} data-value="4">4</button>
            <button onClick={()=>calculate("5")} data-value="5">5</button>
            <button onClick={()=>calculate("6")} data-value="6">6</button>
            <button onClick={()=>calculate("-")} className="operator" data-value="-">
              -
            </button>
            <button onClick={()=>calculate("1")} data-value="1">1</button>
            <button onClick={()=>calculate("2")} data-value="2">2</button>
            <button onClick={()=>calculate("3")} data-value="3">3</button>
            <button onClick={()=>calculate("+")} className="operator" data-value="+">
              +
            </button>
            <button onClick={()=>calculate("0")} data-value="0">0</button>
            <button onClick={()=>calculate("00")} data-value="00">00</button>
            <button onClick={()=>calculate(".")} data-value=".">.</button>
            <button onClick={()=>calculate("=")} className="operator" data-value="=">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
