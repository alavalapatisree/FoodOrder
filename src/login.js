import React from "react";
import logo from'./logo.svg';
import { Link} from "react-router-dom";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [isUsernameValid, setIsUsernameValid] = React.useState(true)
    const [isPasswordValid, setIsPasswordValid] = React.useState(true)

    const navigate=useNavigate()
    const validateUsername = () => {username === ""?setIsUsernameValid(false):setIsUsernameValid(true)}
    const validatePassword = () => {password===""?setIsPasswordValid(false):setIsPasswordValid(true)}
    
    const handleLogin = async() =>{
        if(username===""){
            setIsUsernameValid(false)
        }
        if(password === "") {
            setIsPasswordValid(false)
        }
        if(username!=="" && password!==""){
            const userDetails = {username,password}
            const options = {
                method: "POST",
                body: JSON.stringify(userDetails)
            }
            const response = await fetch('https://apis.ccbp.in/login',options)
            const responseJson = await response.json()
            const jwtToken = responseJson.jwt_token
            Cookies.set('jwtToken',jwtToken,{expires: 90})
            navigate('/')
        }
    }

    return(
        <div className="login-page">
            <div className="login-layout">
                <div className="login-form">
                    <div className="logo">
                        <img src={logo}></img>
                        <h3>Tasty Kitchen</h3>
                    </div>
                    <h1>Login</h1>
                    <div>
                        <div className="info-container">
                            <label htmlFor="username" className="label-text">USERNAME</label>
                            <input onBlur={validateUsername} onChange={(e)=>{setUsername(e.target.value)}} type="text" name="username" placeholder="Username" className="user-info"/>
                            {!isUsernameValid&&<p className="err-Msg">*Required</p>}
                        </div>
                        <div className="info-container">
                            <label htmlFor="password"className="label-text">PASSWORD</label>
                            <input onBlur={validatePassword} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" placeholder="Password" className="user-info"/>
                            {!isPasswordValid&&<p className="err-Msg">*Required</p>}
                        </div>
                    </div>
                    <button onClick={handleLogin} className="login-btn">Log In</button>
                    <p>Don't have an account? <Link to='/signup' >Create Account</Link></p>
                </div>
            </div>
            <div className="login-image">
            </div>
        </div>
    )
}