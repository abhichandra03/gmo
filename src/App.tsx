import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/login'
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/home';

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false)
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login setIsAuth = {setIsAuth} /> } />
        <Route
            path="/home"
            element={
              <ProtectedRoute isAuth={isAuth}>
                
                <Home />
              </ProtectedRoute>
            }
          />
      </Routes>
    </Router>
    </>
  )
}

export default App
// 