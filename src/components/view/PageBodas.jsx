import "../../assets/style/PageBodas.css";
const PageBodas = () => {
    return (
        <main>
            <section>
                <article>
                    <div className='portada-bodas'>
                        <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                        <div className="capa-portada-bodas">
                            <div className="container-title container">
                                <div>
                                    <h2 className="display-1">Magia en tu dia </h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolores.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="mt-5 container">
                    <div className="w-50">
                        <h3 className="fs-3 text-color">QUE HACEMOS COMO CREADORES DE CONTENIDO PARA BODAS?</h3>

                    </div>
                    <div className="row  mt-5">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="w-100 descripcion-bodas">
                                <p> Como creadores de contenido para bodas profesional nos dedicamos a
                                    la creación y edición de contenido audiovisual para bodas y eventos
                                    sociales en FORMATO VERTICAL. Mi objetivo es capturar los momentos
                                    más importantes de tu dia y resumirlos en formato reels de alta calidad
                                    para que los disfrutes a las 24hs de terminado tu evento
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="bodas-img">
                                <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </article>
            </section>

        </main>

    );
};

export default PageBodas;