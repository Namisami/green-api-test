import { ReactComponent as UserImg } from '../../assets/default-user.svg'

import './ContactItem.css'

const ContactItem = () => {
  return (
    <>
      <UserImg width="49" height="49" className='contact__img'/>
      <div className='contact__info'>
        <div className="contact__top">
          <span className="contact__name">
            Contact
          </span>
          <span className="contact__date">
            Вчера
          </span>
        </div>
        <p className="contact__msg">Текст сообщения</p>
      </div>
    </>
  )
}

export default ContactItem