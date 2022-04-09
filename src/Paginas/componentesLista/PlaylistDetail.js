import { useParams } from "react-router-dom";
import playlistsMock from "./playlistMock";
import 'react-h5-audio-player/lib/styles.css';


function PlaylistDetail() {
  const { id } = useParams();
//"variável" para encontrar a playlist pelo id
  const playlistSelecionada = playlistsMock.find((playDados) => playDados.id === id);
//"variável" para listar as músicas encontradas no vetor musicas da playlist
  const musicas = playlistSelecionada.musicas.map((playDados)=>{
  return(
    <li>
       <audio controls>
         <source src={playDados.arquivo} type="audio/mpeg" />
         </audio>
    </li>
  )
});

  return (
    <div className="container">
      <p>{id} Detalhes</p>
      <h1>Nome: {playlistSelecionada.nome}</h1>

      Músicas {musicas}

    </div>
  );

}


export default PlaylistDetail;