import './App.css';
import Aydana from './components/Aydana';
import Ayperi from './components/Ayperi';
import Baktybek from './components/Baktybek';
import Jamiyla from './components/Jamiyla';
import Kurmangazy from './components/Kurmangazy';
import Nadyrbek from './components/Nadyrbek';

const App = () => {
  return (
    <div className="App">
      <div>
        <img src="logo192.png"/>
      </div>
      <nav className="nav-menu">
        <Baktybek />
        <Jamiyla />
        <Ayperi />
        <Nadyrbek />
        <Aydana />
        <Kurmangazy />
      </nav>
    </div>
  );
}

export default App;
