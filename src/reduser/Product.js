
export default function Product(state=[ {id:0, kind: "ipad", price: "2000", inventory: 5,opinion:[],Score:{ali:2,hasan:3,javad:5,tarane:4} },
{ id: 1, kind: "apple", price: "6000", inventory: 3,opinion:[],Score:{ali:2,hasan:3,javad:5,tarane:6}},
{ id: 2, kind: "j1", price: "1000", inventory: 8,opinion:[],Score:{ali:2,hasan:3,javad:5,tarane:6} },
{ id: 3, kind: "computer", price: "6000", inventory: 3,opinion:[],Score:{ali:2,hasan:1,javad:5,tarane:3} },
{id:4, kind: "macbook", price: "3000", inventory: 5,opinion:[],Score:{ali:2,hasan:2,javad:5,tarane:6}},
{ id: 5, kind: "headphon", price: "300", inventory: 3,opinion:[],Score:{ali:2,hasan:3,javad:3,tarane:1} },
{ id: 6, kind: "x-box", price: "2380", inventory: 18,opinion:[],Score:{ali:2,hasan:3,javad:5,tarane:6} },
{ id: 7, kind: "tablet", price: "400", inventory: 3,opinion:[],Score:{ali:2,hasan:3,javad:5,tarane:6}},
{ id: 8, kind: "j7", price: "1400", inventory: 53,opinion:[],Score:{ali:2,hasan:3,javad:5,tarane:6}}

],action){
    switch(action.type){
        case "add_To_Cart":
           let clone=[...state]          
           clone[action.ProuductId].inventory=clone[action.ProuductId].inventory-1
            return clone
        case "Recived_Product":return action.product
        case "RemoveFromCart":
            let returnValuInventory=[...state]          
            returnValuInventory[action.RemoveFromCart].inventory=returnValuInventory[action.RemoveFromCart].inventory+action.valueInventory
            return returnValuInventory
        case "opinion":
            return [
                ...state,
                state[action.index].opinion.push({name:action.name,lastname:action.lastname,opinion:action.opinion})
            ]
        default: return state
        
    }

}