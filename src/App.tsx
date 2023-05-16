import { useState, useEffect } from 'react'
import Login from './components/Login/Login'
import { userDataI } from './types/UserDataI'
import Input from './Input/Input'
import Welcome from './pages/Welcome/Welcome'
import IconButtonList from './components/IconButtonList/IconButtonList'
import Contacts from './components/Contacts/Contacts'
import { ReactComponent as DefaultUserImg } from './assets/default-user.svg'
import { ReactComponent as GroupImg } from './assets/group.svg'
import { ReactComponent as StatusImg } from './assets/status.svg'
import { ReactComponent as ChatImg } from './assets/chat.svg'
import { ReactComponent as MenuImg } from './assets/menu.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [userData, setUserData] = useState<userDataI>({
    id: '',
    token: ''
  })
  const [activeChat, setActiveChat] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (userData.id !== '') {
      axios.get(`https://api.green-api.com/waInstance${userData.id}/ReceiveNotification/${userData.token}`)
        .then((res) => console.log(res))
    }
  }, [userData])

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message) {
      axios.post(`https://api.green-api.com/waInstance${userData.id}/SendMessage/${userData.token}`, {
        'chatId': `${activeChat}@c.us`,
        'message': message
      })
    }
  }

  return (
    <>
      <div className='container'>
        {userData.id ?
          <>
            <div className="sidebar">
              <div className="sidebar__header header">
                <DefaultUserImg className='header__user'/>
                <IconButtonList icons={ [GroupImg, StatusImg, ChatImg, MenuImg] }/>
              </div>
              <Contacts
                onContactSelect={ (contact) => {
                  setActiveChat(contact)
                  setMessage('')
                } }
              />
            </div>
            <div className="content">
              { activeChat 
                ? 
                <div className="chat">
                  <form 
                    className="chat__send"
                    onSubmit={ sendMessage }  
                  >
                    <Input
                      value={ message }
                      onInputChange={ (message) => setMessage(message) }
                    >
                      Введите сообщение
                    </Input>
                  </form>
                </div>
                : <Welcome />
              }
            </div>
          </>
          : <Login onLogin={ (data: userDataI) => setUserData({...userData, ...data}) } />
        }
      </div>
    </>
  )
}

export default App
