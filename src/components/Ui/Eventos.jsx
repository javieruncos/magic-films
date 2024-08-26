import "../../assets/style/Eventos.css";
import souveniers from "../../assets/img/souveniers.jpeg";
import { Link } from "react-router-dom";
const Eventos = () => {
    return (
        <div className="container" data-aos="fade-up">
            <div className="titulo-eventos mb-4 px-3" data-aos="fade-up">
                <h3 className="text-color fs-2 fw-bold my-4" >Cada evento, una historia unica</h3>
                <p>Capturamos momentos únicos con pasión y precisión. Nuestro equipo trabaja con dedicación para
                    asegurar que cada detalle de tu evento se convierta en un recuerdo inolvidable.
                </p>
            </div>
            <div className='eventos'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 my-2" data-aos="fade-right">
                            <div className="card-event">
                                <img src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="capa-card-eventos">
                                    <div className="container mt-5 mx-3">
                                        <h2>Eventos - Fiestas</h2>
                                    </div>
                                    <a href="/eventos" className="btn-evento">
                                        mas informacion
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 my-2" data-aos="fade-left">
                            <div className="card-event">
                                <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                                <div className="capa-card-eventos">
                                    <div className="container mt-5 mx-3">
                                        <h2>Contenido para marcas y <br />Emprededores</h2>
                                    </div>
                                    <a href="/bodas" className="btn-evento">
                                        mas informacion
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eventos;