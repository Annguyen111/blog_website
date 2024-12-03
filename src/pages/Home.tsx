import { useState } from 'react'
import Header from '../components/Header/Header'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'

function Home() {
  const [showProfileHeader, setShowProfileHeader] = useState(false)

  const toggleProfileHeader = () => {
    setShowProfileHeader(!showProfileHeader)
  }
  
  return (
    <>
      <Header onAvatarClick={toggleProfileHeader} />
      {showProfileHeader && <ProfileHeader />}
      <main></main>
    </>
  )
}

export default Home

