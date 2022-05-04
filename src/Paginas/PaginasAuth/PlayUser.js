import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PlayUser.css';
import BotaoCreate from './BotaoCreate';

function PlayUser(){
    
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/playlists')
    .then((res)=> setPlaylists(res.data))
  }, []); 

  const res = playlists.map((playDados) => {
    return(
      <li>
        <Link to={`/playlists/${playDados.id}`}>
            <img className="itemNew" src={playDados.capa} alt="Capa do álbum"/>
        </Link>
      </li>
    )
  })

    return (
      <>
      <div className='PlaylistsContent'>
        <h1>Playlists</h1>
        <ul className="conteudo">
        <p>Nova playlist</p>
          {res}
          </ul>
      </div>
          </>
    )
}

export default PlayUser;