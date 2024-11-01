import React, { useContext } from 'react'
import "./Loginpopup.css"
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from "axios"

const Loginpopup = ( {setShowLogin}) => {
    const {url ,setToken }= useContext(StoreContext);

    const [currState , setCurrState] =useState("Login-in")
    const [data , setData] = useState({
        name:"",
        email : "",
        password : ""
    })
    const onChangeHnadler=(event )=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data , [name]: value}))
    }

    const onLogin = async(event) =>{
        event.preventDefault();
        let newUrl = url ;
        if (currState === "Login-in"){
            newUrl +="/api/user/login"
        }
        else {
            newUrl +="/api/user/register"
        }
        const response  =await axios.post(newUrl , data);
        
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token" , response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message);
        }


    }
    // useEffect(()=>{
    //     console.log(data);             THIS IS DONE TO ENSURE IF DATA IS UPDATING CORRECTING AND ONCHANGEHANDLER IS WORKING CORRECTLY 
    // },[data])

  return (
    <div className='login-popup'>
        <form onSubmit ={onLogin} className="login-popup-container" >
            <div className="login-popup-tile">
                <h2>{currState}</h2>
                <img src={assets.cross_icon} onClick={()=>{setShowLogin(false)}} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login-in" ?<></>:<input name='name' onChange={onChangeHnadler} value={data.value} type="text" placeholder='your name ' required/>}
                <input name='email' onChange={onChangeHnadler} value={data.email} type="email" placeholder='youe email ' required/>
                <input name='password' onChange={onChangeHnadler} value={data.password} type="passwords"  placeholder='your passwords ' required/>
            </div>
            <button type="submit">{currState==="Sign-up"? "CREATE ACCOUNT" :"LOGIN"}</button>
            {currState==="Login-in"
            ?  <p>create new account <span className='condition' onClick={()=>setCurrState("Sign-up")}>click here</span></p> 
            : <p>Already have an accoutn <span onClick={()=>setCurrState("Login-in")}>click here </span></p> }
        </form>
    </div>
  )
}



export default Loginpopup
