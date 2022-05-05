import React from 'react';
import UserExemple from '../img/User.jpg';

function Profile(){
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    return(<>
    <div className='container'>
        <div className='perfil'>
<img src={UserExemple} alt="" className="rounded-circle me-2"/>
{usuario.nome}
{usuario.email}
{usuario.gender}
{usuario.senha}
</div>
</div>
    </>)
}

export default Profile;