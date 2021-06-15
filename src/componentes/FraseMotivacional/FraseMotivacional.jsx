import './estilos.css'

function FraseMotivacional (props)  {
  return <div>
    <p className="frase">
      {props.frase}
    </p>
    <p>
      {props.autor}
    </p>
  </div>
}

export default FraseMotivacional