
import { SearchNormal, ShoppingCart} from 'iconsax-react';
import { Link } from "react-router-dom";
import CartModal from '../CartModal'
import { useState } from 'react'
import{useDispatch}from 'react-redux'
import {Search}from '../actions/index'
import{auth} from "../firebase-config"
import {onAuthStateChanged,signOut} from 'firebase/auth'
import logo from "../img/hakha.png"
export default function Headerone(){
   const dispatch=useDispatch()
   const[search,setSearch]=useState("")
   const[user,setUser]=useState("")
   onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
   })
   const logOut=async()=>{

        await signOut(auth)
   }
    return(
        <>
<div className='navb'>
        <div className="nav-setting nav-left">
            <img src={logo} style={{height:"50px",width:"50px"}}/>

        </div>
        <div className="nav-setting nav-center">
            <div className="input-group">
                <input type="text" class="form-control" placeholder="Your Email" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <div class="input-group-append" onClick={()=>dispatch(Search(search))}>
                <span class="input-group-text searchbox" ><SearchNormal/></span>
                </div>
            </div>      
        </div>
        <div className="nav-setting nav-right">
            <Link className="link1" to={user?"#":'./login'} onClick={logOut}>
                <span>
                    hello {user?.email?user.email:"Anonymous"}
                </span>
                <br/>
                <b>
                    {user?"sign out":"login"}
                </b>
            </Link>
            <Link className="link1" to="/"><span>return</span><br/><b>&order</b></Link>
            <Link className="link1" to="#"><span>Your</span><br/><b>prime</b></Link>
            <div> 
                <CartModal/>

            </div>
           


        </div>                 
</div>


        </>
    )
}