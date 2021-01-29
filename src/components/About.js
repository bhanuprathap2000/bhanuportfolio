import React from 'react'
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'
import circuit from "../assets/icons/circuit.png";
import Skillcard from "../components/Skillcard"
import { motion } from 'framer-motion'


const skills= [
   
    {
        icon:computer,
        title:"Frontend Development",
        about:"I can build a beautiful and scalable websites using the HTML,CSS AND React.js"
    },
    {
        icon:repair,
        title:"Backend Development",
        about:"I can handle the server side requests with Node js and handle Database (MongoDB)."

    },
    {
        icon:api,
        title:"Api Development",
        about:"I can develop robust REST API using the express js using the mongoDB."
    },
    {
        icon:circuit,
        title:"Circuit Design",
        about:"I can Design,Synthesize and Simulate the digital circuits in the verilog."
    }

]



function About() {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about" variants={about_variants}
        initial="hidden"
        animate="visible"
        exit="exit">
            <h6 className="about__intro">
               I am Katikala Bhanu Prathap,An Electronics Enginner and a Web developer.I love Working with the Electronic Gadgets and also intersted In Web Technology.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About
