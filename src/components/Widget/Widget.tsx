import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './widget.scss'
import contacts from '../../constants/contactData'
import ContactItem from '../ContactItem/ContactItem'

function Widget() {
  return (
    <div className='widget'>
      <div className='widget__header'>
        <p className='header-title'>Contact</p>
        <div className='header-actions'>
          <a href='' className='header-actions__item'>
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href='' className='header-actions__item'>
            <FontAwesomeIcon icon={faEllipsis} />
          </a>
        </div>
      </div>
      <div className='widget__contacts'>
        {contacts.map((contact, index) => (
          <ContactItem key={index} name={contact.name} status={contact.status} avatar={contact.avatar} />
        ))}
      </div>
    </div>
  )
}

export default Widget
