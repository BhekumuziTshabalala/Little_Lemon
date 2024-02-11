import data from "./Data";
import './dishOfTheDay.css'


export default function (){
    const dish = data.special;

    const style = {
        width :"400px",
        height : "400px",
        border: "solid 1px",
        background: "white",
        backgroundImage: 'url($ {data.image})'

    }
    return(
        <div className="dish">

             <div id="dish-info">
                <h1>{dish.name} </h1>
                <p>{dish.desciption}</p>
            </div>

            <div className="image" style={style}> </div>

        </div>
    )
}