import './App.css';
import About from './components/About';
import Expertise from './components/Expertise';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Work from './components/Work';

function App() {
  return (
    <div>
      <div className="w-[90%] m-auto">
        <Navbar />
        <Home />
        <About />
      </div>
      <Work />
      <div className="w-[90%] m-auto">
        <Expertise />
      </div>
    </div>
  );
}

export default App;
