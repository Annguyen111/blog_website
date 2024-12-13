import './feed.scss'
import avatar from '../../assets/user-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faImages, faFaceSmile, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import StoryItem from '../StoryItem/StoryItem'
import { stories } from '../../constants/storiesData'
import postsData from '../../constants/postData'
import Post from '../Post/Post'

function Feed() {
  return (
    <div className='feed'>
      {/* Create Post Section */}
      <div className='feed__create-post'>
        <div className='create-input'>
          <img className='create-input__avatar' src={avatar} alt='Avatar' />
          <input className='create-input__box' type='text' placeholder="What's on your mind?" />
        </div>
        <div className='create-actions'>
          <button className='create-actions__action action-live'>
            <FontAwesomeIcon className='action-icon action__live' icon={faCameraRetro} />
            Live Video
          </button>
          <button className='create-actions__action action-photo'>
            <FontAwesomeIcon className='action-icon action__photo' icon={faImages} />
            Photo/Video
          </button>
          <button className='create-actions__action action-feeling'>
            <FontAwesomeIcon className='action-icon action__feeling' icon={faFaceSmile} />
            Feeling/Activity
          </button>
        </div>
      </div>

      {/* Stories Section */}
      <div className='feed__stories'>
        {stories.map((story) => (
          <StoryItem key={story.id} imageUrl={story.imageUrl} avatarUrl={story.avatarUrl} name={story.name} />
        ))}
        <button className='stories-button'>
          <FontAwesomeIcon className='stories-button__icon' icon={faArrowRight} />
        </button>
      </div>

      {/* Post Section */}
      {postsData.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          avatar={post.avatar}
          name={post.name}
          time={post.time}
          text={post.text}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default Feed
