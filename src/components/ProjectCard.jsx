import { Link } from "react-router-dom"

const ProjectCard = (props) => {
  return (
    <div id={props.id} className="pCard-container">
      <div className="pCard-image-container">
        <img className="pCard-image" src={require(`../images/${props.cover}`)} alt='something went wrong' />
      </div>
      <h4 className="pCard-header">{props.title}</h4>
      <Link className="pCard-link" to={props.path}>Siirry</Link>
      <p className="pCard-text">{props.description}</p>
    </div>
  )
}

export default ProjectCard