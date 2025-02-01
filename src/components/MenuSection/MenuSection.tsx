import MenuItem from '../MenuItem/MenuItem'

function MenuSection({
  title,
  items
}: {
  title: string
  items: { iconSrc: string; title: string; description: string }[]
}) {
  return (
    <div className='list-item'>
      <p className='list-item__title'>{title}</p>
      <ul className='list-item__box'>
        {items.map((item, index) => (
          <MenuItem key={index} iconSrc={item.iconSrc} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  )
}

export default MenuSection
