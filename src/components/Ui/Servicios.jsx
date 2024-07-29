import "../../assets/style/Servicios.css";

const Servicios = () => {
    return (
        <article className=" container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="servicios-bodas color-servicios my-4">
                                <div className="hearderServicios d-flex justify-content-center align-items-center">
                                    <span>
                                        <i className="bi bi-camera-reels-fill  text-light"></i>
                                    </span>
                                </div>
                                <div className="bodyServicios text-center container">
                                    <span className="fs-3 fw-bold">FOTOS Y VIDEOS RESUMENES</span>
                                    <div className="mt-3">
                                        <p>Recibirás las fotos y videos que se capturaron
                                            durante el evento en alta resolución en formato
                                            documento</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="servicios-bodas color-servicios2 my-4">
                                <div className="hearderServicios  d-flex justify-content-center align-items-center">
                                    <span>
                                        <i className="bi bi-camera-fill display-2 text-light"></i>
                                    </span>
                                </div>
                                <div className="bodyServicios text-center container">
                                    <span className="fs-3 fw-bold">RRSS CREACION DE CONTENIDO</span>
                                    <div className="mt-3">
                                        <p>Creamos para VOS stories, reels y Tiktoks para tus redes sociales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="servicios-bodas color-servicios3 my-4">
                                <div className="hearderServicios d-flex justify-content-center align-items-center">
                                    <span>
                                        <i className="bi bi-hourglass-bottom display-2 text-light"></i>
                                    </span>
                                </div>
                                <div className="bodyServicios text-center container">
                                    <span className="fs-3 fw-bold">ENTREGA RAPIDA Y EFICIENTE</span>
                                    <div className="mt-3">
                                        <p>Entregamos tu contenido de 24 a 72 hrs después del evento.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
    );
};

export default Servicios;