import "../../assets/style/SobreNosotros.css";
import fondo from "../../assets/img/ttten.svg"
import Estefi from "../../assets/img/EstefiSandoval.jpg"
import celular from "../../assets/img/celular-fondo2.png.png"
const SobreNosotros = () => {
    return (
        <>

            <div className='sobre-nosotros' data-aos="fade-up">
                <div className="nosotros-img">
                    <img src={Estefi} alt="" />
                </div>
                <div className="info-nosotros">
                    <div className="text-nosotros">
                        <h3 className="display-5 text-color fw-bold">Lo excepcional, en todas partes</h3>
                        <p>
                            Me llamo Estefi y me conocen como @soyestefisandoval. Soy profesora de Artes
                            Visuales, Filmmaker en Eventos Sociales, Creadora de contenido para Bodas y
                            Creadora de
                            contenido para redes sociales. Fundadora de @magicfilmsok CONTENIDO AUDIOVISUAL.
                            He capturado los momentos más mágicos de bodas durante más de 3 años.
                            Amo que las cosas sean simples pero creativas y, por supuesto, memorables.</p>
                    </div>
                </div>
            </div>
            <div className="Portada-contacto" >
                <img src="https://www.digixem360.com/wp-content/uploads/2022/11/Events.jpg.webp" alt="" />
                <div className="capa-contacto d-flex justify-content-center flex-column">
                    <div className="d-flex justify-content-center flex-column text-center container px-3" data-aos="fade-up">
                        <h5 className="display-2 fw-bold">Podemos ayudarte?</h5>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div>
                            <button className="btn-contacto">comunicate con nosotros</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SobreNosotros;