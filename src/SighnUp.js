import "./style/Sighn.css"
import{auth} from "./firebase-config"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import React,{useState} from "react"
function SighnUp(){
    const[RegisterEmail,SetRegisterEmail]=useState("")
    const[RegisterPassword,SetRegisterPassword]=useState("")
    const register=async()=>{

        console.log("user")
        try{
            const user=await createUserWithEmailAndPassword(auth,RegisterEmail,RegisterPassword)
            console.log(user)
        }catch(error){
            console.log(error.message)
        }
    }
    return(
        <div className="SignGlobal">
            <h1>Register</h1>
            <form>
                
                <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={event=>{
                        SetRegisterEmail(event.target.value)
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" onChange={event=>{
                        SetRegisterPassword(event.target.value)
                    }}/>
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                    </label>
                </div>
                <button type="button" className="btn form-control btn-success" onClick={register}>Register</button>
            </form>
        </div>
    )

}
export default SighnUp