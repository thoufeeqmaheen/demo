import './App.css';
import { useState } from 'react';
import logo from './assets/ionaughtlogo.svg'
import love from './assets/Vector.svg'
function App() {
  const [firstName,setFirstName]=useState("")
  const [secondName,setSecondName]=useState("")
  const [result,setResult]=useState("")
  const calculate = (e)=>{
    e.preventDefault()
    console.log(firstName,secondName);
    setResult("hai")
  }
  return (
    <div className="App">
        <header>
          <img className='logo' src={logo} />
        <h1>HAPPY VALENTINES DAY</h1>
        </header>
          <div className='main_container'>
            <div className='left_container'>
              <h2>YOUR CRUSH</h2>
              <form onSubmit={calculate}>
                <input value={firstName} onChange={e=>setFirstName(e.target.value)} className='textbox' type="text" placeholder='your name' />
                <input value={secondName} onChange={e=>setSecondName(e.target.value)} className='textbox' type="text" placeholder='crush name' />
                <h2>LOVE METER</h2>
                {result}
                <img src={love}/>
                <button>SUMBIT</button>
              </form>
            </div>
            <div className='right_container'>
              <p>NOTE: We Will Publish All Names And love meter in the leaderboard soon</p>
              <h3>Give Love to IONAUGHT</h3>
            

            </div>

          </div>
    </div>
  );
}

export default App;
