interface NotificationListItemProps {
  avatar: string
  name: string
  message: string
  time: string
}

function NotificationListItem({ avatar, name, message, time }: NotificationListItemProps) {
  return (
    <div className='list-item'>
      <img src={avatar} alt='Notification Avatar' className='list-item__avatar' />
      <div className='list-item__info'>
        <p className='info-name'>{name}</p>
        <p className='info-message'>{message}</p>
        <p className='info-time'>{time}</p>
      </div>
    </div>
  )
}

export default NotificationListItem
