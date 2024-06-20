import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TransitionWrapper from '../../components/organismos/TransitionWrapper';

const NavigationLink = ({ children, name, to, textVariants, isOpen }) => {
  return (

    <TransitionWrapper>

   

    
    <Link
      to={to} // Debes usar "to" en lugar de "href"
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <motion.p
        variants={textVariants}
        initial="close"
        animate={isOpen ? "open" : "close"}
        className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide"
      >
        {name}
      </motion.p>
    </Link>
    </TransitionWrapper>
  );
};

export default NavigationLink;
