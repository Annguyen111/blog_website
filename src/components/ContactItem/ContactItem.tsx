interface ContactItemProps {
  avatar: string
  name: string
  status: string
}

function ContactItem({ avatar, name, status }: ContactItemProps) {
  return (
    <div className='contact-item'>
      <img src={avatar} alt='Avatar Contact' className='contact-item__avatar' />
      <div className='contact-item__info'>
        <p className='info-name'>{name}</p>
        <p className='info-status'>{status}</p>
      </div>
    </div>
  )
}

export default ContactItem
