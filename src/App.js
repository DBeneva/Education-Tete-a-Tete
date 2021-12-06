import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Loader /> */}
        <Header />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
