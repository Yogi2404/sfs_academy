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
import { useNavigate } from 'react-router-dom';

function Footer() {
    const footRef = useRef();
    const emailAddress = 'support@sfsacademy.in';
    const phoneNumber = '+91 8983019596';
    const navigate = useNavigate();

    const showFooter = () => {
        footRef.current.classList.toggle(
            "responsive_foot"
        );
    };

    const handleGotoTermsAndConditions = () => {
        navigate("/termsandconditions");
      };


    return (
        <div>
            <div className="col-lg-12 d-flex footer-main">
                <div className="col-lg-4 d-flex contact-us">
                    <ul>
                        <h4>Contact Us</h4>
                        <div className="d-flex">
                            <li><img className="phn" src={call} /><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></li>
                        </div>
                        <li><img className="mail" src={mail} /><a href={`mailto:${emailAddress}`}>{emailAddress}</a></li>
                        <li><img className="location" src={map} />PCMC, Maharashtra, India</li>
                    </ul>
                </div>
                <div className="col-lg-4 socials">
                    <h4>Socials</h4>
                    <a href="https://www.instagram.com/sfs.academy?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><img className="ig" src={ig} /></a>
                    <a href="https://api.whatsapp.com/send?phone=918983019596" target="_blank" rel="noopener noreferrer"><img className="wa" src={wa} /></a>
                    <a href="https://www.linkedin.com/in/sfs-academy-a57b762a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><img className="li" src={li} /></a>
                </div>
                <div className="col-lg-3 tnc">
                    <h4>Legal</h4>
                    <a href="" onClick={handleGotoTermsAndConditions}>Terms And Conditions | Privacy Policy | Cancellation Policy | Refund Policy</a>
                </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center rights">
                © 2024 SFS Academy. All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;