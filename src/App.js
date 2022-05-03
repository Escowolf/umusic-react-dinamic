import {Routes, Route} from "react-router-dom";
import './Paginas/css/App.css';
import Home from './Paginas/Home';
import Faq from './Paginas/Faq';
import Menu from './Paginas/Menu';
import Rodape from './Paginas/Rodape';
import Cadastro from './Paginas/Cadastro';
import PlaylistDetail from "./Paginas/componentesLista/PlaylistDetail";
import PlaylistList from "./Paginas/componentesLista/PlaylistList";
import Login from "./Paginas/Login";
import UserHome from "./Paginas/user/UserHome";
import { useState } from "react";
import MenuAuth from "./Paginas/user/MenuAuth";

function App() {

  const Online = JSON.parse(localStorage.getItem('Logado'));
  const [On, setOn] = useState(Online);

  return (
    <div className="principal">
        {!On ? 
      <Menu /> : 
      <MenuAuth />
    }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/play" element={<PlaylistList/>} />
        <Route path="/playlists/:id" element={<PlaylistDetail/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/inicio/:id" element={<UserHome/>} />
       <Route path="/inscricao" element={<Cadastro />} />
      </Routes>
    <Rodape />
    </div>
  );
}

export default App;