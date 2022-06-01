import {Routes, Route} from "react-router-dom";
import './Paginas/css/App.css';
import Home from './Paginas/PaginasNoAuth/Home';
import Faq from './Paginas/PaginasNoAuth/Faq';
import Menu from './Paginas/PaginasNoAuth/Menu';
import Rodape from './Paginas/PaginasNoAuth/Rodape';
import Cadastro from './Paginas/PaginasNoAuth/Cadastro';
import PlaylistDetail from "./Paginas/componentesLista/PlaylistDetail";
import PlaylistList from "./Paginas/componentesLista/PlaylistList";
import NewPlaylist from "./Paginas/PaginasAuth/NewPlaylist";
import Login from "./Paginas/PaginasNoAuth/Login";
import { useState } from "react";
import MenuAuth from "./Paginas/user/MenuAuth";
import HomeAuth from "./Paginas/PaginasAuth/HomeAuth";
import Profile from "./Paginas/user/Profile";

function App() {
  const MONGO_URL = "mongodb+srv://admin:<PPtkOKzu7YmpUvMb>@cluster0.ucyz0.mongodb.net/?retryWrites=true&w=majority";
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  const [login, setLogin] = useState(usuario);
console.log(login);
  return (
    <div className="principal">
      {/*useState verifica se há usuário logado, se não existir, abra Menu. Se existir, abra menuAuth */}
        {!login? (<Menu />) : (<MenuAuth /> ) }
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/play" element={<PlaylistList/>} />
        <Route path="/playlists/:id" element={<PlaylistDetail/>} />
        <Route path="/newplaylist" element={<NewPlaylist/>}/>
       <Route path="/inscricao" element={<Cadastro />} />
       <Route path="/login" element={<Login />} />
       <Route path="/home" element={<HomeAuth />} />
       <Route path="/perfil" element={<Profile />} />

      </Routes>
    <Rodape />
    </div>
  );
}

export default App;