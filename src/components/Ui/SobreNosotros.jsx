import "../../assets/style/SobreNosotros.css";
import fondo from "../../assets/img/ttten.svg"
import Estefi from "../../assets/img/EstefiSandoval.jpg"
import celular from "../../assets/img/celular-fondo2.png.png"
import Servicios from "./Servicios";
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
                            Amo que las cosas sean simples pero creativas y, por supuesto, memorables.
                        </p>
                        <button className="btn-nosotros mt-3">Chatea Conmigo</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SobreNosotros;