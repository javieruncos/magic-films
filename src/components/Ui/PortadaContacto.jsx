import "../../assets/style/PortadaContacto.css";
const PortadaContacto = () => {
    return (
        <div className="Portada-contacto" >
            <img src="https://www.digixem360.com/wp-content/uploads/2022/11/Events.jpg.webp" alt="" />
            <div className="capa-contacto d-flex justify-content-center flex-column">
                <div className="d-flex justify-content-center flex-column text-center container px-3" data-aos="fade-up">
                    <h5 className="display-2 fw-bold">Podemos ayudarte?</h5>
                    <p>Estamos aquí para ofrecerte soluciones efectivas y adaptadas a tus necesidades.</p>
                    <div>
                        <a href="https://wa.link/n6d05n" className="btn-contacto">Chatea conmigo</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortadaContacto;