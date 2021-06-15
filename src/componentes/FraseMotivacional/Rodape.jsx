import React, { Fragment } from 'react'


const Rodape = (props) => {

  const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const data = props.criadaEm
    .toLocaleString('pt-BR', opcoes)
  // return React.createElement
  // (
  //   Fragment, {}, 
  //   React.createElement('p', {}, props.autor),
  //   React.createElement('p', {}, 'Postada em: ', React.createElement('strong', {}, data)),
  // )
// Fragment
return <>
    <p>
      {props.autor}
    </p>
    <p>
      Postada em: <strong>{data}</strong>
    </p>
  </>
}

export default Rodape
