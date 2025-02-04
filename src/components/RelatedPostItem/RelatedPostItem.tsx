import RelatedPostAuthor from '../RelatedPostAuthor/RelatedPostAuthor'

interface PostItemProps {
  post: {
    image: string
    date: string
    title: string
    description: string
    author: {
      name: string
      role: string
      avatar: string
    }
  }
}

function RelatedPostItem({ post }: PostItemProps) {
  return (
    <div className='post-item'>
      <img className='post-item__image' src={post.image} alt='Related Post Image' />
      <div className='post-item__content'>
        <p className='content-date'>{post.date}</p>
        <p className='content-heading'>{post.title}</p>
        <p className='content-description'>{post.description}</p>
      </div>
      <RelatedPostAuthor author={post.author} />
    </div>
  )
}

export default RelatedPostItem
