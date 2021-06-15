import './estilos.css'

function FraseMotivacional (props)  {

  const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const data = props.criadaEm.toLocaleString('pt-BR', opcoes)

  return <div>
    <p className="frase">
      - "{props.frase}"
    </p>
    <p>
      {props.autor}
    </p>
    <p>
      Postada em: <strong>{data}</strong>
    </p>
  </div>
}

export default FraseMotivacional