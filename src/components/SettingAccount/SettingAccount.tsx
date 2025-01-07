import './settingAccount.scss'

function SettingAccount() {
  return (
    <div className='setting-account'>
      <div className='setting-account__header'>
        <p>My account</p>
        <button>Settings</button>
      </div>
      <div className='setting-account__body'>
        <form action='' className='setting-form'>
          <div className='setting-form__personal'>
            <p className='personal-label'>Personal information</p>
            <div className='personal-input'>
              <div className='input-group'>
                <label htmlFor=''>Username</label>
                <input type='text' placeholder='Quoc An' />
              </div>
              <div className='input-group'>
                <label htmlFor=''>Email address</label>
                <input type='email' placeholder='an123@gmail.com' />
              </div>
              <div className='input-group'>
                <label htmlFor=''>First name</label>
                <input type='email' placeholder='Quoc' />
              </div>
              <div className='input-group'>
                <label htmlFor=''>Last name</label>
                <input type='email' placeholder='An' />
              </div>
            </div>
          </div>
          <div className='setting-form__contact'>
            <p className='contact-label'>Contact information</p>
            <div className='input-group'>
              <label htmlFor=''>Address</label>
              <input type='text' placeholder='Full name' />
            </div>
            <div className='input-groups'>
              <div className='input-groups__item'>
                <label htmlFor=''>City</label>
                <input type='text' placeholder='City' />
              </div>
              <div className='input-groups__item'>
                <label htmlFor=''>Country</label>
                <input type='text' placeholder='Country' />
              </div>
              <div className='input-groups__item'>
                <label htmlFor=''>Postal code</label>
                <input type='text' placeholder='Postal code' />
              </div>
            </div>
          </div>
          <div className='setting-form__about'>
            <p className='about-label'>About me</p>
            <div className='input-group'>
              <label htmlFor=''>About me</label>
              <textarea rows={5} cols={5}></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SettingAccount
