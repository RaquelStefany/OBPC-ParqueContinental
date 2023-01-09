import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../styles/Navbar.css";
import obpcLogo from "../assets/img/obpc_logo2.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <Link
                activeClass="active"
                to="Inicio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                id="image"
            >
                <img src={obpcLogo} alt="Logo O Brasil Para Cristo" />
            </Link>
            <nav ref={navRef}>
                <Link
                    activeClass="active"
                    to="Inicio"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={showNavbar}
                >
                    Início
                </Link>
                {/* <a href="/">
                    Quem Somos
                </a> */}
                <Link
                    activeClass="active"
                    to="Cultos"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={showNavbar}
                >
                    Cultos
                </Link>
                <Link
                    activeClass="active"
                    to="Localidade"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={showNavbar}
                >
                    Onde Estamos
                </Link>
                <a href="/lideres">
                    Líderes
                </a>
                <a href="">
                    Agenda
                </a>
                <Link
                    activeClass="active"
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={showNavbar}
                >
                    Contato
                </Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
