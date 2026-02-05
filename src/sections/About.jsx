import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiVite, SiSass, SiJavascript, SiFramer, SiGit } from 'react-icons/si';
import './About.scss';

const About = () => {
    const socialLinks = [
        { icon: <FaEnvelope />, href: 'mailto:jeffersondavidsd@gmail.com' },
        { icon: <FaWhatsapp />, href: 'https://wa.me/5521965277553' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/_jeffslv_?igsh=aTg0aW02dHdmeGg5' },
        { icon: <FaGithub />, href: 'https://github.com/jeffersondavidsds' },
        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/jeffersonsilvadev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    ];

    const teckStack = [
        { icon: <SiReact color="#61DAFB" />, name: 'React' },
        { icon: <SiVite color="#646CFF" />, name: 'Vite' },
        { icon: <SiSass color="#CC6699" />, name: 'SCSS' },
        { icon: <SiJavascript color="#F7DF1E" />, name: 'JavaScript' },
        { icon: <SiGit color="#F05032" />, name: 'Git' },
        { icon: <FaGithub color="#ffffff" />, name: 'GitHub' },
        { icon: <SiFramer color="#0055FF" />, name: 'Framer' },
    ];

    return (
        <section className="about">
            <div className="container">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>SOBRE MIM</h2>
                    <p>
                        Desenvolvedor apaixonado por criar experiências digitais fluídas e modernas.
                        Foco em entregar interfaces bonitas e funcionais.
                    </p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="social-links"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3>Contato</h3>
                        <div className="icons">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="tech-stack-card"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3>Tecnologias</h3>
                        <div className="tech-icons">
                            {teckStack.map((tech, index) => (
                                <div key={index} className="tech-icon" title={tech.name}>
                                    {tech.icon}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default About;
