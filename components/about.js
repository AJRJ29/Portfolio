import { Container, Box, Button } from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';


export default function About() {
  return (
      <section id="about" className="about">
        {/* <div className="about__picture">
        <img className="about__image"  src="./img/josh.jpeg" alt="" />
        </div> */}
        <di className="about__body">
          <div className="about__aboutMe">
            <h2>About Me</h2>
            <p>A software engineer and former courier with a passion for collaboration with both clients and developers in order to create interesting solutions through projects made with JavaScript, React, SQL, and other technologies. My time as a software engineer has allowed me to strengthen both my technical expertise, along with my soft-skills including effective multidisciplinary collaboration, maintaining proper expectations, and ensuring client satisfaction.</p>
            <div className="about__detailsContainer">
              <div className="about__details">
                  <h2>Contact Details</h2>
                  <p className="about__address">
                    <span>Joshua Danao</span><br />
                    <span> Seattle, Wa<br /></span>
                    <span>joshdanao29@gmail.com</span><br />
                  </p>
              </div>
              <div className="about__resume">
                <p>
                  <Button href="/img/Resume.pdf" className="about__button">
                    <GetAppIcon />Download Resume
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </di>
      </section>
  )
}