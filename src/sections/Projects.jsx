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
            description: 'Projeto de ações sociais, voltado para ongs e empresas sem fins lucrativos, desenvolvido em REACT.JS, Javascript, SCSS, DOM, HTML, TCC de Front-End Vai na Web',
            image: connectImg,
            link: 'https://desafio-final-conect.vercel.app/',
        },
        {
            title: 'GameJam',
            description: 'Projeto desenvolvido utilizando HTML, CSS, baseando-se em um projeto figma próprio, pensado para empresas focadas em games e torneios.',
            image: gamejamImg,
            link: 'https://game-jam-ten.vercel.app/',
        },
        {
            title: 'ReciclaTech',
            description: 'Projeto de reciclagem de eletrônicos, voltado para ongs e empresas de hardware, desenvolvido em HTML, SCSS, DOM, HTML, desenvolvido em colaboração a Vai na Web',
            image: reciclatechImg,
            link: 'https://recicla-tech-ebon-psi.vercel.app/',
        },
        {
            title: 'Verde Ação',
            description: 'Projeto de ação social voltado para o meio ambiente, desenvolvido com HTML, SCSS, DOM',
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
