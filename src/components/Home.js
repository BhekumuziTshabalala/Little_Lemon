import './home.css'
import DishOfTheDay from './DishOfTheDay'
import Specialties from './Specialities'

export default function Home(props){
    return(
        <main>
            <div className='dishOfTheDay'>
                <DishOfTheDay dish = {props.dish}/>
            </div>
            <div>
                <Specialties specialties = {props.specialties}/>
            </div>
            
        </main>
    )
}