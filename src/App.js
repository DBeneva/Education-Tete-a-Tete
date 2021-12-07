import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
