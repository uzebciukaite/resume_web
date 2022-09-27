import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './components/Toolbar';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Toolbar/>
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contacts/>

    </div>
  );
}

export default App;
