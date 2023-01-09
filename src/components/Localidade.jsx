import "../styles/Localidade.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import igreja from '../assets/img/QuemSomos2.png'
import igreja2 from '../assets/img/fotoIgreja.png'

function Localidade(){

    return(
        <section id="Localidade">
            <div className="bgL">
                <div className="area">
                    <div>
                        <h1>
                            Como Nos Encontrar!
                        </h1>
                        <h3>
                            Igreja Evangélica Pentecostal
                            <br />
                            O Brasil Para Cristo
                        </h3>
                        <div className="dados">
                            <div id="foto">
                                <Carousel variant="dark" pause="hover">
                                    <Carousel.Item>
                                        <img src={igreja} alt="Imagem da Igreja" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={igreja2} alt="Imagem da Igreja" />
                                    </Carousel.Item>
                                </Carousel>
                                <a href="https://goo.gl/maps/NGJA7S7yVhdCdmvu7" target="_blank" className="btn">
                                    Abrir no Maps
                                </a>
                            </div>
                            <div>
                                <h4>
                                    Endereço
                                </h4>
                                <p>
                                    Rua Maria Ana de Olivera, 55 - Antiga Rua 10
                                </p>
                                <h4>
                                    Bairro
                                </h4>
                                <p>
                                    Parque Continental
                                </p>
                                <div id="mb">
                                    <div>
                                        <h4>
                                            Cidade
                                        </h4>
                                        <p>
                                            São Vicente
                                        </p>
                                    </div>
                                    <div>
                                        <h4>
                                            Estado
                                        </h4>
                                        <p>
                                            São Paulo
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Localidade