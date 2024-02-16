import data from "../data.js"
import ProjectCard from "./ProjectCard.jsx"

const Projects = () => {
  const boxes = data.map(item => {
    return <ProjectCard key={item.id} {...item}/>
  })

  return (
    <div className="projects-container">
      <h2 className="chapter-header">My projects</h2>
      <div className="pCards-container">
        {boxes}
      </div>
    </div>
  )
}

export default Projects