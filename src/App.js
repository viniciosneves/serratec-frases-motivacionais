import FraseMotivacional from 
  './componentes/FraseMotivacional'

import './App.css'
import Formulario from './componentes/Formulario';
import { useState } from 'react';

const App = () => {

  const [frases, setFrases] = useState([])

  const adicionaFrase = (frase) => {
    frase.criadaEm = new Date()
    setFrases([
      frase,
      ...frases // spread operator
    ])
  }
  
  return (
    <div className="container">
      <h1>Frases motivacionais para alegrar o seu dia!!</h1>

      <Formulario aoSalvar={adicionaFrase}/>
      
      {frases.map((frase, indice) => 
        <FraseMotivacional 
          key={indice}
          frase={frase.texto} 
          autor={frase.autor} 
          criadaEm={frase.criadaEm}/>
      )}

    </div>
  );
}

export default App;
