import React from 'react'
import "./Intro.css"
import FloatingDiv from "../FloatingDiv/FloatingDiv"
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Boy from "../../img/profile.png"
import Thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import GlassEmoji from "../../img/glassesimoji.png"
import {themeContext} from "../../Context"
import {useContext} from "react"
import {motion} from "framer-motion"

function Intro() {

    const transition = {duration: 2, type: "spring"}

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode?"white":""}}>Hi! I am</span>
                <span>Manglam Vats</span>
                <span>I am a skilled full-stack developer with expertise in building end-to-end web and mobile applications. With a deep understanding of frontend and backend technologies, I specializes in creating dynamic, user-friendly interfaces and robust, scalable server-side solutions.</span>
            </div>
                <motion.button
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className=" button i-button">
                    Hire me
                </motion.button>
                <div className="i-icons">
                    <a href="https://github.com/Vatsmanglam">
                    <img src={Github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/manglamvats/">
                    <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                </div>
        </div>
        <div className="i-right">
            <div></div>
            <div></div>
            <div>

            <img src={Boy} alt="" className='profile'/>
            </div>
            <motion.img
                initial={{left: "-36%"}} 
                whileInView={{left: "-24%"}}
                transition={transition}
                src={GlassEmoji} 
                alt="Emojie Animated" 
            />
            <motion.div 
                initial={{top:"-4%", left: "74%"}} 
                whileInView={{left: "68%"}}
                transition={transition}
                className="floating-div"
                style={{top: "-4%", left: "68%"}}>
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
            </motion.div>
            <motion.div 
                initial={{top:"18rem", left: "9rem"}} 
                whileInView={{left: "0rem"}}
                transition={transition}
                className="floating-div"
                style={{top:"18rem",left:"0rem"}}>
                    <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
            </motion.div>
            {/* blur divs */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" 
            style={{
                background: "#C1F5FF",
                top: "17rem",
                width: "21rem",
                height: "11rem",
                left: "-9rem"
                }}>
            </div>
        </div>
    </div>
  )
}

export default Intro