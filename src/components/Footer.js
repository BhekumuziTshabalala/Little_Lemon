import emailIcon from "../assets/social-icons/email.svg"
import instagramIcon from "../assets/social-icons/instagram.svg"
import facebookIcon from "../assets/social-icons/facebook.svg"
import twitterIcon from "../assets/social-icons/twitter.svg"
import logo from "../assets/logo.png"

import "./footer.css"

export default function Footer(){
    return (
        <footer className="footer">
            <div >
                <img src={logo} id="logo"/>
                <p> Little Lemon, a delightful family-owned Mediterranean restaurant that transports diners to the sun-kissed shores of the Mediterranean</p>
                <p>@BhekumuziTshabalala all rights reserved</p>
            </div>
            
            <div className="socials">
                <img src={emailIcon} alt="email" id="socialMedia" />
                <img src={instagramIcon}  alt="instagram" id="socialMedia"/>
                <img src={facebookIcon}  alt="facebook" id="socialMedia"/>
                <img src={twitterIcon}  alt="twitter" id="socialMedia"/>
            </div>

           
        </footer>
    )
}