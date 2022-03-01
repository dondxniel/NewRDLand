import { Container, Row, Col } from 'react-bootstrap';
import SingleInputForm from './SingleInputForm';

export default function JoinWaitingList(){
    return (
        <Container className = "consolas text-light container-div ">
            <Row className="justify-content-center ">
                <Col md = {6} className = "mt-5 text-center">
                    <h2 className = "waiting-font">Join the waitlist</h2>
                    <p className = "small">Like what you see? Don't be the last to know. Join our Alpha waitlist and get the latest news from us straight to your inbox.</p>
                    <SingleInputForm label = "" placeholder = "Your email address" buttonText = "Join Close Alpha" />
                </Col>
            </Row>
        </Container>
    )
} 