import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import '../css/contact.css'


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    const formMessage = document.querySelector('.contact-message')
    e.preventDefault()

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        formMessage.innerHTML='Email has been sent'
        formMessage.classList.add('success')
        formMessage.hidden = false
        e.target.reset()
      }, (error) => {
        formMessage.innerHTML='Error sending email. Please try again later.'
        formMessage.classList.add('error')
        formMessage.hidden = false
      });

    setTimeout(() => {
      formMessage.innerHTML=''
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
          <div>Based in: Alameda, California</div>
          <div>kevinzhu35@gmail.com</div>
          <div>(510) 305-4195</div>
          <div>Resume</div>
          <div>Icons</div>
        </div>
        <div className='messaging'>
          <form className='messaging-form flex' ref={form} onSubmit={sendEmail} autoComplete="off">
            <input type='text' name='name' id='form-name' placeholder='Name' required />
            <input type='email' name='email' id='form-email' placeholder='Email' required />
            <input type='text' name='subject' id='form-subject' placeholder='Subject' required />
            <textarea type='text' name='message' id='form-message' placeholder='Message' rows='8' required></textarea>
            <input id='form-submit' type='submit' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact