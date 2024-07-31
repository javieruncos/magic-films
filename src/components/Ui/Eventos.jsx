import "../../assets/style/Eventos.css";
import souveniers from "../../assets/img/souveniers.jpeg";
import { Link } from "react-router-dom";
const Eventos = () => {
    return (
        <div className="container" data-aos="fade-up">
            <div className="titulo-eventos mb-4 px-3" data-aos="fade-up">
                <h3 className="text-color fs-3 fw-bold my-4" >Cada evento, una historia unica</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    . Ipsam omnis facilis molestiae a placeat porro animi ducimus non
                    doloremque facere.
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
                                        <h2>Nombre del evento</h2>
                                    </div>
                                    <a href="/fiestas"  className="btn-evento">
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
                                        <h2>Nombre del evento</h2>
                                    </div>
                                    <a href="/bodas"  className="btn-evento">
                                        mas informacion
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 my-2"  data-aos="fade-right">
                            <div className="card-event">
                                <img src="https://images.pexels.com/photos/2337816/pexels-photo-2337816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="capa-card-eventos">
                                    <div className="container mt-5 mx-3">
                                        <h2>Nombre del evento</h2>
                                    </div>
                                    <a href="./cumpleaños"  className="btn-evento">
                                        mas informacion
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 my-2"  data-aos="fade-left">
                            <div className="card-event">
                                <img src="https://media.istockphoto.com/id/541288028/es/foto/barman-est%C3%A1-haciendo-c%C3%B3ctel-en-el-club-nocturno.jpg?s=1024x1024&w=is&k=20&c=EpuBjpklELJ7nvZGfMsDbviENOAQZY8WGZ6WcSDJDVM=" alt="" />
                                <div className="capa-card-eventos">
                                    <div className="container mt-5 mx-3">
                                        <h2>Nombre del evento</h2>
                                    </div>
                                    <a href="/redes"  className="btn-evento">
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