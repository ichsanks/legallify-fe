import React from "react";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";
import {Link} from 'react-router-dom'
import { useAuthenticate } from "../../hooks"

export function Login() {

    const {isLoading, login, error, isSuccess} = useAuthenticate()
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      await login()
    }

  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
          <Col sm="8" md="6" lg="4">
            <Card>
              <Card.Header>
                <div className="d-flex justify-content-center">
                    <Image src={require("../../../../assets/img/legallify-logo.png")} width={100} />
                </div>
                <Card.Title as="h4" className="text-center mt-4">Welcome</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          placeholder="Username"
                          type="text"
                          disabled={isLoading}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                          disabled={isLoading}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="my-4 btn-block"
                    type="submit"
                    variant="info"
                    disabled={isLoading}
                  >
                    LOGIN
                  </Button>
                  <div className="clearfix"></div>
                  <div className="text-center">
                    <label className="mt-4 pt-4">Don't have an account?&nbsp;</label>
                    <label><Link to='/register'>SIGN UP</Link></label>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}