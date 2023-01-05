import React from 'react'
import { useState } from 'react';

import "./css/bmi.css"

const Bmcl = () => 

// import logo from './logo.svg';

{
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (event) => {
    event.preventDefault()

    if (weight === 0 || height === 0)
    {
      alert("please enter valid wight and height")
    }
    else
    {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))


      if(bmi<25)
      {
        setMessage('You are Underwight')
      }
      else if (bmi >= 25 && bmi <30)
      {
        setMessage("You Are healthy Weight")
      }
      else{
        setMessage("You Are Overwight")
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }
 

  return (
    <div className="App">

      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>


          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>

          <div>
          <label>Height (in)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>

        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
        </form>

        <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>

      </div>
      




    </div>
  );
}

export default Bmcl