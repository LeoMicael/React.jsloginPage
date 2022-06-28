import React, { useContext } from 'react'

import { AuthContext } from '../auth/authenticated'

const Home = () => {
  const { authenticated, logout} = useContext(AuthContext);
  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  }
  
  return (
    <form onSubmit={handleLogout}>
      <div className= 'userConteiner'>
        <p> {String(authenticated)}</p>
      <button>sair</button>
      </div>
    </form>
  )
}
export default Home