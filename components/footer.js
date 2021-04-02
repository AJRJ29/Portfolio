import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from '../styles/footer.module.css'

function footer() {
  return (
    <div className={styles.footer}>
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
  )
}

export default footer
