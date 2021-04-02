import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from '../styles/header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__banner}>
        <div className={styles.header__bannerText}>
            <h1 className={styles.header__headline}>Hi I'm Josh Danao.</h1>
            <h3>I'm a Seattle based <span>Software Engineer</span>.</h3>
            <hr />
          <div className="header__icons">
            <IconButton href="https://www.linkedin.com/in/josh-danao-7790701b0/">
              <LinkedInIcon />  
            </IconButton>
            <IconButton href="https://github.com/AJRJ29">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/joshua.danao.7">
              <FacebookIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
