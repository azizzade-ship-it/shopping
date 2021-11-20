
export default function Search(state="",action){
    switch(action.type){
        case "search":
           
            return action.search
    
        default: return state
        
    }

}