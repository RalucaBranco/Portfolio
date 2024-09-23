import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <Counter name='Matcha per year' btnName='Yumm'/>
      <Counter name='Coffee per year' btnName='Yumm'/>
      <Counter name='Smiles per year' btnName='hihi'/>
      <Counter name='Hugs per year' btnName='HUUUG'/>
      <Counter name='Breaks per year' btnName='Relax'/>
      <Counter name='Moments of despair per year' btnName='Yey...'/>
    </div>
  );
}

export default App;
