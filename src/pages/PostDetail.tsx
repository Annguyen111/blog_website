import { useState } from 'react'
import Header from '../components/Header/Header'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
import BlogDetail from '../components/BlogDetail/BlogDetail'

function PostDetail() {
  const [showProfileHeader, setShowProfileHeader] = useState(false)

  const toggleProfileHeader = () => {
    setShowProfileHeader(!showProfileHeader)
  }

  return (
    <>
      <Header onAvatarClick={toggleProfileHeader} />
      {showProfileHeader && <ProfileHeader />}
      <BlogDetail />
    </>
  )
}

export default PostDetail
