import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import SingleInputForm from './SingleInputForm';
import discord from '../../assets/img/Discord.png';
import ig from '../../assets/img/IG.png';
import twitter from '../../assets/img/Vector.png';
import youtube from '../../assets/img/Youtube.png';

export default function Footer(){
    return (
        <div className = "footer">
            {/* <div class="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
            </div> */}
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <Container>
                <Row className = "my-5 py-5">
                    <Col md = {4}>
                        <SingleInputForm label = "Subscribe to newsletter" placeholder = "Enter email address" buttonText = "Subscribe" />
                    </Col>
                    <Col md = {8} >
                        <Nav className = "justify-content-end">
                            <Link className = "nav-link" to = "/" >Home</Link>
                            <Link className = "nav-link" to = "/" >Events</Link>
                            <Link className = "nav-link" to = "/" >Worlds</Link>
                            <Link className = "nav-link" to = "/" >Creators</Link>
                            <Link className = "nav-link" to = "/" >Businesses</Link>
                            <Link className = "nav-link" to = "/" >About</Link>
                            <Link className = "nav-link" to = "/" >FAQs</Link>
                        </Nav>
                        <Nav className = "justify-content-end">
                            <Link className = "nav-link" to = "/" >
                                <img className = "footer-links" src = {ig} alt = "Instagram" />
                            </Link>
                            <Link className = "nav-link" to = "/" >
                                <img className = "footer-links" src = {twitter} alt = "Twitter" />
                            </Link>
                            <Link className = "nav-link" to = "/" >
                                <img className = "footer-links" src = {discord} alt = "Discord" />
                            </Link>
                            <Link className = "nav-link" to = "/" >
                                <img className = "footer-links" src = {youtube} alt = "YouTube" />
                            </Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}