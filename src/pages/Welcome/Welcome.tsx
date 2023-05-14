import { ReactComponent as WelcomeImg} from '../../assets/welcome.svg'
import { ReactComponent as LockImg} from '../../assets/lock.svg'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='welcome'>
      <WelcomeImg className='welcome__image' />
      <h1 className='welcome__title'>WhatsApp Web</h1>
      <div className="welcome__subtitle">
        <p className='welcome__text'>
          Отправляйте и получайте сообщения без необходимости оставлять телефон подключённым.
        </p>
        <p className='welcome__text'>
          Используйте WhatsApp одновременно на четырёх связанных устройствах и одном телефоне.
        </p>
      </div>
      <div className='welcome__bottom bottom'>
        <LockImg className='bottom_icon'/>
        <p className='bottom__text'>Защищено сквозным шифрованием</p>
      </div>
    </div>
  )
}

export default Welcome