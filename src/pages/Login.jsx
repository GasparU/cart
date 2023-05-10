import useAuthentication from "../hooks/useAuthentication"
import "./style/login.css"

const Login = () => {

    const { loginUser } = useAuthentication()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const data = { email, password }
        loginUser(data)
    }

    return (
        <form onSubmit={handleLogin} className="login__container">
            <div>
                <label className="login__label" htmlFor="email">Email</label>
                <input className="login__input" type="text" id='email' />
            </div>
            <div>
                <label className="login__label" htmlFor="password">Password</label>
                <input className="login__input" type="password" id='password' />
            </div>
            <button className="login__btn">Sing in</button>
        </form>
    )
}

export default Login