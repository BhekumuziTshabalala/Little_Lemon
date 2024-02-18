import "./card.css"

export default function Card(props){
    const style = {
        width :"200px",
        height : "200px",
        backgroundSize: "cover", // resize the image to cover the div
        backgroundPosition: "center",
        backgroundImage: `url(${props.dish.image})`,
        boxShadow: "5px 5px 5px 3px black",
        borderRadius : "1vh",
        marginRight : "150px"
    }
    return (
        <>

            <div className="cardImage" >
                <article style={style}>
                    
                </article>
                <h1>
                </h1>
            </div>
        </>
    )
}