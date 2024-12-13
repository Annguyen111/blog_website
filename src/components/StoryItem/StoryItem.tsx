interface StoryProps {
  imageUrl: string
  avatarUrl: string
  name: string
}

const StoryItem: React.FC<StoryProps> = ({ imageUrl, avatarUrl, name }) => {
  return (
    <div className='story-item'>
      <img className='story-item__img' src={imageUrl} alt='Story Image' />
      <img className='story-item__avatar' src={avatarUrl} alt='Avatar' />
      <p className='story-item__name'>{name}</p>
    </div>
  )
}

export default StoryItem
