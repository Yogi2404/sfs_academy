import { useRef } from "react";
import "../../Assets/css/Navbar.css";
import logo from "../../Assets/img/SFS Academy Logo (14).png";
import user from "../../Assets/icons/user.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import login from '../../Assets/icons/user.svg';
import { Model } from "react-model";
import { useNavigate } from 'react-router-dom';


function Navbar({ openLoginModal }) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const navigate = useNavigate();

	const handleGotoLogin = () => {
        // Use the history object to navigate to another page
        navigate('/login');
    };

	const handleGotoHomePage = (event) => {
		event.preventDefault();
        // Use the history object to navigate to another page
        navigate('/');
    };

	const handleFormSubmit = (event) => {
		event.preventDefault(); // Prevent the default form submission
		openLoginModal(); // Call your function to open the login modal
	};


	return (
		<nav className="navbar navbar-expand-lg bg-white">
			<div className="container-fluid sfs-logo">
				<a className="navbar-brand ms-5 me-5" href="/"><img onClick={handleGotoHomePage} src={logo} alt="Logo"></img></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse listnav" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
						<li className="nav-item dropdown">
							<div className="dropdown">
								<button className="dropbtn" onClick={handleGotoHomePage}>Home</button>
							</div>
						</li>	
						<li className="nav-item dropdown">
							<div className="dropdown">
								<button className="dropbtn">Course</button>
							</div>
						</li>
						<li className="nav-item dropdown">
							<div className="dropdown">
								<button className="dropbtn">Resources</button>
							</div>
						</li>
						<li className="nav-item dropdown">
							<div className="dropdown">
								<button className="dropbtn">Reviews</button>
							</div>
						</li>
					</ul>
					<form className="d-flex login-btn" role="search" >
						<button className="btn btn-outline-primary d-flex" type="button" onClick={handleGotoLogin}>
							Sign Up
							<img src={user} alt="User Icon" />
						</button>
					</form>
				</div>
			</div>
		</nav>

	);
}

export default Navbar;