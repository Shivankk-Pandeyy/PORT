import React, { useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Page.css'
import html from './HTML.png'
import css from './css.png'
import js from './javascript.png'
import react from './REACT.png'
import nodejs from './nodejs.png'
import express from './express.png'
import mongo from './mongodb.png'
import java from './java.png'
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import p1 from './instaP.png'
import p3 from './GYMP.png'
import p4 from './cryptoP.png'
import chat from './chatP.png'
import ss from './s6.png'
import { motion } from 'framer-motion'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'
const Skills = () => {
    useEffect(()=>{
        AOS.init({duration:1000});
      },[]);
  return (
    <>
    <Header/>
    <div className='skills'>
    <motion.div className='skills-title' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
    <h2>MY</h2>
    <h2>SKILLS</h2>
    </motion.div>
    <motion.div className='skills-present' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}>
    <div className='skills-present-1'>
        <img src={html} alt='HTML'></img>
        <h2>HTML</h2>
    </div>
    <div className='skills-present-1'>
    <img src={css} alt='CSS'></img>
        <h2>CSS</h2>
    </div>
    <div className='skills-present-1'>
    <img src={js} alt='JAVACRIPT'></img>
        <h2>JAVACRIPT</h2>
    </div>
    <div className='skills-present-1'>
    <img src={react} alt='REACT'></img>
        <h2>REACT</h2>
    </div>
    </motion.div>
    <motion.div className='skills-present' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.5}}>
    <div className='skills-present-1'>
    <img src={nodejs} alt='NODEJS'></img>
        <h2>NODEJS</h2>
    </div>
    <div className='skills-present-1'>
    <img src={express} alt='EXPRESSJS'></img>
        <h2>EXPRESSJS</h2>
    </div>
    <div className='skills-present-1'>
    <img src={mongo} alt='MONGODB'></img>
        <h2>MONGODB</h2>
    </div>
    <div className='skills-present-1'>
    <img src={java} alt='CORE JAVA'></img>
        <h2>JAVA</h2>
    </div>
    </motion.div>
    </div>
    <div className='projects' data-aos='zoom-in'>
    <Carousel className='caro'
        showThumbs={false}
        autoPlay={true}
        transitionTime={1000}
        interval={3500}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true}

    >
            <div className='project-1'>
                <div className='project-11'>
                <img src={p1} alt='SOCAIL MEDIA WEBSITE'></img>
                </div>
                <h1 data-aos='zoom-in'>SOCIAL MEDIA WEBSITE</h1>
                <h2 data-aos='zoom-in'>Made Using MERN.Fascinating UI Designed In Such A Way That User Get Sticks To The Interface Comes With A Lot Of Features.You Can Make Friends/Send Request/Add Posts/Edit Profile/Chat Privately.Before That You Need To Register/Signup Then Only You Would Be Able To Login And Enjoy The Facilities.UI Designed Using React.Servers made Using Node/Express And Data Managed Through MongoDB</h2>
            </div>
            <div className='project-1'>
                <div className='project-11'>
                <img src={chat} alt='CHAT WEBSITE'></img>
                </div>
                
                <h1 data-aos='zoom-in'>CHAT WEBSITE</h1>
                <h2 data-aos='zoom-in'>Made Using MERN+SOCKET.io . Fascinating UI Designed In Such A Way That User Get Sticks To The Interface Comes With A Lot Of Features.You Can Chat Privately With Your Friends.Live Chats The Moment You Send The Chat The reciver is Going To Recive The Message At The Same Moments.(SOCKET.IO FUNCTIONALITY)Before That You Need To Register/Signup Then Only You Would Be Able To Login And Enjoy The Facilities.UI Designed Using React.Servers made Using Node/Express And Data Managed Through MongoDB </h2>
            </div>
            <div className='project-1'>
                <div className='project-11'>
                <img src={p4} alt='CRYPTO WEBSITE'></img>
                </div>
                <h1 data-aos='zoom-in' >CRYPTO WEBSITE</h1>
                <h2 data-aos='zoom-in' >Made Using MERN. Fascinating UI Designed In Such A Way That User Get Sticks To The Interface Comes With A Lot Of Features.You Can Check The Current Price Of The Coins In The Market .Before That You Need To Register/Signup Then Only You Would Be Able To Login And Enjoy The Facilities.UI Designed Using React.Servers made Using Node/Express And Data Managed Through MongoDB.COMPLETELY RESPONSIVE</h2>
            </div>
            <div className='project-1'>
                <div className='project-11'>
                <img src={p3} alt='GYM WEBSITE'></img>
                </div>
                <h1 data-aos='zoom-in'>GYM WEBSITE</h1>
                <h2 data-aos='zoom-in'>Made Using MERN+SOCKET.io . Fascinating UI Designed In Such A Way That User Get Sticks To The Interface Comes With A Lot Of Features.You Can Get your BMI,BMR calculated You Can seletc Different Workout Splits And Many more Features .Before That You Need To Register/Signup Then Only You Would Be Able To Login And Enjoy The Facilities.UI Designed Using React.Servers made Using Node/Express And Data Managed Through MongoDB .COMPLETELY RESPONSIVE</h2>
            </div>
            <div className='project-1'>
                <div className='project-11'>
                <img src={ss} alt='PERSONAL PORTFOLIO'></img>
                </div>
                <h1 data-aos='zoom-in'>PEROSNAL PORTFOLIO</h1>
                <h2 data-aos='zoom-in'>Made Using MERN+SOCKET.io . Fascinating UI Designed In Such A Way That User Get Sticks To The Interface Comes With A Lot Of Features.This Is My PEROSNAL PORTFOLIO which I Use To Apply For My Works/Interships.UI Designed Using React.Servers made Using Node/Express And Data Managed Through MongoDB.COMPLETELY RESPONSIVE</h2>
            </div>
            <div className='project-1'>
                <h1 data-aos='zoom-in'>MANY OTHER CREATIVE DEVELOPMENT & DESIGN</h1>
                <h2 data-aos='zoom-in'>There are Many projects which I Have Worked For.Designed A lot Of Designs And Created Many More Websites using Not Only React But HTML,CSS,JS.Made Many Other Designs For Different Clients.Can't Post Them Because Of Confidentiality.</h2>
                <h2 data-aos='zoom-in'>THE SOURCE CODE OF ALL THE PROJECTS IS AVAILABLE ON MY GITHUB ACCOUNT</h2>
                <h2 data-aos='zoom-in'>GITHUB:Shivankk-Pandeyy</h2>
            </div>
    </Carousel>
    </div>
    <Footer/>
    </>
  )
}

export default Skills