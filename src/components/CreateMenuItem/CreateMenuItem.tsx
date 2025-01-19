import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

function CreateMenuItem({ icon, title }: { icon: IconDefinition; title: string }) {
  return (
    <li className='list-item'>
      <FontAwesomeIcon icon={icon} className='list-item__icon'></FontAwesomeIcon>
      <p className='list-item__title'>{title}</p>
    </li>
  )
}

export default CreateMenuItem
