import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'

interface ContactListProps {
  contacts?: []
}

const ContactList = ({
  contacts
}: ContactListProps) => {
  return (
    <ul className='contacts'>
      <li key={1} className='contacts__item'>
        <ContactItem />
      </li>
    </ul>
  )
}

export default ContactList