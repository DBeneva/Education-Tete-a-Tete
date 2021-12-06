import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Header />
      <Home />
      <Routes>
        <Route path="/" component={<Home />} />
        {/* <Route path="/teachers" component={} /> */}
      </Routes>
    </div>
  );
}

export default App;
