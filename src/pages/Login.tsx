import FormLogin from '../components/FormLogin/FormLogin'
import '../styles/login.scss'

function Login() {
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='login-text'>
          <h1 className='login-text__title'>Login</h1>
          <p className='login-text__description'>Connect with friends and the world around you on Blog</p>
        </div>
        <FormLogin />
      </div>
    </div>
  )
}

export default Login
