function MenuItem({ iconSrc, title, description }: { iconSrc: string; title: string; description: string }) {
  return (
    <li className='item'>
      <img src={iconSrc} alt='Menu Item Image' className='item__icon' />
      <div className='item-content'>
        <p className='item-content__title'>{title}</p>
        <p className='item-content__description'>{description}</p>
      </div>
    </li>
  )
}

export default MenuItem
