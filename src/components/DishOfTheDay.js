import data from "./Data";
import './dishOfTheDay.css'


export default function (){
    const dish = data.special;

    const style = {
        width :"400px",
        height : "400px",
        backgroundImage: `url(${dish.image})`,
        backgroundSize: "cover", // resize the image to cover the div
        backgroundPosition: "center",
        boxShadow: "5px 5px 5px 3px black",
        borderRadius : "1vh"

    }
    return(
        <div className="dish">

             <div className="dish-info">
                <h1 id="dishOfTheDay">Dish Of The Day</h1>
                <h1 id="dish-name">{dish.name} </h1>
                <p id="dish-desciption">{dish.desciption}</p>
            </div>

            <div className="image" style={style}> </div>

        </div>
    )
}