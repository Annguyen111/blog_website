import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookmark,
  faBell,
  faCircleMinus
} from '@fortawesome/free-solid-svg-icons'

function PostMenu() {
  return (
    <div className='post-menu'>
      <ul className='post-menu__list'>
        <li className='list-item'>
          <FontAwesomeIcon className='menu-icon' icon={faBookmark} />
          Save post
        </li>
        <li className='list-item'>
          <FontAwesomeIcon className='menu-icon' icon={faBell} />
          Turn on notifications for this post
        </li>
        <li className='list-item'>
          <FontAwesomeIcon className='menu-icon' icon={faCircleMinus} />
          Hide post
        </li>
      </ul>
    </div>
  )
}

export default PostMenu
