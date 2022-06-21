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
    const name = Array.from(new Set(firstName.toLowerCase().split("")))
    const name2 =Array.from(new Set(secondName.toLowerCase().split("")))
    let score = Math.abs(name2.length - name.length) / 5;
    if(name2.length === name.length){
      score = score+1;
    }
    name.forEach((ch)=>{
      if(name2.includes(ch)){
        score++
      } })
    let finalScore = ((score/name.length) * 100)>=100?100:((score/name.length) * 100).toFixed(0)
    setResult(finalScore)
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
               <div className='result'>{result}</div>
                <img className='biglove' src={love}/>
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
