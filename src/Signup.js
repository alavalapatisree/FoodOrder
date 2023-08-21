import React from "react";
import logo from'./logo.svg'

export default function SignUp(){
    const [newData,setNewData]=React.useState(
        {
            username:'',
            email:'',
            password:''
        })
    const[mistake,setMistake]=React.useState(false);

        function createData(event){
            const {name,value}=event.target
            setNewData(prevData=>({
                ...prevData,
                [name]:value
            }))
        }
        console.log(newData)
        function updateData(){
            newData.password===newData.re_password.value?localStorage.setItem("user",JSON.stringify(newData)):setMistake(true);
        }
        
    return(
        <div className="login-page">
            <div className="login-layout">
                <div className="login-form">
                    <div className="logo">
                        <img src={logo}></img>
                        <h3>Tasty Kitchen</h3>
                    </div>
                    <h1>Create Account</h1>
                    <div>
                        <div className="info-container">
                            <label htmlFor="username" className="label-text">USERNAME</label>
                            <input onChange={createData} type="text" name="username" placeholder="Username" className="user-info" />
                        </div>
                        <div className="info-container">
                            <label htmlFor="email" className="label-text">E-Mail Id</label>
                            <input onChange={createData} type="text" name="email" placeholder="Email" className="user-info" />
                        </div>
                        <div className="info-container">
                            <label htmlFor="password"className="label-text">PASSWORD</label>
                            <input onChange={createData} type="password" name="password" placeholder="Password" className="user-info"/>
                        </div>
                        <div className="info-container">
                            <label htmlFor="re_password"className="label-text">RE-ENTER PASSWORD</label>
                            <input onChange={createData} type="password" name="re_password" placeholder="Re-enter password again" className="user-info"/>
                        </div>
                        {mistake && <p>*both passwords should be same</p>}
                    </div>
                    <button className="login-btn" onClick={updateData}>Create</button>
                </div>
            </div>
            <div className="login-image">
            </div>
        </div>
    )
}