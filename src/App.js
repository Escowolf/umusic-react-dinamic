import {Routes, Route} from "react-router-dom";
import './Paginas/css/App.css';
import Home from './Paginas/PaginasNoAuth/Home';
import Faq from './Paginas/PaginasNoAuth/Faq';
import Menu from './Paginas/PaginasNoAuth/Menu';
import Rodape from './Paginas/PaginasNoAuth/Rodape';
import Cadastro from './Paginas/PaginasNoAuth/Cadastro';
import PlaylistDetail from "./Paginas/componentesLista/PlaylistDetail";
import PlaylistList from "./Paginas/componentesLista/PlaylistList";
import Login from "./Paginas/PaginasNoAuth/Login";
import UserHome from "./Paginas/user/UserHome";
import { useState } from "react";
import MenuAuth from "./Paginas/user/MenuAuth";
import Profile from "./Paginas/PaginasAuth/Login2";
import HomeAuth from "./Paginas/PaginasAuth/HomeAuth";

function App() {

  const Online = JSON.parse(localStorage.getItem('usuarioLogado'));
  const [On, setOn] = useState(Online);

  return (
    <div className="principal">
        {!Online ? 
      <Menu /> : 
      <MenuAuth />
    }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/play" element={<PlaylistList/>} />
        <Route path="/playlists/:id" element={<PlaylistDetail/>} />
        {/*<Route path="/login-fin" element={ <Login setOn = {setOn}/>} />*/}
        <Route path="/inicio/:id" element={<UserHome/>} />
       <Route path="/inscricao" element={<Cadastro />} />
       <Route path="/login" element={<Profile />} />
       <Route path="/home" element={<HomeAuth />} />

      </Routes>
    <Rodape />
    </div>
  );
}

export default App;