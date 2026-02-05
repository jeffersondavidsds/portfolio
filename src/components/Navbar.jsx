import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
    const links = [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Projetos', href: '#projects' },
    ];

    return (
        <nav className="navbar">
            <div className="container">
                <ul>
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
