import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'

interface ContactListProps {
  contacts?: string[]
  onContactItemSelect: (contact: string) => void
}

const ContactList = ({
  contacts,
  onContactItemSelect
}: ContactListProps) => {
  return (
    <ul className='contacts'>
      { contacts?.map(contact => {
        return (
          <li
            key={ contact } 
            className='contacts__item'
            onClick={ () => onContactItemSelect(contact) }
          >
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