import FraseMotivacional from 
  './componentes/FraseMotivacional/FraseMotivacional'

function App() {

  const frases = [
    {
      texto: 'São as nossas escolhas, mais do que as nossas capacidades, que mostram quem realmente somos',
      autor: 'Alvo Dumbledore'
    },
    {
      texto: 'Vocês vão ter que me engulir',
      autor: 'Técnico Zagalo'
    },
    {
      texto: '- Doi né? - O que? - deitar no sofá e lembrar que esqueceu o controle',
      autor: 'Autor desconhecido'
    },
  ]

  return (
    <div>
      <h1>Frases motivacionais para alegrar o seu dia!!</h1>
      <FraseMotivacional frase={frases[0].texto} autor={frases[0].autor} />
      <FraseMotivacional frase={frases[1].texto} autor={frases[1].autor} />
      <FraseMotivacional frase={frases[2].texto} autor={frases[2].autor} />
    </div>
  );
}

export default App;
