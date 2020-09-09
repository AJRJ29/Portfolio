

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
              <li className="experience__skillsList1">
                <h5>Javascript</h5>
                <span className="experience__skillsSpan1"></span>
              </li>
              <li className="experience__skillsList2">
                <h5>HTML</h5>
                <span className="experience__skillsSpan2"></span>
              </li>
              <li className="experience__skillsList3">
                <h5>CSS</h5>
                <span className="experience__skillsSpan3"></span>
              </li>
              <li className="experience__skillsList4">
                <h5>ReactJs</h5>
                <span className="experience__skillsSpan4"></span>
              </li>
              <li className="experience__skillsList5">
                <h5>Express</h5>
                <span className="experience__skillsSpan5"></span>
              </li>
              <li className="experience__skillsList6">
                <h5>Sequelize</h5>
                <span className="experience__skillsSpan6"></span>
              </li>
              <li className="experience__skillsList7">
                <h5>MongoDb</h5>
                <span className="experience__skillsSpan7"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
