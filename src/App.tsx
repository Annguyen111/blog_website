import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PostDetail from './pages/PostDetail'
import Profile from './pages/Profile'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/blog-detail' element={<PostDetail />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App
