// import React, { PureComponent } from 'react';
import {useEffect, useState} from 'react';
import './Calculator.css';
export default function Calculator(){
    const [inputValue,setInputValue] = useState('');
    const [darkMode,setDarkMode] = useState(false);
    const [icon,setIcon] = useState('🌙');

    let handleBtns = (e) => {
        if(e.target.classList.contains('btn')){
           let value = e.target.textContent;
           console.log(`clicked on ${inputValue}`);
        //    handleChange(e.target.textContent);
        setInputValue(inputValue+value);

        }
    }

    let evaluate = () => {
        try{
            setInputValue(String(eval(inputValue)));

        }
        catch{
            setInputValue("Error");
        }
    }

    useEffect(()=>{
        document.body.style.background = darkMode ? 'black' : 'white';
        document.body.classList.add('dark');
        
        setIcon(darkMode ? '🌞' : '🌙');
    },[darkMode]);

    

    return (
        <>
        <button className="toggle" 
        onClick={(e)=>{setDarkMode(prev=> !prev);e.target.classList.add('toggling')}}
        style={{
                    backgroundColor: darkMode ? "yellow" : "black",
                    color: darkMode ? "black" : "white",

                }}
        >    {icon}
        </button>
        <div className='container' >
            <input type="text" name="" id="" className='input' value={inputValue}/>
            <div className="btns" onClick={(e)=>{handleBtns(e)}}>
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn">+</button>
                <button className="btn">4</button>
                <button className="btn">5</button>
                <button className="btn">6</button>
                <button className="btn">-</button>
                <button className="btn">7</button>
                <button className="btn">8</button>
                <button className="btn">9</button>
                <button className="btn">*</button>

                <button 
                className='clear' 
                onClick={()=>{setInputValue('')}}
                >C</button>
                
                <button className="btn">0</button>
                
                <button 
                className="equals" 
                onClick={(e)=>{
                    e.stopPropagation();
                    evaluate();
                }}>=</button>

                <button className="btn">/</button>
            </div>
        </div>
        </>
    );
}