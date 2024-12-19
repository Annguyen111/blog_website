import './formLogin.scss'
import { Link } from 'react-router-dom'

function FormLogin() {
  return (
    <div className='form-login'>
      <form className='form-login__main'>
        <input type='text' placeholder='Email' className='form-input' />
        <input type='password' placeholder='Password' className='form-input' />
        <button type='submit' className='form-button'>
          Login
        </button>
        <Link to='/login' className='form-link'>
          Forgot password?
        </Link>
      </form>
      <Link to='/register' className='form-login__link form-login__link--create'>
        Create new account
      </Link>
    </div>
  )
}

export default FormLogin
