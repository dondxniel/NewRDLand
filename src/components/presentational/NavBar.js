import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <Navbar className = "navbar" collapseOnSelect expand="lg"  className ="navbar-container" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Site Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Container>
                    <Row>
                        <Col className = "" md = {1}></Col>
                        <Col className = "text-center" md = {9}>
                            <Nav>
                                <Link className = "nav-link" to = "/" >Home</Link>
                                <Link className = "nav-link" to = "/" >Events</Link>
                                <Link className = "nav-link" to = "/" >Worlds</Link>
                                <Link className = "nav-link" to = "/" >Creators</Link>
                                <Link className = "nav-link" to = "/" >Businesses</Link>
                                <Link className = "nav-link" to = "/" >About</Link>
                                <Link className = "nav-link" to = "/" >NFT Marketplace</Link>
                            </Nav>
                        </Col>
                        <Col className = "text-center" md = {2}>
                            <Nav>
                                <Link className = "nav-link" to = "/join" ><span className = "special-link" >Join</span></Link>
                                <Link className = "nav-link round-button" to = "/login" >Login</Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
                {/* <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
        </Container>
</Navbar>
    )
}