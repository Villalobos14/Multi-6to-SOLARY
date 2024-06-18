// src/components/TransitionWrapper.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const transitionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.7,
      ease: 'easeInOut', // Easing personalizado
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut', // Easing personalizado
    },
  },
};


const TransitionWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname} // Asegura que Framer Motion aplique la animación en cada cambio de ruta
      initial="initial"
      animate="animate"
      exit="exit"
      variants={transitionVariants}
      style={{ overflowY: 'hidden' }} // Oculta el desbordamiento vertical durante la animación
    >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;
