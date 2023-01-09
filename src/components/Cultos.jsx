import "../styles/Cultos.css"
import ensino from '../assets/img/cultos/2.png'
import oracao from '../assets/img/cultos/3.png'
import umasbrac from '../assets/img/cultos/4.png'
import ceia from '../assets/img/cultos/5.png'
import missoes from '../assets/img/cultos/6.png'
import jubrac from '../assets/img/cultos/7.png'
import menibrac from '../assets/img/cultos/8.png'
import adobrac from '../assets/img/cultos/9.png'

function Cultos(){

    return(
        <section id="Cultos">
            <div className="bgC">
                <h1>
                    Cultos
                </h1>
                <div className="area">
                    <img src={ensino} alt="Culto de Ensino" />
                    <div>
                        <h2>
                            Culto de Ensino
                        </h2>
                        <p>
                            <em>
                                19:30 Horas
                            </em>
                        </p>
                        <p>
                            <em>
                                Quarta-Feira
                            </em>
                        </p>
                        <br />
                        <p>
                            Culto de Doutrina, onde aprendemos mais sobre a palavra de Deus.
                        </p>
                    </div>
                </div>
                <div className="area end">
                    <img src={oracao} alt="Culto de Ensino" />
                    <div>
                        <h2>
                            Círculo de Oração
                        </h2>
                        <p>
                            <em>
                                19:30 Horas
                            </em>
                        </p>
                        <p>
                            <em>
                                Sexta-Feira
                            </em>
                        </p>
                        <br />
                        <p>
                            Culto voltado para a conversa com Deus, onde há também, cura e libertação de almas, dirigido pela Ufebrac (União Feminina da Igreja O Brasil Para Cristo).
                        </p>
                    </div>
                </div>
                <div className="area">
                    <img src={umasbrac} alt="Culto de Ensino" />
                    <div>
                        <h2>
                            Culto da Umasbrac
                        </h2>
                        <p>
                            <em>
                                19:00 Horas
                            </em>
                        </p>
                        <p>
                            <em>
                                Acontece no 1º Domingo de cada Mês
                            </em>
                        </p>
                        <br />
                        <p>
                            Culto dirigido pelo conjunto da Umasbrac (União Masculina da Igreja O Brasil Para Cristo).
                        </p>
                    </div>
                </div>
                <div className="area end">
                    <img src={ceia} alt="Culto de Ensino" />
                    <div>
                        <h2>
                            Culto de Santa Ceia
                        </h2>
                        <p>
                            <em>
                                19:00 Horas
                            </em>
                        </p>
                        <p>
                            <em>
                                Acontece no 2º Domingo de cada Mês
                            </em>
                        </p>
                        <br />
                        <p>
                            Culto de Santa Ceia, onde relembramos o sacrifício que Jesus fez por nós na Cruz e nos unimos em um só espírito, tomando a Santa Ceia do Senhor.
                        </p>
                    </div>
                </div>
                <div className="area">
                    <img src={missoes} alt="Culto de Ensino" />
                    <div>
                        <h2>
                            Culto de Missões
                        </h2>
                        <p>
                            <em>
                                19:00 Horas
                            </em>
                        </p>
                        <p>
                            <em>
                                Acontece no 3º Domingo de cada Mês
                            </em>
                        </p>
                        <br />
                        <p>
                            Culto de Doutrina, onde aprendemos mais sobre a palavra de Deus.
                        </p>
                    </div>
                </div>
                <div className="area end">
                    <img src={jubrac} alt="Culto de Ensino" />
                    <div>
                        <h2>
                            Culto da Jubrac
                        </h2>
                        <p>
                            <em>
                                19:00 Horas
                            </em>
                        </p>
                        <p>
                            <em>
                                Acontece no 4º Domingo de cada Mês
                            </em>
                        </p>
                        <br />
                        <p>
                            Culto de Jovens dirigido pelo conjunto da Jubrac (Juventude da Igreja O Brasil Para Cristo).
                        </p>
                    </div>
                </div>
                <div className="area">
                    <img src={menibrac} alt="Culto de Ensino" />
                    <div>
                        <h2>
                            Culto da Menibrac
                        </h2>
                        <p>
                            <em>
                                19:00 Horas
                            </em>
                        </p>
                        <p>
                            <em>
                                Acontece no 5º Domingo de cada Mês em revezamento com o Culto da Adobrac
                            </em>
                        </p>
                        <br />
                        <p>
                            Culto da Menibrac (Meninas e Meninos da Igreja O Brasil Para Cristo) voltado para o aprendizado das crianças sobre a palavra de Deus, o nosso Senhor e Salvador.
                        </p>
                    </div>
                </div>
                <div className="area end">
                    <img src={adobrac} alt="Culto de Ensino" />
                    <div>
                        <h2>
                            Culto da Adobrac
                        </h2>
                        <p>
                            <em>
                                19:00 Horas
                            </em>
                        </p>
                        <p>
                            <em>
                                Acontece no 5º Domingo de cada Mês em revezamento com o Culto da Menibrac
                            </em>
                        </p>
                        <br />
                        <p>
                            Culto da Adobrac (Adolescentes da Igreja O Brasil Para Cristo) ministrado pela liderança, voltado para o aprendizado dos adolescentes sobre a palavra do Senhor.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cultos