import "../../assets/style/PageBodas.css";
import { useEffect } from "react";
import Testimonios from "../../components/Ui/Testimonios"
import SliderServicios from "../Ui/SliderServicios";
import Servicios from "../Ui/Servicios";
const PageBodas = () => {
    return (
        <main>
            <section>
                <article>
                    <div className='portada-bodas'>
                        <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                        <div className="capa-portada-bodas">
                            <div className="container-title container">
                                <div data-aos="fade-up">
                                    <h2 className="display-1 fw-bold"><span className="text-color">Producción</span>  Audiovisual  para Bodas </h2>
                                    <button className="btn-verMas mt-4">Contáctanos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="mt-5 container">
                    <div className="titulo-bodas" data-aos="fade-up">
                        <h3 className="text-color">QUE HACEMOS COMO CREADORES DE CONTENIDO PARA BODAS?</h3>
                    </div>
                    <div className="row  mt-5"data-aos="fade-up">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="w-100 descripcion-bodas">
                                <p> Como creadores de contenido para bodas profesional nos dedicamos a
                                    la creación y edición de contenido audiovisual para bodas y eventos
                                    sociales en FORMATO VERTICAL. Mi objetivo es capturar los momentos
                                    más importantes de tu dia y resumirlos en formato reels de alta calidad
                                    para que los disfrutes a las 24hs de terminado tu evento
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="bodas-img">
                                <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </article>
                <article className=" pt-5 container">
                    <div className="my-3" data-aos="fade-up">
                        <h4 className="text-color">QUE MOMENTOS PODEMOS GRABAR?</h4>
                        <div className="row">
                            <div className="col-12 col-md-4 col-md-4 col-lg-4">
                                <div className="cardMomentos-boda mt-4">
                                    <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                                    <div className="d-flex justify-content-center pt-4 fs-2">
                                        <span className="text-color">PRE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-md-4 col-lg-4">
                                <div className="cardMomentos-boda mt-4">
                                    <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                                    <div className="d-flex justify-content-center pt-4 fs-2">
                                        <span className="text-color">IGLESIA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-md-4 col-lg-4">
                                <div className="cardMomentos-boda mt-4">
                                    <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                                    <div className="d-flex justify-content-center pt-4 fs-2">
                                        <span className="text-color">FIESTA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="my-5 pt-5 container" data-aos="fade-up">
                    <Servicios></Servicios>
                </article>
                <article className="mb-5">
                    <SliderServicios></SliderServicios>
                </article>
            </section>

        </main>

    );
};

export default PageBodas;