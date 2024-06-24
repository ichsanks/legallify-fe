import { FormEvent } from 'react';

// react-bootstrap components
import { Button, Card, Form, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Register() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col sm="8" md="6" lg="4" className="mt-4">
          <Card className="mt-4">
            <Card.Header>
              <div className="d-flex justify-content-center">
                <Image src={require('../../../../assets/img/legallify-logo.png')} width={100} />
              </div>
              <Card.Title as="h4" className="text-center mt-4">
                SIGN UP
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <label>Full Name</label>
                      <Form.Control placeholder="Full Name" type="text" required></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <label>Company</label>
                      <Form.Control placeholder="Company" type="text" required></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <label>Company Address</label>
                      <Form.Control placeholder="Company" type="text" required></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <label>Country</label>
                      <Form.Control placeholder="Company" type="text" required></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <label>Email</label>
                      <Form.Control placeholder="Email" type="email" required></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <label>Username</label>
                      <Form.Control placeholder="Username" type="text" required></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <label>Password</label>
                      <Form.Control placeholder="Password" type="password" required></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <label>Confirm Password</label>
                      <Form.Control placeholder="Confirm Password" type="password" required></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Button className="my-4 btn-block" type="submit" variant="info">
                  REGISTER
                </Button>
                <div className="clearfix"></div>
                <div className="text-center">
                  <label className="mt-4 pt-4">Already have an account?&nbsp;</label>
                  <label>
                    <Link to="/">LOGIN</Link>
                  </label>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
