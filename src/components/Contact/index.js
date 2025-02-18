import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Circle } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const miles = 5

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message submitted successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again.')
        }
      )
  }

  return (
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArr={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={15}/>
        </h1>
        <p>short contact paragraph</p>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required />
              </li>
              <li className='half'>
                <input type='email' name='email' placeholder='Email' required />
              </li>
              <li>
                <input placeholder='Subject' type='text' name='subject' required />
              </li>              
              <li>
                <textarea placeholder='Message' name='message' required ></textarea>
              </li>
              <li>
                <input type='submit' className='flat-button' value='SEND' />
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className='info-map'>
        Kevin Zhu
        <br/>
        US
        <br/>
        Alameda, CA
        <span>kevinzhu35@gmail.com</span>
      </div>

      <div className='map-wrap'>
        <MapContainer center={[37.76477, -122.24327]} zoom={12}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Circle center={[37.76477, -122.24327]} radius={miles * 1609.344}/>
        </MapContainer>
      </div>

    </div>
  )
}

export default Contact