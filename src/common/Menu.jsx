import "../assets/style/Menu.css";
import { Navbar, Container, Nav,Dropdown,NavDropdown } from 'react-bootstrap';
import Magic from "../assets/img/Magic.png";
import claqueta from "../assets/img/Claqueta-Aqua.png"

const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="menu-nav navbar-dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="logo-nav">
                            <img src={claqueta} alt="" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className="link-menu">Inicio</Nav.Link>
                            <Nav.Link href="/eventos" className="link-menu">Eventos</Nav.Link>
                            <Nav.Link href="/marcas" className="link-menu">Marcas</Nav.Link>
                            <Nav.Link href="#contacto" className="link-menu">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;