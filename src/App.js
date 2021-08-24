import "./App.css";
import Home from "./components/Home";
import Men from "./components/Men";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Myntra clone begins</h1>
      <Navbar />
      <Home />
      <Men />
    </div>
  );
}

export default App;
