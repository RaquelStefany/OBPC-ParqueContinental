import "../styles/Inicio.css"
import fotoInicio from '../assets/img/fotoInicio.png'
import { TbMapSearch } from 'react-icons/tb'
import { Link, animateScroll as scroll } from "react-scroll";

function Inicio(){

    return(
        <section id="Inicio">
            <div className="bgI">
                <br />
                <div className="area">
                    <div className="foto">
                        <h3>
                            -- O Brasil Para Cristo --
                        </h3>
                        <img src={fotoInicio} alt="Imagem da Igreja" />
                    </div>
                    <div className="texto">
                        <h2>
                            Bem Vindo
                        </h2>
                        <p>
                            Alegrem-se sempre no SENHOR.
                            <br />
                            <em>
                                - Filipenses 4:4
                            </em>
                            <br />
                            Grandes coisas fez o SENHOR por nós, e, por isso, estamos alegres.
                            <br />
                            <em>
                                - Salmos 126:3
                            </em>
                        </p>
                        <Link
                            activeClass="active"
                            to="Localidade"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="button"
                        >
                            <TbMapSearch className="icon"/>
                            Onde Estamos
                        </Link>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </section>
    )
}

export default Inicio