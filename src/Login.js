import "./style/Sighn.css"
import{auth} from "./firebase-config"
import {signInWithEmailAndPassword} from 'firebase/auth'
import React,{useState} from "react"
import { Route, Switch,Routes ,Link } from "react-router-dom";

function Login(){
    const[LoginEmail,SetLoginEmail]=useState("")
    const[LoginPassword,SetLoginPassword]=useState("")
    const login=async()=>{
        console.log("user")
        try{
            const user=await signInWithEmailAndPassword(auth,LoginEmail,LoginPassword)
            console.log(user)
        }catch(error){
            console.log(error.message)
        }
    }
    return(
    <div className="SignGlobal">
            <h1>Login</h1>
            <form>
               
                <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={event=>{
                        SetLoginEmail(event.target.value)
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="pwd" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" onChange={event=>{
                        SetLoginPassword(event.target.value)
                    }}/>
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                    </label>
                </div>
                <button type="button" className="btn form-control btn-success" onClick={login}>Submit</button>
                <Link to="/sighnup">register</Link>
            </form>
    </div>)
}
export default Login