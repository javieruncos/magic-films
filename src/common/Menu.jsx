import "../assets/style/Menu.css";
import { Navbar, Container, Nav } from 'react-bootstrap';
import Magic from "../assets/img/Magic.png";

const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="menu-nav navbar-dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="logo-nav">
                            <img src={Magic} alt="" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className="link-menu">Home</Nav.Link>
                            <Nav.Link href="#sobreNosotros" className="link-menu">Sobre Nosotros</Nav.Link>
                            <Nav.Link href="#contacto" className="link-menu">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;