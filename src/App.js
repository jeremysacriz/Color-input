import { useState } from 'react';
import './App.css';

function App() {
   const [color, setColor] = useState('black');
   const [result, setResult] = useState();

   const handleSubmit = (e) => {
      e.preventDefault()

      let colorValue = e.target.username.value
      let s = new Option().style;
      s.color = colorValue

      let regex = /^#[0-9A-F]{6}$/i
      let result = regex.test(colorValue)

      if (s.color === colorValue || result === true) {
         setColor(colorValue)
         setResult(true)
      } else {
         console.log('Invalid color')
         setResult(false)
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
