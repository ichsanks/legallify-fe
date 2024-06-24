import {
    Card,
    Container,
    Row,
    Col,
		Button,
  } from "react-bootstrap";
	import {Link} from 'react-router-dom'

  
  export function ManageCompliance(){ 
		const addCompliancePage = () => {}

    return (<>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
									<div className="d-flex flex-column">
                    <Card.Title as="h4">Compliance List</Card.Title>
                    <p className="card-category">
                    List of compliance
                    </p>
										</div>
										<div class="d-flex flex-column">
											<Link to={`manage-compliance/add-compliance`} class="btn btn-primary btn-sm">ADD COMPLIANCE</Link>
										</div>
                </div>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>)
  }