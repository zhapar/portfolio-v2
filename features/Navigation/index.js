import { MenuToggle } from './MenuToggle'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { useDimensions } from './use-dimensions'

import Link from 'next/link'
import Logo from 'icons/Logo'
import Github from 'icons/Github'
import Mail from 'icons/Mail'
import LinkedIn from 'icons/LinkedIn'
import Instagram from 'icons/Instagram'
import Download from 'icons/Download'

export const links = [
  {
    title: 'Projects',
    link: '#projects',
  },
  {
    title: 'Skills',
    link: '#skills',
  },
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Resume',
    link: '/resume/Zhapar Manas uulu - CV.pdf',
    Icon: Download,
  },
]

export const contacts = [
  {
    Icon: Github,
    link: 'https://github.com/zhapar',
  },
  {
    Icon: Mail,
    link: 'mailto:zhapar28@gmail.com',
  },
  {
    Icon: LinkedIn,
    link: 'https://www.linkedin.com/in/zhapar-manas-uulu-81b9541bb/',
  },
  {
    Icon: Instagram,
    link: 'https://www.instagram.com/zhapar_28/',
  },
]

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = () => (
  <motion.ul
    className="fixed top-0 left-0 bg-gray-80 h-screen w-screen z-30 flex flex-col"
    variants={variants}>
    <div className="mt-32 px-5 grid gap-3">
      {links.map(({ title, link }) => (
        <MenuItem href={link} key={link}>
          {title}
        </MenuItem>
      ))}
    </div>
  </motion.ul>
)

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      className="flex"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}>
      {isOpen && (
        <div onClick={toggleOpen}>
          <Navigation />
        </div>
      )}

      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  )
}

export default function Navbar({ className, ...props }) {
  return (
    <div className="flex justify-between items-center w-full sticky top-0 z-30 bg-gray-80 bg-opacity-75 backdrop-filter backdrop-blur-lg">
      <nav className="flex items-center justify-between h-16 px-4 container w-full">
        <a href="#">
          <Logo />
        </a>
        <div className="hidden sm:flex">
          {links.map(({ title, link, Icon }) => (
            <Link href={link} key={link}>
              <a className="font-primary font-bold text-lg leading-xl text-gray-20 hover:text-white flex px-4">
                {Icon && <Icon className="mr-2" />}
                {title}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex">
          {contacts.map(({ Icon, link }) => (
            <a
              href={link}
              key={link}
              target="_blank"
              className="font-primary font-bold text-lg leading-xl text-gray-20 hover:text-white px-3">
              <Icon className="w-5 sm:w-auto" />
            </a>
          ))}
        </div>
        <div className="sm:hidden">
          <Sidebar />
        </div>
      </nav>
    </div>
  )
}
