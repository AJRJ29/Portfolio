import Card  from 'react-bootstrap/Card'

export default function Projects() {
  return(
    <div className="projects-container">
      <Card className="m-5 w-50">
        <Card.Header className=" d-flex justify-content-center align-items-center"><h1>Projects</h1></Card.Header>
      </Card>
      <Card className="m-5 w-75">
        <Card.Header className=""><h1>Stay Inside</h1></Card.Header>
        <Card.Body>
          <Card.Title className="p-3"><a href="https://serene-albattani-33a131.netlify.app"><img src="./img/stay_inside.png" /></a></Card.Title>
          <Card.Text>
            <h5>Stay-inside is a social media web app made to encourage people to have an online gathering events during this pandemic.</h5>
            <h5>It was created using JavaScript, Express, React, MongoDB and Node.</h5>
            <a href="https://serene-albattani-33a131.netlify.app">link here</a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-5 w-75">
        <Card.Header><h1>MyAnime</h1></Card.Header>
        <Card.Body>
        <Card.Title className="p-3"><a href="https://seir-auth.herokuapp.com/"><img src="./img/my_anime.png" /></a></Card.Title>
          <Card.Text>
            <h5>MyAnime is a full stack app allowing users to create a list of their favorite anime and manga.</h5>
            <h5>It was created using Javasript, PostgreSQL, Sequelize and Jikan API.</h5>
            <a href="https://seir-auth.herokuapp.com/">link here</a>
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

