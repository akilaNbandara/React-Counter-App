import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type CounterProps = {
	initCount: number,
	maxValue: number,
	minValue: number
}

function App(props: Partial<CounterProps>) {
	const [count, setCount] = useState(props.initCount || 0);

  return (
    <div className="App">
      <div data-testid="count-value"> {count} </div>
			<br></br>
			<button disabled={count === props.maxValue} name='increment' onClick={() => setCount(count => ++count)}> Increment </button>
			<button disabled={count === props.minValue} name='decrement' onClick={() => setCount(count => --count)}> Decrement </button>
    </div>
  );
}

export default App;
