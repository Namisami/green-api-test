import { useState } from 'react'
import Login from './components/Login/Login'
import { userDataI } from './types/UserDataI'
import './App.css'

function App() {
  const [userData, setUserData] = useState<userDataI>({
    id: '',
    token: ''
  })

  return (
    <>
      <div className='container'>
        <div className="sidebar">

        </div>
        <div className="content">
          <Login onLogin={ (data: userDataI) => setUserData({...userData, ...data}) } />
        </div>
      </div>
    </>
  )
}

export default App
