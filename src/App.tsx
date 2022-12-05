import React from 'react'
import {calcurator2} from './calcurator';

function App() {
  const [result, setResult] = React.useState('0');

  const toBinaryString = (num: string) => setResult(calcurator2(Number(num)));
  

  return (
    <div>
      <h1>10진수에서 2진수로(소숫점 아래 30자리 까지 가능)</h1>
      <input type="number" onChange={(e)=>toBinaryString(e.currentTarget.value)}/>
      <br/>
      2진수 변환 결과: {result}<small>(2)</small>
    </div>
  )
}

export default App