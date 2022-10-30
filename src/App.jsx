import './App.css'
import Contador from './components/contador/contador';
import Lista from './components/Lista/Lista';
import Temporizador from './components/Temporizador/temporizador';

function App() {
  return(
    
    <div>
      <h1>
        <Contador />
        <Temporizador />
        <Lista />
      </h1>
    </div>
  );
}

export default App
