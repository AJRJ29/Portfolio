import Card  from 'react-bootstrap/Card'

export default function Picture() {
  return (
    <div className="picture1-container">
      <Card style={{ width: '18rem' }}  className="m-3 shadow-lg" ><img src="./img/josh.jpeg" className="picture"/></Card>
      <Card className="m-3 w-50">
        <Card.Header><h1>Joshua Danao</h1></Card.Header>
        <Card.Body>
          <Card.Text>
          <p>a software engineer and a former courier who's passionate for collabiration with clients and other engineers, to create an interesting and fun projects</p>
          <p>JavaScript, HTML, CSS, Express, SQL, MongooDB, Python, React, Next.js</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}