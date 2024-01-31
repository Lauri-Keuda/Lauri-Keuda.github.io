import Banner from '../components/Banner';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';

function Home() {
  return (
    <div className='page'>
      <Banner />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default Home;