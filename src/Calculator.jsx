import React, {useState} from 'react';

export const Calculator = () => {
    const [inputValue1, setInputValue1] = useState(0);
    const [inputValue2, setInputValue2] = useState(1);
    const [result, setResult] = useState (0)
    let inputHandler = (e) => {
        console.log(e.target.value);
        if(e.target.name === "inputValue1") {
            setInputValue1(e.target.value)
        } else {
            setInputValue2(e.target.value)
        }
    }  
    let plus = ()=>{
        setResult(parseInt(inputValue1)+parseInt(inputValue2))
    }
    let minus = ()=>{
        setResult(parseInt(inputValue1)-parseInt(inputValue2))
    }
    let umnojeniya = ()=>{
        setResult(parseInt(inputValue1)*parseInt(inputValue2))
    }
    let deleniya = ()=>{
        setResult(parseInt(inputValue1)/parseInt(inputValue2))
    }

    return (
        <div className="container">
            <h3>Calculator</h3>
            <hr />
            <input name="inputValue1" value={inputValue1} onChange={inputHandler} type="number" ></input>
            <input name="inputValue2" value={inputValue2} onChange={inputHandler} type="number" ></input>
            <button onClick={()=>plus()} >+</button>
            <button onClick={()=>minus()} >-</button>
            <button  onClick={()=>umnojeniya()}>*</button>
            <button  onClick={()=>deleniya()} >/</button>
              <div className="result">
                result: {result}
            </div>
            <hr />
        </div>
    )
}

