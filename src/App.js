import './App.css';
import Header from './components/Header';
import Aydana from './components/Aydana';
import Ayperi from './components/Ayperi';
import Baktybek from './components/Baktybek';
import Jamiyla from './components/Jamiyla';
import Kurmangazy from './components/Kurmangazy';
import Nadyrbek from './components/Nadyrbek';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Baktybek />
      <Jamiyla />
      <Ayperi />
      <Nadyrbek />
      <Aydana />
      <Kurmangazy />

    </div>
  );
}

export default App;
