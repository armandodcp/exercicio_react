import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Formulario from './components/Formulario'
import Resultado from './components/ResultadoImc'
import './App.css'

function App() {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [peso, setPeso] = useState('');

  const calcularIMC = (altura, peso) => {
    const alturaMetros = altura;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));
    classificarIMC(imcCalculado);
    setPeso(peso);
  }

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
      setClassificacao('Obesidade grau I');
    } else if (imc >= 35 && imc < 39.9) {
      setClassificacao('Obesidade grau II');
    } else {
      setClassificacao('Obesidade grau III');
    }
  }

  return (
    <div className="container">
      <Cabecalho />
      <Formulario calcularIMC={calcularIMC} />
      {peso.length > 1 && (
        <Resultado imc={imc} classificacao={classificacao} />
      )}
    </div>
  )
}

export default App
