import ListItem from "./Lista/ListItem";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./Lista/SearchBar";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  padding: 10px;
`;

function NewPlaylist() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const [musicas, setMusicas] = useState([]);
  const [newPlaylist, setNewPlaylist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/musicas").then((resp) => {
      setMusicas(resp.data);
    });
  }, []);

  
  return (
    <div className="Playlist">
      <Container>
      <SearchBar />
        <ListContainer>
          {musicas.map((m) => {
            return (
              <ListItem
                nome={m.nome}
                image={m.image}
                artista={m.autor}
                arquivo={m.arquivo}
              />
            );
          })}
        </ListContainer>
      </Container>
    </div>
  );
}

export default NewPlaylist;
