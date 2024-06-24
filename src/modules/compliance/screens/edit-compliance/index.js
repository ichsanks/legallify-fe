import React from "react";
// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { useHistory } from 'react-router-dom';

export function EditCompliance() {
    const history = useHistory()

    const handleSubmit = () => history.push('compliance-detail')

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">EDIT COMPLIANCE</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Title</label>
                        <Form.Control
                          placeholder="Title"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" xs="6">
                      <Form.Group>
                      <div className="d-flex align-items-center">
                        <label>Validity Period</label>
                        <Form.Check className="mb-1 pl-0">
    <Form.Check.Label>
      <Form.Check.Input
        type="checkbox"
      ></Form.Check.Input>
      <span className="form-check-sign"></span>
      No Document Yet
    </Form.Check.Label>
  </Form.Check>
  </div>
                        <Form.Control
                          placeholder="DD/MM/YYYY"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" xs="6">
                      <Form.Group>
                        <label className="mt-2">&nbsp;</label>
                        <Form.Control
                          placeholder="DD/MM/YYYY"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Compliance Number</label>
                        <Form.Control
                          placeholder="Number"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Organization Ownership</label>
                        <Form.Control
                          placeholder="Ownership"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" xs="6">
                      <Form.Group>
                        <label>Nature</label>
                        <Form.Control
                          placeholder="Nature"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" xs="6">
                      <Form.Group>
                        <label>Category</label>
                        <Form.Control
                          placeholder="Category"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="mt-4 d-flex">
                    <Button
                        // className="btn-fill pull-right"
                        type="submit"
                        variant="success"
                        className="btn btn-sm"
                        style={{width: 200}}
                    >
                        UPDATE
                    </Button>
                  </Col>
                  </Row>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
          </Col>
        </Row>
      </Container>
    </>
  );
}