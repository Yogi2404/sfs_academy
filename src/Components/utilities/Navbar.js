import { useRef } from "react";
import "../../Assets/css/Navbar.css";
import logo from "../../Assets/img/SFS Academy Logo (14).png";
import user from "../../Assets/icons/user.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import login from '../../Assets/icons/user.svg';
import { Model } from "react-model";


function Navbar({ openLoginModal }) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault(); // Prevent the default form submission
		openLoginModal(); // Call your function to open the login modal
	};


	return (
		<nav className="navbar navbar-expand-lg bg-white">
			<div className="container-fluid">
				<a className="navbar-brand ms-5 me-5 logo" href="#"><img src={logo}></img></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse listnav" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
						<li className="nav-item dropdown">
							<div class="dropdown">
								<button class="dropbtn">Home</button>
								<div class="dropdown-content">
									<a href="#">Reviews</a>
									<a href="#">Contact us</a>
									<a href="#">About</a>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown">
							<div class="dropdown">
								<button class="dropbtn">Course</button>

							</div>
						</li>
						<li className="nav-item dropdown">
							<div class="dropdown">
								<button class="dropbtn">Resources</button>

							</div>
						</li>
					</ul>
					<form className="d-flex login-btn" role="search" onSubmit={handleFormSubmit}>
						<button className="btn btn-outline-primary d-flex" type="button" onClick={openLoginModal}>
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