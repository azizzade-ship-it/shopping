import React from "react"
import "../style/product.css"
import Dollor from "../img/coin.png"
import {useParams} from "react-router-dom";
import {addToCart}from '../actions/index';
import Opinions from './Op';
import{connect, useDispatch}from 'react-redux';
import Popularity from "./Popularity"
import ReactStars from 'react-stars'






 function Product({prouduct}){

    const dispatch=useDispatch()
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
      const onAddToCart=()=>{
        dispatch(addToCart(id))
      }
    
      let { id } = useParams();
      const Pr=prouduct[id]
      
      let sumScore=0
      let length=0
      for(var i in Pr.Score){
        sumScore+=Pr.Score[i]
        length+=1
        
      }
      let result=100*(sumScore/length)/5


      const opinionUser=prouduct[Pr.id]?.opinion?.map((value,index)=>{
        return(
           <>
           <fieldset className="opinion">
               <legend>{value.name}{value.lastname}</legend>
               <h4>{value.opinion}</h4>
           </fieldset>
           </>
        )
    })
const test={q:"questuion",w:"write",r:"rest"}

    return(
      <div className="container">

          
        <div className="card">
            <div
                className="
                  product-card__price-discount
                  js-product-card-discount-percentage
                "
              >{Pr.kind}</div>
               <div class="product-card__price-row">
              <span
                class="product-card__selling-price js-product-card-price"
              > {Pr.price}</span>
              <span><img src={Dollor} className="dollar"/></span>
            </div>
                
            <Popularity value={result}/>

            <img src={`/images/${Pr.kind}.jpg`}  className="productImage" />

            <button className="btn btn-success"
    disabled={Pr.inventory>0?'':"disabled"}
    onClick={onAddToCart}
    >{Pr.inventory>0?"Add To The Cart":"Finished"}

    </button> 
        </div>
        <Opinions index={Pr.id}/>
        {opinionUser}
  </div>

    )
}
const mapStateToProps=(state)=>({
    prouduct:state.Product,
    

})
export default connect(mapStateToProps)(Product)