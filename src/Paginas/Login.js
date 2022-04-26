import axios from "axios";

function getPlaylist(id) {
    axios.get(`https://localhost:4000/playlists/${id}`)
      .then(response => response.json())
      .then(data => console.log(data.nome))
      .catch(error => console.log(error))
      .finally(() => { "aviso de fim de carregamento" })
   }
   
   getUser(1);

axios.get("http://localhost:3000/playlists")
     .then(response => setPlaylists(response.data));
     
function Login() {
    return (
     <>
     
     </>
    );
}

export default Login;