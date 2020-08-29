import Card from 'react-bootstrap/Card'

export default function Picture() {
  return (
    <div className="picture-container"> 
      <Card className="mt-5 m-3 w-75 h-50">
        <Card.Header className="d-flex justify-content-center"><h1>Joshua Danao</h1></Card.Header>
        <Card.Body>
          <Card.Text>
            <h4>A software engineer and former courier with a passion for collaboration with both clients and developers in order to create interesting solutions through projects made with JavaScript, React, SQL, and other technologies. My time as a software engineer has allowed me to strengthen both my technical expertise, along with my soft-skills including effective multidisciplinary collaboration, maintaining proper expectations, and ensuring client satisfaction.</h4>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="w-75 h-50 m-2 border-0 d-flex flex-row flex-wrap">
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Card.Text className="d-flex justify-content-center align-items-center">
            <img src="./img/josh.jpeg" className="picture shadow-lg h-25 w-25 mr-3"/>
            <Card.Text className="d-flex flex-column align-items-flex-start">
              <h5 className="mr-3 ml-3">JavaScript, HTM, CSS, Express, Sequelize, MongoDB, Python, React, Next.js,  Bootstrap, Materialize, Node, CanvasEJS, Git/GitHub, Postgre, SQL, React Native.</h5>
              <Card.Text className="mr-3 d-flex flex-row">
                <a href="/img/Resume.pdf" className="mr-3 ml-3"><h3>Resume</h3></a>
                <a href="https://github.com/AJRJ29?tab=repositories" className="mr-3 ml-3"><h3>Github</h3></a>
                <a href="https://www.linkedin.com/in/josh-danao-7790701b0/" className="mr-3 ml-3"><h3>Linkedin</h3></a>   
              </Card.Text>  
            </Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </div> 
  )
}