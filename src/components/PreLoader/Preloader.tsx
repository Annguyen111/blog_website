import './preLoader.scss'

interface PreLoaderProps {
  isVisible: boolean
}

function Preloader({ isVisible }: PreLoaderProps) {
  return (
    <div className={`preloader ${!isVisible ? 'hidden' : ''}`}>
      <div className='loader'></div>
    </div>
  )
}

export default Preloader
