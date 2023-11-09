import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import '../css/contact.css'


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    const formMessage = document.querySelector('.contact-message')
    e.preventDefault()

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        formMessage.innerHTML = 'Email has been sent'
        formMessage.classList.add('success')
        formMessage.hidden = false
        e.target.reset()
      }, (error) => {
        formMessage.innerHTML = 'Error sending email. Please try again later.'
        formMessage.classList.add('error')
        formMessage.hidden = false
      });

    setTimeout(() => {
      formMessage.innerHTML = ''
      formMessage.classList.remove('success')
      formMessage.classList.remove('error')
      formMessage.hidden = true
    }, 5000)
  }

  return (
    <div id='contact' className='flex' data-section='contact'>
      <p className='contact-header'>Contact Page</p>

      <div className='contact-message' hidden></div>

      <div className='contact-container flex'>
        <div className='personal-info'>
          <div>
            <FontAwesomeIcon icon={faLocationDot} /> Alameda, California
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} /> kevinzhu35@gmail.com
          </div>
          <div className='icon'>
            <a href='/portfolio/Resume.pdf' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFile} /> Resume
            </a>
          </div>
          <div className='icon'>
            <a href='https://github.com/kev-zhu' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </div>
          <div className='icon'>
            <a href='http://www.linkedin.com/in/kevinzhuu' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>
        <div className='messaging'>
          <form className='messaging-form flex' ref={form} onSubmit={sendEmail} autoComplete="off">
            <input type='text' name='name' id='form-name' placeholder='Name' required />
            <input type='email' name='email' id='form-email' placeholder='Email' required />
            <input type='text' name='subject' id='form-subject' placeholder='Subject' required />
            <textarea type='text' name='message' id='form-message' placeholder='Message' rows='6' required></textarea>
            <input id='form-submit' type='submit' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact