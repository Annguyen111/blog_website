import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/logo.png'
import avatar from '../../assets/user-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faVideo,
  faShop,
  faUsers,
  faGamepad,
  faSquareCaretDown,
  faMessage,
  faBell,
  faSearch
} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='header'>
      <div className='header__wrap'>
        <div className='header-logo'>
          <Link to='/' className='header-logo__icon'>
            <img src={logo} alt='Facebook Logo' />
          </Link>
          <div className='header-logo__search'>
            <button className='search-button'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input type='text' name='' id='' placeholder='Search Facebook' className='search-input' />
          </div>
        </div>
        <nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-list__item active'>
              <Link to='/'>
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>
            <li className='nav-list__item'>
              <Link to='/'>
                <FontAwesomeIcon icon={faVideo} />
              </Link>
            </li>
            <li className='nav-list__item'>
              <Link to='/'>
                <FontAwesomeIcon icon={faShop} />
              </Link>
            </li>
            <li className='nav-list__item'>
              <Link to='/'>
                <FontAwesomeIcon icon={faUsers} />
              </Link>
            </li>
            <li className='nav-list__item'>
              <Link to='/'>
                <FontAwesomeIcon icon={faGamepad} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className='header-actions'>
          <ul className='actions-list'>
            <li className='actions-list__item'>
              <Link to='/'>
                <FontAwesomeIcon icon={faSquareCaretDown} />
              </Link>
            </li>
            <li className='actions-list__item'>
              <Link to='/'>
                <FontAwesomeIcon icon={faMessage} />
              </Link>
            </li>
            <li className='actions-list__item'>
              <Link to='/'>
                <FontAwesomeIcon icon={faBell} />
              </Link>
            </li>
            <li className='actions-list__item'>
              <Link to='/'>
                <img src={avatar} alt='Avatar User' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
