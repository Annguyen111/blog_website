import avatar from '../assets/user-icon.png'
import {
  faHouse,
  faVideo,
  faShop,
  faUsers,
  faGamepad,
  faSquareCaretDown,
  faMessage,
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
  { id: 1, icon: faSquareCaretDown, path: '/menu', name: 'Menu' },
  { id: 2, icon: faMessage, path: '/messages', name: 'Messages' },
  { id: 3, icon: faBell, path: '/notifications', name: 'Notifications' },
  { id: 4, icon: avatar, path: '', name: 'Profile', isImage: true }
]

export { navLinks, actionLinks }
