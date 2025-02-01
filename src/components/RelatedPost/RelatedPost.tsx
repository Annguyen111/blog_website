import './relatedPost.scss'
import avatar from '../../assets/user-icon.png'
import post_detail from '../../assets/blog-image.jpg'

function RelatedPost() {
  return (
    <div className='related-post'>
      <h2 className='related-post__title'>Related Post</h2>
      <div className='related-post__lists'>
        <div className='post-item'>
          <img className='post-item__image' src={post_detail} alt='Related Post Image' />
          <div className='post-item__content'>
            <p className='content-date'>March 21, 2021</p>
            <p className='content-heading'>Inspired By Clouds</p>
            <p className='content-description'>Last years wrote about why booking too...</p>
          </div>
          <div className='post-item__author'>
            <img className='author-avatar' src={avatar} alt='Related Avatar' />
            <div className='author-info'>
              <p className='author-info__name'>by Quoc An</p>
              <p className='author-info__role'>IT Developer</p>
            </div>
          </div>
        </div>
        <div className='post-item'>
          <img className='post-item__image' src={post_detail} alt='Related Post Image' />
          <div className='post-item__content'>
            <p className='content-date'>March 21, 2021</p>
            <p className='content-heading'>Inspired By Clouds</p>
            <p className='content-description'>Last years wrote about why booking too...</p>
          </div>
          <div className='post-item__author'>
            <img className='author-avatar' src={avatar} alt='Related Avatar' />
            <div className='author-info'>
              <p className='author-info__name'>by Quoc An</p>
              <p className='author-info__role'>IT Developer</p>
            </div>
          </div>
        </div>
        <div className='post-item'>
          <img className='post-item__image' src={post_detail} alt='Related Post Image' />
          <div className='post-item__content'>
            <p className='content-date'>March 21, 2021</p>
            <p className='content-heading'>Inspired By Clouds</p>
            <p className='content-description'>Last years wrote about why booking too...</p>
          </div>
          <div className='post-item__author'>
            <img className='author-avatar' src={avatar} alt='Related Avatar' />
            <div className='author-info'>
              <p className='author-info__name'>by Quoc An</p>
              <p className='author-info__role'>IT Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedPost
