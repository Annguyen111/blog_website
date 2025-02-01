import { useState } from 'react'
import Header from '../components/Header/Header'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
import SideBar from '../components/SideBar/SideBar'
import '../styles/home.scss'
import Feed from '../components/Feed/Feed'
import Widget from '../components/Widget/Widget'
import Notification from '../components/Notification/Notification'
import Menu from '../components/Menu/Menu'


function Home() {
  const [showProfileHeader, setShowProfileHeader] = useState(false)
  const [showNotifyHeader, setShowNotifyHeader] = useState(false)
  const [showMenuHeader, setShowMenuHeader] = useState(false)

  const handleAvatarClick = () => {
    setShowProfileHeader((prev) => !prev)
    if (showNotifyHeader) setShowNotifyHeader(false)
  }

  const handleBellClick = () => {
    setShowNotifyHeader((prev) => !prev)
    if (showProfileHeader) setShowProfileHeader(false)
  }

  const handleMenuClick = () => {
    setShowMenuHeader((prev) => !prev)
    if (showProfileHeader) setShowMenuHeader(false)
  }

  return (
    <>
      <Header onAvatarClick={handleAvatarClick} onBellClick={handleBellClick} onMenuClick={handleMenuClick} />
      {showProfileHeader && <ProfileHeader />}
      {showNotifyHeader && <Notification />}
      {showMenuHeader && <Menu />}
      <main className='home-main'>
        <SideBar />
        <Feed />
        <Widget />
      </main>
    </>
  )
}

export default Home
