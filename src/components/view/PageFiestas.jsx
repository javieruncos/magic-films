import "../../assets/style/Fiestas.css";
import SliderServicios from "../Ui/SliderServicios";
const PageFiestas = () => {
    return (
        <main>
            <section>
                <article>
                    <div className="portada-fiestas">
                        <img src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                        <div className="capaPortada-fiestas">
                            <div className="container-title container">
                                <div data-aos="fade-up">
                                    <h2 className="display-3 fw-bold"><span className="text-color">Grabación</span>  de Eventos con Calidad Profesional</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolores.</p>
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
                                <p>En Magic Films, nos especializamos en capturar los momentos más memorables de tus
                                    fiestas y eventos con una calidad inigualable. Nuestro equipo de profesionales se
                                    encarga de registrar cada detalle, desde las emociones espontáneas hasta los momentos
                                    clave, para que puedas revivir tus experiencias una y otra vez. Ya sea un cumpleaños,
                                    una boda o cualquier celebración especial, te ofrecemos un servicio personalizado y
                                    comprometido con la excelencia. Deja que tu evento se convierta en un recuerdo imborrable.
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

export default PageFiestas;