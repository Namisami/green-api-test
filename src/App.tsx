import { useState, useEffect } from 'react'
import Login from './components/Login/Login'
import { userDataI } from './types/UserDataI'
import Welcome from './pages/Welcome/Welcome'
import Sidebar from './components/Sidebar/Sidebar'
import axios from 'axios'
import './App.css'

function App() {
  const [userData, setUserData] = useState<userDataI>({
    id: '',
    token: ''
  })

  useEffect(() => {
    if (userData.id !== '') {
      axios.get(`https://api.green-api.com/waInstance${userData.id}/ReceiveNotification/${userData.token}`)
        .then((res) => console.log(res))
        
    }
  }, [userData])

  return (
    <>
      <div className='container'>
        {userData.id ?
          <>
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="content">
              <Welcome />
            </div>
          </>
          : <Login onLogin={ (data: userDataI) => setUserData({...userData, ...data}) } />
        }
      </div>
    </>
  )
}

export default App
