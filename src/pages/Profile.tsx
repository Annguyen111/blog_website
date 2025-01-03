import { useState } from 'react'
import Header from '../components/Header/Header'
import ProfileInfo from '../components/ProfileInfo/ProfileInfo'
import SettingAccount from '../components/SettingAccount/SettingAccount'
import '../styles/profile.scss'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'

function Profile() {
  const [showProfileHeader, setShowProfileHeader] = useState(false)

  const toggleProfileHeader = () => {
    setShowProfileHeader(!showProfileHeader)
  }

  return (
    <>
      <Header onAvatarClick={toggleProfileHeader} />
      {showProfileHeader && <ProfileHeader />}
      <div className='profile'>
        <div className='profile-wrapper'>
          <div className='profile-body'>
            <SettingAccount />
            <ProfileInfo />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
