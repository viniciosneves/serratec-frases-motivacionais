import './estilos.css'
import Rodape from './Rodape'
import Card from '../Card/Card'

function FraseMotivacional (props)  {

  return <Card>
    <p className="frase">
      - "{props.frase}"
    </p>
    <Rodape 
      autor={props.autor} 
      criadaEm={props.criadaEm}/>
  </Card>
}

export default FraseMotivacional

