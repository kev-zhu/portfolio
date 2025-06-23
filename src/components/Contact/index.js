import "./index.scss";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



const Contact = () => {
  const [widenInput, setWidenInput] = useState(false)
  const formRef = useRef(null);

  const formInputResize = () => {
    if (formRef.current.offsetWidth < 400) {
      setWidenInput(true)
    } else {
      setWidenInput(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', formInputResize)
    return () => {
      window.removeEventListener('resize', formInputResize)
    }
  })

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message submitted successfully!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="page-container contact-page">
      <div className="text-zone">
        <h1>Reach out!</h1>
        <div className="name">Kevin Zhu</div>
        <div className="email">kevinzhu35@gmail.com</div>
        <div className="links">
          <p>CONNECT WITH ME</p>
          <div className="links-container">
            <ul>
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kevinzhuu/">
                  <FontAwesomeIcon icon={faLinkedin} color="" />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/kev-zhu/">
                  <FontAwesomeIcon icon={faGithub} color="" />
                </a>
              </li>
              <li>
                <a href="mailto: kevinzhu35@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} color="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="contact-form">
        <h1>Send me a message! </h1>
        <form ref={formRef} onSubmit={sendEmail}>
          <ul>
            <li className={`${widenInput ? '' : 'half'}`}>
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className={`${widenInput ? '' : 'half'}`}>
              <input type="email" name="email" placeholder="Email" required />
            </li>
            <li>
              <input placeholder="Subject" type="text" name="subject" required />
            </li>
            <li>
              <textarea placeholder="Message" name="message" required ></textarea>
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </ul>
        </form>
      </div>

      

    </div>
  );
};

export default Contact;
