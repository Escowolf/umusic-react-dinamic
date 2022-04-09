import React from 'react';
import { Link } from 'react-router-dom';
import playlistsMock from './playlistMock';
import '../css/PlaylistList.css';

function PlaylistList() {
    return (
      <div>
        <ul className="flex-container">
          {playlistsMock.map((playDados) => {
            return(
              <li>
                <Link to={`/playlists/${playDados.id}`}>
                    <img src={playDados.capa} alt="Capa do álbum"/>
                </Link>
              </li>
            )
          })}
            </ul>
      </div>
      )
}

export default PlaylistList;