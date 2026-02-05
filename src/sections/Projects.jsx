import React from 'react';
import { motion } from 'framer-motion';
import './Projects.scss';

import connectImg from '../assets/connect.jpg';
import gamejamImg from '../assets/gamejam.jpg.jpeg';
import reciclatechImg from '../assets/reciclatech.jpeg';
import verdeacaoImg from '../assets/verdeacao.jpeg';

const Projects = () => {
    const projects = [
        {
            title: 'Ações da Connect',
            description: 'Conectamos sua empresa com projetos sociais impactantes.',
            image: connectImg,
            link: 'https://desafio-final-conect.vercel.app/',
        },
        {
            title: 'GameJam',
            description: 'Evento para mostrar ao mundo suas habilidades e receber prêmios.',
            image: gamejamImg,
            link: 'https://game-jam-ten.vercel.app/',
        },
        {
            title: 'ReciclaTech',
            description: 'Dê uma segunda vida aos seus eletrônicos.',
            image: reciclatechImg,
            link: 'https://recicla-tech-ebon-psi.vercel.app/',
        },
        {
            title: 'Verde Ação',
            description: 'Ser voluntário é plantar esperança e colher transformação.',
            image: verdeacaoImg,
            link: 'https://verde-acao-three.vercel.app/',
        },
    ];

    return (
        <section className="projects">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    PROJETOS
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="card-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="btn-container">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-project">
                                        VER PROJETO
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
