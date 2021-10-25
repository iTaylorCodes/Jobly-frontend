import NavBar from "./routes-nav/NavBar";
import Routes from "./routes-nav/Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
