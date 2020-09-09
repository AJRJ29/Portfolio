

function Experience() {
  return (
    <section id="resume" className="experience">
      <div className="experience__education">
        <div className="experience__educationHeader">
            <h3><span>Education</span></h3>
        </div>
        <div className="experience__educationDetails">
          <h2>General Assembly</h2>
          <p>Software Engineer Immersive</p>
          <p>May 2020 - August 2020</p>
        </div>
      </div>
      <div className="experience__work">
        <div className="experience__workHeader">
            <h3><span>Work</span></h3>
        </div>
        <div className="experience__workDetails">
          <h2>General Assembly</h2>
          <p>Software Engineer</p>
          <p>May 2020 - August 2020</p>
        </div>
      </div>
      <div className="experience__skills">
        <div className="experience__skillsHeader">
          <h3><span>Skills</span></h3>
        </div>
        <div className="experience__skillsDetails">
          <p></p>
          <div className="experience__skillsBars">
            <ul className="experience__skillsUl">
              <li className="experience__skillsList">
                <h5>Javascript</h5>
              </li>
              <li className="experience__skillsList">
                <h5>HTML</h5>
              </li>
              <li className="experience__skillsList">
                <h5>CSS</h5>
              </li>
              <li className="experience__skillsList">
                <h5>ReactJs</h5>
              </li>
              <li className="experience__skillsList">
                <h5>Express</h5>              
              </li>
            </ul>
            <ul className="experience__skillsUl">
              <li className="experience__skillsList">
                <h5>Sequelize</h5>                
              </li>
              <li className="experience__skillsList">
                <h5>MongoDb</h5>       
              </li>
              <li className="experience__skillsList">
                <h5>Postgres</h5>       
              </li>
              <li className="experience__skillsList">
                <h5>Canvas</h5>       
              </li>
              <li className="experience__skillsList">
                <h5>Node</h5>       
              </li>
            </ul>
            <ul className="experience__skillsUl">
              <li className="experience__skillsList">
                <h5>MaterialUI</h5>       
              </li>
              <li className="experience__skillsList">
                <h5>Bootstrap</h5>       
              </li>
              <li className="experience__skillsList">
                <h5>Next.js</h5>       
              </li>
              <li className="experience__skillsList">
                <h5>Python</h5>       
              </li>
              <li className="experience__skillsList">
                <h5>React Native</h5>       
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience