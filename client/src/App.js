// import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom"
import Home from './components/Home/Home';
import IncorporationForm from './components/History/History2';
import HistoryForm from './components/History/History';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/history" element={<HistoryForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
