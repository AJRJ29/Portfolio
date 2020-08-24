import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card  from 'react-bootstrap/Card'


export default function Picture() {
  return (
    <div className="picture1-container">
    <Col className="justify-content-center">
      <Row className="justify-content-center align-items-center">
        <Card className="m-3 shadow-lg h-25 w-25 border-0" ><img src="./img/josh.jpeg" className="picture"/></Card>
        <Card className="m-3 w-50 h-50 justify-content-center">
          <Card.Header><h1>Joshua Danao</h1></Card.Header>
          <Card.Body>
            <Card.Text>
              <p>A software engineer and a former courier who's passionate for collaboration with clients and other engineers to create interesting fun projects with Javascript and React.</p>
              <p>JavaScript, HTML, CSS, Express, SQL, MongooDB, Python, React, Next.js</p>
              <Row>
                <a href="/img/Resume.pdf"><p className="mr-3 ml-3">Resume</p></a>
                <a href="https://github.com/AJRJ29?tab=repositories"><p className="mr-3 ml-3">Github</p></a>
              </Row>  
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Col>
    </div>
  )
}