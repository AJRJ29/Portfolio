import Card  from 'react-bootstrap/Card'

export default function Projects() {
  return(
    <div className="projects-container">
      <Card className="m-5 w-75">
        <Card.Header><h1>Stay Inside</h1></Card.Header>
        <Card.Body>
          <Card.Title className="p-3"><img src="./img/stay_inside.png" /></Card.Title>
          <Card.Text>
            <h5>Stay-inside is a social media web app made to encourage people to have an online gathering events during this pandemic.</h5>
            <h5>It was created using JavaScript, Express, React, MongoDB and Node.</h5>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-5 w-75">
        <Card.Header><h1>Breakout</h1></Card.Header>
        <Card.Body>
        <Card.Title className="p-3"><img src="./img/my_anime.png" /></Card.Title>
          <Card.Text>
            <h5>Users can control the paddle with the mouse to bounce off the ball and destroy all the bricks.</h5>
            <h5>It was created using JavaScript, HTML-Canvas</h5>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-5 w-75">
        <Card.Header><h1>Breakout</h1></Card.Header>
        <Card.Body>
        <Card.Title className="p-3"><img src="./img/breakeout.png" /></Card.Title>
          <Card.Text>
            <h5>Users can control the paddle with the mouse to bounce off the ball and destroy all the bricks.</h5>
            <h5>It was created using JavaScript, HTML-Canvas</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

