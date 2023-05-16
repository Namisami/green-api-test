import { useState } from 'react'
import Button from '../Button/Button'
import { ButtonColors } from '../../types/ButtonColors'
import { userDataI } from '../../types/UserDataI'
import Input from '../../Input/Input'
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
      <Input 
        value={ id } 
        onInputChange={ setId }
      >
        IdInstance
      </Input>
      <Input
        value={ token }
        onInputChange={ setToken }
      >
        ApiTokenInstance
      </Input>
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