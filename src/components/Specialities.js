import Card from "./Card"
import './specialties.css'

export default function Specialties(props){
    
    return(
        <>
            <h1 id="text">Our Specialities</h1>
            <div className="cards">
                {props.specialties.map((dish) => (
                    <Card dish = {dish}/>
                ))}
            </div>
        </>
        
       
    )

}