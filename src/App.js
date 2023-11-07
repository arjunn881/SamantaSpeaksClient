import { AllRouter } from "./AllRouter/AllRouter";
import "./App.css";
import { Header } from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Header />
        <AllRouter />
      </Router>
    </div>
  );
}

export default App;
