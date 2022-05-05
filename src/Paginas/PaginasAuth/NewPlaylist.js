import ListItem from './Lista/ListItem';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  padding: 10px;
`;

function NewPlaylist() {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/musicas")
            .then((resp) => {
                setMusicas(resp.data)
                setLista(resp.data)
            });
  }, [])

  return (
    <Container>
     <ListContainer>
      {musicas.map(musicas => {
        return (
          <ListItem
            key={book.url}
            title={book.title}
            image={book.image}
            arquivo={book.url}
          />
        )
      })}
      </ListContainer>
    </Container>
  );
}

function NewPlaylist(){
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    const [musicas, setMusicas] = useState([]);
    const [musicasSelecionadas, setMusicasSelecionadas] = useState([]);
    const [buscar, setBuscar] = useState("");
    const [lista, setLista] = useState([]);

    function testaBusca(nomeMusica) {
        const regex = new RegExp(buscar, 'i');
        return regex.test(nomeMusica);
    }

    useEffect(() => {
        const novaLista = musicas.filter(item => testaBusca(item.musicaNome))
        setLista(novaLista);
    }, [buscar])

    useEffect(() => {
      axios.get("http://localhost:4000/musicas")
            .then((resp) => {
                setMusicas(resp.data)
                setLista(resp.data)
            });
  
  }, [])
        
    return (
        <div className="Playlist">
           <Container>
      <ListContainer>
         <ListItem />
         <ListItem />
         <ListItem />
      </ListContainer>
    </Container>
            <div className="criaPlaylist__buscar">
              <input type='text' placeholder="Nome da playlist"/><br/>
              <input type="file" />Upload
                <input
                    type="text"
                    value={buscar}
                    onChange={evento => setBuscar(evento.target.value)}
                    placeholder="Buscar"
                />
            </div>
           
        </div>
    )
}

export default NewPlaylist;