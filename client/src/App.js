
import React from 'react';
import { Route, Routes } from 'react-router-dom';

//components
import Logout from './components/Logout';

//components/router
import PublicRoute from './components/router/PublicRoute';
import PrivateRoute from './components/router/PrivateRoute';

//pages
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        {/* Rutas Públicas */}
        <Route path='/' element={<PublicRoute />}>
          <Route index element={<Login />} />
        </Route>
        {/* Rutas Privadas */}
        <Route path='/home' element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path='/home/logout' element={<Logout />} />*
        </Route>
      </Routes>
    </div>
  );
}

export default App;
