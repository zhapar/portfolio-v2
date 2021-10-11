import { getLayout } from 'components/DefaultLayout'
import Header from 'features/Header'
import Projects from 'features/Projects'
import Skills from 'features/Skills'
import About from 'features/About'

export default function Home() {
  return (
    <div>
      <Header />
      <Projects />
      <Skills />
      <About />
    </div>
  )
}

Home.getLayout = getLayout
