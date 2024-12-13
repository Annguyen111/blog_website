import { useState } from 'react'
import Header from '../components/Header/Header'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
import SideBar from '../components/SideBar/SideBar'
import '../styles/home.scss'
import Feed from '../components/Feed/Feed'
import Widget from '../components/Widget/Widget'

function Home() {
  const [showProfileHeader, setShowProfileHeader] = useState(false)

  const toggleProfileHeader = () => {
    setShowProfileHeader(!showProfileHeader)
  }

  return (
    <>
      <Header onAvatarClick={toggleProfileHeader} />
      {showProfileHeader && <ProfileHeader />}
      <main className='home-main'>
        <SideBar />
        <Feed />
        <Widget />
      </main>
    </>
  )
}

export default Home
