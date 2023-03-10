import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./Components/ComponentA";

function App() {
  const testContact = {
    name: "Marc",
    surname: "García",
    email: "marc@xxxx.com",
    connected: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA contact={testContact} />
      </header>
    </div>
  );
}

export default App;
