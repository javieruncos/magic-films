import "../../assets/style/SobreNosotros.css";
import fondo from "../../assets/img/ttten.svg"
const SobreNosotros = () => {
    return (
        <>

            <div className='sobre-nosotros'>
                <div className="nosotros-img">
                    <img src="https://cdn0.casamientos.com.ar/vendor/7425/3_2/960/jpg/entrada_7_117425.jpeg" alt="" />
                </div>
                <div className="info-nosotros">
                    {/* <img src={fondo} alt="" /> */}
                    <div className="text-nosotros">
                        <h3 className="display-4 text-color fw-bold">The exceptional, everywhere</h3>
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
                    <div className="d-flex justify-content-center flex-column text-center container px-3">
                        <h5 className="display-2">Podemos ayudarte?</h5>
                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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