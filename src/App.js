import './App.css';
import { useState } from 'react';

function App() {

  const [exp, setExp] = useState("")
  const [result, setresult] = useState("")
  const evaluateExp = (e)=>{
    e.preventDefault()
if(exp == ""){
  alert("Enter Experssion")
}
    setresult(eval(exp))
  }
  return (
    <div className="app">
     <div className='container'>
      <h1 className='center'>Calculator</h1>
      <form onSubmit={evaluateExp}>
        <div>
          <input type='text' placeholder='Enter the here' onChange={(e)=>{setExp(e.target.value)}}></input>
        </div>

        <div>
          <button type='submit'>Calculate</button>
    
        </div>
      </form>

      <div>
        <h2>{result}</h2>
      </div>
     </div>
    </div>
  );
}

export default App;
