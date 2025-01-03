import './profileInfo.scss'
import avatar from '../../assets/user-icon.png'

function ProfileInfo() {
  return (
    <div className='profile-info'>
      <img src={avatar} alt='Avatar' className='profile-info__image' />
      <div className='profile-info__stats'>
        <div className='stat-friends'>
          <p>22</p>
          <p>Friends</p>
        </div>
        <div className='stat-posts'>
          <p>10</p>
          <p>Posts</p>
        </div>
        <div className='stat-comments'>
          <p>5</p>
          <p>Comments</p>
        </div>
      </div>
      <div className='profile-info__details'>
        <p className='details-name'>Quoc An, 30</p>
        <p className='details-address'>Quang Nam</p>
      </div>
      <div className='profile-info__bio'>
        <p className='bio-title'>Frontend Developer</p>
        <p className='bio-content'>University of Computer Science</p>
      </div>
      <p className='profile-info__about'>
        Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his
        own music.
      </p>
      <a href='' className='profile-info__btn'>
        More
      </a>
    </div>
  )
}

export default ProfileInfo
