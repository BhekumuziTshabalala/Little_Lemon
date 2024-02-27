import Card from "./Card"
import './specialties.css'

export default function Specialties(props){
    
    return(
        <>
            <div className="cards">
                {props.specialties.map((dish) => (
                    <Card dish = {dish}/>
                ))}
            </div>
        </>
        
       
    )

}