import React from 'react';
import { Link } from 'react-router-dom';
import playlistsMock from './playlistMock';
import '../componentesLista/albuns/PlaylistList.css';

function PlaylistList() {

  const data = playlistsMock.map(
    (p) => {

      return (
        <div className="container">
          <div className="teste">
            <div className="card">

              <Link to={`/playlists/${p.id}`}><img className="card-img-top" src={p.capa} alt="Card image" /></Link>

              <h4 className="card-title">{p.nome}</h4>
              <p className="card-text">Some example text.</p>
            </div>
          </div>
        </div>
      )
    }
  );

  return (
    <>
      {data}
    </>

  );
}


export default PlaylistList;