import { useState } from 'react';
import './App.css';

function App() {
   /* Array destructuring: 
   - First argument is initial value (value passed in useState('...'))
   - Second argument is the function which changes the state of the UI
   */
   const [color, setColor] = useState('white'); 
   const [result, setResult] = useState();

   /* The function below is passed as an event handler, rather than a string. 
   - HTML: onSubmit="handleSubmit(e)", passed as a string
   - JSX: onSubmit={handleSubmit}, passed as an event handler enclosed in curly braces (evaluates JS expressions)
   */
   const handleSubmit = (e) => { 
      e.preventDefault() // cancels the default action that belongs to the event

      let inputValue = e.target.username.value
      let colorValue = inputValue.toLowerCase()
      let s = new Option().style;
      s.color = colorValue

      let regex1 = /^#[0-9A-F]{6}$/i // a regex is a sequence of characters that is used to match character combinations in strings
      let result = regex1.test(colorValue) // searches for a match between regex1 & a specified string (in this case, a 6 digit hex code), returns true or false 


      let regex2 = /^#[0-9A-F]{3}$/i
      let result2 = regex2.test(colorValue) // searches for a match between regex2 & a specified string (in this case, a 3 digit hex code), returns true or false

      if (s.color === colorValue || result === true || result2 === true) {
         setColor(colorValue) // this function changes the state of the UI to the color that the user submitted
         setResult(true) // displays a message to the user 'This color is {colorValue}'
      } else {
         setResult(false) // displays a message to the user 'Please enter a valid color'
      }
   }

   return (
      <section className="app">
         <div className="app-title">
            <h1>Color Checker</h1>
         </div>
         <div className="app-container">
            <div className="bg-container">
               <div className="bg-color" style={{ background: color }}></div>
               <form className="form" onSubmit={handleSubmit}>
                  <input className="input" type="text" placeholder="Enter a color..." name="username" autoComplete="off" />
                  <button className="submit" type="submit">Submit</button>
               </form>
               <div>{result === true && <div className="valid">This color is {color}.</div>}</div>
               <div>{result === false && <div className="invalid">Please enter a hex code or valid color.</div>}</div>
            </div>
         </div>
      </section>
   )
}

export default App;
