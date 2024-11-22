import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { actionLinks, navLinks } from '../../constants/headerData'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

function Header() {
  const handleClick = (name: string) => {
    console.log(`Clicked on: ${name}`)
  }

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
            <input type='text' placeholder='Search Facebook' className='search-input' />
          </div>
        </div>

        <nav className='nav'>
          <ul className='nav-list'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`nav-list__item ${link.name === 'Home' ? 'active' : ''}`}
                onClick={() => handleClick(link.name)}
              >
                <Link to={link.path}>
                  <FontAwesomeIcon icon={link.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='header-actions'>
          <ul className='actions-list'>
            {actionLinks.map((action) => (
              <li
                key={action.id}
                className='actions-list__item'
                onClick={() => handleClick(action.name)}
              >
                <Link to={action.path}>
                  {action.isImage ? (
                    <img src={action.icon} alt={action.name} />
                  ) : (
                    <FontAwesomeIcon icon={action.icon as IconProp} />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
