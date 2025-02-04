import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PostDetail from './pages/PostDetail'
import Profile from './pages/Profile'
import { useEffect, useState } from 'react'
import Preloader from './components/PreLoader/Preloader'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <Preloader isVisible={loading} />
      <div style={{ display: loading ? 'none' : 'block', opacity: loading ? 0 : 1 , transition: 'opacity 0.5s'}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blog-detail' element={<PostDetail />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}

export default App
