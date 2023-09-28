import React, { useState } from 'react'
import './State_Change.css'

function State_Change() {


    const [num, setNum] = useState({
        number: 0
    });

    if (num.number < 0) 
    {
        num.number = 0;    
    }


  return (
    <div className='main'>


        <div className="sub-main">

            <h1> React Web </h1>

            <h2> {num.number} </h2>          

            <div className="D-I">
                <button className='btns' onClick={() => setNum({...num,number:num.number-1})}> Decrement </button>    
                <button className='btns' onClick={() => setNum({...num,number:num.number+1})}> Increment </button>    
            </div>  
        <br />
            <div className="R">
                <button className='btns' onClick={() => setNum({...num,number:num.number=0})}> Reset </button>
            </div>

        </div>

    </div>
  )
}

export default State_Change