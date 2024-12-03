import avatar from '../../assets/user-icon.png'
import './ProfileHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faQuestion, faMoon, faCommentDots, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

function ProfileHeader() {
  return (
    <div className='profileheader'>
      <div className='account'>
        <div className='account__avatar'>
          <img src={avatar} alt='' />
          <p>Quoc An</p>
        </div>
        <button>See all profiles</button>
      </div>
      <div className='nav'>
        <ul className='nav-list'>
          <li className='nav-list__item'>
            <a href=''>
              <FontAwesomeIcon className='item-icon' icon={faGear} /> Settings & privacy
            </a>
          </li>
          <li className='nav-list__item'>
            <a href=''>
              <FontAwesomeIcon className='item-icon' icon={faQuestion} />
              Help & support
            </a>
          </li>
          <li className='nav-list__item'>
            <a href=''>
              <FontAwesomeIcon className='item-icon' icon={faMoon} />
              Display & accessibility
            </a>
          </li>
          <li className='nav-list__item'>
            <a href=''>
              <FontAwesomeIcon className='item-icon' icon={faCommentDots} />
              Give feedback
            </a>
          </li>
          <li className='nav-list__item'>
            <a href=''>
              <FontAwesomeIcon className='item-icon' icon={faRightToBracket} />
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileHeader
