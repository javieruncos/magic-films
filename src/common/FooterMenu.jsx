import "../assets/style/Footer.css";
// import logoFooter from "../assets/img/G-Aqua.png"
import logoFooter from "../assets/img/Claqueta-Aqua.png"
const FooterMenu = () => {
    return (
        <div className="footer" id="contacto">
            <div className="container footer-menu">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 column-logo-footer">
                        <div className="container-logo-footer">
                            <img src={logoFooter} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-9">
                        <div className="container-links-footer">
                            <div className="headers-footer">
                                <ul>
                                    <li><a href="fiestas">Eventos</a></li>
                                    <li><a href="/bodas">Casamientos</a></li>
                                    <li><a href="/cumpleaños">Fiestas</a></li>
                                    <li><a href="/redes">Redes</a></li>
                                </ul>
                            </div>
                            <hr />
                            <div className="redes-footer pt-4">
                                <h6 className="text-color">Siguenos</h6>
                                <div>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <i className="bi bi-instagram fs-1"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="bi bi-facebook fs-1"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contacto-footer">
                                    <ul>
                                        <li>Contacto : +34 123 456 789</li>
                                        <li>Email : @magicfilms</li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMenu;