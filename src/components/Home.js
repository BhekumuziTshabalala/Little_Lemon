import './home.css'
import DishOfTheDay from './DishOfTheDay'
import Specialties from './Specialities'

export default function Home(props){
    return(
        <main>
            <div className='dishOfTheDay'>
                <DishOfTheDay dish = {props.dish}/>
            </div>
            <div className='specialties'>
                <h1 id="text">Our Specialities</h1>
                <Specialties specialties = {props.specialties}/>
            </div>
            
        </main>
    )
}