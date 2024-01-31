import friba from "../images/friba.png"
import games from "../images/tausta.png"
import bike from "../images/bike.jpg"
import webKehitys from "../images/WebKehitys+React.png"
import CSharp from "../images/CSharp.png"
import gitHub from "../images/GitHub.png"
import sql from "../images/SQL.png"
import blender from "../images/Blender.png"
import visualStudio from "../images/VisualStudio.png"
import office from "../images/office.png"

const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <h2 className="aboutMe-header">About me</h2>
      <div className="aboutMe-content">
        <h3 className="aboutMe-hobbies">Hobbies</h3>
        <h3 className="aboutMe-friba">Disc golf ↓</h3>
        <img className="aboutMe-friba-img" src={friba} alt="disc golf" />
        <h3 className="aboutMe-games">Video games ↑</h3>
        <img className="aboutMe-games-img" src={games} alt="Video games" />
        <div className="aboutMe-cycling">
          <h3>Biking →</h3>
          <h3>(not my main bike :D)</h3>
        </div>
        <img className="aboutMe-cycling-img" src={bike} alt="bikes" />
        <h3 className="aboutMe-skills">Skills</h3>
        <img src={CSharp} alt="C#" />
        <img className="aboutMe-big" src={webKehitys} alt="HTML CSS JavaScript React" />
        <img src={sql} alt="SQL" />
        <img className="aboutMe-wide" src={blender} alt="Blender" />
        <img src={gitHub} alt="GitHub" />
        <img src={visualStudio} alt="Microsoft Visual Studio" />
        <img className="aboutMe-wide" src={office} alt="Microsoft office" />
      </div>
    </div>
  )
}

export default AboutMe