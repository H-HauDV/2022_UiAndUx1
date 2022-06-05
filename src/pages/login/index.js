import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { useAuth } from "../../auth";
import "./login.scss"
export const Login = () => {
    const [user,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/worker'
    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath,{replace:true})
    }

    return(
        <form onSubmit={handleLogin}>
            <div className="imgcontainer">
                <img src="https://cdn.icon-icons.com/icons2/582/PNG/512/worker_icon-icons.com_55029.png" alt="Avatar" className="avatar"/>
            </div>

            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required onChange={(e) => setUser(e.target.value)}/>

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit">Login</button>
            </div>
        </form>
    )
}
