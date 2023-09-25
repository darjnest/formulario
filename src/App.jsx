import { useState } from 'react';
import Registro from './componentes/Registro/Registro.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [alert, setAlert] = useState({
    texto: '',
    tipo: '',
    estado: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return <Registro alert={alert} onAlert={addAlert} />;
}

export default App;
