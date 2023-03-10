import './App.css';
import Presentacion from './components/Inicio';
import Navbar from './components/Nav';
import Footerf from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Presentacion/>
      <Footerf/>
    </div>
  );
}

export default App;
