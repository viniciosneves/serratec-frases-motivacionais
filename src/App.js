import FraseMotivacional from 
  './componentes/FraseMotivacional/FraseMotivacional'

function App() {

  const frases = [
    {
      texto: 'São as nossas escolhas, mais do que as nossas capacidades, que mostram quem realmente somos',
      autor: 'Alvo Dumbledore',
      criadaEm: new Date(2021, 5, 1)
    },
    {
      texto: 'Vocês vão ter que me engulir',
      autor: 'Técnico Zagalo',
      criadaEm: new Date(2021, 5, 2)
    },
    {
      texto: '- Doi né? - O que? - deitar no sofá e lembrar que esqueceu o controle',
      autor: 'Autor desconhecido',
      criadaEm: new Date(2021, 5, 3)
    },
  ]

  return (
    <div>
      <h1>Frases motivacionais para alegrar o seu dia!!</h1>
      
      <FraseMotivacional 
        frase={frases[0].texto} 
        autor={frases[0].autor} 
        criadaEm={frases[0].criadaEm}/>

      <FraseMotivacional frase={frases[1].texto} autor={frases[1].autor} criadaEm={frases[1].criadaEm}/>
      <FraseMotivacional frase={frases[2].texto} autor={frases[2].autor} criadaEm={frases[2].criadaEm}/>
    </div>
  );
}

export default App;
