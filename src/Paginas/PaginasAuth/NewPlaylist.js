import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
{/*Música deve percorrer o JSON de músicas, então o usuário deve buscar a música e capa deve enviar uma capa para a pasta img */}

function PlayUser(){
{/* 

const [nome, setNome] = useState([]);
const [capa, setCapa] = useState([]);
const [musica, setMusica] = useState([]);

function handleSubmit(e){
  e.preventDefault();
    axios.post('http://localhost:4000/playlists', {
      nome, capa, musica 
    })
    .then((res)=> (res.data))

  alert("Usuário cadastrado com sucesso!");

  cleanAll();
}

function cleanAll(){
  setNome("");
  setCapa("");
  setMusicas("");
}
const res = playlists.map((playDados) => {
  return(
    <li>
      <Link to={`/playlists/${playDados.id}`}>
          <img className="item" src={playDados.capa} alt="Capa do álbum"/>
      </Link>
    </li>
  )
})*/}

  return (
    <>
      <h1>Playlists</h1>
    
        </>
  )
  }

export default PlayUser;