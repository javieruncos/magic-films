import "../../assets/style/SobreNosotros.css";
import fondo from "../../assets/img/ttten.svg"
import Estefi from "../../assets/img/EstefiSandoval.jpg"
const SobreNosotros = () => {
    return (
        <>

            <div className='sobre-nosotros' data-aos="fade-up">
                <div className="nosotros-img">
                    {/* <img src="https://images.pexels.com/photos/2883160/pexels-photo-2883160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                    <img src={Estefi} alt="" />
                </div>
                <div className="info-nosotros">
                    <div className="text-nosotros">
                        <h3 className="display-5 text-color fw-bold">Lo excepcional, en todas partes</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                            ducimus ipsa assumenda provident maiores iure dolor, impedit dolore iste
                            dicta eum quas architecto, molestias ullam voluptate ab voluptates,
                            ea reiciendis alias at nisi  necessitatibus fugit! Perspiciatis sequi
                            delectus fuga est.
                        </p>
                    </div>
                </div>
            </div>
            <div className="Portada-contacto">
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