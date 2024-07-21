import "../../assets/style/Eventos.css";
import souveniers from "../../assets/img/souveniers.jpeg";
const Eventos = () => {
    return (
        <div className="container">
            <div className="titulo-eventos mb-4">
                <h3 className="text-color fs-2 fw-bold" >Cada evento, una historia unica</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    . Ipsam omnis facilis molestiae a placeat porro animi ducimus non
                    doloremque facere.
                </p>
            </div>
            <div className='eventos'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 my-2">
                            <div className="card-event">
                                <img src={souveniers} alt="" />
                                <div className="capa-card-eventos">
                                   <div className="nombre-evento">
                                      <h4>Nombre del evento</h4>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 my-2">
                        <div className="card-event">
                                <img src={souveniers} alt="" />
                                <div className="capa-card-eventos">
                                   <div className="nombre-evento">
                                      <h4>Nombre del evento</h4>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 my-2">
                        <div className="card-event">
                                <img src={souveniers} alt="" />
                                <div className="capa-card-eventos">
                                   <div className="nombre-evento">
                                      <h4>Nombre del evento</h4>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 my-2">
                        <div className="card-event">
                                <img src={souveniers} alt="" />
                                <div className="capa-card-eventos">
                                   <div className="nombre-evento">
                                      <h4>Nombre del evento</h4>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 my-2">
                        <div className="card-event">
                                <img src={souveniers} alt="" />
                                <div className="capa-card-eventos">
                                   <div className="nombre-evento">
                                      <h4>Nombre del evento</h4>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 my-2">
                        <div className="card-event">
                                <img src={souveniers} alt="" />
                                <div className="capa-card-eventos">
                                   <div className="nombre-evento">
                                      <h4>Nombre del evento</h4>
                                   </div>
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