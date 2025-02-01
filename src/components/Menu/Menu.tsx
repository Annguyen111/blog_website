import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './menu.scss'
import MenuCreate from '../MenuCreate/MenuCreate'
import MenuSection from '../MenuSection/MenuSection'
import { entertainmentItems, shoppingItems, socialItems } from '../../constants/menuData'

function Menu() {
  return (
    <div className='menu'>
      <p className='menu__title'>Menu</p>
      <div className='menu__body'>
        <div className='menu-lists'>
          <div className='list-header'>
            <FontAwesomeIcon icon={faSearch} className='list-header__search'></FontAwesomeIcon>
            <input type='text' placeholder='Search menu' className='list-header__input' />
          </div>
          <MenuSection title='Social' items={socialItems} />
          <MenuSection title='Entertainment' items={entertainmentItems} />
          <MenuSection title='Shopping' items={shoppingItems} />
        </div>
        <MenuCreate />
      </div>
    </div>
  )
}

export default Menu
