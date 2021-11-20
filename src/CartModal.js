import React,{useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import { connect,useDispatch } from 'react-redux';
import {CardRemove,ShoppingCart} from 'iconsax-react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./style/cart.css"
import{RemoveFromCart}from"./actions"
function CartModal (props){
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const [numb,setnumb]=useState(0)
  
  const totlaArray= props.products?.map(value=>{
return value.price*value.quatitiyById
    })
  
    const total=totlaArray.reduce((pre,last)=>{
      return pre+last
    },0) 
   
    return(
        <>

     <ShoppingCart  size="32"color="#d9e3f0"variant="Bulk"    onMouseOver={() =>  setShow(true)}/>
     <span class="badge badge-danger">{props.products.length}</span>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-100w"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {
                total
              }$
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div style={{display:"flex",flexWrap:'wrap',alignContent:"spaceBetween",alignItems:"center",justifyContent:"center"}}>
       {props.products.length?(<>{props.products?.map(value=>{
           return(
               <div className="productInCart"   key={value.id}>
                  <HighlightOffIcon size="22" variant="Bulk" className="icon" onClick={()=>dispatch(RemoveFromCart(value.id,value.quatitiyById))
}/>
                  <img style={{width:"100px",height:"150px"}} src={`/images/${value.kind}.jpg`}/>
                  <div>
                    <span>{value.kind}</span>
                    <span className="badge bg-info">{value.quatitiyById}</span>
                  </div>


               </div>
           )
       })}</>):<h1>شما محصولی سفارش ندادید</h1>}
       </div>         
          </Modal.Body>
          <Modal.Footer>
          <button className="btn btn-success">تصفیه حساب</button>
          </Modal.Footer>
        </Modal>
        </>
    )
}
const GetProductCart=(state)=>{
  return state.Cart.AddedId.map(id=>(
      {
          ...state.Product[id],
          quatitiyById:(state.Cart.quatitiyById[id]||0)
      })
  )

  }
  




const mapStateToProps=(state)=>({ 
  products:GetProductCart(state),
})
export default connect(mapStateToProps)(CartModal)