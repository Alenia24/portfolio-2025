import Navigation from "../../components/Navigation/Navigation.jsx";

import photo from "../../../src/assets/photo2.png"
import "./Homepage.css"

export default function Homepage() {
  return (
    <div>
      <Navigation />
      <div className="title-container">
        <div className="title">
          <h2>Hello I'm&nbsp; 
            <span className="typing-container">
              <span className="title-highlight">Alenia,</span>
            </span>
          </h2> 
          <h2 className="title-job">Full Stack Developer</h2>
        </div>
        <div className="image-container">
          <img className="img-fluid" src={photo} alt="Photo of Alenia" width={230} />
        </div>
      </div>      
    </div>
  )
}
