function Logout(){
const logout = () => {
    localStorage.removeItem('Logado');
    setState(false);
    };
    
return( <>
    <button onClickCapture={logout}>logout user</button>

    </>)

}

export default Logout;