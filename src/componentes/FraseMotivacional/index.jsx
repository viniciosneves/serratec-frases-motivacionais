import Rodape from './Rodape'
import Card from '../Card'

const FraseMotivacional = (props) => {

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

