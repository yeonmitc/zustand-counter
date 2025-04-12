
import './App.css';
import counterStore from './stores/CounterStore';

function App() {
    //const [count, setCount] = useState(0);
    const { count, increase, decrease, increaseBy , decreaseBy} = counterStore();
  return (
<>
<div className="app-container">
      <h1>COUNT  {count}</h1>
      <div className="button-group">
        <button onClick={increase}> ➕1️⃣ </button>
        <button onClick={decrease}>➖1️⃣</button>
        <button onClick={() => increaseBy(10)}> ➕🔟 </button>
        <button onClick={() => decreaseBy(20)}>➖🔟 </button>
      </div>
    </div>
</>
  );
}

export default App;
