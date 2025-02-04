import './relatedPost.scss'
import posts from '../../constants/relatedPostData'
import RelatedPostItem from '../RelatedPostItem/RelatedPostItem'

function RelatedPost() {
  return (
    <div className='related-post'>
      <h2 className='related-post__title'>Related Post</h2>
      <div className='related-post__lists'>
        {posts.map((post) => (
          <RelatedPostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default RelatedPost
