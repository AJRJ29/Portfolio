import { useState } from "react";
import { Button } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';


const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

   const handleClick = (e) => {
      e.preventDefault();
      window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
      setName("")
      setSubject("")
      setEmail("")
      setMessage("")
   }
   

   return (
     <section id="contact" className="contact">
        <div className="contact__header">
          <EmailIcon />
        </div>
          <div className="contact__formContainer">
            <form id="contactForm" name="contactForm">
              <div className="contact__inputContainer">
                <label htmlFor="contactName">Name <span className="contact__name">*</span></label>
                <input value={name} type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
                </div>
              <div className="contact__inputContainer">
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input value={email} type="text" size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)}/>
              </div>
              <div className="contact__inputContainer">
                <label htmlFor="contactSubject">Subject </label>
                <input value={subject} type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}/>
              </div>
              <div className="contact__inputContainer">
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
              </div>
              <div className="contact__button">
                <Button type='submit' onClick={handleClick}>Submit</Button>
              </div>
        </form>
      </div>
  </section>
   );
}

export default Contact;