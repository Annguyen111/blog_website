import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import './blogDetail.scss'
import post_img from '../../assets/story_img.jpg'
import avatar from '../../assets/user-icon.png'
import CommentItem from '../CommentItem/CommentItem'
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import RelatedPost from '../RelatedPost/RelatedPost'

function BlogDetail() {
  return (
    <div className='blog-detail'>
      <div className='blog-container'>
        <div className='detail-main'>
          <div className='detail-header'>
            <div className='post-author'>
              <div className='info'>
                <p className='info__name'>A Discount Toner Cartridge Is Better Than Ever</p>
                <p className='info__time'>21m - by Quoc An</p>
              </div>
            </div>
          </div>
          <p className='detail-text'>
            Hello everyone, I am currently a 3rd year student and I am currently studying Asp.net web API on the server
            side, and on the Client side, I am planning to follow ReactJs. Can everyone please allow me to ask if I
            should focus on Asp.net MVC or should I keep learning more about ReactJs, and in terms of recruitment needs,
            which side is easier to find? Thank you everyone and wish everyone a good evening.
          </p>
          <img className='detail-image' src={post_img} alt='Post Image' />
          <div className='detail-actions'>
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
          <div className='detail-comment'>
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
        <BlogSidebar />
      </div>
      <RelatedPost />
    </div>
  )
}

export default BlogDetail
