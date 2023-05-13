import { useState } from 'react'
import Button from '../Button/Button'
import { ButtonColors } from '../../types/ButtonColors'
import { userDataI } from '../../types/UserDataI'
import axios from 'axios'
import './Login.css'

interface LoginProps {
  onLogin: (data: userDataI) => void
}

const Login = ({
  onLogin
}: LoginProps) => {
  const [id, setId] = useState('')
  const [token, setToken] = useState('')

  const handleLogin = () => {
    axios.get(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`)
      .then((res) => {
        if (res.data.stateInstance === 'authorized') {
          onLogin({id, token})
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="login">
      <div className="login__field">
        <label className="login__label" htmlFor="id">IdInstance</label>
        <input className="login__input" id="id" value={ id } onChange={ (e) => setId(e.target.value) } type="text" />
      </div>
      <div className="login__field">
        <label className="login__label" htmlFor="api">ApiTokenInstance</label>
        <input className="login__input" id="api" value={ token } onChange={ (e) => setToken(e.target.value) } type="text" />
      </div>
      <Button  
        color={ ButtonColors.primaryOutline }
        onButtonClick={ handleLogin }
      >
        Войти
      </Button>
    </div>
  )
}

export default Login