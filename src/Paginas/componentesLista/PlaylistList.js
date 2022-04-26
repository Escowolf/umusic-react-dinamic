import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/PlaylistList.css';

function PlaylistList() {
  let playlists = []; 
  {/*cria vetor vazio*/}

  axios.get('http://localhost:4000/playlists')

  const res = playlists.map((playDados) => {
    return(
        <Link to={`/playlists/${playDados.id}`}>
            <img className="item" src={playDados.capa} alt="Capa do álbum"/>
        </Link>
      )
})
}

export default PlaylistList;