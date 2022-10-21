import './App.css'
import Contador from './components/contador/contador';
import Temporizador from './components/Temporizador/temporizador';

function App() {
  return(
    
    <div>
      <h1>
        <Contador />
        <Temporizador />
      </h1>
    </div>
  );
}

export default App
