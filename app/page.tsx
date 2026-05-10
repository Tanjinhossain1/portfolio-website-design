import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { AboutAndSkills } from '@/components/AboutAndSkills'
import { Services } from '@/components/Services'
import { Experience } from '@/components/Experience'
import { Portfolio } from '@/components/Portfolio'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AboutAndSkills />
        <Services />
        <Experience />
        <Portfolio />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
