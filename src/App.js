import {Routes, Route} from "react-router-dom";
import './Paginas/css/App.css';
import Home from './Paginas/Home';
import Faq from './Paginas/Faq';
import Menu from './Paginas/Menu';
import Rodape from './Paginas/Rodape';
import Cadastro from './Paginas/Cadastro';
import PlaylistDetail from "./Paginas/componentesLista/PlaylistDetail";
import PlaylistList from "./Paginas/componentesLista/PlaylistList";

function App() {
  return (
    <div className="principal">
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/play" element={<PlaylistList/>} />
        <Route path="/playlists/:id" element={<PlaylistDetail/>} />
       <Route path="/inscricao" element={<Cadastro />} />
      </Routes>
    <Rodape />
    </div>
  );
}

export default App;