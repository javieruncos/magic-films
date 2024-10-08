import "../../assets/style/MarcasPage.css";
import Servicios from "../Ui/Servicios";

const PageBodas = () => {
    return (
        <main>
            <section>
                <article>
                    <div className='portada-Marcas'>
                        <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                        <div className="capa-portada-Marcas">
                            <div className="container-title container">
                                <div data-aos="fade-up">
                                    <h2 className="display-3 fw-bold"><span className="text-color">Contenido</span> Para Marcas - Emprendedores </h2>
                                    <button className="btn-verMas mt-4">Contáctanos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="container my-5 pt-5">
                    <div className="eventos-marcas" data-aos="fade-up">
                        <div className=" container info-text-eventos-marcas " >
                            <h3 className="text-color fs-2 fw-bold"> Creacíon de contenido para Emprendedores y Marcas</h3>
                            <p>¡Hola! Me emociona que estés aquí porque sé lo importante que es para vos destacar en un
                                mundo digital tan dinámico. Si tenés una marca o sos emprendedor, probablemente ya sabés
                                que el contenido visual es
                                clave para conectar con tu audiencia. ¡Y aquí es donde entro yo!
                            </p>
                            <p>Mi objetivo es ayudarte a contar tu historia de una manera que atrape, inspire y,
                                sobre todo, resuene con las personas que más importan: tus clientes. Trabajo con
                                vos desde la idea inicial, pasando por la producción, hasta llegar al contenido
                                final que hará
                                brillar tu marca. Estoy aquí para hacer que tu visión cobre vida.
                            </p>
                            <p>¿Listo para crear algo único? ¡Hablános y pongamos en marcha tu
                                próximo gran proyecto!
                            </p>
                        </div>
                        <div className="eventosMarcas-container-img">
                            <img src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                </article>
                {/* <article className="container my-5">
                    <div className="eventos-Marcas2" data-aos="fade-up">
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
                </article> */}
            </section>
        </main>
    );
};

export default PageBodas;