import "../../assets/style/Eventos.css";
import souveniers from "../../assets/img/souveniers.jpeg";
import { Link } from "react-router-dom";
const Eventos = () => {
    return (
        <div className="container" data-aos="fade-up">
            <div className="titulo-eventos mb-4 px-3" data-aos="fade-up">
                <div className="titulo-large">
                    <h3 className="text-color tituloEventos my-4" >TRANSFORMO TUS MOMENTOS MÁS IMPORTANTES EN RECUERDOS ETERNOS</h3>
                </div>
                <div className="titulo-responsive">
                    <h3 className="text-color titulo-responsive my-4" >TRANSFORMO TUS MOMENTOS MÁS IMPORTANTES EN RECUERDOS ETERNOS</h3>
                    <p className="text-responsive">En MagicFilms me especializo en capturar la esencia de cada evento con una mirada artística y profesional,
                        asegurándome de que cada detalle, sonrisa y emoción queden inmortalizados. <br />
                        "Descubre cómo puedo convertir tu próximo evento en una obra maestra visual"
                    </p>
                </div>
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
                                        MÁS INFORMACIÓN
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 my-2" data-aos="fade-left">
                            <div className="card-event">
                                <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                                <div className="capa-card-eventos">
                                    <div className="container mt-5 mx-3">
                                        <h2>Marcas - Emprededores</h2>
                                    </div>
                                    <a href="/marcas" className="btn-evento">
                                        MÁS INFORMACIÓN
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-text mt-5">
                        <p>En MagicFilms me especializo en capturar la esencia de cada evento con una mirada artística y profesional,
                            asegurándome de que cada detalle, sonrisa y emoción queden inmortalizados. <br />
                            "Descubre cómo puedo convertir tu próximo evento en una obra maestra visual"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eventos;