import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import '../src/index.css';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        </Routes>
      <Routes>
        
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
