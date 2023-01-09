import "../styles/Top.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { BiUpArrow } from "react-icons/bi"

function Top() {
    return (
        <div class="fab">
            <Link
                activeClass="active"
                to="Inicio"
                spy={true}
                smooth={true}
                duration={500}
                className="main"
            >
                <BiUpArrow className="icon" />
            </Link>
        </div>
    );
}

export default Top;
