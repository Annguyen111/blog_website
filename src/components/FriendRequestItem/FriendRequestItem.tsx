interface FriendRequestItemProps {
  avatar: string
  name: string
  message: string
  time: string
  onAccept: () => void
  onDecline: () => void
}

function FriendRequestItem({ avatar, name, message, time, onAccept, onDecline }: FriendRequestItemProps) {
  return (
    <div className='friend-request-item'>
      <img src={avatar} alt='Request Avatar' className='friend-avatar' />
      <div className='friend-info'>
        <p className='friend-info__name'>{name}</p>
        <p className='friend-info__message'>{message}</p>
        <p className='friend-info__time'>{time}</p>
        <div className='friend-actions'>
          <button className='action__button-acc' onClick={onAccept}>
            Accept
          </button>
          <button className='action__button-dec' onClick={onDecline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default FriendRequestItem
