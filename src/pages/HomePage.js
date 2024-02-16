import Banner from '../components/Banner';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <div className='page'>
      <Banner />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage;