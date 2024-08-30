import "../../assets/style/EventosPages.css";
import ContainerCard from "../Ui/ContainerCard";
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
                    <div className="eventos mt-5" data-aos="fade-up">
                        <div className=" container info-text-eventos" >
                            <h3 className="text-color fs-2 fw-bold">EVENTOS - FIESTAS</h3>
                            <p>
                                Estoy aquí para capturar cada risa, abrazo y momento especial de tus celebraciones. Ya sea
                                una boda, una fiesta de cumpleaños, un aniversario o cualquier evento que quieras recordar,
                                me aseguro de que cada detalle quede inmortalizado. Desde la preparación hasta el último baile,
                                mi trabajo es transformar esos instantes únicos en recuerdos que puedas revivir siempre. Con un
                                enfoque personalizado, discreto y profesional, estoy listo para contar tu historia tal como la imaginas.
                                Porque sé que cada evento es diferente y cada fiesta tiene su magia.
                            </p>
                            <p>¡Deja que tus momentos hablen por si solos! Conviertelos en algo eterno</p>
                        </div>
                        <div className="eventos-container-img">
                            <img src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                    <div className="mt-5 pt-5">
                        <ContainerCard></ContainerCard>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default PageFiestas;