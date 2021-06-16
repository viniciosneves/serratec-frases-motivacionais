import { useState } from 'react'
import './estilos.css'

const Formulario = ({ aoSalvar }) => {
  
  const [autor, setAutor] = useState('')
  const [texto, setTexto] = useState('')

  const manipuladorAutor = (evento) => {
    if (evento.target.value.split(' ').length <= 2) {
      setAutor(evento.target.value)
    }
  }
  const manipuladorTexto = (evento) => {
    setTexto(evento.target.value)
  }

  const salvar = (evento) => {
    evento.preventDefault()
    const frase = {}
    frase.autor = autor
    frase.texto = texto
    aoSalvar(frase)
    setAutor('')
    setTexto('')
  }

  return (
    <form onSubmit={salvar}>
      <div>
        <label>Autor</label>
        <input value={autor} onChange={manipuladorAutor}/>
      </div>
      <div>
        <label>Texto</label>
        <textarea value={texto} onChange={manipuladorTexto}></textarea>
      </div>
      <button>
        Salvar
      </button>
    </form>
  )
}

export default Formulario