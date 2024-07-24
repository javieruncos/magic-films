import "../../assets/style/PortadaDescripcion.css";
import evento3 from "../../assets/img/events3.jpeg";
const PortadaDescripcion = () => {
    return (
        <div className='portada-descripcion' data-aos="fade-up">
            <img src={evento3} alt="" />
            <div className="capa-portada-descripcion">
                <div className="container">
                    <div className="info-capa-portada pb-5" data-aos="fade-up">
                        <h4 className="fw-bold display-4 text-color">Nuestra comunidad</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Molestias culpa optio a dolorem cupiditate voluptate.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PortadaDescripcion;