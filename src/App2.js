import { useState } from 'react';
import './App.css';

const App = () => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');

   const handleSubmit = e => {
      e.preventDefault();

      console.log('First Name:', firstName)
      console.log('Last Name:', lastName)

      setFirstName('')
      setLastName('')
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input 
               id="first_name"
               name="first_name"
               type="text"
               onChange={e => setFirstName(e.target.value)}
               value={firstName}
            />
            <input 
               id="last_name"
               name="last_name"
               type="text"
               onChange={e => setLastName(e.target.value)}
               value={lastName}
            />

            <button type="submit">Submit form</button>
         </form>
      </div>
   )
}

export default App;