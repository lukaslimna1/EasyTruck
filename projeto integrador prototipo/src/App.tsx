import React from 'react'
import Home from './pages/home';
import '../src/estilo/style.css';
import { Routes, Route } from 'react-router-dom';
import Sobre from './pages/sobre';
import Adm from './pages/adm';
import Login from './pages/login';
import Cadastrar from './pages/cadastro';
import Alterar_Dados from './pages/alterar_dados';
import Contato from './pages/contato';
import Notfound from './pages/notfound';
import Detalhe from './pages/detalhe';



function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/adm' element={<Adm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastrar/>}/>
        <Route path='/alterar_dados' element={<Alterar_Dados/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/detalhe/:codigo' element={<Detalhe/>}/>


      </Routes>

    </div>
  );
}

export default App;
