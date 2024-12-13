import './sideBar.scss'
import avatar from '../../assets/user-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserFriends,
  faClockRotateLeft,
  faFlag,
  faUserGroup,
  faVideo,
  faStore,
  faNewspaper,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'

function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        <ul className='sidebar-list'>
          <li className='sidebar-item'>
            <img className='sidebar-item__avatar' src={avatar} alt='Avatar' />
            <p className='sidebar-item__text'>Quoc An</p>
          </li>
          <li className='sidebar-item'>
            <FontAwesomeIcon className='sidebar-item__icon' icon={faUserFriends} />
            <p className='sidebar-item__text'>Friends</p>
          </li>
          <li className='sidebar-item'>
            <FontAwesomeIcon className='sidebar-item__icon' icon={faClockRotateLeft} />
            <p className='sidebar-item__text'>Memories</p>
          </li>
          <li className='sidebar-item'>
            <FontAwesomeIcon className='sidebar-item__icon' icon={faFlag} />
            <p className='sidebar-item__text'>Pages</p>
          </li>
          <li className='sidebar-item'>
            <FontAwesomeIcon className='sidebar-item__icon' icon={faUserGroup} />
            <p className='sidebar-item__text'>Groups</p>
          </li>
          <li className='sidebar-item'>
            <FontAwesomeIcon className='sidebar-item__icon' icon={faVideo} />
            <p className='sidebar-item__text'>Watch</p>
          </li>
          <li className='sidebar-item'>
            <FontAwesomeIcon className='sidebar-item__icon' icon={faStore} />
            <p className='sidebar-item__text'>Marketplace</p>
          </li>
          <li className='sidebar-item'>
            <FontAwesomeIcon className='sidebar-item__icon' icon={faNewspaper} />
            <p className='sidebar-item__text'>Feed</p>
          </li>
          <li className='sidebar-item'>
            <FontAwesomeIcon className='sidebar-item__icon last' icon={faAngleDown} />
            <p className='sidebar-item__text'>See More</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
