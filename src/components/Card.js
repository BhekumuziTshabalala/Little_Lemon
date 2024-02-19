import "./card.css"

export default function Card(props){
    const style = {
        width :"300px",
        height : "300px",
        backgroundSize: "cover", // resize the image to cover the div
        backgroundPosition: "center",
        backgroundImage: `url(${props.dish.image})`,
        boxShadow: "5px 5px 5px 3px black",
        borderRadius : "1vh",
        marginRight : "150px"
    }
    return (
        <>

            <div  >
                <article style={style}>  
                </article>
                <div id="name-price">
                    <h2>{props.dish.name}</h2>
                    <h2>{props.dish.price}</h2>
                </div>
                
                <p id="description">
                    {props.dish.description}</p>
            </div>
        </>
    )
}