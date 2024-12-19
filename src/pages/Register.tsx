import FormRegister from '../components/FormRegister/FormRegister'
import '../styles/register.scss'

function Register() {
  return (
    <div className='register'>
      <div className='register-wrapper'>
        <h1 className='register-wrapper__title'>Register</h1>
        <FormRegister />
      </div>
    </div>
  )
}

export default Register
