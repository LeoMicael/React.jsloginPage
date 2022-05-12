import { useContext } from 'react'

import LoginView from './page/login'

import Home from './page/home'

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import { AuthContext, AuthProvider} from './auth/authenticated'

const App = () => {
  const Private = ( {children} ) => {
    const  { authenticated, loading }  = useContext(AuthContext)
    if (loading === true ){
      return <div>
        loading ...
      </div>
    }
    if (!authenticated) {
      return <Navigate to = '/'/>
    }
    return children;
  }

  return (
    <>
    <BrowserRouter>
    <AuthProvider>
     <Routes>
        <Route path = '/' element = {<LoginView/>} />
        <Route path = '/home' element = {<Private> <Home/> </Private> } />
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    </>
  );
}
export default App;
