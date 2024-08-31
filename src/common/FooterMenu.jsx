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
                                    <li><a href="fiestas">Eventos-Fiestas</a></li>
                                    <li><a href="/bodas">Contenido para marcas -
                                        Emprededores</a></li>
                                </ul>
                            </div>
                            <hr />
                            <div className="redes-footer pt-4">
                                <div className="footer-logo-magic">
                                    <div>
                                        <h6 className="text-color">Seguinos</h6>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <a href="https://www.instagram.com/magicfilmsok?igsh=Z3k4cHAxbGN4aXU%3D&utm_source=qr">
                                                    <i className="bi bi-instagram fs-1"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/profile.php?id=100084927533863&mibextid=LQQJ4d">
                                                    <i className="bi bi-facebook fs-1"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="redes-personal">
                                    <div>
                                        <h6 className="text-color">Seguime en mi cuenta personal</h6>
                                    </div>
                                    <div className="enlace-personal">
                                        <a href="https://www.instagram.com/magicfilmsok?igsh=Z3k4cHAxbGN4aXU%3D&utm_source=qr">
                                            <i className="bi bi-instagram fs-1"></i>
                                        </a>
                                        <a href="https://www.instagram.com/magicfilmsok?igsh=Z3k4cHAxbGN4aXU%3D&utm_source=qr">@soyestefisandoval</a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="contacto-footer mt-5">
                                <ul>
                                    <li className="text-light">Contacto : <span className="text-color"> +543863 51-8421</span> </li>
                                    <li className="text-light">Email : <span className="text-color"> es.creadordecontenido@gmail.com</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMenu;