import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Page.css'
import c1 from './Contact.png';
import {motion} from 'framer-motion'
import contactcard from './CCC.pdf'
const Contact = () => {
  return (
    <>
    <Header/>
    <div className='contact'>
    <motion.div className='contact-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
    <img src={c1} alt='CONTACT CARD'></img>
    </motion.div>
    <motion.div className='contact-2' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}>
    <h2>CONTACT DETAILS</h2>
    <a href="tel:7389288618"><button>CALL</button></a>
    <a href='mailto:pandeyshivank21@gmail.com'><button>EMAIL</button></a>
    <a href={contactcard} download="SHIVANK's Contact_Card"><button>CONTACT CARD</button></a>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5365130945343!2d81.31740069143144!3d21.21056339339327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d1f52bbe7eb%3A0x5734d0fa678f95bc!2s224%2C%20Street%20Number%2019%2C%20Pushpak%20Nagar%2C%20Bhilai%2C%20Chhattisgarh%20490020!5e0!3m2!1sen!2sin!4v1697459877978!5m2!1sen!2sin" className='iframe'></iframe>
    </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact