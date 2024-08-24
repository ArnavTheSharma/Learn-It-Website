import "./Footer.css"
import facebook from "./facebookIcon.png"
import insta from "./instagramIcon.png"
import discord from "./discordIcon.png"
function Footer(){
    return(
        <div id="Footer">
            <div id="quickLinks">
                <div id="socialLinks">
                    <a href="https://www.facebook.com/groups/276584458322427/"><img src={facebook} className="image"></img></a>
                    <a href="https://www.instagram.com/learn.it_academics/"><img src={insta} className="image"></img></a>
                    <a href="https://discord.com/invite/cD9645WNYr"><img src={discord} className="image"></img></a>
                </div>
            </div>
            <hr></hr>
            <p id="copyright">&copy;2024 by Learn It</p>
        </div>
    );
}

export default Footer;