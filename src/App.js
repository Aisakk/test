import { useEffect } from 'react';
import './App.css';


function App() {
  let numberList = [1,2,3,4,5,6,7,8,9];
  let number = []
  let result;
  

  function test(event){
    if(number.length < 2){
      number.push(Number(event.target.value))
    }
    console.log(number)
  }
  useEffect(()=>{
  
  })
  return (
    <div className="App">
      <h2>Select digits to create a Sum</h2>
      <select onChange={test} defaultValue="Escoja una opcion">
        <option selected> Escoja una opcion</option>
        {numberList.map((value,index) => <option key={index} value={value}>{value}</option>)}
      </select>
      <h3>Suma:</h3>
      { number.length < 2 ? <p>0</p> : number.reduce((a,b)=> a+b)}
    </div>
  );
}

export default App;
