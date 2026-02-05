import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WaterDropLoader.scss';

const WaterDropLoader = ({ onComplete }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            onComplete();
        }
    }, [isMobile, onComplete]);

    if (isMobile) return null;

    return (
        <motion.div
            className="water-drop-loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            onAnimationComplete={onComplete}
        >
            <motion.div
                className="drop"
                initial={{ y: '-120vh', scale: 1 }}
                animate={{ y: '50vh', scale: [1, 1, 0] }}
                transition={{
                    y: { duration: 1, ease: 'easeIn' },
                    scale: { delay: 0.9, duration: 0.2 },
                }}
            />
            <motion.div
                className="ripple"
                initial={{ scale: 0, opacity: 1, border: '2px solid rgba(255, 255, 255, 0.8)' }}
                animate={{ scale: 50, opacity: 0, border: '0px solid rgba(255, 255, 255, 0)' }}
                transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
            />
            <motion.div
                className="ripple"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 40, opacity: 0 }}
                transition={{ delay: 1.2, duration: 1.5, ease: 'easeOut' }}
            />
        </motion.div>
    );
};

export default WaterDropLoader;
