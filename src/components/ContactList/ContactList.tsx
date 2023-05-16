import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'

interface ContactListProps {
  contacts?: string[]
}

const ContactList = ({
  contacts
}: ContactListProps) => {
  return (
    <ul className='contacts'>
      { contacts?.map(contact => {
        return (
          <li key={ contact } className='contacts__item'>
            <ContactItem 
              contact={ contact }
            />
          </li>
        )
      })}
    </ul>
  )
}

export default ContactList