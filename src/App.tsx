import React, { useState } from 'react';
import { Input } from './components/Input';
import './App.css'

const App = () => {
  
  const [conta, setConta] = useState('');
  const [porcentagem, setPorcentagem] = useState('');

  const handleInputConta = (event:React.ChangeEvent<HTMLInputElement>) => {
    setConta(event.target.value);
  }
  const handleInputPorcentagem = (event:React.ChangeEvent<HTMLInputElement>) => {
    setPorcentagem(event.target.value);
  }
  
  
  return(
    <div className='gorjeta'>
      <h1>Calculadora de Gorjeta</h1>
      <p>Valor da conta:</p>
      <Input type="number" placeholder="Valor da conta" value={conta} onChange={handleInputConta}/>
      <p>Porcentagem da gorjeta:</p>
      <Input type="number" placeholder="Porcetagem da gorjeta" value={porcentagem} onChange={handleInputPorcentagem}/>
      <hr />

      
      {Number.parseFloat(conta) > 0 &&
        <>
          <p>Sub-total: R$ {conta}</p>
          <p>Gorjeta ({porcentagem}%): R$ {Number.parseFloat(porcentagem)/100 * Number.parseFloat(conta)}</p>
          <h3>Total: R$ {Number.parseFloat(conta) + (Number.parseFloat(porcentagem)/100) * Number.parseFloat(conta)}</h3>
        </>
      }
      
    </div>
  );
}

export default App;