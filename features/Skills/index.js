import SectionTitle from 'components/SectionTitle'

import Html from 'icons/Html'
import Css from 'icons/Css'
import Sass from 'icons/Sass'
import Tailwind from 'icons/Tailwind'
import Javascript from 'icons/Javascript'
import ReactLogo from 'icons/React'
import Redux from 'icons/Redux'
import Nextjs from 'icons/Nextjs'
import ReactQuery from 'icons/ReactQuery'
import GithubLogo from 'icons/GithubLogo'
import Figma from 'icons/Figma'
import Nestjs from 'icons/Nestjs'
import VsCode from 'icons/VsCode'
import Git from 'icons/Git'
import Nodejs from 'icons/Nodejs'
import Mongodb from 'icons/Mongodb'
import Typescript from 'icons/typescript'

const skills = [
  {
    skill: 'HTML 5',
    Icon: Html,
  },
  {
    skill: 'CSS3',
    Icon: Css,
  },
  {
    skill: 'SASS',
    Icon: Sass,
  },
  {
    skill: 'Tailwind',
    Icon: Tailwind,
  },
  {
    skill: 'Javascript',
    Icon: Javascript,
  },
  {
    skill: 'Typescript',
    Icon: Typescript,
  },
  {
    skill: 'React',
    Icon: ReactLogo,
  },
  {
    skill: 'Redux',
    Icon: Redux,
  },
  {
    skill: 'Next js',
    Icon: Nextjs,
  },
  {
    skill: 'React Query',
    Icon: ReactQuery,
  },
  {
    skill: 'Github',
    Icon: GithubLogo,
  },
  {
    skill: 'Figma',
    Icon: Figma,
  },
  {
    skill: 'Nest js',
    Icon: Nestjs,
  },
  {
    skill: 'VS Code',
    Icon: VsCode,
  },
  {
    skill: 'git',
    Icon: Git,
  },
  {
    skill: 'Node js',
    Icon: Nodejs,
  },
  {
    skill: 'Mongo DB',
    Icon: Mongodb,
  },
]

export default function Skills() {
  return (
    <section>
      <div id="skills" className="container px-4 pt-24">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-wrap items-start md:justify-start mt-12 gap-[20px] md:gap-[40px]">
          {skills.map(({ skill, Icon }) => (
            <div className="flex flex-col items-center" key={skill}>
              <div className="block h-20 min-w-full relative">
                <Icon className="h-full " />
              </div>
              <h6 className="mt-3.5">{skill}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
