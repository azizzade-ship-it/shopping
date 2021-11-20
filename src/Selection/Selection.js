import "../style/Selection.css"
import computer from "../img/computer.jpg"

export default function Selection(){
    return(
        <div className="selection">
              
                 <p>computer&laptop</p>
            <img src={computer} style={{width:"350px",height:"250px"}}/>
        </div>
    )
}