import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsis,
  faXmark,
  faThumbsUp,
  faComment,
  faShare
} from '@fortawesome/free-solid-svg-icons'

interface PostProps {
    id: number;
    avatar: string;
    name: string;
    time: string;
    text: string;
    image: string;
  }

function Post({ avatar, name, time, text, image }: PostProps ) {
  return (
    <div className='feed__post'>
      <div className='feed__post-header'>
        <div className='post-author'>
          <img className='post-author__avatar' src={avatar} alt='Avatar' />
          <div className='post-author__info'>
            <p className='post-name'>{name}</p>
            <p className='post-time'>{time}</p>
          </div>
        </div>
        <div className='post-options'>
          <a className='option-item' href=''>
            <FontAwesomeIcon className='option-item__icon' icon={faEllipsis} />
          </a>
          <a className='option-item' href=''>
            <FontAwesomeIcon className='option-item__icon' icon={faXmark} />
          </a>
        </div>
      </div>
      <p className='post-text'>{text}</p>
      <img className='post-image' src={image} alt='Post Image' />
      <div className='post-actions'>
        <button className='post-actions__item'>
          <FontAwesomeIcon className='action-icon action__like' icon={faThumbsUp} />
          Like
        </button>
        <button className='post-actions__item'>
          <FontAwesomeIcon className='action-icon action__comment' icon={faComment} />
          Comment
        </button>
        <button className='post-actions__item'>
          <FontAwesomeIcon className='action-icon action__share' icon={faShare} />
          Share
        </button>
      </div>
    </div>
  )
}

export default Post
