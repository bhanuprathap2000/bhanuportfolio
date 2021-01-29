import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg';
import javascript from "../assets/icons/javascript.svg";
import html5 from "../assets/icons/html5.svg"
import Bar from './Bar';
import { motion } from 'framer-motion'

const languages = [
    {
        icon: python,
        name: 'Python',
        level: '55'
    },
    {
        icon: react,
        name: 'Javascript',
        level: '80'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'react',
        level: '45'
    },
    
    {
        icon: react,
        name: 'Bootstrap',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'Heroku',
        level: '50'
    },
    {
        icon: react,
        name: 'Spyder',
        level: '65'
    },
    {
        icon: react,
        name: 'Xilinx Ise',
        level: '75'
    },
    {
        icon: react,
        name: 'MongoDB',
        level: '55'
    },
    {
        icon: react,
        name: 'MYSQL',
        level: '45'
    }
]


const Resume = () => {
    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
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
        <motion.div className="container resume" variants={resume_variants}
        initial="hidden"
        animate="visible"
        exit="exit">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Electronics And Communication Enginnering
                        </h5>
                        <p className="resume-card__name">
                            Indian Institute Of Information Technology,Nagpur(2018-2022)
                        </p>
                        <p className="resume-card__details">I am currently Studying B.tech in Electronics and Communication Enginnering.</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                           Content Creator
                        </h5>
                        <p className="resume-card__name">
                            Youtuber
                        </p>
                        <p className="resume-card__details">I have started my youtube channel where I post content related to the electronics and web related content and my projects also.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                    Softwares and Databases
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;