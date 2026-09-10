import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StoryRails from '../components/story/StoryRails'
import ProofGrid from '../components/ProofGrid'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

/*
 * Cover, then six sticky acts, then the evidence. Sections after the story are
 * ordinary scrolling sections on purpose — the argument is already made by then,
 * and a recruiter needs to be able to skim.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StoryRails />
        <ProofGrid />
        <Skills />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
