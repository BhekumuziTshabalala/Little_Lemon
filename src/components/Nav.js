import logo from'../assets/logo.png'
import './nav.css'
export default function Nav(){
    var Component;
    return (

        <>
            <header>
                <div id='image'>
                    <img src={logo} alt='logo' id='header-logo'/>
                </div>

                <nav id="navigation-elements">
                    <a href='/' >Home</a>
                    <a href='/menu' >Menu</a>
                    <a href='/reservation' >Resevations</a>
                </nav>

            </header>
        </>
        
        )
}