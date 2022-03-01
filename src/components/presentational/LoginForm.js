import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginForm(){
    return (
        <Container>
            <Row className = "justify-content-center" >
                <Col md={6} >
                    <form className = "text-center pb-5 pt-3 consolas text-light">
                        <div className = "">
                            <h1 className = "waiting-font">Welcome !</h1>
                            <p>Login and join the RDLand party !</p>
                        </div>
                        <div className = "my-3">
                            <div className ="text-start px-5">
                                <label className = "mx-5 waiting-font">Email address</label>
                            </div>
                            <input className = "form-input" type = "email" placeholder = "Enter your email address" />
                        </div>
                        <div className = "my-3">
                            <div className ="text-start px-5">
                                <label className = "mx-5 waiting-font">Password</label>
                            </div>
                            <input className = "form-input" type = "email" placeholder = "Enter your password" />
                        </div>
                        <div className = "mt-3">
                            <button className = "form-button text-light">Login</button>
                        </div>
                    </form>
                    <div className = "text-center mb-3 text-light consolas">
                        Forget password? <Link to = "/" className = "special-link-color">Reset</Link>
                    </div>
                    <div className = "text-center mb-5 text-light consolas">
                        Don't have an account? <Link to = "/join" className = "special-link-color">Join Close Alpha</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}