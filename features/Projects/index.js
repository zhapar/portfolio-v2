import { useEffect, useState } from 'react'
import SectionTitle from 'components/SectionTitle'
import Wave from 'icons/Wave'
import Image from 'next/image'
import cn from 'classnames'

import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import Github from 'icons/Github'
import ExternalLink from 'icons/ExternalLink'

const projects = [
  {
    id: 'ani',
    name: 'Ani - search for anime',
    photoSrc: '/images/ani.png',
    description: [
      'Find new anime that you want to watch by searching with name, year, format and season or you search by categories and genres (there is about 267 genres). In addition, read information about an anime and watch trailer',
    ],
    technologies: ['React', 'Next js', 'Tailwind', 'AniApi', 'React Query'],
    githubLink: 'https://github.com/zhapar/ani',
    demoLink: 'https://ani-ten.vercel.app/',
  },
  {
    id: 'furrow',
    name: 'Furrow: Video & Post Production Company',
    photoSrc: '/images/furrow.png',
    description: [
      'This a clone of furrow studio website from awwwards. Furrow is an integrated, full-service creative studio offering video production, creative development, and post-production services.',
    ],
    technologies: ['React', 'Next js', 'Tailwind', 'Framer Motion'],
    githubLink: 'https://github.com/zhapar/furrow',
    demoLink: 'https://furrow.vercel.app/',
  },
  {
    id: 'netfilm',
    name: 'Netfilm',
    photoSrc: '/images/netfilm.png',
    description: [
      "Want to watch a movie but don't know what to watch? Netfilm can help you with that. Browse and search your favorite movies. Read information about them and see its actors. Watch trailers and read reviews.",
    ],
    technologies: [
      'React',
      'React Router',
      'Redux',
      'Redux thunk',
      'TMDB API',
      'Sass',
    ],
    githubLink: 'https://github.com/zhapar/netfilm',
    demoLink: 'https://filmcloud.netlify.app/',
  },
  {
    id: 'food',
    name: 'Food App',
    photoSrc: '/images/food.png',
    description: [
      'Find your favorite restaurant and look for food. Select category and add food to the cart. In the cart you can choose types of order and leave a comment for the chef and make a payment.',
      'Restaurant employee can see order reports, statistics of orders, most ordered foods and most type of orders. In addition, employee can add, edit or delete food of the restaurant.',
    ],
    technologies: ['React', 'Next js', 'Tailwind', 'Nest js', 'React Query'],
    githubLink: 'https://github.com/zhapar/food',
    demoLink: 'https://restaurant-foods.netlify.app/',
  },
  {
    id: 'palettes',
    name: 'Color Palettes',
    photoSrc: '/images/palettes.png',
    description: [
      'Discover the world of colors with 9 popular palettes, where you can copy any HEX or RGB code of color by just clicking on it. Besides, you can lighten or darken colors by changing level on top of palette or you can see all levels of color by clicking more button. Moreover, you can create your own color palette!',
    ],
    technologies: [
      'React',
      'React Router',
      'Redux',
      'Chroma js',
      'Array move',
      'Sass',
    ],
    githubLink: 'https://github.com/zhapar/colors-app',
    demoLink: 'https://colorspalettes.netlify.app/',
  },
  {
    id: 'clothing',
    name: 'HHK Clothing store',
    photoSrc: '/images/clothing.png',
    description: [
      'Buy your favorite clothes from HHK-clothing. Here you can find hats, jackets, sneakers, women, and men clothes. Create your cart without registering to the website and pay your items through stripe. Comfortable, accessible, and enjoyable.',
    ],
    technologies: [
      'React',
      'React Router',
      'Redux',
      'Redux Saga',
      'Firebase',
      'Sass',
    ],
    githubLink: 'https://github.com/zhapar/clothing',
    demoLink: 'https://hhk-clothing.herokuapp.com/',
  },
]

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState({})

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    }
    if (!open) {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <AnimateSharedLayout t type="crossfade">
      <Wave className="w-full h-auto mt-10 md:mt-0 text-gray-100" />
      <section id="projects" className="bg-gray-100 pt-24">
        <div className="container px-4">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-3 gap-4 mt-12">
            {projects.map(({ id, name, photoSrc, ...rest }) => (
              <div
                key={id}
                className={cn(
                  'col-span-3 sm:col-span-1 w-full cursor-pointer group',
                  active?.id === id && 'z-20'
                )}
                onClick={() => {
                  setActive({
                    id,
                    name,
                    photoSrc,
                    ...rest,
                  })
                  setOpen(true)
                }}>
                <motion.div
                  layoutId={id}
                  className="relative w-full aspect-16-10  block rounded overflow-hidden transition-transform duration-300">
                  <Image
                    src={photoSrc}
                    className="object-cover"
                    layout="fill"
                    quality="100"
                  />
                </motion.div>
                <h5 className="mt-4">{name}</h5>
              </div>
            ))}
          </div>
        </div>
        <Wave className="w-full h-auto mt-24 text-gray-80 fill-current" />
      </section>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center overflow-y-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ ease: [0.6, 0.05, -0.01, 0.9], duration: 0.2 }}>
            <div
              className="w-full h-full backdrop-blur-lg bg-gray-100 bg-opacity-60 absolute top-0 left-0"
              onClick={() => {
                setOpen(false)
                setActive({})
              }}></div>
            <div className="container outline-none flex flex-col md:flex-row items-center z-10 pointer-events-none">
              <motion.div
                layoutId={active.id}
                className="relative aspect-16-10 w-5/6 md:w-1/2 block rounded overflow-hidden pointer-events-auto">
                <Image
                  src={active.photoSrc}
                  className="object-cover"
                  layout="fill"
                  quality="100"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: 300,
                }}
                transition={{ type: 'just', ease: 'easeInOut', duration: 0.5 }}
                className="max-w-md w-full bg-gray-80 flex flex-col -mt-10 md:mt-0 md:-ml-20 z-10 py-5 px-10 rounded pointer-events-auto">
                <h4>{active.name}</h4>
                {active.description.map((paragraph, id) => (
                  <p key={id} className="body-sm mt-3">
                    {paragraph}
                  </p>
                ))}
                <div className="flex mt-3 gap-[15px]">
                  {active.technologies.map((technology, id) => (
                    <span className="text-sm text-gray-20" key={id}>
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href={active.githubLink} className="outline-none">
                    <Github className="hover:text-primary-100 transition" />
                  </a>
                  <a href={active.demoLink} className="outline-none">
                    <ExternalLink className="hover:text-primary-100 transition" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
