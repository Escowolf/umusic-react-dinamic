import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserExemple from '../img/User.png';
import './UserHome.css';
import axios from "axios";
import PlayUser from "../PaginasAuth/PlayUser";

function UserHome() {
 const location = useLocation();
 const [nome, setNome] = useState();

 useEffect(() => {
    axios.get(`http://localhost:4000/usuarios/${location.state.id}`)
        .then((res) => {
          console.log(res.data)
          setNome(res.data.nome)
        });
  }, []) 

return(<>
<div class="container">
  <div className="BoxPerfil">
  <div class="row">
    <div class="col-4">
    <img src={UserExemple} className="perfil" alt="girl_example" />
    </div>
    <div class="col-8">
    <h1 className="UserNome">{nome}</h1>
    </div>
  </div>
  <br/>
</div>
<PlayUser/>
</div>

</>)
}


export default UserHome;