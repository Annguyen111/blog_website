import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faXmark, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import './blogDetail.scss'
import post_img from '../../assets/story_img.jpg'
import avatar from '../../assets/user-icon.png'
import CommentItem from '../CommentItem/CommentItem'

function BlogDetail() {
  return (
    <div className='blog-detail'>
      <div className='blog-header'>
        <div className='post-author'>
          <img className='post-author__avatar' src={avatar} alt='Avatar' />
          <div className='post-author__info'>
            <p className='post-name'>Quoc An</p>
            <p className='post-time'>21m</p>
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
      <p className='blog-text'>
        Chào mọi người ạ, hiện tại thì em đang là sinh viên năm 3 và em hiện tại đang theo quá trình học Asp.net web API
        ở phía server ạ, còn về phía Client thì em đang định sẽ theo ReactJs. Mọi người cho phép em hỏi là em nên tập
        trung theo Asp.net MVC hay vẫn nên giữ nguyên học thêm về ReactJs ạ, và nhu cầu tuyển dụng thì phía nào sẽ dễ
        tìm được hơn ạ! Em cảm ơn mọi người và chúc mọi người buổi tối vui vẻ ạ
      </p>
      <img className='blog-image' src={post_img} alt='Post Image' />
      <div className='blog-actions'>
        <button className='blog-actions__item'>
          <FontAwesomeIcon className='action-icon action__like' icon={faThumbsUp} />
          Like
        </button>
        <button className='blog-actions__item'>
          <FontAwesomeIcon className='action-icon action__comment' icon={faComment} />
          Comment
        </button>
        <button className='blog-actions__item'>
          <FontAwesomeIcon className='action-icon action__share' icon={faShare} />
          Share
        </button>
      </div>
      <div className='blog-comment'>
        <select>
          <option value='1'>Most relevant</option>
          <option value='2'>Newest</option>
          <option value='3'>All comments</option>
        </select>
        <div className='comment-list'>
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </div>
        <div className='comment-form'>
          <img className='comment-form__avatar' src={avatar} alt='Avatar' />
          <input className='comment-form__input' type='text' placeholder='Write a comment...' />
          <button className='comment-form__submit'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
