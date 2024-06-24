import React from "react";

// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Tab,
  Tabs
} from "react-bootstrap";
import { Link } from "react-router-dom";

export function ComplianceDetail() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4" lg='3'>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Compliance Info</Card.Title>
              </Card.Header>
              <Card.Body>
                  <Row className="mb-4">
                    <Col>
                      <p className="bold m-0 p-0">Lorem ipsum dolor sit amet</p>
                      <label>First Names</label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="d-flex flex-row justify-content-between">
                        <label>RELEASED DATE</label>
                        <label>Certification</label>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="d-flex flex-row justify-content-between">
                        <label>EXPIRED DATE</label>
                        <label>Certification</label>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="d-flex flex-row justify-content-between">
                        <label>Status</label>
                        <label style={{color:'green'}}>Compliant</label>
                        </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="d-flex flex-row justify-content-between">
                        <label>Nature</label>
                        <label style={{color:'red'}}>Business Critical</label>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="d-flex flex-row justify-content-between">
                        <label>Category</label>
                        <label>Certification</label>
                      </div>
                    </Col>
                  </Row>
                  
                  <Link to='edit-compliance'
                    className="btn btn-sm btn-block mt-4"
                  >
                    UPDATE
                  </Link>
                  <div className="clearfix"></div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg='9'>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Compliance Data</Card.Title>
              </Card.Header>
              <Card.Body>
              <Tabs
                defaultActiveKey="timeline"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="timeline" title="Timeline" style={{background: 'transparent'}}>
                  Tab content for Home
                </Tab>
                <Tab eventKey="legalbasis" title="Legal Basis" style={{background: 'transparent'}}>
                  Tab content for Profile
                </Tab>
                <Tab eventKey="flow" title="Process Flow">
                  Tab content for Contact
                </Tab>
                <Tab eventKey="files" title="Files">
                  Tab content for Contact
                </Tab>
                <Tab eventKey="history" title="History">
                  Tab content for Contact
                </Tab>
              </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}