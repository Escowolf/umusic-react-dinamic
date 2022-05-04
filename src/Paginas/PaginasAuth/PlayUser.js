import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PlayUser.css';

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
            <img className="item" src={playDados.capa} alt="Capa do álbum"/>
        </Link>
      </li>
    )
  })

    return (
      <>
        <h1>Playlists</h1>
        <ul className="conteudo">
          {res}
          </ul>
          </>
    )
}

export default PlayUser;