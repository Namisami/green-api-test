import { useState } from 'react'
import Login from './components/Login/Login'
import { userDataI } from './types/UserDataI'
import Welcome from './pages/Welcome/Welcome'
import './App.css'

function App() {
  const [userData, setUserData] = useState<userDataI>({
    id: '',
    token: ''
  })

  return (
    <>
      <div className='container'>
        {/* {userData.id ? */}
          <>
            <div className="sidebar">

            </div>
            <div className="content">
              <Welcome />
            </div>
          </>
          {/*: <Login onLogin={ (data: userDataI) => setUserData({...userData, ...data}) } />
        } */}
      </div>
    </>
  )
}

export default App
