import "../../assets/style/EventosPages.css";
const PageFiestas = () => {
    return (
        <main>
            <section>
                <article>
                    <div className="portada-Eventos">
                        <img src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                        <div className="capaPortada-Eventos">
                            <div className="container-title container">
                                <div data-aos="fade-up">
                                    <h2 className="display-3 fw-bold"><span className="text-color">Grabación</span>  de Eventos con Calidad Profesional</h2>
                                    <button className="btn-verMas mt-4">Contáctanos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <article className="container my-5 pt-5">
                    <div className="eventos">
                        <div className=" container info-text-eventos" >
                            <h3 className="text-color fs-2 fw-bold"> Cobertura audiovisual de <br /> alta calidad.</h3>
                            <p>Ofrecemos servicios de filmación especializados en eventos y convenciones,
                                diseñados para maximizar tu presencia en redes
                                sociales. Nuestro equipo se enfoca en capturar cada detalle y momento clave,
                                creando contenido dinámico y atractivo que resuene con tu audiencia en plataformas
                                sociales. Desde videos profesionales que destacan los aspectos más importantes de tu
                                evento hasta contenido visual impactante que aumenta la interacción y visibilidad, estamos
                                aquí para transformar tus convenciones y eventos en experiencias virales. Deja que tu
                                marca brille con una cobertura audiovisual que destaca en el mundo digital.
                            </p>
                        </div>
                        <div className="eventos-container-img">
                            <img src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                </article>
                <article className="container my-5">
                    <div className="eventos2">
                        <div className="eventos-container-img">
                            <img src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className=" container info-text-eventos" >
                            <h3 className="text-color fs-2 fw-bold"> Cobertura audiovisual de <br /> alta calidad.</h3>
                            <p>Ofrecemos servicios de filmación especializados en eventos y convenciones,
                                diseñados para maximizar tu presencia en redes
                                sociales. Nuestro equipo se enfoca en capturar cada detalle y momento clave,
                                creando contenido dinámico y atractivo que resuene con tu audiencia en plataformas
                                sociales. Desde videos profesionales que destacan los aspectos más importantes de tu
                                evento hasta contenido visual impactante que aumenta la interacción y visibilidad, estamos
                                aquí para transformar tus convenciones y eventos en experiencias virales. Deja que tu
                                marca brille con una cobertura audiovisual que destaca en el mundo digital.
                            </p>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default PageFiestas;