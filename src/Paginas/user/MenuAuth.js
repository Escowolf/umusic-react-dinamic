import { Link, useNavigate } from "react-router-dom";
import logo from '../img/logoUmus.png';
import '../css/MenuAuth.css';


function MenuAuth() {
  const navigate = useNavigate();
    
  function logout({setLogin}){
    localStorage.removeItem("usuarioLogado");
    navigate("/");
    setLogin(JSON.parse(localStorage.getItem(undefined)))
}
  return (<>
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link to="/"><img src={logo} className="d-inline-block align-top" height="50" alt="Logo site"></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container-fluid" />

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-item nav-link text-light active">Início</Link>
            <Link to="/" className="nav-item nav-link text-light active">Perfil</Link>
            <Link to="/play" className="nav-item nav-link text-light">Playlists</Link>
            <Link to="/faq" className="nav-item nav-link text-light">Faq</Link>
            <button className="nav-item nav-link text-light" onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>
    </header>
  </>);
}

export default MenuAuth;