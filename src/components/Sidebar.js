import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from "../assets/icons/mightycoder.svg"
import resume from '../assets/resume.pdf'
import {motion} from "framer-motion"
import Bhanu from "../assets/icons/bhanu Prathap.jpg"
function Sidebar() {
    const facebookurl="https://www.facebook.com/bhanu.katikala/";
    const instaurl="https://www.instagram.com/glenmaxprathap/?hl=en";
    const githuburl="https://github.com/bhanuprathap2000";
    const bhanuresume="https://drive.google.com/file/d/1zYxh39cjdXySoxeojM97A_eLqmzmQ5EF/view?usp=sharing";



   
        const handleEmailMe = () => {
            window.open("mailto:bhanuprathap2000@gmail.com")
        }

    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }

    return (
    
        <motion.div className="sidebar" variants={sidebar_variant}
        initial='hidden'
        animate="visible">

        
           <img src={Bhanu} alt="avatar" className="sidebar__avatar"/>
           <div className="sidebar__name">Bhanu Prathap</div>
           <div className="sidebar__study">
           <div className="sidebar__item sidebar__tag">Electronics Enginner</div>
           <div className="sidebar__item sidebar__tag">Web Developer</div>
           </div>
           
           <a target='_blank' href={bhanuresume}>
               <div className="sidebar__item sidebar__resume">
                   <img src={tie} alt=""className="sidebar__icon" />Download Resume
               </div>
           </a>
           <figure className="sidebar__social-icons my-3">
               <a target="_value" href={facebookurl}> <img src={facebook} alt="facebook" className="sidebar__icon mr-3"/></a>
               <a target="_value" href={instaurl}> <img src={instagram} alt="instagram" className="sidebar__icon mr-3"/></a>
           </figure>
           
           <div className="sidebar__contact">

               <div className="sidebar__item sidebar__github">
                   <a target="_value" href={githuburl}>
                       <img src={github} alt="" className="sidebar__icon"/>Github
                   </a>
               </div>
               <div className="sidebar__location"> <img src={pin} alt="" className="sidebar__icon"/> Hyderabad,India</div>
           <div className="sidebar__item">bhanuprathap2000@gmail.com</div>
           <div className="sidebar__item">8074730855</div>
          
           </div>
           <div className="sidebar__item sidebar__email" onClick={handleEmailMe} >Email Me</div>
           
           </motion.div>
       
    )
}

export default Sidebar
