import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {

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
          (JSON.parse(localStorage.getItem('Logado')));
          navigate(`/inicio/${login.id}`, {state:{id:login.id}}, { replace: true })
        }
      }
      );
  }

  return (
    <main className="login">
      <section className="login_caixa">
        <h2>Login</h2>
        <form onSubmit={logar} className="login_formulario">
        <input className="form-control form-control-lg" 
        id="nome" 
        type="text" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
        placeholder="Como devemos chamar você?" 
        required/><br />

        <input className="form-control form-control-lg" 
        id="password" 
        type="password" 
        value={senha} 
        onChange={(e) => setSenha(e.target.value)} 
        placeholder="Senha" 
        required/><br />
          <br />
          <div className="login_formulario_enviar">
            <input
              className="login__formulario_botao"
              type="submit"
              value="Continuar"
            />
          </div>
        </form>
        <br />
        <div className="login_formulario_info">
          <p>
            Não tem cadastro?
            <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;