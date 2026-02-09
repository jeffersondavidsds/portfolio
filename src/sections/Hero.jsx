import React from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <motion.div
                    className="text-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="greeting">OLÁ, SOU O</h4>
                    <h1>
                        <span className="first-name">JEFFERSON</span>
                        <span className="last-name">DAVID</span>
                    </h1>
                    <h2 className="role">DESENVOLVEDOR FRONT-END</h2>
                    <h4 className="welcome">SEJA BEM VINDO AO MEU PORTIFÓLIO</h4>
                </motion.div>

                <motion.div
                    className="image-content"
                    initial={{ opacity: 0, scale: 0.8, filter: 'grayscale(100%)' }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ filter: 'grayscale(0%)' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Using a placeholder if image missing, styles handle the grayscale/look */}
                    <img src={profileImg} alt="Jefferson David" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500/333/fff?text=Jefferson+David' }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
