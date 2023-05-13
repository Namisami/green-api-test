import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="login__field">
        <label className="login__label" htmlFor="id">IdInstance</label>
        <input className="login__input" id="id" type="text" />
      </div>
      <div className="login__field">
        <label className="login__label" htmlFor="api">ApiTokenInstance</label>
        <input className="login__input" id="api" type="text" />
      </div>
    </div>
  )
}

export default Login