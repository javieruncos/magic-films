import "../assets/style/Menu.css";
import { Navbar, Container, Nav} from 'react-bootstrap';

const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="menu-nav navbar-dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="link-menu">Home</Nav.Link>
                            <Nav.Link href="#link" className="link-menu">Sobre Nosotros</Nav.Link>
                            <Nav.Link href="#home" className="link-menu">Servicios</Nav.Link>
                            <Nav.Link href="#link" className="link-menu">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;