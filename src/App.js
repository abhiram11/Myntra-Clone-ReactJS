import "./App.css";
import Home from "./components/Home";
import Men from "./components/Men";
import Navbar from "./components/Navbar";
import Women from "./components/Women";

function App() {
  return (
    <div className="app">
      {/* <h1>Myntra clone begins</h1> */}
      <Navbar />
      <Home />
      <Men />
      <Women />
    </div>
  );
}

export default App;
