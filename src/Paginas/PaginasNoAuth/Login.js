{/*import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import logo from '../img/logoUmus.png';
import '../css/Login.css';

function Login({setOn}) {
const navigate = useNavigate();
const [nome, setNome] = useState();
const [senha, setSenha] = useState();



function logar(e) {
  e.preventDefault();
  axios.get("http://localhost:4000/usuarios")
    .then((resp) => {
      let login = resp.data.find((p) => p.nome == nome && p.senha == senha);
      if (login) {
        localStorage.setItem('Logado', JSON.stringify(login.id));
        setOn(JSON.parse(localStorage.getItem('Logado')));
        navigate(`/inicio/${login.id}`, {state:{id:login.id}}, { replace: true })
      }
    }
    );
}

return (
  <div className="container">
  <main className="login">
    <section className="formsBox">
      <br/><br/><br/>
      <form onSubmit={logar} className="forms">
      <center> <img src={logo} className="d-inline-block align-top" height="70" alt="Logo site"></img>
<br/><h1>Login</h1>
</center><br/>

      <input className="form-control form-control-lg" 
      id="nome" 
      type="text" 
      value={nome} 
      onChange={(e) => setNome(e.target.value)} 
      placeholder="Seu nome" 
      required/><br />

      <input className="form-control form-control-lg" 
      id="password" 
      type="password" 
      value={senha} 
      onChange={(e) => setSenha(e.target.value)} 
      placeholder="Senha" 
      required/><br />
        <div className="login_formulario_enviar">
          <input
            className="btn btn-primary"
            type="submit"
            value="Continuar"
          />
          <br/>
          <br/>
          <p>
          Não tem cadastro?&nbsp;&nbsp;
          <Link to="/inscricao" className="Subscript">Inscreva-se!</Link>
        </p>
        </div>
      </form>
    </section>
  </main>
  </div>
);
}

export default Login;*/}