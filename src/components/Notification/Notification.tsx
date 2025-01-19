import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './notification.scss'
import FriendRequestItem from '../FriendRequestItem/FriendRequestItem'
import NotificationListItem from '../NotificationItem/NotificationItem'
import friendRequests from '../../constants/friendRequests'
import notifications from '../../constants/notificationData'

function Notification() {
  return (
    <div className='notification'>
      <div className='notification__header'>
        <p className='header-title'>Notifications</p>
        <button className='header-button'>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <ul className='notification__filters'>
        <li className='filter-item'>
          <a href='' className='filter-item__link active'>
            All
          </a>
        </li>
        <li className='filter-item'>
          <a href='' className='filter-item__link'>
            Unread
          </a>
        </li>
      </ul>
      <div className='notification__friends'>
        <p className='friends-title'>Friends request</p>
        <a href='' className='friends-btn'>
          See all
        </a>
      </div>
      <div className='notification__friend-request'>
        {friendRequests.map((request) => (
          <FriendRequestItem
            key={request.id}
            avatar={request.avatar}
            name={request.name}
            message={request.message}
            time={request.time}
            onAccept={() => console.log(`Accepted: ${request.name}`)}
            onDecline={() => console.log(`Declined: ${request.name}`)}
          />
        ))}
      </div>
      <div className='notification__earlier'>
        <p className='earlier-title'>Earlier</p>
        <a href='' className='earlier-btn'>
          See all
        </a>
      </div>
      <div className='notification__lists'>
        {notifications.map((notification) => (
          <NotificationListItem
            key={notification.id}
            avatar={notification.avatar}
            name={notification.name}
            message={notification.message}
            time={notification.time}
          />
        ))}
      </div>
    </div>
  )
}

export default Notification
