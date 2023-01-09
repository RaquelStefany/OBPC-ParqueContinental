import "../styles/Rodape.css";
import obpcLogo from "../assets/img/obpc_logo2.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Rodape() {
    return (
        <footer>
            <Link
                activeClass="active"
                to="Inicio"
                spy={true}
                smooth={true}
                duration={500}
                className="logo"
            >
                <img src={obpcLogo} alt="Logo O Brasil Para Cristo" />
                <h1>
                    Igreja Evangélica Pentecostal
                    <br />
                    O Brasil Para Cristo
                </h1>
            </Link>
            <div className="menu">
                <div>
                    <Link
                        activeClass="active"
                        to="Inicio"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Início
                    </Link>
                    <Link
                        activeClass="active"
                        to="Cultos"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Cultos
                    </Link>
                    <Link
                        activeClass="active"
                        to="Localidade"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Onde Estamos
                    </Link>
                </div>
                <div>
                    <a href="">
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
                        duration={500}
                    >
                        Contato
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;
