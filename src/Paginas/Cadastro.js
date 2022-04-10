import { useState } from "react";
import usuario from "./users/userMock";

export function Cadastro() {
  const [email, setEmail] = useState("");
  const [emailVerify,setEmailVerify] = useState("");
  const [senha,setSenha] = useState("");
  const [data,setDataNascimento] = useState("");
  const [nome, setNome] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    usuario.push({nome , senha, email, emailVerify, data});

    if (email != emailVerify){
      alert("Os e-mails não correspondem!");
    }

    console.log(usuario);
  }

  function comparaEmail(){
//criar uma variável que exiba se os e-mails correspondem ou não;
    if (email != emailVerify){
      console.log("Os e-mails não correspondem!");    
    }else{
      console.log("Tudo ok!")
        }
  }

  return (
      <div className="container">
        <div className="cadastro">
        <br /><br />
          <h1>Increva-se</h1>
          <br /><br />
          <form onSubmit={(e) => handleSubmit(e)}>
            <input className="form-control form-control-lg" id="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" /><br />
            <input className="form-control form-control-lg" id="emailVerify" type="email" onkeyup={comparaEmail()} onChange={(e) => setEmailVerify(e.target.value)} placeholder="Confirmar e-mail" /><br />
            <input className="form-control form-control-lg" id="password" type="password"  onChange={(e) => setSenha(e.target.value)} placeholder="Senha" /><br />
            <input className="form-control form-control-lg" id="nome" type="text"  onChange={(e) => setNome(e.target.value)} placeholder="Como devemos chamar você?" /><br />
            <label className="col-sm-10 col-form-label col-form-label-lg">Data de Nascimento</label><br />
            <input className="form-control form-control-lg" id="dataNascimento" type="date"  onChange={(e) => setDataNascimento(e.target.value)} placeholder="Data de Nascimento" /><br />

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Feminino" />
              <label className="form-check-label">Feminino</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Masculino<" />
              <label className="form-check-label">Masculino</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Não-binário" />
              <label className="form-check-label">Não-binário</label>
            </div><br/>


          <center><button type="submit" value="Enviar" className="btn btn-primary btn-lg btn-block">Enviar</button></center>  
          </form>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    
  );
}


export default Cadastro;