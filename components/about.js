import { Button } from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import styles from '../styles/about.module.css';

export default function About() {
  return (
      <section id="about" className={styles.about}>
        <di className={styles.about__body}>
          <div className={styles.about__aboutMe}>
            <h2>About Me</h2>
            <p>A software engineer and former courier with a passion for collaboration with both clients and developers in order to create interesting solutions through projects made with JavaScript, React, SQL, and other technologies. My time as a software engineer has allowed me to strengthen both my technical expertise, along with my soft-skills including effective multidisciplinary collaboration, maintaining proper expectations, and ensuring client satisfaction.</p>
            <div className={styles.about__detailsContainer}>
              <div className={styles.about__details}>
                  <h2>Contact Details</h2>
                  <p className={styles.about__address}>
                    <span>Joshua Danao</span><br />
                    <span> Seattle, Wa<br /></span>
                    <span>joshdanao29@gmail.com</span><br />
                  </p>
              </div>
              <div className={styles.about__resume}>
                <p>
                  <Button href="/img/Resume.pdf" className={styles.about__button}>
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