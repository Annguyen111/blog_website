import { items1, items2 } from '../../constants/menuCreate'
import CreateMenuItem from '../CreateMenuItem/CreateMenuItem'

function MenuCreate() {
  return (
    <div className='menu-create'>
      <p className='menu-create__title'>Create</p>
      <ul className='menu-create__lists'>
        {items1.map((item, index) => (
          <CreateMenuItem key={index} icon={item.icon} title={item.title} />
        ))}
      </ul>
      <ul className='menu-create__lists'>
        {items2.map((item, index) => (
          <CreateMenuItem key={index} icon={item.icon} title={item.title} />
        ))}
      </ul>
    </div>
  )
}

export default MenuCreate
