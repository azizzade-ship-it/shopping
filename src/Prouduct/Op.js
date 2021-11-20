import React,{useState}from"react"
import Button from '@material-ui/core/Button'
import{ useDispatch}from 'react-redux'
import {Opinion}from"../actions"
function Opinions({index}){
    

    const [name,setname]=useState("")
    const [lastname,setlastname]=useState("")
    const [opinion,setOpinion]=useState("")
    const dispatch=useDispatch()

    const nameHandler=(event)=>{
         setname(
             event.target.value
         )
     }
    const lastNameHandler=event=>{
         setlastname(
             event.target.value
         )
     }
    const OpinionHandler=event=>{
         setOpinion(
             event.target.value
         )
     }

     
    const submithandler=(event)=>{event.preventDefault()
       dispatch(Opinion(name,lastname,opinion,index))
       setname("")
       setlastname("")
       setOpinion("")
    }


    return(
<>
    <form  className="form-group">
        <input className="form-control" type="text" value={name} placeholder="name" onChange={nameHandler}/>
        <br/>
        <input className="form-control" type="text" value={lastname} placeholder="lastname" onChange={lastNameHandler}/>
        <div className="textitem">
            <textarea className="form-control" rows="5"  value={opinion} type="text" onChange={OpinionHandler}/>
        </div>
        <Button align="center" type="submit" variant="contained" className="form-control" color="primary" onClick={submithandler}>
        "opinion"
        </Button>
    </form>
</>
    )
}
export default Opinions