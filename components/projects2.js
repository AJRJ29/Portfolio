

function Projects2() {
  return (
    <section id="project2" className="project2">
      <div className="project2__container">
        <div className="project2__body">
            <h1>Check Out Some of My <b>Projects</b>.</h1>
            <div className="project2__content">
              <a href="https://stay-inside.netlify.app/login">
                <p>
                  <h3>Stay Inside</h3>
                  <p>Stay-inside is a social media web app made to encourage people to have an online gathering events during this pandemic.</p>
                  <p>It was created using JavaScript, Express, React, MongoDB and Node.</p>
                </p>
                <img src="./img/stay_inside.png" alt="" />
              </a> 
              <a href="https://seir-auth.herokuapp.com/">
                <p>
                  <h3>MyAnime</h3>
                  <p>MyAnime is a full stack app allowing users to create a list of their favorite anime and manga.</p>
                  <p>It was created using Javasript, PostgreSQL, Sequelize and Jikan API.</p>
                </p>
                <img src="./img/my_anime.png" alt="" />
              </a> 
              <a href="https://whats-app-clone-c54dd.web.app/">
                <p>
                  <h3>What's App Clone</h3>
                  <p>Users can create a room and chat with other users.</p>
                  <p>It was created using JavaScript, HTML, CSS, Materia-UI ReactJs, React Context API, Firebase And Google Authentication</p>
                </p>
                <img src="./img/whatsapp.png" alt="" />
              </a> 
              <a >
                <p>
                  <h3>Breakout</h3>
                  <p>Users can control the paddle with the mouse to bounce off the ball and destroy all the bricks.</p>
                  <p>It was created using JavaScript, HTML-Canvas</p>
                </p>
                <img src="./img/breakeout.png" alt="" />
              </a> 
            </div>
          </div>
      </div>
  </section>
  )
}

export default Projects2
