import "../style/product.css"
import ReactStars from 'react-stars'
import Dollor from "../img/coin.png"
import {useNavigate } from "react-router-dom";


export default function Priducts({value,onAddToCart,}){
  let history=useNavigate();

  const ratingChanged = (newRating) => {
        console.log(newRating)
      }
      let sumScore=0
      let length=0
      for(var i in value.Score){
        sumScore+=value.Score[i]
        length+=1
        
      }
      let result=sumScore/length


    
    return(
        <div className="card">
            <div
                class="
                  product-card__price-discount
                  js-product-card-discount-percentage
                "
              >{value.kind}</div>
               <div class="product-card__price-row">
              <span
                class="product-card__selling-price js-product-card-price"
              > {value.price}</span>
              <span><img src={Dollor} className="dollar"/></span>
            </div>
                
            <ReactStars
              count={5}
              value	={result}
              onChange={ratingChanged}
              size={24}
              color2={'#ffd700'} />
            <img src={`./images/${value.kind}.jpg`}  className="productImage" onClick={()=>history(`Product/${value.id}`)}/>
            <button className="btn btn-success"
    disabled={value.inventory>0?'':"disabled"}
    onClick={onAddToCart}
    >{value.inventory>0?"Add To The Cart":"Finished"}
    
    </button>
        </div>
    )
}