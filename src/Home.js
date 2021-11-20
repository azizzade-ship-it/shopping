import React from "react"
import "./style/Home.css"
import Products from "./Prouduct/products"
import{connect, useDispatch}from 'react-redux'
import {addToCart}from './actions/index'

 function Home(props){
    const dispatch=useDispatch()

    return(
        <>
            <div className="home">
                    {props.prouduct?.filter(val=>{
                        if (val?.kind==""){
                            return val
                        }
                        else if(val?.kind?.toLowerCase().includes(props.Search.toLowerCase())){
                            return val
                        }
                    }).map((value)=>{ 
                    return(
                    <>
                    <Products key={value.id}  value={value} onAddToCart={()=> dispatch(addToCart(value.id))}/>
                    </>
        )
    })}

            </div>;
            
         
        </>
    )
}
const mapStateToProps=(state)=>({
    prouduct:state.Product,
    Cart:state.Cart,
    Search:state.Search

})
export default connect(mapStateToProps)(Home)
