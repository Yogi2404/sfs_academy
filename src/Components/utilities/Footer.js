import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/css/Footer.css';
import logo from "../../Assets/img/logo-removebg-preview.png";
import map from "../../Assets/icons/map-pin.svg";
import call from "../../Assets/icons/phone.svg";
import mail from "../../Assets/icons/mail.svg";
import ig from "../../Assets/icons/fa/instagram.svg";
import wa from "../../Assets/icons/fa/whatsapp.svg";
import fb from "../../Assets/icons/fa/square-facebook.svg";
import li from "../../Assets/icons/fa/linkedin.svg";

function Footer() {
    const footRef = useRef();

    const showFooter = () => {
        footRef.current.classList.toggle(
            "responsive_foot"
        );
    };


    return (
        <div>
            <div className="col-lg-12 d-flex footeer-main">
                {/* <div className="col-lg-3">
                    <div className="footer-brand"><a className="footer-brand ms-5 me-5 logo" href="#"><img src={logo}></img></a></div>
                </div> */}
                <div className="col-lg-6">

                    <ul>
                        <h4>Contact Us</h4>
                        <div className="d-flex">
                        <li><img className="phn" src={call} />+91 8983019596</li><li>/</li>
                        <li>+91 9975287669</li>
                        </div>
                        <li><img className="mail" src={mail} />sfsacad.info@gmail.com</li>
                    </ul>
                </div>
                <div className="col-lg-6 socials">
                    
                        <h4>Socials</h4>
                        <a href="https://www.instagram.com/sfs.academy?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><img className="ig" src={ig} /></a>
                        <a href="https://api.whatsapp.com/send?phone=919975287669" target="_blank" rel="noopener noreferrer"><img className="wa" src={wa} /></a>
                        <a><img className="fb" src={fb} /></a>
                        <a href="https://www.linkedin.com/in/sfs-academy-a57b762a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><img className="li" src={li} /></a>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;