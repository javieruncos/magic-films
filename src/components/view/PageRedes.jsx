import "../../assets/style/Fiestas.css";
import SliderServicios from "../Ui/SliderServicios";

const PageRedes = () => {
    return (
        <main>
            <section>
                <article>
                    <div className="portada-fiestas">
                        <img src="https://media.istockphoto.com/id/541288028/es/foto/barman-est%C3%A1-haciendo-c%C3%B3ctel-en-el-club-nocturno.jpg?s=1024x1024&w=is&k=20&c=EpuBjpklELJ7nvZGfMsDbviENOAQZY8WGZ6WcSDJDVM=" alt="" />
                        <div className="capaPortada-fiestas">
                            <div className="container-title container">
                                <div data-aos="fade-up">
                                    <h2 className="display-3 fw-bold"><span className="text-color">Grabación</span>  de Eventos con Calidad Profesional</h2>
                                    <button className="btn-verMas mt-4">ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <article className="mt-5 container" data-aos="fade-up">
                    <div className="containerTitulo-fiestas" data-aos="fade-up">
                        <h3 className="text-color fs-1 fw-bold"> Cobertura audiovisual de <br /> alta calidad.</h3>
                    </div>
                    <div className="row my-4">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="descirpcion-fiestas">
                                <p>Impulsa tus productos en redes sociales con nuestro servicio de filmación profesional.
                                    Creamos contenido visual atractivo que destaca las cualidades de tus productos y
                                    captura la atención de tu audiencia. Desde anuncios llamativos hasta videos de demostración
                                    detallados, nuestro equipo se enfoca en producir material que eleva tu marca y genera
                                    impacto en el mundo digital. Aumenta tu visibilidad y convierte cada video en
                                    una herramienta efectiva para atraer y fidelizar a tus clientes
                                </p>
                                <div className="contacto-servicios container my-5" >
                                    <div>
                                        <p>¿Podemos ayudarte? Habla con nuestros especialistas para crear
                                            algo extraordinario para ti.
                                        </p>
                                    </div>
                                    <button>Contactanos</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="Nuestros-Servicios">
                                <div className="hearder-servicios">
                                    <h5>Nuestros Servicios</h5>
                                </div>
                                <div className="body-servicios">
                                    <ul>
                                        <li>Edición de video</li>
                                        <li>Filmación y producción de videos</li>
                                        <li>Diseño de presentación</li>
                                        <li>Imágenes y vídeos para pantallas de eventos a gran escala</li>
                                        <li>Experiencias de proyección y video inmersivo</li>
                                        <li>Vídeos sociales y digitales</li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className="mt-5">
                <article className="mt-5 pt-5">
                    <SliderServicios></SliderServicios>
                </article>
            </section>
        </main>
    );
};

export default PageRedes;