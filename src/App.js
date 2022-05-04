import {Routes, Route} from "react-router-dom";
import './Paginas/css/App.css';
import Home from './Paginas/PaginasNoAuth/Home';
import Faq from './Paginas/PaginasNoAuth/Faq';
import Menu from './Paginas/PaginasNoAuth/Menu';
import Rodape from './Paginas/PaginasNoAuth/Rodape';
import Cadastro from './Paginas/PaginasNoAuth/Cadastro';
import PlaylistDetail from "./Paginas/componentesLista/PlaylistDetail";
import PlaylistList from "./Paginas/componentesLista/PlaylistList";
<<<<<<< Updated upstream
import Login from "./Paginas/Login";
=======
import Login from "./Paginas/PaginasNoAuth/Login";
import UserHome from "./Paginas/user/UserHome";
import { useState } from "react";
import MenuAuth from "./Paginas/user/MenuAuth";
import Initio from "./Paginas/PaginasAuth/PlayUser";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="principal">
<<<<<<< Updated upstream
    <Menu />
=======
        {!On ? <Menu/> :  <MenuAuth />
    }
>>>>>>> Stashed changes
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/play" element={<PlaylistList/>} />
        <Route path="/playlists/:id" element={<PlaylistDetail/>} />
        <Route path="/login" element={<Login/>} />
       <Route path="/inscricao" element={<Cadastro />} />
       <Route path="/perfil" element={<Initio />} />
      </Routes>
    <Rodape />
    </div>
  );
}

export default App;