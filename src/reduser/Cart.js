const initial={
    AddedId:[],
    quatitiyById:{}
}
const AddedId=(state=initial.AddedId,action)=>{
if(state.indexOf(action.ProuductId)!==-1){
    return state
}
return[...state,action.ProuductId]
}
const quatitiyById=(state=initial.quatitiyById,action)=>{
    return{
        ...state,
        [action.ProuductId]:(state[action.ProuductId]||0)+1
    }
}

export default function Cart(state=initial,action){
    switch(action.type){
        case "add_To_Cart":
            return{
                AddedId:AddedId(state.AddedId,action),
                quatitiyById:quatitiyById(state.quatitiyById,action)
            }
        case "RemoveFromCart":
            let clone=state.quatitiyById        
            clone[action.RemoveFromCart]=0

           console.log(action.RemoveFromCart)
           return  {AddedId:state.AddedId.filter(value => {
                return action.RemoveFromCart !== value
            }),
            quatitiyById:clone
        }
        default:return state
    }
}