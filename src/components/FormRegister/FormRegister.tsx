import './formRegister.scss'
import { Link } from 'react-router-dom'

function FormRegister() {
  return (
    <div className='form-register'>
      <div className='form-header'>
        <h2 className='form-header__title'>Create new account</h2>
        <p className='form-header__subtitle'>It's quick and easy</p>
      </div>
      <form action='' className='form-main'>
        <div className='group-text'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Surname' />
        </div>
        <div className='group-date'>
          <label htmlFor=''>Date of birth</label>
          <div className='group-date__input'>
            <input type='number' placeholder='DD' />
            <input type='number' placeholder='MM' />
            <input type='number' placeholder='YYYY' />
          </div>
        </div>
        <div className='group-gender'>
          <label htmlFor=''>Gender</label>
          <div className='group-gender__input'>
            <div className='input-box'>
              <input type='radio' checked/> Female
            </div>
            <div className='input-box'>
              <input type='radio' /> Male
            </div>
            <div className='input-box'>
              <input type='radio' /> Custom
            </div>
          </div>
        </div>
        <input className='input-phone' type='text' placeholder='Mobile number or email address' />
        <input className='input-pass' type='text' placeholder='New Password' />
      </form>
      <p className='form-note'>People who use service may have uploads your contact information to Blog</p>
      <button className='form-btn'>Sign up</button>
      <Link className='form-to-login' to='/login'>
        Already have an account? Log in
      </Link>
    </div>
  )
}

export default FormRegister
