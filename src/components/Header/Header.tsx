import { Link, useLocation } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { actionLinks, navLinks } from '../../constants/headerData'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react'

interface HeaderProps {
  onAvatarClick: () => void
  onBellClick: () => void
  onMenuClick: () => void
}

function Header({ onAvatarClick, onBellClick, onMenuClick }: HeaderProps) {
  const [activeId, setActiveId] = useState<number | null>(null)
  const location = useLocation()

  const handleHeaderClick = (id: number, name: string) => {
    if (activeId === id) {
      setActiveId(null)
    } else {
      setActiveId(id)
    }
    if (name === 'profile') {
      onAvatarClick()
    }
    if (name === 'notifications') {
      onBellClick()
    }
    if (name === 'menu') {
      onMenuClick()
    }
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
                className={`nav-list__item ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => handleHeaderClick(link.id, link.name)}
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
                className={`actions-list__item ${activeId === action.id ? 'active' : ''}`}
                onClick={() => handleHeaderClick(action.id, action.name)}
              >
                <Link to={action.path}>
                  {action.isImage ? (
                    <img src={action.icon} alt={`Icon for ${action.name}`} />
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
