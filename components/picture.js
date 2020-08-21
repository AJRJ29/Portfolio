import Row from 'react-bootstrap/Row'
import Card  from 'react-bootstrap/Card'
import Link from 'next/link'

export default function Picture() {
  return (
    <div className="picture1-container">
      <Card className="m-3 shadow-lg h-25 w-25" ><img src="./img/josh.jpeg" className="picture"/></Card>
      <Card className="m-3 w-50">
        <Card.Header><h1>Joshua Danao</h1></Card.Header>
        <Card.Body>
          <Card.Text>
          <p>a software engineer and a former courier who's passionate for collabiration with clients and other engineers, to create interesting fun projects</p>
          <p>JavaScript, HTML, CSS, Express, SQL, MongooDB, Python, React, Next.js</p>
          <Row>
            <a href="https://docs.google.com/document/d/1c6ltuwOmd3gDgtNMGEQDNTy9-3k-PYYNkyGThqDqxBo/edit"><p className="mr-3 ml-3">Resume</p></a>
            <a href="https://github.com/AJRJ29?tab=repositories"><p className="mr-3 ml-3">Github</p></a>
          </Row>  
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}