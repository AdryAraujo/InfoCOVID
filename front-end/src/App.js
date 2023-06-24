import './App.css';
import * as React from 'react';
import logo from '../src/assets/img/logoSemNome.png'

function App() {
  return (
    <div className='container'>
      <div className='cabecalho'>
        <img id="logo" src={logo} alt='Info Covid'/>
        <h1>INFO COVID</h1>
      </div>

      <div className='container-lateral'>

      </div>
    </div>
  );
}

export default App;
