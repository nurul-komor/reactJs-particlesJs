import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ParticlesComponent from "./components/particles";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ParticlesComponent />
    </div>
  );
}

export default App;
