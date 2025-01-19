import avatar from '../assets/user-icon.png'
import {
  faHouse,
  faVideo,
  faShop,
  faUsers,
  faGamepad,
  faSquareCaretDown,
  faBell,
} from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  { id: 1, icon: faHouse, path: '/', name: 'Home' },
  { id: 2, icon: faVideo, path: '/videos', name: 'Videos' },
  { id: 3, icon: faShop, path: '/shop', name: 'Shop' },
  { id: 4, icon: faUsers, path: '/users', name: 'Users' },
  { id: 5, icon: faGamepad, path: '/games', name: 'Games' }
]

const actionLinks = [
  { id: 1, icon: faSquareCaretDown, path: '', name: 'menu' },
  { id: 2, icon: faBell, path: '', name: 'notifications' },
  { id: 3, icon: avatar, path: '', name: 'profile', isImage: true }
]

export { navLinks, actionLinks }
