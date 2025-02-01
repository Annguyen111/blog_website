import blog_img from '../../assets/blog-image.jpg'

function BlogSidebar() {
  return (
    <div className='detail-sidebar'>
      <div className='search-box'>
        <input className='search-box__input' type='text' placeholder='Search...' />
        <button className='search-box__button'>Search</button>
      </div>
      <div className='categories'>
        <h3 className='categories__title'>Categories</h3>
        <ul className='categories__list'>
          <li className='category-item'>
            <a className='category-link' href=''>
              Asp.net
            </a>
          </li>
          <li className='category-item'>
            <a className='category-link' href=''>
              ReactJs
            </a>
          </li>
          <li className='category-item'>
            <a className='category-link' href=''>
              WebAPI
            </a>
          </li>
          <li className='category-item'>
            <a className='category-link' href=''>
              Frontend
            </a>
          </li>
          <li className='category-item'>
            <a className='category-link' href=''>
              Backend
            </a>
          </li>
          <li className='category-item'>
            <a className='category-link' href=''>
              Fullstack
            </a>
          </li>
          <li className='category-item'>
            <a className='category-link' href=''>
              Recruitment
            </a>
          </li>
        </ul>
      </div>
      <div className='recent-posts'>
        <h3 className='recent-posts__title'>Recent Posts</h3>
        <ul className='recent-posts__list'>
          <li className='item-post'>
            <img className='item-post__image' src={blog_img} alt='Avatar' />
            <p className='item-post__title'>Addiction When Gambling Becomes A Problem</p>
            <p className='item-post__date'>2022-01-01</p>
          </li>
          <li className='item-post'>
            <img className='item-post__image' src={blog_img} alt='Avatar' />
            <p className='item-post__title'>Addiction When Gambling Becomes A Problem</p>
            <p className='item-post__date'>2022-01-01</p>
          </li>
          <li className='item-post'>
            <img className='item-post__image' src={blog_img} alt='Avatar' />
            <p className='item-post__title'>Addiction When Gambling Becomes A Problem</p>
            <p className='item-post__date'>2022-01-01</p>
          </li>
        </ul>
      </div>
      <div className='tag-clouds'>
        <h3 className='tag-clouds__title'>Tag clouds</h3>
        <div className='tag-clouds__list'>
          <a className='tag-item' href=''>
            #ReactJs
          </a>
          <a className='tag-item' href=''>
            #Asp.net
          </a>
          <a className='tag-item' href=''>
            #WebAPI
          </a>
          <a className='tag-item' href=''>
            #Frontend
          </a>
          <a className='tag-item' href=''>
            #Backend
          </a>
          <a className='tag-item' href=''>
            #Fullstack
          </a>
          <a className='tag-item' href=''>
            #Recruitment
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogSidebar
