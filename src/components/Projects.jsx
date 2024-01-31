import data from "../data.js"
import ProjectCard from "./ProjectCard.jsx"

const Projects = () => {

  const boxes = data.map(item => {
    return <ProjectCard {...item}/>
  })

  return (
    <div className="projects-container">
      <h2>My projects</h2>
      <div className="pCards-container">
        {boxes}
      </div>
    </div>
  )
}

export default Projects