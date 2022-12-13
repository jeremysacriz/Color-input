import { useState } from 'react';
import './App.css';

function App() {
   /* Array destructuring: 
   - First argument is initial value (value passed in useState('...'))
   - Second argument is the function which changes the state of the UI
   */
   const [color, setColor] = useState('black'); 
   const [result, setResult] = useState();

   /* The function below is passed as an event handler, rather than a string. 
   - HTML: onSubmit="handleSubmit(e)", passed as a string
   - JSX: onSubmit={handleSubmit}, passed as an event handler enclosed in curly braces (evaluates JS expressions)
   */
   const handleSubmit = (e) => { 
      e.preventDefault() // cancels the default action that belongs to the event

      let colorValue = e.target.username.value
      let s = new Option().style;
      s.color = colorValue

      let regex = /^#[0-9A-F]{6}$/i // this regex tests if the user input matches a specific hex code
      let result = regex.test(colorValue) // returns true or false depending on user input

      if (s.color === colorValue || result === true) {
         setColor(colorValue) // this function changes the state of the UI to the color that the user submitted
         setResult(true) // displays a message to the user 'This color is {colorValue}'
      } else {
         console.log('Invalid color')
         setResult(false) // displays a message to the user 'Please enter a valid color'
      }
   }

   return (
      <section className="app">
         <div className="app-container">
            <div className="bg-color" style={{ background: color }}></div>
            <form className="form" onSubmit={handleSubmit}>
               <input className="input" type="text" placeholder="Enter a Hex code" name="username" autoComplete="off" />
               <button className="submit" type="submit">Submit</button>
            </form>
            <div>{result === true && <div className="valid"></div>}</div>
            <div>{result === false && <div className="invalid">Please enter a valid color.</div>}</div>
         </div>
      </section>
   )
}

export default App;
