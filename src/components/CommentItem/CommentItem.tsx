import avatar from '../../assets/user-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

function CommentItem() {
  return (
    <div className='comment-item'>
      <img className='comment-item__avatar' src={avatar} alt='Avatar' />
      <div className='comment-item__content'>
        <div className='comment-content'>
          <p className='content-name'>Quoc An</p>
          <p className='content-text'>
            API + ReactJs là ngon nhé. Bây giờ em theo react thì dễ xin việc hơn. Dần dần làm thêm api .Net
          </p>
        </div>
        <div className='comment-actions'>
          <p className='comment-time'>21m</p>
          <button className='comment-actions__item'>Like</button>
          <button className='comment-actions__item'>Reply</button>
          <button className='comment-actions__item'>Share</button>
        </div>
      </div>
      <button className='comment-item__menu'>
        <FontAwesomeIcon className='option-item__icon' icon={faEllipsis} />
      </button>
    </div>
  )
}

export default CommentItem
