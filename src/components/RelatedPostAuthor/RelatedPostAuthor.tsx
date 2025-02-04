interface PostAuthorProps {
  author: {
    name: string
    role: string
    avatar: string
  }
}

function RelatedPostAuthor({ author }: PostAuthorProps) {
  return (
    <div className='post-item__author'>
      <img className='author-avatar' src={author.avatar} alt='Related Avatar' />
      <div className='author-info'>
        <p className='author-info__name'>by {author.name}</p>
        <p className='author-info__role'>{author.role}</p>
      </div>
    </div>
  )
}

export default RelatedPostAuthor
