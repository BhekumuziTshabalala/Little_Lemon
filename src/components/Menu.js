import Specialties from "./Specialities"
import "./menu.css"

export default function Menu(props){
    return (
    <div className="menu-items">
        <h1 id="text">Menu</h1>
        
        <Specialties specialties={props.menu} />
    </div>)
}