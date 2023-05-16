import { useState } from 'react'
import Search from '../Search/Search'
import ContactList from '../ContactList/ContactList'
import './Contacts.css'

const Contacts = () => {
  const [contacts, setContacts] = useState<string[]>([])

  const newChat = (e: React.FormEvent, searchTerm: string) => {
    e.preventDefault()
    setContacts([...contacts, searchTerm])
  }

  return (
    <>
      <Search onSearch={ (e, searchTerm) => newChat(e, searchTerm) }/>
      <ContactList 
        contacts={ contacts }
      />
    </>
  )
}

export default Contacts