import { motion, useAnimationControls } from "framer-motion"
import { useState, useEffect } from "react"
import NavigationLink from "./NavigationLink"
import TransitionWrapper from '../../components/organismos/TransitionWrapper';
import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
}

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
}

const textVariants = {
  close: {
    opacity: 0,
    display: "none",
    transition: {
      duration: 0.1,
    },
  },
  open: {
    opacity: 1,
    display: "block",
    transition: {
      duration: 1.7,
    },
  },
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const containerControls = useAnimationControls()
  const svgControls = useAnimationControls()

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open")
      svgControls.start("open")
    } else {
      containerControls.start("close")
      svgControls.start("close")
    }
  }, [isOpen])

  const handleOpenClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <TransitionWrapper>

    
    <motion.nav
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      className="bg-[#15111d] border border-[#4e4d4d] flex flex-col z-10 gap-20 p-5 rounded-xl absolute top-6 left-2 bottom-5 "
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-900 to-blue-700 rounded-full" />
        <button
          className="p-1 rounded-full flex"
          onClick={handleOpenClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={svgVariants}
              animate={svgControls}
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <NavigationLink
          name="Dashboard"
          to="/dashboard"
          textVariants={textVariants}
          isOpen={isOpen}
        >
          <ChartBarIcon className="stroke-white stroke-[0.75] min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink 
          name="Graficas"
          to="/graficas"
          textVariants={textVariants} 
          isOpen={isOpen}
        >
          <Square2StackIcon className="stroke-white stroke-[0.75] min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink
          name="Estadistica"
          to="/estadistica"
          textVariants={textVariants}
          isOpen={isOpen}
        >
          <DocumentCheckIcon className="stroke-white stroke-[0.75] min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink
          name="Reporte"
          to="/reporte"
          textVariants={textVariants}
          isOpen={isOpen}
        >
          <ChartPieIcon className="stroke-white stroke-[0.75] min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink
          name="Historial"
          to="/historial"
          textVariants={textVariants}
          isOpen={isOpen}
        >
          <UsersIcon className="stroke-white stroke-[0.75] min-w-8 w-8" />
        </NavigationLink>
      </div>
    </motion.nav>
    </TransitionWrapper>
  )
}

export default Navigation
