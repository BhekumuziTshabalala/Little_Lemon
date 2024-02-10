import logo from'../assets/logo.png'
import './nav.css'
export default function Nav(){
    return (
        <header>
            <div id='image'>
                <img src={logo} alt='logo' id='header-logo'/>
            </div>
            <div id="navigation-elements">
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Resevations</p>
                <p>Order Online</p>
                <p>Login</p>

            </div>

        </header>
        )
}