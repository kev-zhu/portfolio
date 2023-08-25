import '../css/contact.css'

const Contact = () => {
  return (
    <div id='contact' className='flex' data-section='contact'>
      <p className='contact-header'>Contact Page</p>
      <div className='contact-container flex'>
        <div className='personal-info'>
          email, phone, currnetly based in, icons(linkedin, github, socials? resume) @ footer?
        </div>
        <div className='message'>
          messaging form -- form -- user name, email, subject, message, send button
        </div>
      </div>
    </div>
  )
}

export default Contact