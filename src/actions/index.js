import * as type from '../contant/actiontype'
export const recivedProducts=product=>(
    {
        type:type.Recived_Product,
        product
    }
)
export const addToCart=(ProuductId)=>({
    type:type.add_To_Cart,
    ProuductId,
   

})
export const Search=(search)=>({
    type:type.search,
    search

})
export const RemoveFromCart=(RemoveFromCart,valueInventory)=>({
    type:type.RemoveFromCart,
    RemoveFromCart,
    valueInventory

})
export const Opinion=(name,lastname,opinion,index)=>({
    type:"opinion",
     name,
     lastname,
     opinion,
     index
 })